/**
 * Advanced header model.
 */
ts.ui.HeaderBarModel = (function(ToolBarModel) {
	return ts.ui.Model.extend({
		/**
		 * Friendly name.
		 * @type {string}
		 */
		item: 'header',

		/**
		 * This is not used just yet!
		 * @type {ts.ui.ToolBarModel}
		 */
		bufferbar: ToolBarModel,

		/**
		 * @type {ts.ui.ToolBarModel}
		 */
		headerbar: ToolBarModel,

		/**
		 * @type {ts.ui.ToolBarModel}
		 */
		centerbar: ToolBarModel,

		/**
		 * @type {ts.ui.ToolBarModel}
		 */
		buttonbar: ToolBarModel,

		/**
		 * Initialize models.
		 */
		onconstruct: function() {
			this.super.onconstruct();
			this.headerbar = {};
			this.centerbar = {};
			this.buttonbar = {};
		},

		/**
		 *
		 */
		title: {
			getter: function() {
				return this.headerbar.title;
			},
			setter: function(title) {
				this.headerbar.title = title;
			}
		},

		/**
		 *
		 */
		buttons: {
			getter: function() {
				return this.buttonbar.buttons;
			},
			setter: function(json) {
				this.buttonbar.buttons = json;
			}
		},

		/**
		 * @type {ts.ui.PagerModel}
		 */
		pager: {
			getter: function() {
				return this.centerbar.pager;
			},
			setter: function(json) {
				this.centerbar.pager = json;
			}
		}
	});
})(ts.ui.ToolBarModel);
