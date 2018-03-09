'use strict'

const config = require('../config')
const store = require('../store')

const create = function (data) {
  // console.log(data)
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

// const updateGame = function (data) {
//   // console.log(data)
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     },
//     success: function (response) {
//       // console.log('AJAX response from game server', response)
//       return response
//     },
//     data: {
//       'game': {
//         'cell': {
//           'index': data.index,
//           'value': store.player
//         },
//         'over': data.over // data.over
//       }
//     }
//   })
// }
//
// const tracker = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/games/',
//     method: 'GET',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  create
  // updateGame,
  // tracker
}
