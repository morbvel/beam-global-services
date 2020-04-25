const downloadImage = () => {
  const domtoimage = require('dom-to-image')

  const button = document.getElementById('printDashboard')
  button.addEventListener('click', function(){
    domtoimage.toJpeg(document.getElementById('body'), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
      });
  })
}

module.exports = {
  downloadImage: function(){
    return downloadImage()
  }
}
