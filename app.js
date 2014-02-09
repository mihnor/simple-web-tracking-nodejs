var http = require('http');
var useragent = require('useragent');
var geoip = require('geoip-lite');

http.createServer( function (r,s) {

	//get date 
	var d = (new Date()+' ').slice(0,24);
	//get user location
	var geo = geoip.lookup(r.connection.remoteAddress);
	//get user agent
	var ua = useragent.parse(r.headers['user-agent']).toString();
		
	//write it out
	console.log([d, r.url,r.connection.remoteAddress, geo.ll, geo.city + ',' + geo.country, ua ].join('\t\t'));
	
	s.end('');
	
}).listen(9999);
