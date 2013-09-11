/**
 * @class jspa.binding.Accessor
 */
jspa.binding.Accessor = Object.inherit({
	/**
	 * @param {Object} object
	 * @param {jspa.metamodel.Attribute} attribute
	 * @returns {*}
	 */
	getValue: function(object, attribute) {
		return object[attribute.name];
	},
	 
	/**
	 * @param {Object} object
	 * @param {jspa.metamodel.Attribute} attribute
	 * @param {*} value
	 */
	setValue: function(object, attribute, value) {
		object[attribute.name] = value;
	}
});