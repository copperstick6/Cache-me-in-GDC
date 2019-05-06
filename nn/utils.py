
"""
Module that contains that contains a couple of utility functions
"""

import numpy as np
import os
import torch

def load(filename):

    """
    Loads the data that is provided
    @param filename: The name of the data file. Can be either 'tux_train.dat' or 'tux_val.dat'
    @return images: Numpy array of all images where the shape of each image will be W*H*3
    @return labels: Array of integer labels for each corresponding image in images
    """

    try:

        data = np.load(filename)
        data = torch.Tensor(data)
    except Exception as e:
        print('Check if the filepath of the dataset is {}'.format(os.path(filename)))
    print(data)
    print(data.shape)
    images, labels = data[:,:3], data[:,3:4]
    return images, labels
