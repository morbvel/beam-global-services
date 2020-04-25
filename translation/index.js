const translateText = async (text) => {
  const {Translate} = require('@google-cloud/translate')
  const translate = new Translate()

  const target = 'en'

  const translation = await translate.translate(text, target)

  await new Promise(resolve => setTimeout(resolve, 100))
  return {
    "original": text,
    "translation": translation[0]
  }

}

module.exports = {
  translateText: async function(text){
    return await translateText(text)
  }
}
