const contractAddress = 'TF2Qen1cXUu31dsYdKKSRYhigkh2QBdX8C';

// TCJoYhSpgp8xbqN91hb5Buy2Db2PXe98jQ
const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },
};

export default utils;