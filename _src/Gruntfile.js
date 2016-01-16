module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

 
      uglify: {
        plugins: {
           src: ['js/plugins.js'], //input
          dest: '../js/plugins.min.js' //output
        },
        scripts: {
           src: ['js/scripts.js'], //input
          dest: '../js/scripts.min.js' //output
        }
    },

 
    less: {
      development: {
        options: {
          paths: ["less/"],
        compress: true,
        cleancss: true,
        },
        files: {
          "../css/styles.css": "less/styles.less"
        }
      },
    },
    

   
    
/*    
'ftp-deploy': {
  build: {
    auth: {
      host: '',
      port: 990,
      authKey: 'key1'
    },
    src: '',
    dest: '',
    exclusions: [".git*","node_modules",".DS_Store","_build"],
    progress: true
  }
}
*/


  });
    // END GRUNT
 

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
 //grunt.loadNpmTasks('grunt-ftp-deploy');


  // Default task(s).
 // grunt.registerTask('default', ['uglify','less', 'ftp-deploy']);
    grunt.registerTask('default', ['uglify','less']);

 
};