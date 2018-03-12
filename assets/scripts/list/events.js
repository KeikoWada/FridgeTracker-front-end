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
    .then(() => api.showAll(event))
    .then($('.content').empty())
    .then(ui.onCreateSuccess)
    .catch(ui.onCreatefailure)
}

const onGetOne = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.data = data

  api.getList(data)
    .then($('.content').empty())
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
    .catch(ui.onUpdateFailure)
}

const onShowAll = function (event) {
  api.showAll(event)
    .then($('.content').empty())
    .then(ui.onShowAllSuccess)
    .catch(ui.onShowAllFailure)
}

const onShowbyId = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.data = data
  console.log(data)

  api.getList(data)
    .then(ui.onGetOneSuccess)
    .catch(ui.onGetListFailure)
}

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
  $('#find_by_id').on('submit', onShowbyId)
}

module.exports = {
  addHandlers
}
