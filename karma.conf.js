process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // Opciones de configuración para Jasmine
      },
      clearContext: false // Deja visible la salida del Jasmine Spec Runner en el navegador
    },
    jasmineHtmlReporter: {
      suppressAll: true // Elimina los rastros duplicados
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/pruebas'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessCustom'], // Usa una configuración personalizada
    customLaunchers: {
      ChromeHeadlessCustom: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-setuid-sandbox'] // Agrega estos flags
      }
    },
    singleRun: false,
    restartOnFileChange: true
  });
};