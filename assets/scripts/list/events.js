'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
// const list = require('../templates/list.handlebars')

const onCreateList = function (event) {
  event.preventDefault()
  console.log(event)
  console.log(event.target)
  const data = getFormFields(event.target)
  console.log('1')
  store.data = data
  console.log(data.expiration_dates)

  api.create(data)
    .then(onShowAll)
    .catch(ui.onCreateFailure)
}

const onGetOne = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.getList(data)
    .then(ui.onGetOneSuccess)
    .catch(ui.onGetOneFailure)
}

const onUpdate = function (event) {
  const data = getFormFields(this)
  console.log(this)
  event.preventDefault()
  store.data = data
  // const data = {
  //   date: store.date,
  //   item_name: store.item_name,
  //   category: store.category
  // }

  api.updateList(data)
    .then(() => api.showAll(event))
    .then($('.content').empty())
    .then(ui.onUpdateSuccess)
    .catch(ui.failure)
}

const onShowAll = function (event) {
  api.showAll(event)
    .then($('.content').empty())
    .then(ui.onShowAllSuccess)
    .catch(ui.onShowAllFailure)
}

// const onGetList = function (event) {
//   event.preventDefault()
//   api.getList(event)
//     .then(ui.onGetListSuccess)
//     .catch(ui.onGetListFailure)
// }

// const onDeleteList = (event) => {
//   store.data = this.data
//   console.log(store.data)
//   // store.id = list.expiration_date.id
//   event.preventDefault()
//   api.deleteList(this.id)
//     .then(ui.onRemoveListSuccess)
//     .catch(ui.onRemoveListFailure)
// }

const onDeleteList = (event) => {
  event.preventDefault()

  // grab the `data-id` attribute
  const id = event.target.dataset.id

  api.deleteList(id)
    .then(() => api.showAll(event))
    .then($('.content').empty())
    .then(ui.removeList) // after deleting a book, refetch all books
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#create').on('submit', onCreateList)
  $('#get').on('click', onGetOne)
  $('#showAll').on('click', onShowAll)
  $('#update').on('submit', onUpdate)
  $('body').on('click', '#remove', onDeleteList)
}

module.exports = {
  addHandlers
}
