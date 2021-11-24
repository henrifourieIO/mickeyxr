module.exports = ({ env }) => ({
  host: env('HOST', process.env.APP_HOST),
  port: env.int('PORT', process.env.NODE_PORT),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '14e2f058135f8b7b15add29954d4f97b'),
    },
  },
});
