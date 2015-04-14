http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end(
    React.renderToString(MyApp())
  );
}).listen(3000);