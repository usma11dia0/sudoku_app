import csv
from collections import deque

filename = "backend/assets/original/L1_35_23.csv"

d = deque()

with open(filename, "r") as csvfile:
    csvreader = csv.reader(csvfile)
    for row in csvreader:
        for cell in row:
            if cell == "":
                cell = 0 
                d.appendleft(cell)
            else:
                d.appendleft(cell)
print(d)
