'use strict';

const common = '-r features ';

module.exports = {
  default: common,
  staging: common + '-r stages/staging',
};
