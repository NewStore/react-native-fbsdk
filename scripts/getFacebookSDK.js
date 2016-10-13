const Download = require('download')
const downloadStatus = require('download-status')
const pathExists = require('path-exists')

const iOS = {
  dl: 'https://origincache.facebook.com/developers/resources/?id=FacebookSDKs-iOS-4.16.0.zip',
  dist: './iOS/Frameworks/FacebookSDK',
}

pathExists(iOS.dist)
  .then(exists => {
    if (exists) {
      return console.log('FacebookSDK for iOS already downloaded, skipping ...')
    }
    console.log(`Downloading Facebook SDK for iOS ...`)
    return new Download({ extract: true })
      .get(iOS.dl)
      .dest(iOS.dist)
      .use(downloadStatus())
      .run();
  })
