const getSentiments = async (text) => {
  const language = require('@google-cloud/language')
  const client = new language.LanguageServiceClient()

  const document = {
    content: text,
    type: 'PLAIN_TEXT'
  }

  const sentiment = await client
    .analyzeSentiment({document: document})
    .then(results => {
      const sentiment = results[0].documentSentiment

      return {
        "score": results[0].documentSentiment.score.toFixed(2),
        "magnitude": results[0].documentSentiment.magnitude.toFixed(2),
        "text": text
      }
    })
    .catch(err => {
      console.error('ERROR:', err)
      return -1
    })

  await new Promise(resolve => setTimeout(resolve, 100))
  return sentiment
}

module.exports = {
  getSentiments: async function(text){
    return await getSentiments(text)
  }
}
