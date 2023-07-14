import { Router } from "express";
import cryptoAuth from "../middlewares/cryptoAuth.js";
import { getCrypto } from "../controllers/CryptoController.js";
const router = Router();

router.get("/", (req, res) => {
    res.send("Welcome to Blockchain Crypto!");
});

router.get('/coins', cryptoAuth, getCrypto);

export default router;
