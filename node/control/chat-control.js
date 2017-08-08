// 학생 정보를 다루는 서비스를 정의한다.
const express = require('express')
const datasource = require('../util/datasource')
const studentDao = require('../dao/student-dao')
const memberDao = require('../dao/member-dao')
const studentService = require('../service/student-service')

const connection = datasource.getConnection()
studentDao.setConnection(connection)
memberDao.setConnection(connection)
studentService.setStudentDao(studentDao)
studentService.setMemberDao(memberDao)

const router = express.Router()

var clients = []


router.ws('/send.json', function(ws, req) {
  var myMap = new Map;
  clients.push(myMap)
  console.log('연결됨');

  ws.on('message', function(str) {
    var obj = JSON.parse(str),
        msg = obj.message;

    if(!myMap.has('user')) {
      var receiver = obj.receiver,
          sender = obj.sender;
      myMap.set('user', sender)
      myMap.set('ws', ws)
      myMap.set('opponent', receiver)
      console.log('새로운 유저!\n유저 넘버: ' + myMap.get('user') +
                  ', wsID: ' + myMap.get('ws')._socket._handle.fd +
                  ', 상대방 넘버: ' + myMap.get('opponent'));
      setCommunicator(myMap)
      return;
    }

    if(myMap.has('oppMap')) {
      console.log('상대 웹소킷 찾음');
      broadcast(myMap, msg)
    }


    ws.send('서버 왈 : ' + msg);
  });
});

function setCommunicator(myMap) {
  var oppMap;
  for(var i = 0; i < clients.length; i ++) {
    oppMap = clients[i]
    console.log('상대 찾는 중...' + oppMap.get('user'));
    if((oppMap.get('opponent') == myMap.get('user')) && (oppMap.get('user') == myMap.get('opponent'))) {
      console.log('상대 찾음');
      myMap.set('oppMap', oppMap)
      oppMap.set('oppMap', myMap)
      return;
    }
  }//for()
}//broadcast()

function broadcast(myMap, msg) {
  console.log('브로드 캐스트 => ' + myMap.get('opponent'));
  myMap.get('oppMap').get('ws').send(msg)
}

//app.use("/ws-stuff", router);


module.exports = router

// router.get('/list.json', (request, response) => {
//   var pageNo = 1,
//       pageSize = 3;
//   if (request.query.pageNo) {
//     pageNo = parseInt(request.query.pageNo)
//   }
//   if (request.query.pageSize) {
//     pageSize = parseInt(request.query.pageSize)
//   }
//   studentService.list(pageNo, pageSize, function(results, totalCount) {
//     response.json({'list': results, 'totalCount': totalCount})
//   }, function(error) {
//     response.status(200)
//             .set('Content-Type', 'text/plain;charset=UTF-8')
//             .end('error')
//     console.log(error)
//   })
// })
//
// router.get('/detail.json', function(request, response) {
//   var no = parseInt(request.query.no)
//   studentService.detail(no, function(result) {
//     response.json(result)
//
//   }, function(error) {
//     response.status(200)
//             .set('Content-Type', 'text/plain;charset=UTF-8')
//             .end('error')
//     console.log(error)
//   })
// })
//
// router.post('/update.json', function(request, response) {
//   studentService.update({
//     no: request.body.no,
//     working: request.body.working,
//     schoolName: request.body.schoolName,
//     name: request.body.name,
//     tel: request.body.tel,
//     email: request.body.email,
//     password: '1111'
//   }, function(result) {
//     response.json({'result': 'yes'})
//
//   }, function(error) {
//     response.status(200)
//             .set('Content-Type', 'text/plain;charset=UTF-8')
//             .end('error')
//     console.log(error)
//   })
// })
//
// router.get('/delete.json', function(request, response) {
//   var no = parseInt(request.query.no)
//   studentService.delete(no, function(result) {
//     response.json({'result': 'yes'})
//
//   }, function(error) {
//     response.status(200)
//             .set('Content-Type', 'text/plain;charset=UTF-8')
//             .end('error')
//     console.log(error)
//   })
// })
//
// router.post('/add.json', function(request, response) {
//   studentService.insert({
//     working: request.body.working,
//     schoolName: request.body.schoolName,
//     name: request.body.name,
//     tel: request.body.tel,
//     email: request.body.email,
//     password: '1111'
//   }, function(result) {
//     response.json({'result': 'yes'})
//
//   }, function(error) {
//     response.status(200)
//             .set('Content-Type', 'text/plain;charset=UTF-8')
//             .end('error')
//     console.log(error)
//   })
// })
