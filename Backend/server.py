from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS
from bson.objectid import ObjectId


app = Flask(__name__)
CORS(app)


# Database connection
client = MongoClient('localhost', 27017)


#collections for data
db = client['Corq_Data']
clubs_collection = db['Clubs']
events_collection = db['Events']
users_collection = db['Users']


def serialize_doc(doc):
    if doc is None:
        return None
    if '_id' in doc:
        doc['_id'] = str(doc['_id'])
    if 'clubId' in doc and isinstance(doc['clubId'], dict) and '$oid' in doc['clubId']:
        doc['clubId'] = doc['clubId']['$oid']
    elif 'clubId' in doc and isinstance(doc['clubId'], ObjectId):
        doc['clubId'] = str(doc['clubId'])
    return doc


def serialize_list(docs):
    return [serialize_doc(doc) for doc in docs]


#routes for club folder
@app.route('/api/clubs', methods=['GET'])
def get_all_clubs():
    """Retrieve all clubs"""
    try:
        clubs = list(clubs_collection.find())
        #idk what this does ngl
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
"""
@app.route('/api/clubs/<club_id>/<user_id>', methods=['GET'])
def get_club(club_id):
    try:
        club = clubs_collection.find_one({'_id': ObjectId(club_id)})
        if not club:
            return jsonify({'status': 'error', 'message': 'Club not found'}), 404
        club['_id'] = str(club['_id'])
        return jsonify({'status': 'success', 'data': club}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500
"""


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


#routes for events folder
@app.route('/api/events', methods=['GET'])
def get_all_events():
    """Get all events"""
    try:
        events = list(events_collection.find())
        return jsonify(serialize_list(events)), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/events/<event_id>', methods=['GET'])
def get_event(event_id):
    """Get a specific event by ID"""
    try:
        event = events_collection.find_one({'_id': ObjectId(event_id)})
        if event:
            return jsonify(serialize_doc(event)), 200
        return jsonify({'error': 'Event not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/events', methods=['POST'])
def create_event():
    """Create a new event"""
    try:
        data = request.json
        if 'clubId' in data and isinstance(data['clubId'], str):
            data['clubId'] = ObjectId(data['clubId'])
        result = events_collection.insert_one(data)
        return jsonify({'_id': str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/events/<event_id>', methods=['PUT'])
def update_event(event_id):
    """Update an event"""
    try:
        data = request.json
        if 'clubId' in data and isinstance(data['clubId'], str):
            data['clubId'] = ObjectId(data['clubId'])
        result = events_collection.update_one(
            {'_id': ObjectId(event_id)},
            {'$set': data}
        )
        if result.matched_count:
            return jsonify({'message': 'Event updated successfully'}), 200
        return jsonify({'error': 'Event not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/events/<event_id>', methods=['DELETE'])
def delete_event(event_id):
    """Delete an event"""
    try:
        result = events_collection.delete_one({'_id': ObjectId(event_id)})
        if result.deleted_count:
            return jsonify({'message': 'Event deleted successfully'}), 200
        return jsonify({'error': 'Event not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


#routes for user folder


@app.route('/api/users', methods=['GET'])
def get_all_users():
    """Get all users"""
    try:
        users = list(users_collection.find())
        return jsonify(serialize_list(users)), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/users/<user_id>', methods=['GET'])
def get_user(user_id):
    """Get a specific user by ID"""
    try:
        user = users_collection.find_one({'_id': ObjectId(user_id)})
        if user:
            return jsonify(serialize_doc(user)), 200
        return jsonify({'error': 'user not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/users', methods=['POST'])
def create_user():
    """Create a new user"""
    try:
        data = request.json
        result = users_collection.insert_one(data)
        return jsonify({'_id': str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/users/<user_id>', methods=['PUT'])
def update_user(user_id):
    """Update a user"""
    try:
        data = request.json
        result = users_collection.update_one(
            {'_id': ObjectId(user_id)},
            {'$set': data}
        )
        if result.matched_count:
            return jsonify({'message': 'user updated successfully'}), 200
        return jsonify({'error': 'user not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/users/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    """Delete a user"""
    try:
        result = users_collection.delete_one({'_id': ObjectId(user_id)})
        if result.deleted_count:
            return jsonify({'message': 'user deleted successfully'}), 200
        return jsonify({'error': 'user not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400




@app.errorhandler(404)
def not_found(error):
    return jsonify({'status': 'error', 'message': 'Endpoint not found'}), 404


if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)



