module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1336),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6e1523cb2eafd49b6e0dc0ab9ce8aaf3'),
    },
  },
});
