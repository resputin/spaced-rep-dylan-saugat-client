# Spaced Repetition

A flash card application with a spaced repetition algorithm to more effectively learn Dragon Language from Skyrim. The site is deployed [here](http://spaced.nielsendb.com/) and the server repo is [here](https://github.com/thinkful-ei18/spaced-rep-dylan-saugat-server)

## Getting started

This repo is only the backend portion of the project which was worked on by Dylan Nielsen. The API has protected endpoints with JWT's passed in as Bearer tokens. The questions are stored in a linked list tied to the User and the GET /question endpoint will only return the next available question which can be answered with a POST request to /questions with an answer key in the JSON body. Depending on whether or not the answer was correct, the algorithm will shift the question to a different position in the linked list based on how many consecutive correct answers that specific question has. The questions also keep track of the statistics associated with each question. 

### Setting up a project

* Clone this repository: `git clone https://github.com/thinkful-ei18/spaced-rep-dylan-saugat-server YOUR_PROJECT_NAME`
* Move into the project directory: `cd YOUR_PROJECT_NAME`
* Install the dependencies: `npm install`
* Run the development task: `npm start`
    * Starts a server running at http://localhost:8080
    * Automatically restarts when any of your files change
    
## Screenshots
![Alt text](https://github.com/resputin/spaced-rep-dylan-saugat-client/blob/master/public/spaced-trans.png?raw=true)
    
## Technologies Used
Spaced Rep is a full-stack, full responsive, web-application using the create-react-app package, Node, Mongo, and Express.
Nginx and Ubuntu 16.4 were used for this deployment at Digital Ocean.


### Api
The API for this project is very straightforward. Once there is a user logged in the only endpoint accessed is /api/question which will return the next available question for that user with a GET request, and a POST request will answer the current question and move on to the next question available.
