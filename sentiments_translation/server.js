const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const qs = require('querystring')

const axios = require('axios')

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

router.get('/', async (req, res) => {
  const respond = await axios_get()
  res.send(`Sentiments+Translation module -> ${respond}`)
})


router.route('/create_sentiment_translate').post(async function(req, res) {
  const requestBody = qs.stringify({
    text: req.body.text
  })

  const opt = req.body.opt

  console.log(req.body.text)
  console.log(req.body.opt)

  const sentiments = await axios_post('https://text-sentiment-dot-qa-backend-2017.appspot.com/post_sentiments_json', requestBody)
  console.log(sentiments)
  console.log('-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.')

  const translation = await axios_post('https://text-traslation-dot-qa-backend-2017.appspot.com/post_translate_text_json', requestBody)
  console.log(translation)

  const result = {
    "text": sentiments.text,
    "translation": translation.translation,
    "score": sentiments.score,
    "magnitude": sentiments.magnitude
  }

  await new Promise(resolve => setTimeout(resolve, 100))
  res.send(result[opt])
})

/* **********************
AXIOS METHODS AND RELATED
********************** */
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
const axios_get = async () => {
  return await axios.get('https://text-traslation-dot-qa-backend-2017.appspot.com/')
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
}

const axios_post = async (url, requestBody) => {
  return await axios.post(url, requestBody, config)
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    console.log(`Error in posting ${requestBody} to ${url} -> ${err}`)
  })
}


app.use('/', router)

app.listen(port)
console.log('Magic happens on port ' + port)
