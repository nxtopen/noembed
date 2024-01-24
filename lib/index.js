const axios = require('axios');

/**
 * A class for interacting with the NoEmbed API.
 */
class NoEmbed {
  /**
   * Fetch embedded content for a YouTube video URL.
   * @param {string} url - The YouTube video URL.
   * @returns {Promise<Object>} - A promise that resolves with the embedded content.
   */
  async youtube(url) {
    const apiUrl = `https://noembed.com/embed?url=${encodeURIComponent(url)}`;

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