import numpy as np

from os import listdir
import os
from os.path import isfile, join


test = os.listdir("datasets")

for item in test:
    if item.endswith(".npy"):
        os.remove(os.path.join("datasets", item))

datasets = [f for f in listdir("datasets") if isfile(join("datasets", f))]

final_arr = []

for i in range(0, len(datasets)):
    f = open("datasets/"+datasets[i], "r")
    for line in f:
        line = line[:-1]
        line_item = line.split(" ")
        line_item = ["0" if x=="XXX" else x for x in line_item]
        line_item[2].replace("\n", "")
        line_item = [0 if x =="0" else int(x) + 100 for x in line_item]
        line_item.append(i)
        final_arr.append(line_item)
numpy_arr = np.array(final_arr)
print(numpy_arr)

np.save("datasets/numpy_data", numpy_arr)
