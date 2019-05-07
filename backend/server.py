import numpy as np
import os
from flask import Flask, request, render_template, redirect
app = Flask(__name__)
import torch
from torch import nn, optim

from models import *


@app.route("/")
def evaluateModel():
    power1 = request.args.get("power_1")
    power2 = request.args.get("power_2")
    power3 = request.args.get("power_3")
    batch_inputs = torch.Tensor(np.array([[int(power1), int(power2), int(power3)]]))

    model = ConvNetModel()
    pred = lambda x: np.argmax(x.detach().numpy(), axis=1)
    model.load_state_dict(torch.load('deep'))
    model.eval()
    pred_val = torch.Tensor(pred(model(batch_inputs)))
    print(int(pred_val.data.numpy().tolist()[0]))
    return str(int(pred_val.data.numpy().tolist()[0]))


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 80))
    app.run(host='0.0.0.0', port=port)
