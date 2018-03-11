'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('input').val('')
  $('#message').text('Signed up successfully')
  $('#message').css('color', 'green')
}

const signUpFailure = function () {
  $('input').val('')
  $('#message').text('Error on signing up')
  $('#message').css('color', 'red')
}

const signInSuccess = function (data) {
  $('input').val('')
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  $('#list').toggle('slow')
  $('#firstPage').toggle('slow')
  // $('#message').dequeue()
  store.user = data.user
}

const signInFailure = function () {
  $('input').val('')
  $('#message').text('Error in signing in')
  $('#message').css('color', 'red')
}

const changePasswordSuccess = function () {
  $('input').val('')
  $('#changemyModal').modal('hide')
  $('#pwsuccessmyModal').modal('show')
}

const changePasswordFailure = function () {
  $('input').val('')
  $('.modal-header').text('Old password is invalid, please try again')
  $('.modal-header').css('color', 'red')
}

const signOutSuccess = function () {
  $('input').val('')
  $('#message').text('Signed out successfully')
  $('#message').css('color', 'green')
  $('#list').toggle('slow')
  $('#firstPage').toggle('slow')
  $('.content').empty()
  $('#message').delay(3000).queue(function () {
    $('#message').text('Welcome! Are you ready to play game?', 'green')
  })
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
