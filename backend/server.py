import numpy as np
import os
from flask import Flask, request, render_template, redirect
app = Flask(__name__)
import torch
from torch import nn, optim
import json

from models import *


@app.route("/", methods=['GET', 'POST'])
def evaluateModel():
    data = request.form.get("json")
    data = json.loads(data)
    model = ConvNetModel()
    pred = lambda x: np.argmax(x.detach().numpy(), axis=1)
    model.load_state_dict(torch.load('deep'))
    model.eval()
    for i in data:
        batch_inputs = torch.Tensor(np.array([[int(i["power1"]), int(i["power2"]), int(i["power3"])]]))
        pred_val = torch.Tensor(pred(model(batch_inputs)))
        i["room"] = str(int(pred_val.data.numpy().tolist()[0]))
    return json.dumps(data)


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 80))
    app.run(host='0.0.0.0', port=port)
