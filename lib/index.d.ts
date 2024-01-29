declare module 'NoEmbed' {
    export interface EmbedData {
      // Define the structure of the embedded content
      // Adjust this based on the actual structure returned by the API
      title: string;
      description: string;
      // ... other properties
    }
  
    export default class NoEmbed {
      /**
       * Fetch embedded content from supported URL.
       * @param {string} url - Any Supported URL.
       * @returns {Promise<EmbedData>} - A promise that resolves with the embedded content.
       */
      get(url: string): Promise<EmbedData>;
    }
  }  