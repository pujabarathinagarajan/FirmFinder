# Use the official Python image from the Docker Hub
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the dependencies specified in the requirements file
RUN pip install --no-cache-dir -r requirements.txt

# Install pytest for testing
RUN pip install pytest

# Copy the rest of the application code into the container
COPY . .

# Expose port 8000 for the Flask application
EXPOSE 8000

# Set environment variables to ensure the Flask app runs properly
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=8000
ENV PYTHONPATH=/app

# Run all tests in the tests directory
RUN pytest tests/

# Command to run the Flask application
CMD ["flask", "run", "--host=0.0.0.0", "--port=8000"]
