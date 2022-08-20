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
		this.steps = this.form.find('.wpcot__steps li');
		this.stepsActiveClass = 'wpcot__steps--active';
		this.buttonNextClass = 'wpcot__button-next';
		this.buttonPrevClass = 'wpcot__button-prev';
		this.inputGroupClass = 'wpcot__input-group';
		this.inputGroupActiveClass = 'wpcot__input-group--visible';
		this.timeout = null;

		/* global wpcotData */
		this.errorMessage = wpcotData.errorMessage;

		this.form.find(`section .${this.buttonNextClass}`).on('click', (event) => this.next(event));
		this.form.find(`section .${this.buttonPrevClass}`).on('click', (event) => this.prev(event));
		window.addEventListener("orientationchange", () => this.resize());
		this.activateFirstSection();
	}

	/**
	 * On window resize center active section
	 */
	resize() {

		clearTimeout(this.timeout);

		this.timeout = setTimeout( () => {
			let activeSection = this.form.find(`.${this.sectionActiveClass}`);
			this.move((activeSection.index() * activeSection.outerWidth()) * -1);
		}, 500);

	}

	/**
	 * Mark all inputs in first section as active.
	 * This will never change but we need it so we can move back to this section
	 */
	activateFirstSection() {

		this.allSectionsWrapper.find('section:first-of-type').find(`.${this.inputGroupClass}`).addClass(this.inputGroupActiveClass);

	}

	/**
	 * Return form to previous section
	 * @param {Event} event eventObject
	 * @returns {boolean}
	 */
	prev(event) {

		let button = jQuery(event.currentTarget);
		let section = button.parents('section');
		let sectionWidth = section.outerWidth();
		let prevSection = section.prev('section');

		if (prevSection.length < 1) {
			return false;
		}

		section.find(`.${this.inputGroupClass}`).removeClass(this.inputGroupActiveClass);

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
			this.displayError(section, this.errorMessage, true);
			return false;
		}

		/**
		 * If we have next section
		 */
		if (nextSection.length < 1) {
			return false;
		}

		this.displayError(section, '', false);

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

			let parentField = jQuery(nextSectionField).parent(`.${this.inputGroupClass}`);
			if ( ! validate ) {
				parentField.removeClass(this.inputGroupActiveClass);
			} else {
				parentField.addClass(this.inputGroupActiveClass);
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

		let fieldsDisplayed = section.find(`div.${this.inputGroupActiveClass}`);
		if ( fieldsDisplayed.length <= 1 && ! section.attr('id').endsWith('teams') ) {
			fieldsDisplayed.find('input[type="checkbox"]').attr('checked', 'checked');
			section.find(`.${buttonClass}`).trigger('click');
			return true;
		}

		return false;

	}

	/**
	 * Remove active classes from all sections and steps and add it to current section
	 * @param {object} section jQuery section object
	 */
	addActiveClass(section) {

		this.sections.removeClass(this.sectionActiveClass);
		section.addClass(this.sectionActiveClass);

		this.steps.removeClass(this.stepsActiveClass);
		this.steps.eq(section.index()).addClass(this.stepsActiveClass);

	}

	/**
	 * Display or remove error message for section
	 * @param {object} section jQuery section object
	 * @param {string} text
	 */
	displayError(section, text, active) {

		let errorDiv = section.find('.wpcot__section-error');
		let activeClass = 'wpcot__section-error--active';

		if (active) {
			errorDiv.addClass(activeClass);
		} else {
			errorDiv.removeClass(activeClass);
		}

		errorDiv.text(text);

	}

}
