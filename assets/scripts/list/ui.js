'use strict'
const store = require('../store')
// const listEvents = require('./events')

const onCreateSuccess = function (data) {
  // $('#gamePage').toggle('slow')
  console.log('ui')
  store.data = data.store
  console.log(data)
  console.log(store.data)
  console.log('1')
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
  store.data = data.store
}

// const onUpdateFailure = function (error) {
//
//   console.log(error)
// }

const onUpdateFailure = function () {
  $('#checkmessage').text('Error on updating the game')
  $('#checkmessage').css('background-color', 'red')
}

// const onTrackSuccess = function (data) {
//   data.game = store.game
//   // console.log(store.game)
//   $('#messageTwo').text(store.user.email + ' played ' + data.games.length + ' times! great job!')
//   $('#messageTwo').css('background-color', 'gray')
//   $('#messageTwo').delay(5000).queue(function () {
//     $(this).removeAttr('style')
//     $(this).text('')
//   })
//   // console.log(data)
// }
//
// const onTrackSuccessTwo = function (data) {
//   data.game = store.game
//   $('#signInMessage').text(store.user.email + ' played ' + data.games.length + ' times! great job!')
// }

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure
  // onTrackSuccess,
  // onTrackSuccessTwo,
  // onTrackFailure,
  // onCreateNewSuccess
}
