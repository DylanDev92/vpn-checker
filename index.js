const express = require("express");
const app = express();
const path = require("path");
const { IP2Proxy } = require("ip2proxy-nodejs");
require("dotenv").config();

console.log("Trying to connect to... " + process.env.PORT);

app.listen(process.env.PORT || 9001, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
    let ip2proxy = new IP2Proxy();
    const jsonDirectory = path.join(process.cwd(), 'proxies.bin');
  if (
    ip2proxy.open(
      jsonDirectory
    ) == 0
  ) {
    isOrNotAFuckingVPNHuhYesOrNoAAAAA = false;
    wtfIsThisVariable = ip2proxy.isProxy(req.query.ip);
    console.log(req.query.ip);
    console.log(wtfIsThisVariable);
    if (wtfIsThisVariable > 0 || wtfIsThisVariable < 0) {
      isOrNotAFuckingVPNHuhYesOrNoAAAAA = true;
    }
    res.send(isOrNotAFuckingVPNHuhYesOrNoAAAAA);
    ip2proxy.close();
  }
});

// -1 : errors
// 0 : not a proxy
// 1 : a proxy
// 2 : a data center IP address or search engine robot
