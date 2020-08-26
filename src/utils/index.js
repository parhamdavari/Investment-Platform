const contractAddress = 'THx5mtC9ZRj45QV3nSHpXesN3f8iugH3Mw';

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