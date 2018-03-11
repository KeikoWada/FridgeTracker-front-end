'use strict'

const config = require('../config')
const store = require('../store')
// const listUi = require('./ui')

const create = function (data) {
  console.log(data)
  console.log('api')
  return $.ajax({
    url: config.apiOrigin + '/expiration_dates',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const getOne = function (data) {
//   console.log('api')
//   return $.ajax({
//     url: config.apiOrigin + '/expiration_dates' + store.id,
//     method: 'POST',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

const updateList = function (data) {
  // console.log(data)
  console.log(data.list.id)
  return $.ajax({
    url: config.apiOrigin + '/expiration_dates/' + data.list.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    success: function (response) {
      // console.log('AJAX response from game server', response)
      return response
    },
    data
    // data: {
    //   'expiration_date': {
    //     'date': date,
    //     'item_name': item_name,
    //     'category': category
  })
}

const showAll = function () {
  return $.ajax({
    url: config.apiOrigin + '/expiration_dates/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getList = function () {
  console.log(store.id)
  return $.ajax({
    url: config.apiOrigin + '/expiration_dates/' + store.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteList = function () {
  console.log(store.data.expiration_dates)
  return $.ajax({
    url: config.apiOrigin + '/expiration_dates/' + store.data.expiration_dates,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  // getOne,
  updateList,
  showAll,
  getList,
  deleteList
}
