# Official noembed client for NodeJS ✅

<b>Contributors : Gilson Gilbert ( <a href="https://github.com/gilzonme" target="_blank">GH</a> | <a href="https://www.linkedin.com/in/gilsongilbert/" target="_blank">LI</a> )</b>

This client currently supports all the <a href="https://noembed.com/#supported-sites" target="_blank">https://noembed.com/#supported-sites</a>

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

Repositry link : https://github.com/gilzonme/noembed

### Discord

Join and discuss with us on discord : https://discord.gg/zSHcgHBjKp