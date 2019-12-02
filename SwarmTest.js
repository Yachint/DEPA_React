const swarm = require("swarm-js").at("http://swarm-gateways.net");
swarm.upload({
    path: "./dell.pdf",      // path to data / file / directory
    kind: "file"}) // optional, and only for kind === "directory"
    .then(console.log)
    .catch(console.log);