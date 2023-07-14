# Cryptocurrency Coin Tracker

Cryptocurrency Coin Tracker is a Node.js application that retrieves the top 100 cryptocurrency coins from the CoinCap API, stores them in a MongoDB database, and provides an API endpoint to fetch and sort the coins based on their growth in the last 24 hours.

## Features

- Fetches the top 100 cryptocurrency coins from CoinCap API
- Saves the coins in a MongoDB database
- Provides an API endpoint to retrieve and sort the coins based on their growth in the last 24 hours

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vipulchandan/BlockchainCryptocurrency.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Configure the API key:

   - Open `app.js` file.
   - Replace `'YOUR_API_KEY'` with your actual CoinCap API key.

4. Start the application:

   ```bash
   npm start
   ```

   The application will start running at `http://localhost:3000`.

## API Endpoints

### GET /api/coins

- Returns the list of all coins sorted in order of their growth in the last 24 hours.
- Each coin object contains the following properties:
  - `symbol`: The symbol or ticker of the cryptocurrency.
  - `name`: The name of the cryptocurrency.
  - `marketCapUsd`: The market capitalization of the cryptocurrency in USD.
  - `priceUsd`: The current price of the cryptocurrency in USD.

## Technologies Used

- Node.js
- Express.js
- Axios
- MongoDB
- Mongoose

## License

This project is licensed under the [MIT License](LICENSE).