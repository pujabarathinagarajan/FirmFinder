# Flask API

## Setup

1. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```

2. Run the application:
    ```sh
    python app.py
    ```

3. Run the tests:
    ```sh
    python -m unittest discover tests/route
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
