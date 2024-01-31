const https = require('https');

/**
 * A class for interacting with the NoEmbed API.
 */
class NoEmbed {
  /**
   * Fetch embedded content from supported URL.
   * @param {string} url - Any Supported URL.
   * @returns {Promise<Object>} - A promise that resolves with the embedded content.
   */
  async get(url) {
    const apiUrl = `https://noembed.com/embed?url=${encodeURIComponent(url)}`;

    return new Promise((resolve, reject) => {
      const req = https.get(apiUrl, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            const parsedData = JSON.parse(data);
            resolve(parsedData);
          } catch (error) {
            reject(error);
          }
        });
      });

      req.on('error', (error) => {
        console.error('Error fetching embed:', error.message);
        reject(error);
      });

      req.end();
    });
  }

  /**
   * Fetch providers.
   */
  async providers() {
    const apiUrl = 'https://noembed.com/providers';

    return new Promise((resolve, reject) => {
      const req = https.get(apiUrl, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            const parsedData = JSON.parse(data);
            resolve(parsedData);
          } catch (error) {
            reject(error);
          }
        });
      });

      req.on('error', (error) => {
        console.error('Error fetching providers:', error.message);
        reject(error);
      });

      req.end();
    });
  }

  /**
   * Get HTML Only
   */
  async html(url) {
    const apiUrl = `https://noembed.com/embed?url=${encodeURIComponent(url)}`;

    return new Promise((resolve, reject) => {
      const req = https.get(apiUrl, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            const parsedData = JSON.parse(data);
            resolve(parsedData.html);
          } catch (error) {
            reject(error);
          }
        });
      });

      req.on('error', (error) => {
        console.error('Error fetching embed HTML:', error.message);
        reject(error);
      });

      req.end();
    });
  }
}

// Export an instance of the class
module.exports = new NoEmbed();