/**
 * Spirit of the header.
 * @extends {ts.ui.GlobalBarSpirit}
 */
ts.ui.HeaderBarSpirit = (function() {
	return ts.ui.GlobalBarSpirit.extend({
		/**
		 * @type {ts.ui.ToolBarSpirit}
		 */
		headerbar: null,

		/**
		 * @type {ts.ui.ToolBarSpirit}
		 */
		centerbar: null,

		/**
		 * @type {ts.ui.ToolBarSpirit}
		 */
		buttonbar: null,

		/*
		 * Get (or set) the model. This will load the EDBML.
		 * @param {object|ts.ui.ToolBarModel} model
		 */
		model: ts.ui.Spirit.createModelMethod(ts.ui.HeaderBarModel, 'ts.ui.HeaderBarSpirit.edbml'),

		/**
		 * Add that global classname.
		 */
		onenter: function() {
			this.super.onenter();
			if (this.guilayout.outsideMain()) {
				this.guilayout.shiftGlobal(true, 'ts-has-header');
				this.css.add('ts-headerbar ts-mainheader ts-bg-lite');
			} else {
				console.error('Not supported');
			}
		},

		/**
		 * Index the various bars and watch for rendering updates.
		 * @param {Object} summary
		 */
		onrender: function(summary) {
			this.super.onrender(summary);
			if (summary.first) {
				[
					(this._headerbar = this._getbar('.ts-headerbar-headerbar')),
					(this._centerbar = this._getbar('.ts-headerbar-centerbar')),
					(this._buttonbar = this._getbar('.ts-headerbar-buttonbar'))
				].forEach(function(spirit) {
					spirit.life.add(gui.LIFE_RENDER, this);
				}, this);
				this._layout(ts.ui.ACTION_HEADER_LEVEL, [
					[this._headerbar, 3],
					[this._centerbar, 2],
					[this._buttonbar, 3]
				]);
			}
			this._refresh([this._headerbar, this._centerbar, this._buttonbar]);
		}

		// Private .................................................................
	});
})();
