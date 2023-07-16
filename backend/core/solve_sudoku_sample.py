# 数独問題(0が空欄を示す)
input_grid = [
    [0, 1, 8, 0, 0, 0, 3, 2, 0],
    [2, 5, 0, 0, 0, 0, 0, 4, 6],
    [0, 0, 4, 6, 5, 2, 1, 0, 0],
    [0, 0, 6, 0, 7, 0, 2, 0, 0],
    [0, 2, 0, 0, 4, 0, 0, 5, 0],
    [0, 0, 3, 1, 0, 8, 7, 0, 0],
    [0, 0, 2, 5, 3, 9, 4, 0, 0],
    [4, 9, 0, 0, 0, 0, 0, 8, 3],
    [0, 7, 0, 0, 0, 0, 0, 9, 0],
]

def find_next_cell(grid: list) -> tuple[int, int]:
    for i in range(9):
        for j in range(9):
            if grid[i][j] == 0:
                return i, j
    # 空白セルが見つからない場合
    return -1, -1

i, j = find_next_cell(input_grid)
if i == -1 and j == -1:
    print("No empty cell found")
else:
    print("Next empty cell found at", i, j)


def is_valid(grid: list, row: int, col: int, num: int) -> bool:
    # numがすでに行に存在しているかを確認
    if num in grid[row]:
        return False
    # numがすでに列に存在しているかを確認
    for i in range(9):
        if num == grid[i][col]:
            return False
    # numがすでに3x3のボックス内に存在しているかを確認
    row_start = (row // 3) * 3
    col_start = (col // 3) * 3
    for i in range(row_start, row_start + 3):
        for j in range(col_start, col_start + 3):
            if num == grid[i][j]:
                return False
    # 上記のすべてのチェックがパスされれば、その数は有効
    return True


def solve_sudoku(grid: list) -> bool:
    i, j = find_next_cell(grid)
    # 空白セルがない場合は終了
    if i == -1 and j == -1:
        return True
    # 1から9までのすべての数を試す
    for num in range(1, 10):
        if is_valid(grid, i, j, num):
            grid[i][j] = num
            # 再帰的に数独を解く
            if solve_sudoku(grid):
                return True
            # その数が有効でない場合、gridの値を0に戻してバックトラック(引き返す)
            grid[i][j] = 0
    return False


if solve_sudoku(input_grid):
    print("Sudoku solved successfully")
