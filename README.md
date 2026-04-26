# Travlr Getaways - Full Stack Web Application
CS 465 Full Stack Development with MEAN

## Architecture

### Frontend Development Comparison
This project used three different frontend approaches. Express HTML was used in the early modules to serve static HTML pages directly from the server. JavaScript was then used to add interactivity and dynamic content rendering using the Handlebars templating engine, which allowed data from MongoDB to be injected into HTML templates server-side. Finally, the Angular Single Page Application (SPA) was built for the admin interface. The SPA loads once in the browser and dynamically updates content without full page reloads, providing a much faster and more responsive user experience compared to the traditional server-rendered Express pages.

### Why MongoDB?
The backend uses a NoSQL MongoDB database because it stores data in a flexible JSON-like format (BSON) that maps naturally to JavaScript objects used throughout the application. MongoDB does not require a rigid schema, making it easy to add or modify trip data fields without restructuring the entire database. This flexibility is well suited for a travel application where trip data can vary in structure.

## Functionality

### JSON vs JavaScript
JSON (JavaScript Object Notation) is a data format used to structure and transfer data, while JavaScript is a full programming language. JSON acts as the bridge between the frontend and backend — the Angular SPA sends and receives JSON data through API calls to the Express backend, which stores and retrieves that data from MongoDB. This consistent data format across all layers of the MEAN stack makes integration seamless.

### Code Refactoring and Reusable Components
Several instances of refactoring occurred throughout the project. The static HTML travel page was refactored into a Handlebars template that dynamically renders trip data from the database instead of hardcoded HTML. On the Angular side, the TripCardComponent was created as a reusable UI component that renders each trip card, eliminating the need to duplicate HTML for every trip. The TripDataService was refactored to centralize all API calls, and the AuthenticationService was created to handle all JWT operations in one place. Reusable components reduce code duplication, make maintenance easier, and ensure consistent behavior across the application.

## Testing

### Methods, Endpoints, and Security
API testing was performed using Postman to verify that each endpoint returned the correct data and HTTP status codes. GET requests to /api/trips were tested to confirm all trips were returned from MongoDB. POST requests to /api/trips were tested to confirm new trips could be added. PUT requests to /api/trips/:tripCode were tested to confirm trips could be updated. Security added complexity to testing because POST and PUT endpoints require a valid JWT token in the Authorization header. Testing required first obtaining a token via the /api/login endpoint, then including that token as a Bearer token in subsequent requests. Requests with invalid or missing tokens correctly returned 401 Unauthorized responses, confirming the security middleware was working properly.

## Reflection

### Professional Growth
This course significantly developed my skills as a full stack developer. I gained hands-on experience with the entire MEAN stack — MongoDB, Express, Angular, and Node.js — which are widely used in industry. I learned how to design and implement RESTful APIs, connect a NoSQL database to a web application, build a Single Page Application with Angular, and implement JWT-based authentication and security. These skills make me a more marketable candidate because full stack development is one of the most in-demand skill sets in software engineering today. The experience of building a complete application from the ground up, including both customer-facing and admin interfaces with security controls, closely mirrors real-world professional development work.