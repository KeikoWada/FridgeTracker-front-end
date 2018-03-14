'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('input').val('')
  $('#message').text('Signed up successfully')
  $('#message').css('color', 'green')
  $('#message').css('background-color', 'gray')
}

const signUpFailure = function () {
  $('input').val('')
  $('#message').text('Error on signing up')
  $('#message').css('color', 'red')
  $('#message').css('background-color', 'gray')
}

const signInSuccess = function (data) {
  $('input').val('')
  $('#messageTwo').text('Signed in successfully')
  $('#messageTwo').css('background-color', 'gray')
  $('#messageTwo').css('color', 'green')
  $('#list').toggle('slow')
  $('#firstPage').toggle('slow')
  $('#message').dequeue()
  $('#messageTwo').delay(3000).queue(function () {
    $('#messageTwo').text('Welcome', 'green')
  })
  store.user = data.user
}

const signInFailure = function () {
  $('input').val('')
  $('#message').text('Error in signing in')
  $('#message').css('backgorund-color', 'gray')
  $('#message').css('color', 'red')
}

const changePasswordSuccess = function () {
  $('input').val('')
  $('#changemyModal').modal('hide')
  $('#pwsuccessmyModal').modal('show')
  $('#messageTwo').dequeue()
}

const changePasswordFailure = function () {
  $('input').val('')
  $('#changemyModal').modal('hide')
  $('#failureModal').modal('show')
  $('#messageTwo').dequeue()
}

const signOutSuccess = function () {
  $('input').val('')
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'gray')
  $('#list').toggle('slow')
  $('#firstPage').toggle('slow')
  $('.content').empty()
  $('#messageTwo').dequeue()
  $('#message').delay(3000).queue(function () {
    $('#message').text('Welcome! Do you know which food you need to eat today?', 'green')
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
