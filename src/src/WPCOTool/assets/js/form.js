export default class Form {

	/**
	 * Constructor
	 * @param {object} form Form jQuery object
	 */
	constructor(form) {
		this.form = form;
		this.allSectionsWrapper = this.form.find('.wpcot__questions');
		this.sections = this.allSectionsWrapper.find('section');
		this.sectionActiveClass = 'wpcot__section--active';
		this.buttonNextClass = 'wpcot__button-next';
		this.buttonPrevClass = 'wpcot__button-prev';

		/* global wpcotData */
		this.errorMessage = wpcotData.errorMessage;

		this.form.find(`section .${this.buttonNextClass}`).on('click', (event) => this.next(event));
		this.form.find(`section .${this.buttonPrevClass}`).on('click', (event) => this.prev(event));
	}

	/**
	 * Return form to previous section
	 * @param {Event} event eventObject
	 * @returns {boolean}
	 */
	prev(event) {

		console.log(event);

		let button = jQuery(event.currentTarget);
		let section = button.parents('section');
		let sectionWidth = section.outerWidth();
		let prevSection = section.prev('section');

		if (prevSection.length < 1) {
			return false;
		}

		/**
		 * Check if we have only one result to move to next section
		 */
		if ( this.maybeSkipSection(prevSection, false) ) {
			return true;
		}

		/**
		 * Move to previous section
		 */
		this.move(((section.index() - 1) * sectionWidth) * -1);
		this.addActiveClass(prevSection);
		return true;

	}

	/**
	 * Move form to next section
	 * @param {Event} event eventObject
	 * @returns {boolean}
	 */
	next(event) {

		let button = jQuery(event.currentTarget);
		let section = button.parents('section');
		let sectionWidth = section.outerWidth();
		let nextSection = section.next('section');
		let fields = section.find('input[type="checkbox"]:checked');
		let errorDiv = section.find('.wpcot__section-error');
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

		/**
		 * Alert to select form inputs
		 */
		if ( teams.size <= 0 ) {
			errorDiv.text(this.errorMessage);
			return false;
		}

		/**
		 * If we have next section
		 */
		if (nextSection.length < 1) {
			return false;
		}

		errorDiv.text('');

		/**
		 * Filter next section fields
		 */
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
				parentField.hide();
			} else {
				parentField.show();
			}

		}

		/**
		 * Check if we have only one result to move to next section
		 */
		if ( this.maybeSkipSection(nextSection, true) ) {
			return true;
		}

		/**
		 * Move to next section
		 */
		this.move((nextSection.index() * sectionWidth) * -1);
		this.addActiveClass(nextSection);

	}

	/**
	 * Move to added value
	 * @param {int} value
	 */
	move(value) {

		this.allSectionsWrapper.css({
			'-webkit-transform': `translate(${value}px, 0)`,
			'-moz-transform': `translate(${value}px, 0)`,
			'-ms-transform': `translate(${value}px, 0)`,
			'-o-transform': `translate(${value}px, 0)`,
			'transform': `translate(${value}px, 0)`,
		});

	}

	/**
	 * Check if section has only one input field, check it and move to next or prev section
	 * @param {object} section jQuery section object
	 * @param {boolean} $next If next or previous section
	 * @returns {boolean}
	 */
	maybeSkipSection(section, $next) {


		let buttonClass = $next ? this.buttonNextClass : this.buttonPrevClass;
		console.log(buttonClass);
		let fieldsDisplayed = section.find('input[type="checkbox"]:visible');
		if ( fieldsDisplayed.length <= 1 && ! section.attr('id').endsWith('teams') ) {
			fieldsDisplayed.attr('checked', 'checked');
			console.log(section.find(`.${buttonClass}`));
			section.find(`.${buttonClass}`).trigger('click');
			return true;
		}

		return false;

	}

	/**
	 * Remove active classes from all sections and add it to current section
	 * @param {object} section jQuery section object
	 */
	addActiveClass( section ) {

		this.sections.removeClass(this.sectionActiveClass);
		section.addClass(this.sectionActiveClass);

	}

}
