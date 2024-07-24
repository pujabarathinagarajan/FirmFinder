# Flask API

# Build Application using Docker

1. Build the Docker image
    docker build -t flask_app .

2. Run the Docker container with port 8000
    docker run -d -p 8000:8000 flask_app

3. Verify running containers
    docker ps

4. Check logs of the running container
    docker logs <container_id>

5. Access the application in the browser
    http://localhost:8000

6. Access Swagger UI documentation
    http://localhost:8000/apidocs/

## Setup(handled by docker)

1. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```

2. Run the application:
    ```sh
    python app.py
    ```

3. Access Swagger UI for API documentation at:
    ```
    http://localhost:8000/apidocs/
    ```

4. Run the tests:
    ```sh
    python -m unittest discover tests
    ```

## Endpoints

### Get All Companies
- **URL:** `/api/companies`
- **Method:** `GET`

### Get Company Details by ID
- **URL:** `/api/companies/<int:company_id>`
- **Method:** `GET`

### Get All Locations for a Specific Company ID
- **URL:** `/api/companies/<int:company_id>/locations`
- **Method:** `GET`
