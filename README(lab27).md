# LAB - Class 27

## Project: useState() Hook

### Author: Timothee Odushina

### Problem Domain  

Phase 2 Requirements

In phase 2, we will be receiving user input in preparation of connecting to live APIs, using the useState() hook in our functional components. In order to properly manage state with the useState hook, we will now convert App.js to a functional component.

The following user stories detail the major functionality for this phase of the project.

* As a user, I want to enter the REST Method and URL to an API
* As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format

Application Flow:

* User enters an API URL
* Chooses a REST Method
* Clicks the “Go” button
* Application fetches data from the URL given, with the method specified
* Displays the response headers and results separately
* Both headers and results should be “pretty printed” JSON

### Links and Resources



### Setup

* npx create-react-app
* npm i react react-dom react-jsonschema-form react-router-dom react-scripts sass

#### How to initialize/run your application (where applicable)

* `npm start`

#### UML

![Lab 16 UML](./LAB%2026%20UML.PNG)
