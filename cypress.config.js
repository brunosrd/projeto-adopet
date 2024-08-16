const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "6e3jzv",
  e2e: {
    setupNodeEvents(on, config) {
       // Adicione aqui qualquer configuração de eventos do Node, se necessário
    },
    baseUrl: 'https://adopet-frontend-cypress.vercel.app/',
  },
  video: true,
  reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss" 
    },
});
