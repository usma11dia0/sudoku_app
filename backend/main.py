from http.server import BaseHTTPRequestHandler, HTTPServer

class SudokuHandler(BaseHTTPRequestHandler):
    def _send_response(self, content):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(content.encode("utf-8"))

    def do_GET(self):
        if self.path == "/":
            self._send_response("Hello, Sudoku Solver!")

if __name__ == "__main__":
    server_address = ("", 8000)
    httpd = HTTPServer(server_address, SudokuHandler)
    print("Sudoku Solver is running on port 8000")
    httpd.serve_forever()
