from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
model = joblib.load(r"XGB_construct_model.pkl")

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    sqft = float(data.get('sqft'))
    floors = int(data.get('floors'))

    prediction_scientific = model.predict([[sqft, floors]])
    prediction_values = [float(val) for val in prediction_scientific[0]]
    
    return jsonify({
        "cement": round(prediction_values[0], 2),
        "labor": round(prediction_values[1]),
        "bricks": round(prediction_values[2]),
        "iron": round(prediction_values[3], 2),
        "sand": round(prediction_values[4], 2),
        "cost": round(prediction_values[5], 2),
        "days": round(prediction_values[6])
    })

if __name__ == '__main__':
    app.run(debug=True)
