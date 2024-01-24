# Official noembed client for NodeJS ✅

<img src="https://badgen.net/
github/license/gilzonme/noembed">
<img src="https://badgen.net/
github/stars/gilzonme/noembed
">

This client currently supports all the https://noembed.com/#supported-sites

## Usage : To Be Updated

~~~
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
~~~

## Community & Contribution

### Github

Repositry link : https://github.com/gilzonme/noembed

### Discord

Join and discuss with us on discord : https://discord.gg/zSHcgHBjKp