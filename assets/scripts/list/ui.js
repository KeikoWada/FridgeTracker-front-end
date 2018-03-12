'use strict'
const store = require('../store')
// const listEvents = require('./events')
const showlistsTemplate = require('../templates/list.handlebars')
const showlistTemplate = require('../templates/partial.handlebars')

const onCreateSuccess = function (data) {
  store.data = data
  const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
  $('#content').append(showlistsHtml)
  $('input').val('')
  $('#createsuccessmyModal').modal('show')
  $('#createmyModal').modal('hide')
}

const onGetOneSuccess = function (data) {
  store.expiration_date = data.expiration_date
  console.log(data.expiration_date)
  $('input').val('')
  $('#byIdmyModal').modal('hide')
  $('#content').attr(data.expiration_date)
  const showlistHtml = showlistTemplate({ list: data.expiration_date })
  $('#content').append(showlistHtml)
}

const onUpdateSuccess = function (data) {
  store.data = data
  const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
  $('input').val('')
  $('#content').append(showlistsHtml)
  $('#updatemyModal').modal('hide')
  // $('#content').attr('data')
}

const onUpdateFailure = function () {
  // store.data = data
  // const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
  $('input').val('')
  // $('#content').append(showlistsHtml)
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
