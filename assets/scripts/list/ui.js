'use strict'
const store = require('../store')
// const listEvents = require('./events')
const showlistsTemplate = require('../templates/list.handlebars')

const onCreateSuccess = function (data) {
  store.data = data
  const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
  $('#content').append(showlistsHtml)
  $('input').val('')
  $('#createsuccessmyModal').modal('show')
  $('#createmyModal').modal('hide')
}

const onGetOneSuccess = function (data) {
  store.data = data
  $('input').val('')
  $('#updatemyModal').modal('hide')
}

const onUpdateSuccess = function (data) {
  store.data = data
  const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
  $('input').val('')
  $('#content').append(showlistsHtml)
  $('#updatemyModal').modal('hide')
  $('#updatesuccessModal').modal('show')
}

const onUpdateFailure = function (data) {
  store.data = data
  const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
  $('input').val('')
  $('#content').append(showlistsHtml)
  $('#updatemyModal').modal('hide')
  $('#failureModal').modal('show')
}

const onShowAllSuccess = function (data) {
  store.data = data
  const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
  $('#content').append(showlistsHtml)
  console.log(data.expiration_dates)
  $('input').val('')
  // $('#createmyModal').modal('hide')
  // $('#createsuccessmyModal').modal('show')
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
  onGetOneSuccess,
  onUpdateSuccess,
  onUpdateFailure,
  onShowAllSuccess,
  removeList
  // onTrackFailure,
  // onCreateNewSuccess
}
