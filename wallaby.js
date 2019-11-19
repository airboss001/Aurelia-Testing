module.exports = function (wallaby)
{
    var path = require('path');

    process.env.NODE_PATH += path.delimiter + wallaby.projectCacheDir + path.delimiter + 'src';

    return {

        debug: false,

        files: [
            { pattern: 'node_modules/chai/chai.js', instrument: false, load: true },
            { pattern: 'node_modules/sinon/pkg/sinon.js', instrument: false, load: true },
            { pattern: 'src/**/*.ts' },
        ],

        tests: ['test/unit/**/*.spec.ts'],

        env: {
            type: 'node',
            runner: 'node'
        },

        testFramework: 'mocha',

        compilers: {
            '**/*.ts': wallaby.compilers.typeScript({
                module: 'commonjs',
                baseUrl: './src'
            })
        },

        //executed in test framework context
        setup: function (wallaby) 
        {
            //chai.use(require('chai-datetime'));
            //var should = chai.should();
        }
    };
};