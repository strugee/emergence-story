/**
 * Sentence.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs				:: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		id: {
			type: 'integer',
			autoIncrement: true,
			unique: true,
			required: true,
			primaryKey: true
		},
		currentValue: {
			type: 'string',
			required: true
		},
		alternates: {
			collection: 'sentence',
			via: 'parent'
		},
		parent: {
			model: 'sentence'
		},
		position: {
			required: true
		}
	}
};

