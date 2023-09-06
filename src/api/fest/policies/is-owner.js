module.exports = async (policyCtx, config, { strapi }) => {
  // get user id/record to update/delete.
  const { id: userId } = policyCtx.state.user;

  const { id: eventId } = policyCtx.request.params;

  strapi.log.info("In is-owner policy.");

  const [fest] = await strapi.entityService.findMany("api::fest.fest", {
    filters: {
      id: eventId,
      user: userId,
    },
  });
  // we have an event owned by the authenticated user
  if (fest) {
    return true;
  }

  // we don't have an event owned by the user.
  return false;
};
