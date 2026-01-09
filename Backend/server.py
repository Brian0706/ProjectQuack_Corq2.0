from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
client = MongoClient('localhost', 27017)
db = client.Corq_Data
clubs = db.clubs

@app.route('/api/clubs', methods=['GET', 'POST'])
def handleClubs():
    if request.method == 'POST':
        data = request.json

        newClub = clubs.inset_one(data)
    return "wgf"

@app.route('/api/clubs')
def getClubs():
    return "cluibg"



if __name__ == '__main__':
    app.run(debug=True)