const net = require("net");

let connection;

const connect = function() {
  connection = net.createConnection({
    host: "172.27.8.4",  // IP address here,
    port: 50541 // PORT number here,
  });

  connection.setEncoding("utf8");

  connection.on("connect", () => {
    console.log("Connection established");
  });

  return connection;
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  
  connection = conn; // Assign the connection to the global variable

  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  }
};

// Start the connection and assign it to 'connection'
const conn = connect();

// Setup keyboard input with 'connection' passed as an argument
setupInput(conn);


module.exports = setupInput;
