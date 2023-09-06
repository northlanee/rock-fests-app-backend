"use strict";

/**
 * fest router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter('api::fest.fest');
module.exports = createCoreRouter("api::fest.fest", {
  config: {
    update: {
      policies: ["is-owner"],
    },
    delete: {
      policies: ["is-owner"],
    },
  },
});
