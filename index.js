'use strict';

var argv = require('minimist')(process.argv.slice(2));
var merge = require('lodash.merge');
var path = require('path');
var env = argv.env || process.env.NODE_ENV || 'local';

// figure out where the config files are at
var cfgDir = process.env.NODE_CONFIG_DIR;
if (!cfgDir) {
  cfgDir = path.resolve(process.cwd, 'config/') + '/';
} else {
  cfgDir = path.resolve(cfgDir) + '/';
}

var defaultConfigPath = path.join(cfgDir, 'default');
var envConfigPath = path.join(cfgDir, env);

var defaultConfig, envConfig;

try {
  defaultConfig = require(defaultConfigPath);
} catch (err) {
  defaultConfig = {}; // no default specified
}

try {
  envConfig = require(envConfigPath);
} catch (err) {
  envConfig = {}; // no env specified
}

module.exports = merge(defaultConfig, envConfig);