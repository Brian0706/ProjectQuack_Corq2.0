from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS
from bson.objectid import ObjectId


app = Flask(__name__)
CORS(app)


# Database connection
client = MongoClient('localhost', 27017)
db = client.Corq_Data
clubs_collection = db['clubs']


@app.route('/api/clubs', methods=['GET'])
def get_all_clubs():
    """Retrieve all clubs"""
    try:
        clubs = list(clubs_collection.find())
        # Convert ObjectId to string for JSON serialization
        for club in clubs:
            club['_id'] = str(club['_id'])
        return jsonify({'status': 'success', 'data': clubs}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500


@app.route('/api/clubs/<club_id>', methods=['GET'])
def get_club(club_id):
    """Retrieve a specific club by ID"""
    try:
        club = clubs_collection.find_one({'_id': ObjectId(club_id)})
        if not club:
            return jsonify({'status': 'error', 'message': 'Club not found'}), 404
        club['_id'] = str(club['_id'])
        return jsonify({'status': 'success', 'data': club}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500


@app.route('/api/clubs', methods=['POST'])
def create_club():
    """Create a new club"""
    try:
        data = request.get_json()
        if not data or 'name' not in data:
            return jsonify({'status': 'error', 'message': 'Club name is required'}), 400
       
        result = clubs_collection.insert_one(data)
        return jsonify({'status': 'success', 'data': {'_id': str(result.inserted_id)}}), 201
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500


@app.route('/api/clubs/<club_id>', methods=['PUT'])
def update_club(club_id):
    """Update a specific club"""
    try:
        data = request.get_json()
        result = clubs_collection.update_one(
            {'_id': ObjectId(club_id)},
            {'$set': data}
        )
        if result.matched_count == 0:
            return jsonify({'status': 'error', 'message': 'Club not found'}), 404
        return jsonify({'status': 'success', 'message': 'Club updated'}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500


@app.route('/api/clubs/<club_id>', methods=['DELETE'])
def delete_club(club_id):
    """Delete a specific club"""
    try:
        result = clubs_collection.delete_one({'_id': ObjectId(club_id)})
        if result.deleted_count == 0:
            return jsonify({'status': 'error', 'message': 'Club not found'}), 404
        return jsonify({'status': 'success', 'message': 'Club deleted'}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500




@app.errorhandler(404)
def not_found(error):
    return jsonify({'status': 'error', 'message': 'Endpoint not found'}), 404


if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)

