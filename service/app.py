from flask import Flask
from flask_cors import CORS
from flasgger import Swagger
from api.route.company import company_bp

# Initialize Flask app
app = Flask(__name__)

# Enable CORS
CORS(app)

# Swagger configuration
swagger = Swagger(app)

# Register blueprints
app.register_blueprint(company_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
