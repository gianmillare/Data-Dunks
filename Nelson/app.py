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


@app.route("/pvp.html", methods=["GET", "POST"])
def roster():
    if request.method == "POST":
        playerone = request.form["player_one"]
        playertwo = request.form["player_two"]

        session["player_one"] = playerone
        session["player_two"] = playertwo
    return render_template("pvp.html")

@app.route("/pvpstats")
def info():
    player_list = []
    playerone = session.get("player_one")
    playertwo = session.get("player_two")
    pvplist = [playerone, playertwo]
    for player in pvplist:
        player_list.append(careerbest_index.loc[player, ["BPM", "2P", "3P"]].to_json(orient='split'))

    return jsonify(player_list)


@app.route("/tvt.html", methods=["GET", "POST"])
def teamroster():
    if request.method == "POST":
        player1 = request.form["player_one"]
        player2 = request.form["player_two"]
        player3 = request.form["player_three"]
        player4 = request.form["player_four"]
        player5 = request.form["player_five"]
        player6 = request.form["player_six"]
        player7 = request.form["player_seven"]
        player8 = request.form["player_eight"]
        player9 = request.form["player_nine"]
        player10 = request.form["player_ten"]
        session["player_one"] = player1
        session["player_two"] = player2
        session["player_three"] = player3
        session["player_four"] = player4
        session["player_five"] = player5
        session["player_six"] = player6
        session["player_seven"] = player7
        session["player_eight"] = player8
        session["player_nine"] = player9
        session["player_ten"] = player10
    return render_template("tvt.html")

@app.route("/tvtstats")
def team():
    team_list = []
    player1= session.get("player_one")
    player2 = session.get("player_two")
    player3 = session.get("player_three")
    player4 = session.get("player_four")
    player5 = session.get("player_five")
    player6 = session.get("player_six")
    player7 = session.get("player_seven")
    player8 = session.get("player_eight")
    player9 = session.get("player_nine")
    player10 = session.get("player_ten")
    pvplist = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10]
    for player in pvplist:
        player_list.append(careerbest_index.loc[player, ["BPM", "2P", "3P"]].to_json(orient='split'))

    return jsonify(team_list)

@app.route("/about.html")
def aboutus():
    return render_template("about.html")


@app.route("/stats.html")
def stats():
    return render_template("stats.html")



















if __name__ == "__main__":
    app.run(debug=True)