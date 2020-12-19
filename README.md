# Quick MERN App

- GET and POST requests with a form in React

## Snippets

- npm script to ignore view with `nodemon` (hot reload server)
  ```bash
  nodemon --ignore './view' server.js
  ```
- Express middleware boilerplate
  ```javascript
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  ```
- Proxying API Requests (add to front-end `package.json`)
  ```json
  "proxy": "http://localhost:4000"
  ```
  More information [here](https://create-react-app.dev/docs/proxying-api-requests-in-development/).
