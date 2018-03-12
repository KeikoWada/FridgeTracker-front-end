'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
// const signInOut = require('./signinOut')

const onSignUp = function (event) {
  console.log(event)
  event.preventDefault()

  const data = getFormFields(this)
  console.log(data)
  console.log(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)

    // api.showAll(event)
    //   .then(ui.onShowAllSuccess)
    //   .catch(ui.onShowAllFailure))
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#changeModal').on('submit', onChangePassword)
  $('#signout').on('click', onSignOut)
}

module.exports = {
  addHandlers,
  onSignIn
}
