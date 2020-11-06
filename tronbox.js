module.exports = {
  networks: {
    development: {
// For trontools/quickstart docker image
      privateKey: '186f01ee9b8cffc84fd0b28b0d7306ebeee1bb34fc4d2a74317e75cb16ffa69a',
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullNode: "http://127.0.0.1:8090",
      solidityNode: "http://127.0.0.1:8091",
      eventServer: "http://127.0.0.1:8092",
      network_id: "*"
    },
    shasta: {
      privateKey: '186f01ee9b8cffc84fd0b28b0d7306ebeee1bb34fc4d2a74317e75cb16ffa69a',
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullHost: "https://api.shasta.trongrid.io",
      fullNode: "https://api.shasta.trongrid.io",
      solidityNode: "https://api.shasta.trongrid.io",
      eventServer: "https://api.shasta.trongrid.io",
      network_id: "*"
    },
    mainnet: {
// Don't put your private key here, pass it using an env variable, like:
// PK=da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0 tronbox migrate --network mainnet
      // privateKey: process.env.PK,
      privateKey: '9D40C463F68A63682540228C6B17B4067DD621ACCD65F6DEAA23F90859573133',
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullHost: "https://api.shasta.trongrid.io",
      fullNode: "https://api.trongrid.io",
      solidityNode: "https://api.trongrid.io",
      eventServer: "https://api.trongrid.io",
      network_id: "*"
    }
  }
};
