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

  const showlistHtml = showlistTemplate({ list: data.expiration_date })
  $('#content').append(showlistHtml)
}

const onGetListFailure = function () {
  $('input').val('')
  $('#byIdmyModal').modal('hide')
  $('#failureModal').modal('show')
}

const getOne = (data) => {
  store.data = data
  console.log(data)
  console.log('this is data')
  // const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
  // $('#content').append(showlistsHtml)
  console.log(data.expiration_date.id)
  $('.oneId').val(data.expiration_date.id)
  $('.oneDate').val(data.expiration_date.date)
  $('.oneItem').val(data.expiration_date.item_name)
  $('.oneCategory').val(data.expiration_date.category)
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
  removeList,
  onGetListFailure,
  getOne
}
