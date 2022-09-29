# Full Stack: Food-Truck-as-a-Service

Lunch is important and knowing our lunch choices is even more so. While our office manager
publishes a paper copy of the food truck schedule once a month, we’d like this service to be
available digitally, so we can choose our lunch from the comfort of our desks. For an internal
hackathon, you’ve been asked to write a server-and-UI into which we can manually add the food
trucks for each month, and access today's choices. The requirements are:

- A RESTful API that allows:
  - Data entry of the food trucks for each day.
    - Each food truck only needs a name and a date, not a location.
  - Editing food trucks if we have a typo.
  - Listing today’s Food trucks.
- A UI that consumes the above API, and...
  - Permits easy data entry.
  - Allows a quick view of today's Food Truck options.
- A persistence layer of your choice.
- Assume it is running on a retired Linux server inside our firewall, so no authentication is needed.
- Use a GitHub repo for your code and send us the repo.

# Tech Stack

This is a MERN stack application.

- Backend - NodeJS, ExpressJS
- Frontend - ReactJS
- Database - MongoDB

# How to run the app

Download this repository first into your local computer and do the following to start backend and frontend separately.

## Run back-end

Run the following commands to start the backend application. Once it is started, it should be accessible at http://localhost:4000

```
cd ./server
npm install
npm run start
```

## Run front-end

Run the following commands to start the frontend application. Once it is started, it should be accessible at http://localhost:3000

```
cd ./client
npm install
npm run start
```

### Now the application can be used by the end user at http://localhost:3000
