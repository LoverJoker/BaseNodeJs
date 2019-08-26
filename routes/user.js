const User = require("../models/user");

exports.get = async ctx => {
  const userId = ctx.params.userId
  const user = await User.findById(userId)
  ctx.assert(user, '404', '用户不存在')
  ctx.body = user
};
