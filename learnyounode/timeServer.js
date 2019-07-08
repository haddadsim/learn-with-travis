const net = require('net');

const server = net.createServer((socket) => {

  socket.end(getFormattedCurrentTime() + "\n"); 

});

server.listen(process.argv[2]);

const getFormattedCurrentTime = () => {
    const now = new Date();
  
    return [now.getFullYear(), formatNumber(now.getMonth() + 1), formatNumber(now.getDate())].join("-")
         + " " + [formatNumber(now.getHours()), formatNumber(now.getMinutes())].join(":");
  }
  
  const formatNumber = (number) => {
    return number < 10 ? "0" + number : number;
  }