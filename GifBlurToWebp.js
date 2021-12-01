const sharp = require("sharp");

var myArgs = process.argv.slice(2);

async function rotateImage() {
  try {
	console.log(`Converting image ${myArgs[0]}`);
    await sharp(myArgs[0], { animated: true ,limitInputPixels: false})
      .blur(5)
		.toFile('blurredImage.webp');
  } catch (error) {
    console.log(error);
  }
}

rotateImage();