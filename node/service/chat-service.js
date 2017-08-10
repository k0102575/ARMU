"use strict"

module.exports = {
  setChatDao(dao) {
    this.chatDao = dao
  },

  list(memberNo, musicianNo, success, error) {
    var obj = this
    this.chatDao.select(memberNo, musicianNo, function(results) {
      success(results)
    }, error)
  },//list()

  listMusi(memberNo, musicianNo, success, error) {
    var obj = this
    this.chatDao.selectMusi(memberNo, musicianNo, function(results) {
      success(results)
    }, error)
  },//listMusi()


  insert(chat, success, error) {
    this.chatDao.insert(chat, success, error)
  },//insert()


  getPhotoPath(memberNo, success, error) {
    this.chatDao.selectPhotoPath(memberNo, success, error)
  }//getPhotoPath()

} // exports
