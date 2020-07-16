const contractAddress = 'TCVz1yR6wiu6YfYTMuHKDnrzVEbzsabv7T';

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },
};

export default utils;