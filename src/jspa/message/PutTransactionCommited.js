/**
 * @class jspa.message.PutTransactionTidCommitted
 * @extends jspa.message.Message
 */
jspa.message.PutTransactionCommitted = jspa.message.Message.inherit({
	/**
	 * @constructor
	 * @param {String} tid
     * @param {Object} readSet
	 */
	initialize: function(tid, readSet) {
		this.superCall('put', '/transaction/' + tid + '/committed', readSet);
	},
	
	doReceive: function() {
		switch (this.response.statusCode) {
			case 200:
				this.oids = this.response.entity;
				break;
			case 412:
				throw new jspa.error.RollbackError();
			default:
				throw new jspa.error.CommunicationError(this);
		}
	}
});