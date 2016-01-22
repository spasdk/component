/**
 * Components loading.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path    = require('path'),
    pkgInfo = require(path.join(process.cwd(), 'package.json'));


// public
module.exports = {
    load: function ( prefix ) {
        var files = [path.join('node_modules', 'spa-component', 'sass', 'main')],
            names = Object.keys(pkgInfo.dependencies).concat(Object.keys(pkgInfo.devDependencies || {}));

        names.forEach(function ( name ) {
            // get only gulp task packages
            if ( name.indexOf(prefix) !== -1 ) {
                //extend(true, files, require(name).tasks);
                files.push(path.join('node_modules', name, 'sass', 'main'));
            }
        });

        return files;
    }
};
