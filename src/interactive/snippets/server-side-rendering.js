http.createServer(function(req, res) {
  var props = {items: [0, 1]}

  var myAppHtml = React.renderToString(MyApp(props))
  /* OR */
  var myAppHtml = React.renderToStaticMarkup(MyApp(props))

  res.setHeader('Content-Type', 'text/html')
  res.end(myAppHtml)
}).listen(3000)