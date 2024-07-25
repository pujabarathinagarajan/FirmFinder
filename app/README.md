# React + TypeScript + Vite

This is a React application built with Vite and TypeScript. It includes a development environment configured to run within a Docker container.

This app provides frontend code that displays two pages
1. Companies List Page
2. Company Locations Page

Follow the commands to start the application (ensure backend application is running)
# Build Application using Docker

1. Build the Docker image
    docker build -t app .

2. Run the Docker container with port 8000
    docker run -d -p 5173:5173 app

3. Verify running containers
    docker ps

4. Check logs of the running container
    docker logs <container_id>

5. Access the application in the browser
    http://localhost:5173

6. stop container
    docker stop <container_id>

## Development Workflow (handled by docker)

1. Install dependencies:
    ```sh
    npm install
    ```

2. Run the development server:
    ```sh
    npm run dev
    ```

3. Build for production:
    ```sh
    npm run build
    ```

4. Preview Production Build:
    ```sh
    npm run preview
    ```

5. Run the tests:
    ```sh
    npm run test
    ```
