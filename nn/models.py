import torch
from torch import nn

# Unlike previous classes, don't use these classes directly in train.py
# Use the functions given in main.py
# However, model definition still needs to be defined in these classes

class ConvNetModel(nn.Module):
    '''
        Your code for the model that computes classification from the inputs to the scalar value of the label.
        Classification Problem (1) in the assignment
    '''

    def __init__(self):
        super().__init__()
        self.conv = nn.Conv2d(3,16,4,stride=8)
        self.avgpool = nn.MaxPool2d(2, stride=1)
        self.linear_layer_1 = nn.Linear(784,100)
        self.relu = nn.ReLU()

        self.linear_layer_3 = nn.Linear(100,6)
        self.linear_layer_2 = nn.Linear(100,100)
        nn.init.constant_(self.linear_layer_3.weight, 0)
        nn.init.constant_(self.linear_layer_3.bias, 0)


    def forward(self, x):
        x = self.avgpool(self.conv(x))
        x = x.view(x.size(0), -1)
        return self.linear_layer_3(self.relu(self.linear_layer_2(self.relu(self.linear_layer_1(self.relu(x))))))
