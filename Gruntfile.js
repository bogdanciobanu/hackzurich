module.exports = function(grunt) {

grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  connect: {
    server: {
      options: {
        port: 3000,
        base: 'app'
      }
    }
  },
  concat: {
    css: {
      src: ['app/css/*.css'],
      dest: 'dist/css/dist.css'
    },
    js: {
      src: ['app/js/lib/**/*.js', 'app/js/helpers/*.js',
      'app/js/models/*.js', 'app/js/collections/*.js',
      'app/js/views/*.js', 'app/js/controllers/*.js',
      'app/js/*.js', '!app/js/dist.js'],
      dest: 'dist/js/dist.con.js'
    },
    local: {
      src: ['app/js/lib/**/*.js', 'app/js/helpers/*.js',
      'app/js/models/*.js', 'app/js/collections/*.js',
      'app/js/views/*.js', 'app/js/controllers/*.js',
      'app/js/*.js', '!app/js/dist.js'],
      dest: 'app/js/dist.js'
    }
  },
  uglify: {
    dist: {
      files: {
        'app/js/dist.js': ['dist/js/dist.con.js']
      }
    }
  },
  imagemin: {
    options: {
      cache: false
    },
    dist: {
      files: [{
        expand: true,
        cwd: 'app/_images',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'app/images'
      }]
    }
  },
  sass: {
      dist: {
          options: {
              includePaths: ['app/scss/inc', require('node-bourbon').includePaths],
              outputStyle: 'compressed'
          },
          files: {
              'app/css/main.css': 'app/scss/main.scss'
          }
      }
  },
  watch: {
    options: {
      // livereload: true
    },
    css: {
      files: 'app/**/*.scss',
      tasks: ['sass']
    },
    templates: {
      files: 'app/templates/*.html',
      tasks: ['jst']
    },
    js: {
      files: ['app/**/*.js', '!app/js/dist.js'],
      tasks: ['concat:local']
    }
  },
  gitcommit: {
    task: {
      options: {
        message: ''
      },
      files: {
          src: ['*.*', 'app/**/*', 'dist/**/*']
      }
    }
  },
  gitpush: {
    task: {
      options: {
        remote: 'origin'
      }
    }
  },
  prompt: {
    gitcommit: {
      options: {
        questions: [
          {
            config: 'gitcommit.task.options.message',
            type: 'input',
            message: 'Commit Message'
          }
        ]
      }
    }
  },
  jst: {
    compile: {
      options: {
        processName: function(filepath) {
          var file = filepath.split('/');
          var tplname = file[file.length - 1].split('.');
          return tplname[0];
        }
      },
      files: {
        'app/js/templates.js': ['app/templates/**/*.html']
      }
    }
  },
  'ftp-deploy': {
  build: {
    auth: {
      host: 'ftp.solanki.ch',
      port: 21,
      authKey: 'ba'
    },
    src: 'app',
    dest: '.',
    exclusions: ['**/.DS_Store', '**/Thumbs.db', 'video']
  }
}
  });

  // Rendered obsolete by require statement below
  // grunt.loadNpmTasks('grunt-sass');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-imagemin');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  // Load all Grunt Tasks
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['connect', 'watch']);
  // grunt.registerTask('default', ['watch']);
  // grunt.registerTask('build', ['sass', 'jst', 'concat:js', 'uglify', 'imagemin', 'prompt', 'gitcommit', 'gitpush', 'ftp-deploy']);
  grunt.registerTask('build', ['concat:js', 'uglify', 'imagemin', 'prompt', 'gitcommit', 'gitpush']);

  // grunt.registerTask('git', ['prompt', 'gitcommit', 'gitpush']);

};