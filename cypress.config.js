const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
       // Adicione aqui qualquer configuração de eventos do Node, se necessário
    },
    baseUrl: 'https://adopet-frontend-cypress.vercel.app/',
  },
  // video: true,
});
