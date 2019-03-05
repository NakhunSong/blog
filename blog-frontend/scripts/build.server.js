'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
process.env.APP_NEW = 'server'; // 서버 환경임을 명시


process.on('unhandledRejection', err => {
    throw err;
});

require('../config/env');

const chalk = require('chalk');
const fs = require('fs-extra');
const webpack = require('webpack');
// const configFactory = require('../config/webpack.config');
const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');

// Generate configuration
// const config = configFactory('production');
const config = require('../config/webpack.config.server');

if(!checkRequiredFiles([paths.appHtml, paths.appIndex])) {
    process.exit(1);
}

// Create the production build and print the deployment instructions.
function build() {
    console.log('Creating server build...');
  
    let compiler = webpack(config);
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            let messages;
            if (err) {
                if (!err.message) {
                    return reject(err);
                }
                messages = formatWebpackMessages({
                    errors: [err.message],
                    warnings: [],
                });
            } else {
                messages = formatWebpackMessages(
                    stats.toJson({ all: false, warnings: true, errors: true })
                );
            }
            if (messages.errors.length) {
            // Only keep the first error. Others are often indicative
            // of the same problem, but confuse the reader with noise.
            if (messages.errors.length > 1) {
                messages.errors.length = 1;
            }
            return reject(new Error(messages.errors.join('\n\n')));
        }
        if (
            process.env.CI &&
                (typeof process.env.CI !== 'string' ||
                process.env.CI.toLowerCase() !== 'false') &&
                messages.warnings.length
        ) {
            console.log(
                chalk.yellow(
                    '\nTreating warnings as errors because process.env.CI = true.\n' +
                    'Most CI servers set it automatically.\n'
                )
            );
            return reject(new Error(messages.warnings.join('\n\n')));
        }
  
        const resolveArgs = {
            stats,
            // previousFileSizes,
            warnings: messages.warnings,
        };
  
        return resolve(resolveArgs);
      });
    });
  }

  build(); // build 호출