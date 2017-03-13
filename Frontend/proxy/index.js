var http = require('http');
var fs = require('fs');
var url = require('url');
var proxy = "https://65i1ix2dr5.execute-api.us-east-1.amazonaws.com";

var type = proxy.indexOf('https') != -1 ? require('https') : http;

var server = http.createServer(function(req, res) {
  var urlPath = url.parse(req.url).path;
  var method = req.method;

  if (req.headers['origin']) res.setHeader('Access-Control-Allow-Origin', req.headers['origin']);
  if (req.headers['access-control-request-headers']) res.setHeader('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
  if (req.headers['access-control-request-method']) res.setHeader('Access-Control-Allow-Method', req.headers['access-control-request-method']);
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (method === 'OPTIONS') {
    res.end();
  } else if (method === 'GET' ) {
    type.get(proxy + urlPath, function(gres) {
      console.log(`Proxy to :${proxy + urlPath}`);
      res.setHeader('Content-Type', gres.headers['content-type']);
      res.statusCode = gres.statusCode;
      gres.pipe(res);
    });
  } else if (method === 'POST') {
    type.post(proxy + urlPath, {}, function(gres) {
      console.log(`Proxy to :${proxy + urlPath}`);
      res.setHeader('Content-Type', gres.headers['content-type']);
      res.statusCode = gres.statusCode;
      gres.pipe(res);
    });
  }

  
});

server.listen(3002, function() {
  console.log('on :3002');
});