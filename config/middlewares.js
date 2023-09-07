module.exports = [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: ["http://localhost:1337", "https://rock-fests.vercel.app"],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "img-src": ["'self'", "data:", "strapi.io", "res.cloudinary.com/"],
        },
      },
    },
  },
];
