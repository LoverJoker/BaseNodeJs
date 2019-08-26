const mongoose = require("mongoose");

const roles = {
  ROLE_ANONYMITY: {
    name: "ROLE_ANONYMITY",
    desc: "匿名",
    type: "anonymity"
  },
  ROLE_OWNER_ADMIN: {
    name: "ROLE_ANONYMITY",
    desc: "管理员",
    type: "admin"
  },
  ROLE_OWNER_OPS: {
    name: "ROLE_OWNER_OPS",
    desc: "运维",
    type: "ops"
  }
};

const User = mongoose.Schema(
  {
    username: {
      type: String,
      index: true,
      require: true
    },
    phone: {
      type: String,
      index: true,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    roleId: {
      type: String,
      enum: Object.keys(roles),
      require: true
    },
    enable: {
      type: Boolean,
      default: true
    },
    remarks: {
      type: String
    }
  },
  { timestamps: true }
);

User.statics.roles = Object.keys(roles);
User.statics.rolesMap = roles;

module.exports = mongoose.model("User", User);
