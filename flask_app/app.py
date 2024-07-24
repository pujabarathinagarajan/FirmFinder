from flask import Flask
from api.route.company import company_bp

# Initialize Flask app
app = Flask(__name__)

# Register blueprints
app.register_blueprint(company_bp)

if __name__ == '__main__':
    app.run(debug=True)
