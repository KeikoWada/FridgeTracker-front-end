'use strict'
const store = require('../store')
// const listEvents = require('./events')
const showlistsTemplate = require('../templates/list.handlebars')

const onCreateSuccess = function (data) {
  // $('#gamePage').toggle('slow')
  store.data = data
}

const onCreateFailure = function () {
  $('#checkmessage').text('Error on create of List, please check the list again')
  $('#checkmessage').css('background-color', 'red')
}

// const onCreateNewSuccess = function (data) {
//   gameLogic.reset()
//   store.game = data.game
// }
//
const onUpdateSuccess = function (data) {
  // $('#checkmessage').text('game successfully updated')
  // $('#checkmessage').css('background-color', 'green')
  store.data = data
}

const onUpdateFailure = function () {
  $('#checkmessage').text('Error on updating the game')
  $('#checkmessage').css('background-color', 'red')
}

const onShowAllSuccess = function (data) {
  store.data = data
  const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
  $('#content').append(showlistsHtml)
  // console.log(data.expiration_dates)

  // $('#messageTwo').css('background-color', 'gray')
  // $('#messageTwo').delay(5000).queue(function () {
  //   $(this).removeAttr('style')
  //   $(this).text('')
  // })
}

const removeList = (event) => {
  console.log('ui')
  console.log(event)
  console.log(event.target)
  $('.content').empty()
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onShowAllSuccess,
  removeList
  // onTrackFailure,
  // onCreateNewSuccess
}
