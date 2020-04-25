const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Express parameters and methods
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}))
app.use(bodyParser.json())
app.use(bodyParser.text({
  defaultCharset: 'utf-8'
}))

const port = process.env.PORT || 8080
const router = express.Router()

router.use(function(req, res, next) {
  console.log(``)
  console.log(`Received request.`)
  next()
})

router.get('/', function(req, res) {
  console.log(`Simple API get method`)
  res.send(`Simple API get method`)
})

router.route('/post_sentiments_json').post(async function(req, res) {
  console.log(req.body)
  const analysis = await require(require('path').resolve(__dirname) + '/index').getSentiments(req.body.text)

  console.log(`Prepared to send answer to requester`)
  console.log(`Answer: ${JSON.stringify(analysis)}`)
  console.log('------------------------------------------------')
  res.json(analysis)
})

app.use('/', router)

app.listen(port)
console.log(`Sentiment API listening on port ${port}`)
