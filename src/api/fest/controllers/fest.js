"use strict";

/**
 * fest controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::fest.fest", {
  async create(ctx) {
    const { id } = ctx.state.user; //ctx.state.user contains the current authenticated user
    const response = await super.create(ctx);
    const updatedResponse = await strapi.entityService.update(
      "api::fest.fest",
      response.data.id,
      { data: { user: id } }
    );
    return updatedResponse;
  },

  // async create(ctx) {
  //   const user = ctx.state.user;

  //   const fest = await super.create(ctx);

  //   const result = await strapi.entityService.update(
  //     "api::fest.fest",
  //     fest.data.id,
  //     {
  //       data: {
  //         user: user.id,
  //       },
  //     }
  //   );

  //   return result;
  // },
  // async update(ctx) {
  //   const user = ctx.state.user;

  //   ctx.query.filters = {
  //     ...(ctx.query.filters || {}),
  //     user: user.id,
  //   };

  //   return super.update(ctx);
  // },
  // async delete(ctx) {
  //   const user = ctx.state.user;

  //   ctx.query.filters = {
  //     ...(ctx.query.filters || {}),
  //     user: user.id,
  //   };

  //   return super.delete(ctx);
  // },
});
