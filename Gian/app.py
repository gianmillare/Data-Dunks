import os 

import pandas as pd #GM
import numpy as numpy #GM

import sqlalchemy #GM
from sqlalchemy.ext.automap import automap_base #GM
from sqlalchemy.orm import Session #GM
from sqlalchemy import create_engine, func, inspect, MetaData, Table #GM

from flask import Flask, jsonify, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

import sqlite3 #Important

con = sqlite3.connect('Data-Dunks.sqlite')
careerbest = pd.read_sql("SELECT * FROM career_best", con)

careerbest


careerbest_index = careerbest.set_index("Player")
careerbest_index

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/index.html")
def home():
    return render_template("index.html")

@app.route("/pvp.html")
def playas():
    return render_template("pvp.html")

@app.route("/pvp.html", methods=["GET", "POST"])
def roster():
    if request.method == "POST":
        pvpempty_list = []
        playerone = request.form["player_one"]
        playertwo = request.form["player_two"]
        pvp_list = [playerone, playertwo]

        for player in pvp_list:
            pvpempty_list.append(careerbest_index.loc[player].to_json(orient='split'))

        return render_template('pvp.html', data=pvpempty_list)
#         return playerone
#         return playertwo
    # return render_template("pvp.html")


@app.route("/tvt.html")
def teamroster():
    return render_template("tvt.html")


@app.route("/about.html")
def aboutus():
    return render_template("about.html")


@app.route("/stats.html")
def stats():
    return render_template("stats.html")


# In[135]:


if __name__ == "__main__":
    app.run(debug=True)

