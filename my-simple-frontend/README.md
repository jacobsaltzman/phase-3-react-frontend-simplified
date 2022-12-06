# Phase 3 Project Horror Rater -- Frontend UI Simplified


## A hard fork of the original Horror Rater project found here:

https://github.com/jacobsaltzman/phase-3-react-frontend/tree/third 


## Simplified Changes:

-Removes the User components -- all read and create, signin, usernames to reviews, ect.

-Collapses several components into one to simplify the UI.

-Makes the list of *movies* clickable, rendering a seperate "page" with all of its details and *reviews*.

-Moves the 'create movie' functionality under the list of movies.

-Adds the full CRUD for *reviews* to each individual movie.

## Description
  

An app hosting a list of horror movies with details for each, including director, release date, and sub-genre. Among that list of movies, one can make reviews -- post comments and ratings, both on overall quality of the film and the scariness factor of each individual movie.


## Introduction


This project's focus is **Ruby** and OOP in which I **built a Sinatra API backend** that uses
**Active Record** to access and persist data in a database, which is used by this separate **React frontend** that interacts with the database via the API. To view the **API** navigate to:



https://github.com/jacobsaltzman/phase-3-sinatra-simplified



## Usage


In this frontend app, users can:


[✔️] Navigate to a movie page that has a list of the current movies including:

    - a link that navigates to a new "page" where you can see more details and make a review for that movie.


[✔️] Contribute to the movie list by using a movie create form to add a movie to the database and list.


[✔️] View the reviews for every movie, and where "users" can:
    -delete a review
    -edit a review
    -post a new review




## MVP


-Adds the functionality of creating a new movie and "read" all movies on the page.


-Adds the ability to dynamically select the movie that you want to see more about.


-The Review component has full CRUD -- create, read, update, destroy.


-The fetch requests are limited to one, and the nested data is used optimally. 



## Getting Started


### Frontend Setup

To launch the app `cd` into the main project directory. Once there, run:

```console
$ npm start
```

After starting the project locally, you should be able to view it at
[http://localhost:3000].


### Backend Setup


See backend repo for details on how to set up the server.

https://github.com/jacobsaltzman/phase-3-sinatra-simplified 



## Project Extras

- This project is intended to focus more on the backend than the frontend. It mainly focuses on working with
  Active Record and performing CRUD actions.
  
- Future additions would be to include user login authentication.

