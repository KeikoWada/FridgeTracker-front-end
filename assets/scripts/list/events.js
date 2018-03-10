'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
// const store = require('../store')

const onCreateList = function (event) {
  event.preventDefault()
  console.log(event)
  console.log(event.target)
  const data = getFormFields(event.target)
  console.log(data)

  api.create(data)
    .then(onShowAll)
    .catch(ui.onCreateFailure)
}

// const onCreateNewGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//
//   api.create(data)
//     .then(ui.onCreateNewSuccess)
// }
//
const onUpdate = function (event) {
  event.preventDefault()
  const data = {
    date: store.date,
    item_name: store.item_name,
    category: store.category
  }

  api.updateList(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onShowAll = function (event) {
  api.showAll(event)
    .then(ui.onShowAllSuccess)
}

// const onTrackTwo = function (event) {
//   event.preventDefault()
//   api.tracker(event)
//     .then(ui.onTrackSuccessTwo)
// }

module.exports = {
  onCreateList,
  onUpdate,
  onShowAll
  // onCreateNewGame,
  // onTrackTwo
}
