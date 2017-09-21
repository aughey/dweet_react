const http = require('http')

var start = new Date().getTime();
function post() {
  var options = {
    hostname: 'washucsc.org',
    port: 3000,
    path: '/dweet/temp/aughey/test_sender',
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  }
  var d = ((new Date()).getTime() - start) / 1000.0;
  var body = {
    this: "issss",
    a: "test",
    sin: Math.sin(d) * 0.5 + 0.5,
    cos: Math.cos(d) * 0.5 + 0.5,
    time: new Date()
  }
  var req = http.request(options, (res) => {
  });
  req.write(JSON.stringify(body));
  req.end();
}

setInterval(post,100);
