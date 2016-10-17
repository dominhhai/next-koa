#!/usr/bin/env node

const workshopper = require('workshopper-adventure')({
  appDir: __dirname,
  languages: ['en', 'es', 'fr', 'ja', 'zh-cn', 'zh-tw', 'pt-br', 'ru', 'uk', 'vi', 'ko', 'nb-no', 'it'],
  header: require('workshopper-adventure/default/header'),
  footer: require('workshopper-adventure/default/footer')
})

workshopper.addAll([
  'HELLO KOA',
  'ROUTING',
  'REQUEST BODY',
  'RESPONSE BODY',
  'CONTENT HEADRES',
  'MIDDLEWARE',
  'ERROR HANDLING',
  'COOKIE',
  'SESSION',
  'TEMPLATING',
  'AUTHENTICATION'
])

workshopper.execute(process.argv.slice(2))