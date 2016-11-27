//require = import
var http = require("http");
var url = require("url");

function start(route, handle){
    //listenメソッドはHTTPサーバが待ち受けするポート番号を数値の引数として受け取る
    //引数の中身は匿名関数で記述
    function onRequest(request, response){
	var pathname = url.parse(request.url).pathname;
	console.log("Request for "+ pathname +" received.");
	route(handle, pathname, response, request);
    }
    
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

//exports...モジュール化
exports.start = start;
