export default class Form {

	/**
	 * Constructor
	 * @param {object} form Form jQuery object
	 */
	constructor(form) {
		this.form = form;

		this.form.find('section button').on('click', (event) => this.next(event));
	}

	next(event) {

		/**
		 * TODO: Separate all into methods after prototype
		 */

		let button = jQuery(event.currentTarget);
		let section = button.parent('section');
		let nextSection = section.next('section');
		let fields = section.find('input[type="checkbox"]:checked');

		//console.log(button);
		let teams = new Set();

		/**
		 * Collect all checked teams from input values
		 */
		for (let field of fields) {

			let values = field.value.split(',');
			for (let value of values) {
				teams.add(value);
			}

		}

		if ( teams.size <= 0 ) {
			return false;
		}

		if (nextSection.length < 1) {
			return false;
		}

		let nextSectionFields = nextSection.find('input[type="checkbox"]');

		for (let nextSectionField of nextSectionFields) {

			// Uncheck if previously checked
			nextSectionField.checked = false;

			let nextSectionFieldTeams = new Set(nextSectionField.value.split(','));

			let validate = false;
			for (let nextSectionFieldTeam of nextSectionFieldTeams) {

				if (teams.has(nextSectionFieldTeam)) {
					validate = true;
				}

			}

			let parentField = jQuery(nextSectionField).parent('div');
			if ( ! validate ) {
				parentField.css('background', 'red');
			} else {
				parentField.css('background', 'white');
			}

		}


	}

}
