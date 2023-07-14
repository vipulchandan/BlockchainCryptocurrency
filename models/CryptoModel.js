import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema({
    symbol: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        unique: true
    },
    marketCapUsd: {
        type: String
    },
    priceUsd: {
        type: String
    }
});

const crypto = mongoose.model("Cryptocoin", cryptoSchema);

export default crypto;