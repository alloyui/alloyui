'use strict';

import core from 'metal';
import dom from 'metal-dom';
import SoyRenderer from 'metal-soy';
import DatatableBase from './Datatable.soy';

class Datatable extends DatatableBase {

	/**
	 * Asserts literal types are not the same.
	 * @param {string} type1
	 * @param {string} type2
	 * @protected
	 * @throws {Error} If types are different.
	 */
	assertDifferentTypes_(type1, type2) {
		if (type1 && type2 && type1 !== type2) {
			throw new Error('Mixed types');
		}
	}

	/**
	 * Visits array items and asserts that it only contains one literal type.
	 * @param {array} value
	 * @protected
	 * @throws {Error} If types are different.
	 */
	assertNoMixedTypesInArrays_(value) {
		var lastType;
		var acceptArray = (v) => {
			var type = this.getValueType_(v);
			this.assertDifferentTypes_(lastType, type);
			lastType = type;
			this.assertNoMixedTypesInArrays_(v);
		};
		var acceptObject = (v) => this.assertNoMixedTypesInArrays_(v);
		this.visit_(value, acceptArray, acceptObject);
	}

	/**
	 * Analyzes the expanded object containing type and value and extracts an
	 * array of columns to be used for plotting. Inside an array of objects
	 * column values are aggregated from extracting 1-deep key values. For other
	 * array types keys are not extracted and values are plotted in one column
	 * vertically.
	 * @param {object} expandedValue
	 * @protected
	 */
	collectColumnsFromArrayValues_(expandedValue) {
		var value = expandedValue.value;
		if (expandedValue.type === Datatable.TYPES.ARRAY && value.length) {
			switch (value[0].type) {
				case Datatable.TYPES.OBJECT:
					var columns = {};
					value.forEach((item) => Object.keys(item.value).forEach((key) => columns[key] = true));
					expandedValue.columns = this.formatColumns(Object.keys(columns));
					break;
			}
		}
	}

	/**
	 * Internal helper to get literal JSON type of a value.
	 * @param {*} value
	 * @return {string} Type inferred from JSON value.
	 */
	getValueType_(value) {
		if (value === null) {
			return Datatable.TYPES.NULL;
		}
		if (value === undefined) {
			return Datatable.TYPES.UNDEFINED;
		}
		if (SoyRenderer.isSanitizedHtml(value)) {
			return Datatable.TYPES.STRING;
		}
		if (Array.isArray(value)) {
			return Datatable.TYPES.ARRAY;
		}
		return typeof value;
	}

	setData_(data) {
		this.assertNoMixedTypesInArrays_(data);
		return this.visitValuesAndExpandType_(data);
	}

	/**
	 * Toggles sibling table content of <code>event.delegateTarget</code>.
	 * @param {Event} event
	 */
	toggleTableContents(event) {
		var label = event.delegateTarget;
		dom.toggleClasses(label, this.labelClasses);
		dom.toggleClasses(dom.next(label, 'table'), this.hiddenClasses);
	}

	/**
	 * Internal non-recursive visitor helper to navigate over JSON values.
	 * @param {*} value The value to start the visit.
	 * @param {!function} acceptArray Accept logic for array items.
	 * @param {!function} acceptObject Accept logic for object keys and values.
	 * @protected
	 */
	visit_(value, acceptArray, acceptObject) {
		switch (this.getValueType_(value)) {
			case Datatable.TYPES.ARRAY:
				value.forEach((v, k) => acceptArray(v, k, value));
				break;
			case Datatable.TYPES.OBJECT:
				Object.keys(value).forEach((k) => acceptObject(value[k], k, value));
				break;
		}
	}

	/**
	 * Visits all json values and wraps it in object containing its type and
	 * value.
	 * @param {*} value The value to start the visit.
	 * @return {object} Wrapped object containing type and value.
	 * @protected
	 */
	visitValuesAndExpandType_(value) {
		var acceptArray = (val, key, reference) => reference[key] = this.visitValuesAndExpandType_(val);
		var acceptObject = (val, key, reference) => reference[key] = this.visitValuesAndExpandType_(val);
		this.visit_(value, acceptArray, acceptObject);
		var expanded = {
			type: this.getValueType_(value),
			value: value
		};
		this.collectColumnsFromArrayValues_(expanded);
		return expanded;
	}

}

Datatable.ATTRS = {
	/**
	 * Data to be plotted on datatable. Any JSON type is supported if it does
	 * not contain mixed types inside an array.
	 * @type {*}
	 */
	data: {
		setter: 'setData_'
	},

	/**
	 * Formats array of columns extracted from JSON data. Relevant for operates
	 * over column values, such as sorting and formatting.
	 * @type {function(array.<string>)}
	 */
	formatColumns: {
		validator: core.isFunction,
		value: function(columns) {
			return columns.sort();
		}
	},

	/**
	 * Css classes to be used for hidden state.
	 * @type {string}
	 * @default 'hidden'
	 */
	hiddenClasses: {
		validator: core.isString,
		value: 'hidden'
	},

	/**
	 * Css classes to be used for labels.
	 * @type {string}
	 * @default 'collapsed expanded'
	 */
	labelClasses: {
		validator: core.isString,
		value: 'collapsed expanded'
	},

	/**
	 * Css classes to be used for tables.
	 * @type {string}
	 * @default 'table table-condensed table-hover'
	 */
	tableClasses: {
		validator: core.isString,
		value: 'table table-bordered table-condensed table-hover'
	}
};

/**
 * Datatable supported types.
 * @type {object}
 * @static
 */
Datatable.TYPES = {
	ARRAY: 'array',
	BOOLEAN: 'boolean',
	NULL: 'null',
	NUMBER: 'number',
	OBJECT: 'object',
	STRING: 'string',
	UNDEFINED: 'undefined'
};

export default Datatable;
