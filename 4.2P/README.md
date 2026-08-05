# SIT725 Task 3.2P – Board Game Explorer

Board Game Explorer is a simple Express web application created for SIT725 Task 3.2P.

The application uses a Materialize interface to display information about four board games:

- Catan
- Wingspan
- Coffee Rush
- Root

Game information is provided by an Express GET REST endpoint and fetched by the client using JavaScript.

## Technologies

- Node.js
- Express
- HTML
- CSS
- JavaScript
- Materialize CSS

## Application Structure

- `server.js` runs the Express server and provides the `/api/games` endpoint.
- `public/index.html` contains the webpage structure.
- `public/css/styles.css` contains the custom styling.
- `public/js/scripts.js` fetches the game data and creates the Materialize cards.
- `public/images` contains the local game images.

## Run the Application

Open a terminal inside the `3.2P` folder and install the dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Open the application in a browser:

```text
http://localhost:3000
```

View the GET REST endpoint:

```text
http://localhost:3000/api/games
```

## Features

- Express server
- Static files served from the `public` folder
- GET REST endpoint
- Client-side `fetch()` request
- Dynamically generated Materialize cards
- Responsive layout
- Materialize card-reveal interaction
- Local game images

## Image Acknowledgements

The board-game images are used for educational purposes.

- Catan: https://www.bigw.com.au/medias/sys_master/images/images/hd6/hf2/140057294700574.jpg
- Wingspan: https://www.bigw.com.au/product/wingspan-board-game/p/131725?srsltid=AfmBOoruKILLxKiV3tn6l01euS3iSaYSXWfXWV-ytPwPei2GlFWRaIgI
- Coffee Rush: https://www.mindgamesbrisbane.com/wp-content/uploads/2024/02/3558380113805.jpg
- Root: https://www.m-g.com.au/wp-content/uploads/2021/10/602573655900_1.jpg