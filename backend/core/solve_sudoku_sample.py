# 　Input data of sudoku
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
    # No empty cell found
    return -1, -1


i, j = find_next_cell(input_grid)
if i == -1 and j == -1:
    print("No empty cell found")
else:
    print("Next empty cell found at", i, j)


def is_valid(grid: list, row: int, col: int, num: int) -> bool:
    # Check if the number is already present in the row
    if num in grid[row]:
        return False
    # Check if the number is already present in the column
    for i in range(9):
        if num == grid[i][col]:
            return False
    # Check if the number is already present in the 3x3 box
    row_start = (row // 3) * 3
    col_start = (col // 3) * 3
    for i in range(row_start, row_start + 3):
        for j in range(col_start, col_start + 3):
            if num == grid[i][j]:
                return False
    # If all the above checks are passed, the number is valid
    return True


def solve_sudoku(grid: list, i: int = 0, j: int = 0) -> bool:
    i, j = find_next_cell(grid)
    # If there is no empty cell, the sudoku is solved
    if i == -1 and j == -1:
        return True
    # Try all the numbers from 1 to 9
    for num in range(1, 10):
        if is_valid(grid, i, j, num):
            grid[i][j] = num
            # Recursively solve the sudoku
            if solve_sudoku(grid, i, j):
                return True
            # If the number is not valid, backtrack and try another number
            grid[i][j] = 0
    return False


if solve_sudoku(input_grid):
    print("Sudoku solved successfully")
