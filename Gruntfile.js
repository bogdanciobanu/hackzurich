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
      src: ['hackzurich/app/css/*.css'],
      dest: 'dist/css/dist.css'
    },
    js: {
      src: ['hackzurich/app/js/lib/**/*.js', 'hackzurich/app/js/helpers/*.js',
      'hackzurich/app/js/models/*.js', 'hackzurich/app/js/collections/*.js',
      'hackzurich/app/js/views/*.js', 'hackzurich/app/js/controllers/*.js',
      'hackzurich/app/js/*.js', '!hackzurich/app/js/dist.js'],
      dest: 'dist/js/dist.con.js'
    },
    local: {
      src: ['hackzurich/app/js/lib/**/*.js', 'hackzurich/app/js/helpers/*.js',
      'hackzurich/app/js/models/*.js', 'hackzurich/app/js/collections/*.js',
      'hackzurich/app/js/views/*.js', 'hackzurich/app/js/controllers/*.js',
      'hackzurich/app/js/*.js', '!hackzurich/app/js/dist.js'],
      dest: 'hackzurich/app/js/dist.js'
    }
  },
  uglify: {
    dist: {
      files: {
        'hackzurich/app/js/dist.js': ['dist/js/dist.con.js']
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
        cwd: 'hackzurich/app/_images',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'hackzurich/app/images'
      }]
    }
  },
  sass: {
      dist: {
          options: {
              includePaths: ['hackzurich/app/scss/inc', require('node-bourbon').includePaths],
              outputStyle: 'compressed'
          },
          files: {
              'hackzurich/app/css/main.css': 'hackzurich/app/scss/main.scss'
          }
      }
  },
  watch: {
    options: {
      // livereload: true
    },
    css: {
      files: 'hackzurich/app/**/*.scss',
      tasks: ['sass']
    },
    templates: {
      files: 'hackzurich/app/templates/*.html',
      tasks: ['jst']
    },
    js: {
      files: ['hackzurich/app/**/*.js', '!hackzurich/app/js/dist.js'],
      tasks: ['concat:local']
    }
  },
  gitcommit: {
    task: {
      options: {
        message: ''
      },
      files: {
          src: ['*.*', 'hackzurich/app/**/*', 'dist/**/*']
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
        'hackzurich/app/js/templates.js': ['hackzurich/app/templates/**/*.html']
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