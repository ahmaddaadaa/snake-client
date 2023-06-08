const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "172.27.8.4",  // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");


  conn.on("connect", () => {
    console.log("connection in established ");
  });
  return conn;
};


module.exports = connect;