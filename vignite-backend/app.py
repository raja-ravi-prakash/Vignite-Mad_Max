from sklearn.tree import DecisionTreeRegressor
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import os

data = pd.read_csv('./yield.csv')

areaData = []
yearData = []
areasNames = list(set(data.Area))
areas = []
areasHash = {}


def parseData():
    for i, row in data.iterrows():
        if row[3] not in areas:
            areas.append(row[3])
        areaData.append({'y': row[-1], 'label': row[3]})
        yearData.append({'y': row[-1], 'label': row[-3]})


app = Flask(__name__)
cors = CORS(app)
app.config['CROS_HEADERS'] = 'Content-type'
port = int(os.getenv('PORT', 8000))

df = pd.read_csv("yield.csv")
features = ['Area Code', 'Year Code', 'Item Code']

x = df[features]
y = df['Value']
regr = DecisionTreeRegressor()
regr.fit(x, y)


@app.route('/get-areaData', methods=['GET', 'POST'])
def task1():

    return jsonify({'result': areaData})


@app.route('/get-yearData', methods=['GET', 'POST'])
def task2():

    return jsonify({'result': yearData[:100]})


@app.route('/get-areas', methods=['GET', 'POST'])
def task3():

    return jsonify({'result': areasNames})


@app.route('/predict', methods=['GET', 'POST'])
def task4():

    data = request.get_json()['data']
    return jsonify({'result': list(regr.predict([data]))})


if __name__ == '__main__':
    parseData()

    for i in range(len(areas)):
        areasHash[areas[i]] = i
    app.run(host='localhost', port=port, debug=True)
