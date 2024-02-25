# Official noembed client for NodeJS

#### This client currently supports all the <a href="https://noembed.com/#supported-sites" target="_blank">https://noembed.com/#supported-sites</a>
##### A development is happening and updates will be done to the plugin to work as a standalone without using noembed.com

## Usage

~~~
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
~~~

## Community & Contribution

### Github

Repository link : https://github.com/gilzonme/noembed

### Discord

Join and discuss with us on discord : https://discord.gg/zSHcgHBjKp
