# FirmFinder

## Overview

FirmFinder is a web application that displays a list of companies and their locations. The application is divided into two main parts:

1. **Backend**: A Flask-based server that provides APIs for company data.
2. **Frontend**: A React application that fetches data from the backend and displays it to the user.

## Prerequisites

Make sure you have the following installed on your machine:

- Docker
- Docker Compose

## Build the Containers (Handles unit test cases of backend and frontend)
docker-compose up --build

## Start the Containers
docker-compose up

## Stopping the Containers
docker-compose down

## Access the Application and Swagger UI
Once the containers are up and running, you can access the application:

Frontend: http://localhost:5173
Backend: http://localhost:8000
Swagger UI documentation: http://localhost:8000/apidocs/
