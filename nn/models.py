import torch
from torch import nn



class MainDeep(nn.Module):
	def __init__(self):
		super().__init__()
		self.linear_layer_1 = nn.Linear(3, 64)
		self.relu = nn.ReLU()
		self.linear_layer_2 = nn.Linear(64,64)
		self.linear_layer_3 = nn.Linear(64,1)

	def forward(self, x):
		return self.linear_layer_3(self.relu(self.linear_layer_2(self.relu(self.linear_layer_1(x)))))
