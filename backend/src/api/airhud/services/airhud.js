'use strict';

/**
 * airhud service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::airhud.airhud');
