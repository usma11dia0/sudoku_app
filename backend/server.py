import json
from http.server import BaseHTTPRequestHandler, HTTPServer

from core.solve_sudoku import input_grid, export_grid, solve_sudoku


class SudokuHandler(BaseHTTPRequestHandler):
    def _send_response(self, content):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(content.encode("utf-8"))
    
    def do_GET(self):
        if self.path == "/":
            solve_sudoku(input_grid)
            json_export_grid = json.dumps(export_grid)
            self._send_response(json_export_grid)

if __name__ == "__main__":
    server_address = ("", 8000)
    httpd = HTTPServer(server_address, SudokuHandler)
    print("Sudoku Solver is running on port 8000")
    httpd.serve_forever()
