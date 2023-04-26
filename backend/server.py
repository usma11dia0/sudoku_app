from http.server import BaseHTTPRequestHandler, HTTPServer
from core.solve_sudoku import input_grid, export_grid, solve_sudoku


class SudokuHandler(BaseHTTPRequestHandler):
    def _send_response(self, content):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(content.encode("utf-8"))
    
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

    def do_GET(self):
        if self.path == "/":
            solve_sudoku(input_grid)
            # self._send_response(export_grid)
            self._send_response("Hello World")

if __name__ == "__main__":
    server_address = ("", 8000)
    httpd = HTTPServer(server_address, SudokuHandler)
    print("Sudoku Solver is running on port 8000")
    httpd.serve_forever()
