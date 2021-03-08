const auth = require('../services/auth');

const authenticate = async (ctx) => {
  const { email } = ctx.request.body;
  ctx.body = {
    token: await auth.authenticate({ email }),
  };
};

module.exports = {
  authenticate,
};
