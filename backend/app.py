from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # optional, allows cross-origin requests

@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json()
    print("Received:", data)
    # You can process data here
    return jsonify({"status": "success", "received": data})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)