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
    if (typeof opts === 'undefined') opts = { autoBom: false }
    else if (typeof opts !== 'object') {
        console.warn('Deprecated: Expected third argument to be a object')
        opts = { autoBom: !opts }
    }
    if (typeof blob === 'string') blob = new Blob([blob]);

    // prepend BOM for UTF-8 XML and text/* types (including HTML)
    // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
    if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
        return new Blob([String.fromCharCode(0xFEFF), blob], { type: blob.type })
    }
    return blob
}


// Detect WebView inside a native macOS app by ruling out all browsers
// We just need to check for 'Safari' because all other browsers (besides Firefox) include that too
// https://www.whatismybrowser.com/guides/the-latest-user-agent/macos

export function saveAs(blob: Blob | string, name: string, opts?: FileSaverOptions) {
    // Namespace is used to prevent conflict w/ Chrome Poper Blocker extension (Issue #561)
    const a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a') as HTMLAnchorElement;
    name = name || /*(typeof blob !== "string" && blob.name) ||*/ 'download'

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
}

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

