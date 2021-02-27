import pandas as pd
import numpy as np

data = pd.read_csv('./dataset.csv')

data['Production'].fillna((data['Production'].mean()),inplace=True)

data.to_csv('updated.csv', sep=',')
