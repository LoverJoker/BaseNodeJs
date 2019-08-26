const _ = require("lodash");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config")
const ProductType = require("../models/productType")

exports.login = async ctx => {

  let { username, password } = ctx.request.body;

  username = (username || "").trim();
  password = (password || "").trim();
  ctx.assert(username, 400, "用户名不允许为空");
  ctx.assert(password, 400, "密码不允许为空");

  const user = await User.findOne({ username });

  ctx.assert(user, 400, "用户名或者密码错误");
  ctx.assert(user.enable, 400, "账户被禁止登陆");

  const userId = user._id.toString();
  const payload = Object.assign(
    {
      userId,
      username: user.username,
      roleName: User.rolesMap[user.roleId].desc
    },
    _.pick(user, ["username", "roleId"])
  );

  const token = jwt.sign(payload, config.jwtKey);
  ctx.body = Object.assign({ token }, payload);
};
