const axios = require('axios');

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

    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching embed:', error.message);
      throw error;
    }
  }
  /**
 * Fetch providers.
 */
  async providers() {
    const apiUrl = `https://noembed.com/providers`;

    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching embed:', error.message);
      throw error;
    }
  }
}

// Export an instance of the class
module.exports = new NoEmbed();