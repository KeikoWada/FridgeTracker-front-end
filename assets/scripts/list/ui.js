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

// const onUpdateFailure = function (error) {
//
//   console.log(error)
// }

const onUpdateFailure = function () {
  $('#checkmessage').text('Error on updating the game')
  $('#checkmessage').css('background-color', 'red')
}

const onShowAllSuccess = function (data) {
  store.data = data
  const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
  $('#content').append(showlistsHtml)
  console.log(data.expiration_dates)
//  $('#content').text(store.data)

  // $('#messageTwo').css('background-color', 'gray')
  // $('#messageTwo').delay(5000).queue(function () {
  //   $(this).removeAttr('style')
  //   $(this).text('')
  // })
}

// const onTrackSuccessTwo = function (data) {
//   data.game = store.game
//   $('#signInMessage').text(store.user.email + ' played ' + data.games.length + ' times! great job!')
// }

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onShowAllSuccess
  // onTrackSuccessTwo,
  // onTrackFailure,
  // onCreateNewSuccess
}
