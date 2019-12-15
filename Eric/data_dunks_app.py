# Flask App for Battle Ballers
import os

from  flask import (Flask, render_template, jsonify, request, redirect)

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/NBA.sqlite"

db = SQLAlchemy(app)


# 3 pages

# page/db setup ?

#  home page - welcome
@app.route("/home")
def home():
    return render_template("index.html")
    # buttons to navigate
    # exciting 

# player vs player
    # ____ vs _____
@app.route("/playervsplayer")
def roster():
    return render_template("pvp.html")

# team vs team
@app.route("/teamvsteam")
def teamroster():
    return render_template("tvt.html")
    # ____ vs _____

# separate about page
@app.route("/about")
def about():
    return render_template("about.html")

# separate database access page
@app.route("/database")
def about():
    return render_template("stats.html")

if __name__ == "__main__":
    app.run()