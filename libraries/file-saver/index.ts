/*
* FileSaver.js
* A saveAs() FileSaver implementation.
* Made into typescript
*
* By Eli Grey, http://eligrey.com
*
* License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
* source  : http://purl.eligrey.com/github/FileSaver.js
*/
interface FileSaverOptions {
    /**
     * Automatically provide Unicode text encoding hints
     * @default false
     */
    autoBom: boolean;
}


const _global = typeof window === 'object' && window.window === window
    ? window : typeof self === 'object' && self.self === self
        ? self : typeof global === 'object' && global.global === global
            ? global
            : this;

function bom(blob: Blob | string, opts?: FileSaverOptions | boolean) {
    if (typeof opts === 'undefined') opts = {autoBom: false}
    else if (typeof opts !== 'object') {
        console.warn('Deprecated: Expected third argument to be a object')
        opts = {autoBom: !opts}
    }
    if (typeof blob === 'string') blob = new Blob([blob]);

    // prepend BOM for UTF-8 XML and text/* types (including HTML)
    // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
    if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
        return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type})
    }
    return blob
}


// Detect WebView inside a native macOS app by ruling out all browsers
// We just need to check for 'Safari' because all other browsers (besides Firefox) include that too
// https://www.whatismybrowser.com/guides/the-latest-user-agent/macos
const isMacOSWebView = _global?.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent);
export const saveAs = 'download' in HTMLAnchorElement.prototype && !isMacOSWebView ?
    function saveAs(blob: Blob | string, name: string, opts?: FileSaverOptions) {
        // Namespace is used to prevent conflict w/ Chrome Poper Blocker extension (Issue #561)
        const a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a') as HTMLAnchorElement;
        name = name || (typeof blob !== "string" && blob.name) || 'download'

        a.download = name
        a.rel = 'noopener' // tabnabbing

        if (typeof blob === 'string') {
            // Support regular links
            a.href = blob
            if (a.origin !== location.origin) {
                corsEnabled(a.href)
                    ? download(blob, name, opts)
                    : click(a, a.target = '_blank')
            } else {
                click(a)
            }
        } else {
            // Support blobs
            a.href = URL.createObjectURL(blob)
            setTimeout(function () {
                URL.revokeObjectURL(a.href)
            }, 4E4) // 40s
            setTimeout(function () {
                click(a)
            }, 0)
        }
    } : 'msSaveOrOpenBlob' in navigator
        ? function saveAs(blob: Blob | string, name: string, opts?: FileSaverOptions) {
            name = name || (typeof blob !== "string" && blob.name) || 'download'

            if (typeof blob === 'string') {
                if (corsEnabled(blob)) {
                    download(blob, name, opts)
                } else {
                    var a = document.createElement('a')
                    a.href = blob
                    a.target = '_blank'
                    setTimeout(function () {
                        click(a)
                    })
                }
            } else {
                // @ts-ignore
                navigator.msSaveOrOpenBlob(bom(blob, opts), name)
            }
        }

        // Fallback to using FileReader and a popup
        : function saveAs(blob: Blob | string, name: string, opts?: FileSaverOptions, popup?: Window) {
            // Open a popup immediately do go around popup blocker
            // Mostly only available on user interaction and the fileReader is async so...
            popup = popup || (open('', '_blank') ?? undefined)
            if (popup) {
                popup.document.title =
                    popup.document.body.innerText = 'downloading...'
            }

            if (typeof blob === 'string') return download(blob, name, opts)

            const force = blob.type === 'application/octet-stream';
            const isSafari = /constructor/i.test(String(_global?.HTMLElement)) || _global?.safari;
            const isChromeIOS = /CriOS\/\d+/.test(navigator.userAgent);

            if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== 'undefined') {
                // Safari doesn't allow downloading of blob URLs
                const reader = new FileReader();
                reader.onloadend = function () {
                    let url = reader.result;
                    if (!url) return
                    if (typeof url !== "string") url = new TextDecoder().decode(url);
                    url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;')
                    if (popup) popup.location.href = url
                    else location.href = url
                    popup = undefined // reverse-tabnabbing #460
                }
                reader.readAsDataURL(blob)
            } else {
                const url = URL.createObjectURL(blob);
                if (popup) popup.location = url
                else location.href = url
                popup = undefined // reverse-tabnabbing #460
                setTimeout(function () {
                    URL.revokeObjectURL(url)
                }, 4E4) // 40s
            }
        };

function download(url: string, name: string, opts?: FileSaverOptions) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.onload = function () {
        saveAs(xhr.response, name, opts)
    }
    xhr.onerror = function () {
        console.error('could not download file')
    }
    xhr.send()
}

function corsEnabled(url: string) {
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, false)
    try {
        xhr.send()
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299
}

// `a.click()` doesn't work for all browsers (#465)
function click(node: Node, _?: any) {
    try {
        node.dispatchEvent(new MouseEvent('click'))
    } catch (e) {
        const evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80,
            20, false, false, false, false, 0, null)
        node.dispatchEvent(evt)
    }
}

