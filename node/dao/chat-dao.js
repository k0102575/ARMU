"use strict"

module.exports = {
  setConnection(con) {
    this.connection = con
  },

  insert: function(chat, successFn, errorFn) {
    this.connection.query(
      'insert into chat(muno, mno, isread, msg, date, who) \
          values(?, ?, "N", ?, ?, ?)',
      [ chat.muno, chat.mno, chat.msg, chat.date, chat.who],
      function(error, result) {
        if (error) {
          errorFn(error)
        } else {
          successFn(result)
        }
      }) //connection.query()
  }, //insert()


  select: function(memberNo, musicianNo, successFn, errorFn) {
    this.connection.query(
      'select chatno, isread, cast(date as date) as date, cast(date as time) as time, msg, \
      c.muno as opponent, c.mno as user, who, musi.nick as nick, mu.path \
      from chat c \
      inner join memb mu on c.muno=mu.mno inner join musi on mu.mno=musi.muno \
      inner join memb m on c.mno=m.mno \
      where c.mno=? and c.muno=?\
      order by date asc',
      [memberNo, musicianNo],
      function(error, result) {
        if (error) {
          errorFn(error)
        } else {
          successFn(result)
        }
      }) //connection.query()
  },//select()

  selectMusi: function(memberNo, musicianNo, successFn, errorFn) {
    this.connection.query(
      'select chatno, isread, date, msg, c.muno as user, c.mno as opponent, who,\
       m.name as nick, m.path\
      from chat c\
      inner join memb mu on c.muno=mu.mno inner join musi on mu.mno=musi.muno\
      inner join memb m on c.mno=m.mno\
      where c.mno=? and c.muno=?\
      order by date asc',
      [memberNo, musicianNo],
      function(error, result) {
        if (error) {
          errorFn(error)
        } else {
          successFn(result)
        }
      }) //connection.query()
  },//select()

  selectPhotoPath: function(memberNo, successFn, errorFn) {
    this.connection.query(
      ' select path from memb where mno=?',
      [memberNo],
      function(error, result) {
        if (error) {
          errorFn(error)
        } else {
          successFn(result)
        }
      }) //connection.query()
  },//selectPhotoPath()

}// exports
