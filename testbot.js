// This is a test script for , 
const {TwitterApi} = require("twitter-api-v2");


//Replace these with your own Twitter API credentials
const client = new TwitterApi({
    appKey: '********',
    appSecret: '********',
    accessToken: '********',
    accessSecret: '********'
});



// Function to post a tweet

async function postTweet() {
    try {
      const now = new Date().toISOString();
      const response = await client.v2.tweet(`#EngSlogans The office of the Engineer-General will ensure that infrastructure departments, SOEs, and local governments have competent, experienced engineering practitioners #engineers in senior positions, free from political interference. ${now}`);
      console.log('Tweet posted successfully:', response.data.text);
    } catch (err) {
      console.error('Full error:', JSON.stringify(err, null, 2));
    }
  }
  
  postTweet();