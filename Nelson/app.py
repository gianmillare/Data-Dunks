import os 

import pandas as pd #GM
import numpy as numpy #GM

import sqlalchemy #GM
from sqlalchemy.ext.automap import automap_base #GM
from sqlalchemy.orm import Session #GM
from sqlalchemy import create_engine, func, inspect, MetaData, Table #GM

from flask import Flask, jsonify, render_template, request, redirect, session
from flask_sqlalchemy import SQLAlchemy

import secrets

import sqlite3 #Important


con = sqlite3.connect('Data-Dunks.sqlite')
careerbest = pd.read_sql("SELECT * FROM career_best", con)

careerbest


careerbest_index = careerbest.set_index("Player")
careerbest_index

app = Flask(__name__)


app.config["SECRET_KEY"] = "OCML3BRawWEUeaxcuKHLpw"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/index.html")
def home():
    return render_template("index.html")

# @app.route("/pvp.html")
# def playas():
#     return render_template("pvp.html")

@app.route("/pvp.html", methods=["GET", "POST"])
def roster():
    if request.method == "POST":
        # pvpempty_list = []
        playerone = request.form.get("player_one")
        playertwo = request.form.get("player_two")
        # player_one = request.args.get("player_one")
        # player_two = request.args.get("player_two")
        # pvp_list = [playerone, playertwo]
        session["player_one"] = playerone
        session["player_two"] = playertwo

        # for player in pvp_list:
        #     pvpempty_list.append(careerbest_index.loc[player].to_json(orient='split'))

        # return render_template('pvp.html')
#         return playerone
#         return playertwo
    return render_template("pvp.html")


@app.route("/pvpstats")
def info():
    pList = []
    playerone = session.get("player_one")
    playertwo = session.get('player_two')
    pvpList = [playerone, playertwo]
    for player in pvpList:
        pList.append(careerbest_index.loc[player].to_json(orient='split'))

    return jsonify(pList)


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

