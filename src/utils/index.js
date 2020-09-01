const contractAddress = 'TGjqwrFZ8a2EUxbvbWsZv32YP9DpA6osCx';

// TF2Qen1cXUu31dsYdKKSRYhigkh2QBdX8C
const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },
};

export default utils;