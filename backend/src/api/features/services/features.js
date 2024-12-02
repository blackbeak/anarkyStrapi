'use strict';

/**
 * features service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::features.features');
