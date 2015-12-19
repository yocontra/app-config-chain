'use strict';

var should = require('should');
var path = require('path');

function clearModule(){
  process.env.NODE_ENV = '';
  var resolved = require.resolve('../');
  delete require.cache[resolved];
}

describe('app-config-chain', function() {
  beforeEach(clearModule);
  it('should return empty when no config resolved', function(done) {
    process.env.NODE_CONFIG_DIR = path.join(__dirname, 'doesnt-exist');
    var config = require('../');
    should.exist(config);
    config.should.eql({});
    done();
  });
  it('should work with provided config dir', function(done) {
    process.env.NODE_CONFIG_DIR = path.join(__dirname, 'config');
    var config = require('../');
    should.exist(config);
    done();
  });
  it('should load default when no env provided', function(done) {
    process.env.NODE_CONFIG_DIR = path.join(__dirname, 'config');
    var config = require('../');
    should.exist(config);
    config.should.eql({
      a: 3,
      b: 2,
      c: 1
    });
    done();
  });
  it('should load env when provided', function(done) {
    process.env.NODE_CONFIG_DIR = path.join(__dirname, 'config');
    process.env.NODE_ENV = 'production';
    var config = require('../');
    should.exist(config);
    config.should.eql({
      a: 1,
      b: 2,
      c: 3
    });
    done();
  });
});
