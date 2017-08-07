/* Express 프레임워크 적용 - AJAX 웹 프로그래밍 방식 + 템플릿 엔진
=> 서버에서 데이터를 받아서 UI를 생성할 때 직접 생성하지 않고,
   템플릿 엔진을 사용하여 UI를 생성한다.
=> 서버쪽하고는 상관없다.
   클라이언트 UI만 적용하면 된다.

*/
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var cons = require('consolidate')

var app = express()

var expressWs = require('express-ws')(app);


//
// app.post('/chat/send.json', function(req, res, next){
//   console.log('포스트 요청이 들어왔어', req.testing);
//   res.end();
// });

// app.ws('/chat/send.json', function(ws, req) {
//   ws.on('message', function(msg) {
//     console.log(msg);
//   });
//   console.log('socket', req.testing);
// });


// 웹브라우저가 요청하는 파일이 어떤 폴더에 있는지 지정한다.
app.use(express.static('public'))

// POST 요청 데이터 분석기를 등록한다.
// => 이 분석기를 등록해야만 POST 요청으로 들어온 데이터를 꺼낼 수 있다.
app.use(bodyParser.urlencoded({extended: true}))

// 서비스 라우터를 등록한다.
// => http://localhost:8888/student/.... 요청을 처리할 라우터를 등록한다.
app.use('/chat', require('./control/chat-control'))


app.listen(8888, function() {
  console.log('서버가 시작되었습니다.')
})



// var server = ws.createServer(function (conn) {
//   console.log("ws connection")
//   conn.on('text', function (str) {
//     console.log('Received: ' + str)
//     conn.sendText(str.toUpperCase() + "!!!")
//   })
//   conn.on('close', function (code, reason) {
//     console.log('Connection closed');
//   })
// }).listen(8888)
