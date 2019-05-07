import numpy as np

from os import listdir
import os
from os.path import isfile, join
from random import shuffle


test = os.listdir("datasets")

for item in test:
    if item.endswith(".npy"):
        os.remove(os.path.join("datasets", item))

datasets = [f for f in listdir("datasets") if isfile(join("datasets", f))]


train_set = []
test_set = []

for i in range(0, len(datasets)):
    f = open("datasets/"+datasets[i], "r")
    class_item = []
    for line in f:
        line = line[:-1]
        line_item = line.split(" ")
        line_item = ["0" if x=="XXX" else x for x in line_item]
        line_item[2].replace("\n", "")
        line_item = [0 if x =="0" else int(x) + 100 for x in line_item]
        line_item.append(i)
        class_item.append(line_item)
    train_set += class_item[len(class_item)//2:]
    test_set += class_item[:len(class_item)//2]
train_arr = np.array(train_set)
print(train_arr)
test_arr = np.array(test_set)


np.save("datasets/train_data", train_arr)
np.save("datasets/test_data", test_arr)
