const jwt = require('jsonwebtoken');

const config = require('../config');

module.exports = (roles = []) => {
  return async (ctx, next) => {
    if (roles.includes('ROLE_ANONYMITY')) {
      await next();
      return;
    }
    let decoded = null;
    try {
      const token = ctx.get('Authorization')
      decoded = jwt.verify(token, config.jwtKey)
      if (!decoded.username) {
        throw new Error()
      }
      ctx.session = {
        username: decoded.username,
        userId: decoded.userId,
        roleId: decoded.roleId
      }
    } catch (err) {
      ctx.throw(401, '请求错误，会话认证失败');
    }
    if (!roles.includes(decoded.roleId)) {
      ctx.throw(403, '请求错误，权限验证失败');
    }
    await next()
  }
}