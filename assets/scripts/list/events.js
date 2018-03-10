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
    .then(onGetList)
    .catch(ui.onUpdateFailure)
}

const onShowAll = function (event) {
  api.showAll(event)
    .then(ui.onShowAllSuccess)
    .catch(ui.onShowAllFailure)
}

const onGetList = function (event) {
  event.preventDefault()
  api.getList(event)
    .then(ui.onGetListSuccess)
    .catch(ui.onGetListFailure)
}

const onDeleteList = (event) => {
  event.preventDefault()
  api.deleteList(event)
    .then(ui.onRemoveListSuccess)
    .catch(ui.onRemoveListFailure)
}

const addHandlers = () => {
  $('#create').on('submit', onCreateList)
  $('#add').on('click', onUpdate)
  $('#showAll').on('click', onShowAll)
  $('#remove').on('click', onDeleteList)
  // $('body').on('click', 'li', function () {
  //   $(this).closest('li').hide()
  // })
}

module.exports = {
  addHandlers
}
