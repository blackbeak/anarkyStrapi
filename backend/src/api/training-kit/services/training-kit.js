'use strict';

/**
 * training-kit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::training-kit.training-kit');
