'use strict'
const store = require('../store')
// const listEvents = require('./events')
const showlistsTemplate = require('../templates/list.handlebars')

const onCreateSuccess = function (data) {
  store.data = data
  $('input').val('')
  $('#createsuccessmyModal').modal('show')
}

const onCreateFailure = function () {
  $('#checkmessage').text('Error on create of List, please check the list again')
  $('#checkmessage').css('background-color', 'red')
}

const onGetOneSuccess = function (data) {
  store.data = data
  $('#content').attr(data.expiration_date)
}

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
  console.log(data.expiration_dates)
  $('input').val('')
  $('#createmyModal').modal('hide')
  $('#createsuccessmyModal').modal('show')
  // $('#messageTwo').css('background-color', 'gray')
  // $('#messageTwo').delay(5000).queue(function () {
  //   $(this).removeAttr('style')
  //   $(this).text('')
  // })
}

const removeList = (data) => {
  store.data = data
  const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
  $('#content').append(showlistsHtml)
  // console.log(data.expiration_dates)
  // $('input').val('')
  $('#deletemyModal').modal('show')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onGetOneSuccess,
  onUpdateSuccess,
  onUpdateFailure,
  onShowAllSuccess,
  removeList
  // onTrackFailure,
  // onCreateNewSuccess
}
