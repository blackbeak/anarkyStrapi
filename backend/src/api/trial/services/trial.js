'use strict';

/**
 * trial service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trial.trial');
