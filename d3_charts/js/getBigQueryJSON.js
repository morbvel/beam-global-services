const getBigQueryJSON = async (destination) => {
  const {Storage} = require('@google-cloud/storage')
  const storage = new Storage()

  const bucketName = 'dev-bigdata-storage-user-morbananos'
  const srcFilename = 'TablesBQ.json'

  const options = {
    destination: destination
  };

  // Downloads the file
  await storage
    .bucket(bucketName)
    .file(srcFilename)
    .download(options)

  console.log(
    `gs://${bucketName}/${srcFilename} downloaded to ${destination}.`
  );
}

module.exports = {
  getBigQueryJSON: function(destination) {
    return getBigQueryJSON(destination)
  }
}
