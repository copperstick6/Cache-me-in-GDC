


datasets = ["2216.txt", "43024304.txt", "atrium.txt", "lab.txt"]

for i in datasets:
    f = open("datasets/"+i, "r")
    contents = f.read()
    print(contents)
