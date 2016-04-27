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
    },
    stylesheets: {
      defaultExtension: 'scss',
      joinTo: {
        'css/app.css':           /^app\/app\.scss$/
      }
    }
  },

  plugins: {
    sass: {
      mode: 'native'
    },
    uglify: {
      mangle: false,
      compress: {
        global_defs: {
          DEBUG: false
        }
      }
    },
    cleancss: {
      keepSpecialComments: 0,
      removeEmpty: true
    },
    babel: {
      presets: ["es2015"],
      pattern: /\.(es6|js)$/
    }
  },

  sourceMaps: false,
  optimize:   false

};
