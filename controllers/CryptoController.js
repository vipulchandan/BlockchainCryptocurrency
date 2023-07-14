import CryptoModel from "../models/CryptoModel.js";
import axios from "axios";

const getCrypto = async (req, res) => {
    try {

        // Fetch coin data from CoinCap API
        const response = await axios.get("https://api.coincap.io/v2/assets");
        const coinsData = response.data.data;

        // Save coin data to database
        const savedCoins = [];
        for (const coin of coinsData) {
            const { symbol, name, marketCapUsd, priceUsd } = coin;
            const savedCoin = await CryptoModel.findOneAndUpdate(
                { symbol },
                { 
                    symbol,
                    name, 
                    marketCapUsd, 
                    priceUsd 
                },
                {
                    upsert: true,
                    new: true
                }
            );
            savedCoins.push(savedCoin);
        }

        // Sort coins based on changePercent24Hr
        savedCoins.sort((a, b) => parseFloat(b.changePercent24Hr) - parseFloat(a.changePercent24Hr));

        return res.status(200).json({
            status: true,
            message: "Crypto Coins",
            savedCoins
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
}

export {
    getCrypto
}