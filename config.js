module.exports = {

  conventions: {
    assets:   /^(app)(\\|\/)(assets)/,
    ignored:  [/\/_/, /\.(spec|scenario)\.(js$)/]
  },

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
      joinTo: {
        'css/app.css':  /^(app)/
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
    },
    eslint: {
      pattern: /^(app)\/(?!ionic).*\.js?$/,
      warnOnly: true
    },
    htmlPages: {
      htmlMin: {
        removeRedundantAttributes: false
      }
    }
  }
};
