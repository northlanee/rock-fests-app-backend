'use strict';

/**
 * fest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fest.fest');
