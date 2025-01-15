from flask import Blueprint, jsonify

main_routes = Blueprint('main', __name__)

@main_routes.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask!"})