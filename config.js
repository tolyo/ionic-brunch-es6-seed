module.exports = {

  modules: {
    definition:   'commonjs',
    wrapper:      'commonjs'
  },

  paths: {
    'public':   'www'
  },

  files: {
    javascripts: {
      joinTo: {
        'js/app.js':      [/^(?!app)/,/^app/]
      }
    }
  }

};
