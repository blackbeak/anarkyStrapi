'use strict';

/**
 * white-paper service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::white-paper.white-paper');
