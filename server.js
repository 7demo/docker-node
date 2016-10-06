var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {
		'Content-Type' : 'text/plain'
	})
	res.end('hello world')
})

// var server = http.createServer(router({
// 	'/': function(req, res) {
// 	    res.writeHead(200, { 'Content-Type': 'text/plain' })
// 	    res.end('Hello World!')
// 	  },
// 	  '/bye': function(req, res) {
// 	    res.writeHead(200, { 'Content-Type': 'text/plain' })
// 	    res.end('Bye~')
// 	  }
// }))

server.listen(9090, function () {
	console.log('Docker demo is runing')
})

function router (routes) {
	var paths = Object.keys(routes);
	var reg = paths.map(function (path) {
		return new RegExp('^' + path + '$');
	})
	return function (req, res) {
		var i = 0;
		while (!reg[i].test(req.url)) i++;
		return routes[paths[i]].call(null, req, res);
	}
}