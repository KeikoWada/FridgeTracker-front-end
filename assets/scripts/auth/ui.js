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
  $('#signInMessage').text('Signed in successfully')
  $('#signInMessage').css('background-color', 'green')
  $('.secondPage').toggle('slow')
  $('#first-page').toggle('slow')
  $('#message').dequeue()
  store.user = data.user
}

const signInFailure = function () {
  $('input').val('')
  $('#message').text('Error in signing in')
  $('#message').css('color', 'red')
}

const changePasswordSuccess = function () {
  $('input').val('')
  $('#messageTwo').text('Change password successfully')
  $('#messageTwo').css('background-color', 'green')
}

const changePasswordFailure = function () {
  $('input').val('')
  $('#messageTwo').text('Error on changing password')
  $('#messageTwo').css('background-color', 'red')
}

const signOutSuccess = function () {
  $('input').val('')
  $('#message').text('Signed out successfully')
  $('#message').css('color', 'green')
  $('.gamePage').toggle('slow')
  $('#first-page').toggle('slow')
  $('#message').delay(3000).queue(function () {
    $('#message').text('Welcome! Are you ready to play game?', 'green')
  })
}

const signOutFailure = function () {
  $('input').val('')
  $('#messageTwo').text('Error on signing out')
  $('#messageTwo').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
