module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      options: {
        separator: ";"
      },
      dist: {
        src: ["src/js/*.js"],
        dest: "dist/<%= pkg.name %>.js"
      }
    },
    sass: {
      // Task
      dist: {
        // Target
        options: {
          // Target options
          style: "expanded"
        },
        files: {
          // Dictionary of files
          "./dist/style.css": "src/css/style.scss" // 'destination': 'source'
        }
      }
    },
    watch: {
      css: {
        files: ["**/*.scss"],
        tasks: ["sass"]
      },
      scripts: {
        files: ["src/js/*.js"],
        tasks: ["concat"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["sass"]);
  grunt.registerTask("default", ["concat"]);
  grunt.registerTask("default", ["watch"]);
};
