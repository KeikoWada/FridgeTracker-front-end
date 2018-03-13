'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

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

const onUpdate = function (event) {
  const data = getFormFields(this)
  console.log(data)
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

// const onUpdate = (event) => {
//   event.preventDefault()
//   // const data = getFormFields(this)
//   // store.data = data
//   // grab the `data-id` attribute
//   const id = event.target.dataset.id
//   console.log(id)
//
//   api.updateList(id)
//     .then(() => api.showAll(event))
//     .then($('.content').empty())
//     .then(ui.onUpdateSuccess) // after deleting a book, refetch all books
//     .catch(ui.onUpdateFailure)
// }

const onShowAll = function (event) {
  api.showAll(event)
    .then($('.content').empty())
    .then(ui.onShowAllSuccess)
    .catch(ui.onShowAllFailure)
}

const onShowbyId = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // store.data = data
  // console.log(data)
  api.getList(data)
    // .then(() => console.log(data))
    .then($('.content').empty())
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

const cancel = function () {
  $('input').val('')
}

const addHandlers = () => {
  $('#create').on('submit', onCreateList)
  $('#showAll').on('click', onShowAll)
  $('#update').on('submit', onUpdate)
  // $('body').on('click', '#remove', onDeleteList)
  $('#find_by_id').on('submit', onShowbyId)
  $('.cancel').on('click', cancel)
  $('#content').on('click', '.list-delete', onDeleteList)
  // $('#content').on('click', '.toupdate', onUpdate)
  $('.close').on('click', cancel)
}

module.exports = {
  addHandlers
}
