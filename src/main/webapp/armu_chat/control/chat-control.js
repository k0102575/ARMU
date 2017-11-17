var moment = require('moment');
moment().format();

const express = require('express')
const datasource = require('../util/datasource')
const chatDao = require('../dao/chat-dao')
const chatService = require('../service/chat-service')

var fs = require('fs'),
    path = require('path'),
    http = require('http');

var host = '13.125.35.189',
    port = 80;

const connection = datasource.getConnection()
chatDao.setConnection(connection)
chatService.setChatDao(chatDao)

const router = express.Router()

var clients = []

var userInfos = []

router.ws('/send.json', function(ws, req) {
  var myMap = new Map;
  clients.push(myMap)
  console.log('연결됨');

  ws.on('message', function(str) {
    var obj = JSON.parse(str),
      msg = obj.message;

    if (!myMap.has('user')) {
      var receiver = obj.receiver,
        sender = obj.sender,
        isMusician = obj.isMusician;
      myMap.set('user', sender)
      myMap.set('ws', ws)
      myMap.set('opponent', receiver)
      myMap.set('isMusician', (isMusician == 'Y' ? true : false))
      console.log('새로운 유저!\n유저 넘버: ' + myMap.get('user') +
        ', wsID: ' + myMap.get('ws')._socket._handle.fd +
        ', 상대방 넘버: ' + myMap.get('opponent'));
      setCommunicator(myMap)
      return;
    }//처음 연결된 유저라면 유저 정보를 셋팅하고, 상대방이 있으면 서로 연결시켜줌
    //(상대의 map과 해당 유저의 map을 연결)


    var nowUTC = moment().utc(), //client 전송용. client가 이 형태로 datetime을 다룸
        now = moment().format("YYYY-MM-DD HH:mm:ss") //DB 저장용. client에게 DB의 datetime이 전달될 때 이 형태로 전달됨
    if (myMap.has('oppMap')) {
      var data = JSON.stringify({
        'message': msg,
        'sender': 'him',
        'readChange': 'N',
        'datetime': nowUTC
      })
      broadcast(myMap, data)
    }//상대와 연결된 상태라면 상대에게 메시지를 보냄


    if(myMap.get('isMusician')) addMusiChat(myMap, msg, myMap.has('oppMap'), now)
    else addChat(myMap, msg, myMap.has('oppMap'), now)
    //DB에 해당 메시지를 저장

  }) //ws.on('message')


  ws.on('close', function(reasonCode, description) {
    var result = removeClient(myMap)
    console.log('## 퇴장! >> ' + result)
    console.log('---------------- 현재 클라이언트 목록 ----------------')
    console.log(clients)
    console.log('------------------------------------------------------')
  })//ws.on('close')

}) //router.ws()


function addChat(myMap, msg, isRead, now) {
  chatService.insert({
    'muno' : myMap.get('opponent'),
    'mno' : myMap.get('user'),
    'msg' : msg,
    'date' : now,
    'who' : myMap.get('user'),
    'isread' : isRead ? 'Y' : 'N'
  }, function(result) {
    console.log('DB에 저장 성공')
  }, function(error) {
    console.log('------ DB에 저장 실패 ------')
    console.log(error)
  })//chatService.insert()
} //addChat()

function addMusiChat(myMap, msg, isRead, now) {
  chatService.insert({
    'mno' : myMap.get('opponent'),
    'muno' : myMap.get('user'),
    'msg' : msg,
    'date' : now,
    'who' : myMap.get('user'),
    'isread' : isRead ? 'Y' : 'N'
  }, function(result) {
    console.log('DB에 저장 성공')
  }, function(error) {
    console.log('------ DB에 저장 실패 ------')
    console.log(error)
  })//chatService.insert()
} //addChat()


function setCommunicator(myMap) {
  var oppMap;
  for (var i = 0; i < clients.length; i++) {
    oppMap = clients[i]
    if ((oppMap.get('opponent') == myMap.get('user')) && (oppMap.get('user') == myMap.get('opponent'))) {
      console.log('상대도 온라인 상태');
      myMap.set('oppMap', oppMap)
      oppMap.set('oppMap', myMap)
      updateReadState(myMap)
      return;
    }
    console.log('상대는 오프라인');
  } //for()
} //broadcast()


function updateReadState(myMap) {
  var data = {
    'sender': 'him',
    'readChange': 'Y'
  };

  if(myMap.get('isMusician')) {
    chatService.update(myMap.get('opponent'), myMap.get('user'), function(result) {
      console.log('읽음정보 업데이트됨')
      broadcast(myMap, JSON.stringify(data))//상대에게 내가 들어왔음을 알림
      myMap.get('ws').send(JSON.stringify(data))//나에게 상대도 온라인 상태임을 알림
    }, function(error) {
      res.status(200)
      .set('Content-Type', 'text/plain;charset=UTF-8')
      .end('error')
      console.log(error)
    })
  } else {
    chatService.update(myMap.get('user'), myMap.get('opponent'), function(result) {
      console.log('읽음정보 업데이트됨')
      broadcast(myMap, JSON.stringify(data))
      myMap.get('ws').send(JSON.stringify(data))
    }, function(error) {
      res.status(200)
      .set('Content-Type', 'text/plain;charset=UTF-8')
      .end('error')
      console.log(error)
    })
  }
}


function broadcast(myMap, data) {
  console.log('브로드 캐스트 => ' + myMap.get('opponent'));
  var userMap = myMap.get('oppMap')
    userMap.get('ws').send(data)
}



router.post('/list.json', (req, res) => {
  checkFileExist(req.body.photo)//상대방의 사진이 서버에 없으면, java서버에서 사진을 가져옴
  chatService.list(req.body.senderNo, req.body.receiverNo, function(results) {
    res.json({
      'list': results
    })
  }, function(error) {
    res.status(200)
      .set('Content-Type', 'text/plain;charset=UTF-8')
      .end('error')
    console.log(error)
  })
})

router.post('/listMusi.json', (req, res) => {
  checkFileExist(req.body.photo)
  chatService.listMusi(req.body.receiverNo, req.body.senderNo, function(results) {
    res.json({
      'list': results
    })
  }, function(error) {
    res.status(200)
      .set('Content-Type', 'text/plain;charset=UTF-8')
      .end('error')
    console.log(error)
  })
})

router.post('/getPhotoPath.json', (req, res) => {
  chatService.getPhotoPath(req.body.no, function(result) {
    res.json({
      'photo': result[0].path
    })
  }, function(error) {
    res.status(200)
      .set('Content-Type', 'text/plain;charset=UTF-8')
      .end('error')
    console.log(error)
  })
})


function checkFileExist(photo) {
  var filepath = "public" + photo + "_80.png";

  if (fs.existsSync(filepath)) console.log('photo file already exists.')
  else getFile(filepath, photo)
}

function getFile(filepath, photo) {
  var file = fs.createWriteStream(filepath);
  var request = http.get("http://" + host + ":" + port + photo + "_80.png", function(response) {
    response.pipe(file);
    console.log('file transfer succeed')
  });
}

function removeClient(myMap) {
  var result;
  var no = myMap.get('user')

  for (var i = 0; i < clients.length; i++) {
    if(clients[i].get('user') == no) {
      clients.splice(i, i + 1) //서버의 클라이언트 목록에서 내 map을 삭제
      result = no + " user removed from client list "
      break;
    }
  }

  for (var j = 0; j < clients.length; j++) {
    if(clients[j].get('opponent') == no) {
      var data = {"exit": "exit"}
      clients[j].get('ws').send(JSON.stringify(data))//상대에게 내가 나가는 것을 알려주어, 상대가 읽음상태를 가늠할 수 있또록 함
      clients[j].delete('oppMap')//상대의 map에서 내 map을 제거하여 상대와의 연결을 끊음
      result += "and from opponent's map"
      break;
    }
  }

  return result;
}

module.exports = router
