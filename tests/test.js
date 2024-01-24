// test.js

const noEmbed = require('noembed');

const youtubeUrl = 'https://www.youtube.com/watch?v=ePM-6fWk3c0';

noEmbed.youtube(youtubeUrl)
    .then(embeddedContent => {
        console.log('Embedded Content:');
        console.log(embeddedContent);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });