const express = require("express"); // Sử dụng framework express
const next = require("next"); // Include module next

const port = process.env.NODE_PORT || 3030;
const domain = "0.0.0.0";
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, domain, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${domain}:${port}`);
  });
});
