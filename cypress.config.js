const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Enable video recording (default)
  video: true,

  // Enable screenshot capture on failure
  screenshotOnRunFailure: true,

  // Set video compression level
  videoCompression: 32,

  // Do not upload video on passing tests
  videoUploadOnPasses: true,

  // Folder to store screenshots
  screenshotsFolder: "cypress/screenshots",

  screenshotsOptions: {
    capture: "fullPage", // Capture full-page screenshots on failure
  },

  setupNodeEvents(on, config) {
    // implement node event listeners here
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
