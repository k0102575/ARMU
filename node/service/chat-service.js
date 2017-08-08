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

  insert(chat, success, error) {
    this.chatDao.insert(chat, success, error)
  }//insert()

} // exports
