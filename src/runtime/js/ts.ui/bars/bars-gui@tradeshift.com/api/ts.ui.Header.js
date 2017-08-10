/**
 * We're gonna have to implement this thing sometime soon, 
 * but we can't really do so now without *breaking* stuff.
 * @using {gui.Combo#chained} chained
 */
ts.ui.Header = (function using(chained) {
	/**
	 * Creates and appends the {ts.ui.FooterBarSpirit} when first invoked.
	 * @returns {ts.ui.FooterBarSpirit}
	 */
	function bar() {
		if (!bar.spirit) {
			var spirit = ts.ui.HeaderBarSpirit.summon();
			spirit.dom.prependTo(document.body);
			bar.spirit = spirit;
		}
		return bar.spirit;
	}

	return {
		/**
		 * @param {Array<object>|ts.ui.ButtonCollection|null} [buttons]
		 * @returns {this|ts.ui.ButtonCollection}
		 */
		buttons: chained(function(buttons) {
			if (arguments.length) {
				bar().buttons(buttons);
			} else {
				return bar().buttons();
			}
		})
	};
})(gui.Combo.chained);
