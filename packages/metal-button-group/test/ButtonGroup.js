'use strict';

import dom from 'bower:metal/src/dom/dom';
import ButtonGroup from '../src/ButtonGroup';

describe('ButtonGroup', function() {
	var buttonGroup;

	it('should render the requested buttons', function() {
		buttonGroup = new ButtonGroup({
			buttons: [
				{
					cssClass: 'btn btn-primary',
					label: 'Ok',
					type: 'submit'
				},
				{
					label: 'Cancel'
				}
			]
		}).render();

		var buttonElements = buttonGroup.element.querySelectorAll('button');
		assert.strictEqual(2, buttonElements.length);
		assert.strictEqual('Ok', buttonElements[0].textContent);
		assert.strictEqual('btn btn-primary', buttonElements[0].className);
		assert.strictEqual('submit', buttonElements[0].getAttribute('type'));
		assert.strictEqual('Cancel', buttonElements[1].textContent);
		assert.strictEqual('btn btn-default', buttonElements[1].className);
		assert.strictEqual('button', buttonElements[1].getAttribute('type'));
	});

	it('should render no buttons by default', function() {
		buttonGroup = new ButtonGroup().render();

		var buttonElements = buttonGroup.element.querySelectorAll('button');
		assert.strictEqual(0, buttonElements.length);
		assert.strictEqual(0, buttonGroup.buttons.length);
	});

	it('should add ButtonGroup.SELECTED_CLASS to buttons specified in "selected" attr', function() {
		buttonGroup = new ButtonGroup({
			buttons: [
				{
					label: 'First'
				},
				{
					label: 'Second'
				}
			],
			selected: {
				'0': true
			}
		}).render();

		var buttonElements = buttonGroup.element.querySelectorAll('button');
		assert.ok(dom.hasClass(buttonElements[0], ButtonGroup.SELECTED_CLASS));
		assert.ok(!dom.hasClass(buttonElements[1], ButtonGroup.SELECTED_CLASS));
	});

	it('should convert given "selected" attr from labels array to map', function() {
		buttonGroup = new ButtonGroup({
			buttons: [
				{
					label: 'First'
				},
				{
					label: 'Second'
				},
				{
					label: 'Third'
				}
			],
			selected: ['First', 'Third']
		}).render();

		var expectedSelected = {
			'0': true,
			'2': true
		};
		assert.deepEqual(expectedSelected, buttonGroup.selected);
	});

	it('should add ButtonGroup.SELECTED_CLASS to buttons specified as labels in "selected" array attr', function() {
		buttonGroup = new ButtonGroup({
			buttons: [
				{
					label: 'First'
				},
				{
					label: 'Second'
				},
				{
					label: 'Third'
				}
			],
			selected: ['First', 'Third']
		}).render();

		var buttonElements = buttonGroup.element.querySelectorAll('button');
		assert.ok(dom.hasClass(buttonElements[0], ButtonGroup.SELECTED_CLASS));
		assert.ok(!dom.hasClass(buttonElements[1], ButtonGroup.SELECTED_CLASS));
		assert.ok(dom.hasClass(buttonElements[2], ButtonGroup.SELECTED_CLASS));
	});

	it('should add/remove ButtonGroup.SELECTED_CLASS to elements when clicked', function() {
		buttonGroup = new ButtonGroup({
			buttons: [
				{
					label: 'First'
				},
				{
					label: 'Second'
				}
			]
		}).render();

		var buttonElements = buttonGroup.element.querySelectorAll('button');
		assert.ok(!dom.hasClass(buttonElements[0], ButtonGroup.SELECTED_CLASS));
		assert.ok(!dom.hasClass(buttonElements[1], ButtonGroup.SELECTED_CLASS));

		dom.triggerEvent(buttonElements[0], 'click');
		assert.ok(dom.hasClass(buttonElements[0], ButtonGroup.SELECTED_CLASS));
		assert.ok(!dom.hasClass(buttonElements[1], ButtonGroup.SELECTED_CLASS));

		dom.triggerEvent(buttonElements[1], 'click');
		assert.ok(dom.hasClass(buttonElements[0], ButtonGroup.SELECTED_CLASS));
		assert.ok(dom.hasClass(buttonElements[1], ButtonGroup.SELECTED_CLASS));

		dom.triggerEvent(buttonElements[0], 'click');
		assert.ok(!dom.hasClass(buttonElements[0], ButtonGroup.SELECTED_CLASS));
		assert.ok(dom.hasClass(buttonElements[1], ButtonGroup.SELECTED_CLASS));
	});

	it('should automatically select the number of buttons remaining to reach `minSelected`', function() {
		buttonGroup = new ButtonGroup({
			buttons: [
				{
					label: 'First'
				},
				{
					label: 'Second'
				},
				{
					label: 'Third'
				}
			],
			minSelected: 2,
			selected: {
				'0': true
			}
		}).render();

		assert.ok(buttonGroup.selected[0]);
		assert.ok(buttonGroup.selected[1]);
		assert.ok(!buttonGroup.selected[2]);
	});

	it('should not allow deselecting a button if the total count will be lower than `minSelected`', function() {
		buttonGroup = new ButtonGroup({
			buttons: [
				{
					label: 'First'
				},
				{
					label: 'Second'
				},
				{
					label: 'Third'
				}
			],
			minSelected: 2,
			selected: {
				'0': true
			}
		}).render();

		var buttonElements = buttonGroup.element.querySelectorAll('button');
		dom.triggerEvent(buttonElements[0], 'click');

		assert.ok(dom.hasClass(buttonElements[0], ButtonGroup.SELECTED_CLASS));
		assert.ok(buttonGroup.selected[0]);
		assert.ok(buttonGroup.selected[1]);
		assert.ok(!buttonGroup.selected[2]);
	});
});
