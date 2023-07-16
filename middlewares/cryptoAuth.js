const cryptoAuth = (req, res, next) => {
    try {
        const coinCapApiKey = process.env.COINCAP_API;
    
        const cryptoAuthHeader = req.headers.authorization;

        if (cryptoAuthHeader && cryptoAuthHeader.startsWith('Bearer')) {
            const token = cryptoAuthHeader.split(' ')[1]; // Bearer coincaptoken

            if (token === coinCapApiKey) {
                next();
            } else {
                res.status(401).json({ error: 'Invalid API key' });
            }

        } else {
            res.status(401).json({ error: 'API key missing' });
        }
        
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export default cryptoAuth