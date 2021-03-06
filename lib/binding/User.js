var Entity = require('./Entity');

/**
 * @class baqend.binding.User
 * @extends baqend.binding.Entity
 */
var User = Entity.inherit(/** @lends baqend.binding.User.prototype */ {

  extend: {
    extend: Entity.extend
  },

  constructor: function User() {
    Entity.apply(this, arguments);
  },

  /**
   * The name of the user
   * @type String
   */
  username: null,

  /**
   * Change the password of the given user
   *
   * @param {String} password Current password of the user
   * @param {String} newPassword New password of the user
   * @param {baqend.binding.Entity~doneCallback=} doneCallback Called when the operation succeed.
   * @param {baqend.binding.Entity~failCallback=} failCallback Called when the operation failed.
   * @return {Promise<baqend.binding.User>}
   */
  newPassword: function(password, newPassword, doneCallback, failCallback) {
    return this._metadata.db.newPassword(this.username, password, newPassword).then(doneCallback, failCallback);
  }
});

module.exports = User;


