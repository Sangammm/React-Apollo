Made By me Helped By Yash Gandhi.

Too Start Front End

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

You need backend Graphql server for to run this project:
https://github.com/simformsolutions/graphql-ts

###TO Run Server

### Prerequisites

- Login into prisma using `npx prisma login`
- Create an `.env` file in the project root (copy from .env.example file)
- Add your prisma endpoint in the .env file
- Run `yarn` **(recommended)** or `npm install`

### To run the development server

- `yarn dev` or `npm run dev`

### To build the application

- `yarn build` or `npm run build`
- Deploy the dist folder to the hosting server of your choice
- Run `yarn start` or `npm start` to start the server

Note: To run the migrations (changes made to `datamodel.prisma`) run `yarn p:deploy` or `npm run p:deploy`

