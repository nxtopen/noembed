// test.js

const noEmbed = require('noembed');

const youtubeUrl = 'https://www.youtube.com/watch?v=ePM-6fWk3c0';

noEmbed.get(youtubeUrl)
    .then(embeddedContent => {
        console.log('Embedded Content:');
        console.log(embeddedContent);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

noEmbed.providers()
    .then(embeddedContent => {
        console.log('Providers:');
        console.log(embeddedContent);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

noEmbed.html(youtubeUrl)
    .then(htmlContent => {
        console.log('HTML:');
        console.log(htmlContent);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });