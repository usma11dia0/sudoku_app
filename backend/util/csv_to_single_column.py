import csv
from collections import deque

file_name = "L1_35_23.csv"
input_path = f'backend/assets/original/{file_name}'
output_path = f'backend/assets/result/{file_name}'

d = deque()

with open(input_path, "r") as csvfile:
    csvreader = csv.reader(csvfile)
    for row in csvreader:
        for cell in row:
            if cell == "":
                cell = 0 
                d.appendleft(cell)
            else:
                d.appendleft(cell)

with open(output_path, "w", newline='', encoding="utf-8") as csvfile:
    csvwriter = csv.writer(csvfile)
    csvwriter.writerow(d)