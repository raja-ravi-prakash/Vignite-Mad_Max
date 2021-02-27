import pandas as pd
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import os
ds = pd.read_csv('dataset.csv')
ds['Production'].fillna((ds['Production'].mean()), inplace=True)
l1 = ds.Crop
l2 = ds.Crop_Year
l3 = ds.Production
l4 = set(l1)


def get_crop_year(crop_name):
    lis = []
    for i in range(len(l1)):
        if l1[i] == crop_name:
            lis.append({'y': int(l3[i]), 'label': int(l2[i])})
    return lis


def get_area_prod():
    ans = []
    for i in range(len(l2)):
        # for i in range(200):

        if(l2[i] != None and l3[i] != None):
            ans.append({'x': int(l2[i]), 'y': int(l3[i])})
            # ans.append({'y': int(l3[i])})

    return ans


def year_wise_crops():
    ans = []
    for val in l4:
        temp = get_crop_year(val)
        ans.append({val: temp})
    return ans


app = Flask(__name__)
cors = CORS(app)
app.config['CROS_HEADERS'] = 'Content-type'
port = int(os.getenv('PORT', 8000))


@cross_origin()
@app.route('/get-crop-year', methods=['POST', 'GET'])
def task1():
    data = request.get_json()['crop_name']

    return {'result': get_crop_year(data)}


@app.route('/get-area-prod', methods=['GET', 'POST'])
def task2():
    x = get_area_prod()
    x = {
        'result': x
    }

    return jsonify(x)

@app.route('/get-crops', methods=['GET', 'POST'])
def task3():

    return jsonify({'result':list(l4)})

@app.route('/get-seasons', methods=['GET', 'POST'])
def task4():

    return jsonify({'result':list(set(ds.Season))})



# @app.route('/year-wise-crops', methods=['POST', 'GET'])
# def task3():

#     return {'result': year_wise_crops()}


if __name__ == '__main__':
    app.run(host='localhost', port=port, debug=True)