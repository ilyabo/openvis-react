'use strict';

var webpack = require('webpack');
var bourbon = require('node-bourbon').includePaths;

var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};



module.exports = function (grunt) {
  // Let *load-grunt-tasks* require everything
  require('load-grunt-tasks')(grunt);

  // Read configuration from package.json
  var pkgConfig = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkgConfig,

    'webpack-dev-server': {
      options: {
        hot: true,
        port: 8008,
        webpack: {
          output: {
            filename: 'main.js',
            publicPath: '/assets/'
          },

          cache: true,
          debug: true,
          devtool: false,
          entry: [
              'webpack/hot/only-dev-server',
              './src/js/main.js'
          ],

          stats: {
            colors: true,
            reasons: true
          },

          resolve: {
            extensions: ['', '.js', '.jsx'],
            modulesDirectories: [ 'node_modules', 'src/js' ]
          },
          module: {
            loaders: [{
              test: /\.js$/,
              exclude: /node_modules|snippets/,
              loader: 'react-hot!jsx-loader?harmony!babel'
            },
            { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss/, loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&includePaths[]='+ bourbon},
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
            }, {
              test: /\.(png|jpg)$/,
              loader: 'url-loader?limit=8192'
            }]
          },

          plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
          ]
        },
        publicPath: '/assets/',
        contentBase: './<%= pkg.src %>/'
      },

      start: {
        keepAlive: true
      }
    },

    connect: {
      options: {
        port: 8008
      },

      dist: {
        options: {
          keepalive: true,
          middleware: function (connect) {
            return [
              mountFolder(connect, pkgConfig.dist)
            ];
          }
        }
      }
    },

    open: {
      options: {
        delay: 500
      },
      dev: {
        path: 'http://localhost:<%= connect.options.port %>/webpack-dev-server/'
      },
      dist: {
        path: 'http://localhost:<%= connect.options.port %>/'
      }
    },

    copy: {
      dist: {
        files: [
          // includes files within path
          {
            flatten: true,
            expand: true,
            src: ['<%= pkg.src %>/*'],
            dest: '<%= pkg.dist %>/',
            filter: 'isFile'
          },
          {
            flatten: true,
            expand: true,
            src: ['<%= pkg.src %>/images/*'],
            dest: '<%= pkg.dist %>/images/'
          }
        ]
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= pkg.dist %>'
          ]
        }]
      }
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open:dist', 'connect:dist']);
    }

    grunt.task.run([
      'open:dev',
      'webpack-dev-server'
    ]);
  });

  grunt.registerTask('test', ['karma']);

  grunt.registerTask('build', ['clean', 'copy', 'webpack']);

  grunt.registerTask('default', []);
};
