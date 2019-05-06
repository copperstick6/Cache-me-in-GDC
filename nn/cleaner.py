import numpy as np


datasets = ["2216.txt", "43024304.txt", "atrium.txt", "lab.txt"]
final_arr = []

for i in range(0, len(datasets)):
    f = open("datasets/"+datasets[i], "r")
    for line in f:
        line = line[:-1]
        line_item = line.split(" ")
        line_item = ["0" if x=="XXX" else x for x in line_item]
        line_item[2].replace("\n", "")
        line_item = [0 if x =="0" else int(x) + 100 for x in line_item]
        line_item.append(i + 1)
        final_arr.append(line_item)
numpy_arr = np.array(final_arr)
print(numpy_arr)

np.save("datasets/numpy_data", numpy_arr)
