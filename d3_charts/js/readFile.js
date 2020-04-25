const readFile = async (file) => {
  const fs = require('fs')

  const content = await fs.readFile(file, 'utf8', function(err, contents) {
      return contents
  })

  console.log(content);
  console.log(`------------------------------------------------------------`);
}

module.exports = {
  readFile: function(file) {
    return readFile(file)
  }
}
