'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const listEvents = require('./list/events')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  $('#create').on('submit', listEvents.onCreateList)
  $('#create').on('submit', function () {
    console.log('button works')
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
