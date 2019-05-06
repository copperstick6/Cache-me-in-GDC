import argparse, pickle
import numpy as np
import os

import torch
from torch import nn, optim

# Use the util.load() function to load your dataset
from utils import load
from models import *

dirname = os.path.dirname(os.path.abspath(__file__))


def accuracy(outputs, labels):
    outputs_idx = outputs.max(1)[1].type_as(outputs)
    return outputs_idx.eq(labels.float()).float().mean()

def train(iterations, batch_size=64, log_dir=None):
    '''
    This is the main training function, feel free to modify some of the code, but it
    should not be required to complete the assignment.
    '''

    """
    Load the training data
    """
    model=MainDeep()
    inputs, labels = load(os.path.join('datasets/numpy_data.npy'))

    criterion = nn.MSELoss()
    optimizer = optim.SGD(model.parameters(), lr=0.01, momentum=0.9)

    running_loss = 0.0

    epochs = 100
    for ep in range(epochs):
        # In this example, we will use the same input tensor each time, but ideally you should be dividing your
        # data in small minibatches and train one batch in one iteration
        for i in range(100 * ep, 100*(ep+1)):

            # Set the state of the model to 'train'. This is important for backpropagation step about which you
            # learn in the next class. Backpropagation requires the values computed in the forward() function for
            # each layer. Invoking the .train() function directs the model to save these values for future
            # backpropagation step.
            model.train()

            # Very important to reset the gradients to zero before training a minibatch. Otherwise it will keep
            # adding to gradients computed in the previous iterations
            optimizer.zero_grad()

            # print (inputs, labels)

            outputs = model(inputs)
            loss = criterion(outputs, labels)

            # Perform the backpropagation step to compute gradients
            loss.backward()
            # Perform the gradient update
            optimizer.step()

            running_loss += loss.item()
        running_loss = 0.
    # Save the trained model
    dirname = os.path.dirname(os.path.abspath(__file__)) # Do NOT modify this line
    torch.save(model.state_dict(), os.path.join(dirname, 'deep')) # Do NOT modify this line

if __name__ == '__main__':

    parser = argparse.ArgumentParser()
    parser.add_argument('-i', '--iterations', type=int, default=10000)
    parser.add_argument('-l', '--log_dir')
    args = parser.parse_args()

    print ('[I] Start training')
    train(args.iterations, log_dir=args.log_dir)
    print ('[I] Training finished')
