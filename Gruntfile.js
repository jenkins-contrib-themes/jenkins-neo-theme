module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                src: ["dist/"]
            }
        },
        less: {
            dist: {
                files: {
                    "dist/neo-light.css": "less/style.less",
                    "dist/neo-dark.css": "less/dark.less",
                }
            }
        },
        imageEmbed: {
            light: {
                src: ["dist/neo-light.css"],
                dest: "dist/neo-light.css",
                options: {
                    deleteAfterEncoding: false
                }
            },
            dark: {
                src: ["dist/neo-dark.css"],
                dest: "dist/neo-dark.css",
                options: {
                    deleteAfterEncoding: false
                }
            }
        },
        cssmin: {
            minify: {
                files: {
                    'dist/neo-light.css': ['dist/neo-light.css'],
                    'dist/neo-dark.css': ['dist/neo-dark.css']
                }
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    svgoPlugins: [{removeViewBox: true}]
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.svg'],
                    dest: 'images/'
                }]
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'less', 'imageEmbed', 'cssmin']);
};