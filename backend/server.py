import json 
import pdb
from http.server import BaseHTTPRequestHandler, HTTPServer

from core.solve_sudoku import solve_sudoku, input_grid


class SudokuHandler(BaseHTTPRequestHandler):
    def _send_response(self, content):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "http://localhost:8080")
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'content-type')
        self.end_headers()
        self.wfile.write(content.encode("utf-8"))

    # preflight requestの処理
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "http://localhost:8080")
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'content-type')
        self.end_headers()
    
    def do_POST(self):
        if self.path == "/":
            # fetch APIのPOSTリクエストを受け取る
            content_len = int(self.headers.get("content-length"))
            request_body_json = self.rfile.read(content_len)
            request_body_list = json.loads(request_body_json)
            # 引数のlistを参照渡しで渡す
            is_solved = solve_sudoku(request_body_list)
            response_body_json = json.dumps(request_body_list) if is_solved else json.dumps(False)
            self._send_response(response_body_json)

    # 確認用
    def do_GET(self):
        if self.path == "/":
            solve_sudoku(input_grid)
            json_export_grid = json.dumps(input_grid)
            self._send_response(json_export_grid)

if __name__ == "__main__":
    server_address = ("", 8000)
    httpd = HTTPServer(server_address, SudokuHandler)
    print("Sudoku Solver is running on port 8000")
    httpd.serve_forever()
