/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/src/WPCOTool/assets/js/form.js":
/*!********************************************!*\
  !*** ./src/src/WPCOTool/assets/js/form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form =
/*#__PURE__*/
function () {
  /**
   * Constructor
   * @param {object} form Form jQuery object
   */
  function Form(form) {
    var _this = this;

    _classCallCheck(this, Form);

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
    this.form.find("section .".concat(this.buttonNextClass)).on('click', function (event) {
      return _this.next(event);
    });
    this.form.find("section .".concat(this.buttonPrevClass)).on('click', function (event) {
      return _this.prev(event);
    });
    window.addEventListener("orientationchange", function () {
      return _this.resize();
    });
    this.activateFirstSection();
  }
  /**
   * On window resize center active section
   */


  _createClass(Form, [{
    key: "resize",
    value: function resize() {
      var _this2 = this;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        var activeSection = _this2.form.find(".".concat(_this2.sectionActiveClass));

        _this2.move(activeSection.index() * activeSection.outerWidth() * -1);
      }, 500);
    }
    /**
     * Mark all inputs in first section as active.
     * This will never change but we need it so we can move back to this section
     */

  }, {
    key: "activateFirstSection",
    value: function activateFirstSection() {
      this.allSectionsWrapper.find('section:first-of-type').find(".".concat(this.inputGroupClass)).addClass(this.inputGroupActiveClass);
    }
    /**
     * Return form to previous section
     * @param {Event} event eventObject
     * @returns {boolean}
     */

  }, {
    key: "prev",
    value: function prev(event) {
      var button = jQuery(event.currentTarget);
      var section = button.parents('section');
      var sectionWidth = section.outerWidth();
      var prevSection = section.prev('section');

      if (prevSection.length < 1) {
        return false;
      }

      section.find(".".concat(this.inputGroupClass)).removeClass(this.inputGroupActiveClass);
      /**
       * Check if we have only one result to move to next section
       */

      if (this.maybeSkipSection(prevSection, false)) {
        return true;
      }
      /**
       * Move to previous section
       */


      this.move((section.index() - 1) * sectionWidth * -1);
      this.addActiveClass(prevSection);
      return true;
    }
    /**
     * Move form to next section
     * @param {Event} event eventObject
     * @returns {boolean}
     */

  }, {
    key: "next",
    value: function next(event) {
      var button = jQuery(event.currentTarget);
      var section = button.parents('section');
      var sectionWidth = section.outerWidth();
      var nextSection = section.next('section');
      var fields = section.find('input[type="checkbox"]:checked');
      var teams = new Set();
      /**
       * Collect all checked teams from input values
       */

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;
          var values = field.value.split(',');
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var value = _step3.value;
              teams.add(value);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
        /**
         * Alert to select form inputs
         */

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (teams.size <= 0) {
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

      var nextSectionFields = nextSection.find('input[type="checkbox"]');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = nextSectionFields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var nextSectionField = _step2.value;
          // Uncheck if previously checked
          nextSectionField.checked = false;
          var nextSectionFieldTeams = new Set(nextSectionField.value.split(','));
          var validate = false;
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = nextSectionFieldTeams[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var nextSectionFieldTeam = _step4.value;

              if (teams.has(nextSectionFieldTeam)) {
                validate = true;
              }
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          var parentField = jQuery(nextSectionField).parent(".".concat(this.inputGroupClass));

          if (!validate) {
            parentField.removeClass(this.inputGroupActiveClass);
          } else {
            parentField.addClass(this.inputGroupActiveClass);
          }
        }
        /**
         * Check if we have only one result to move to next section
         */

      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (this.maybeSkipSection(nextSection, true)) {
        return true;
      }
      /**
       * Move to next section
       */


      this.move(nextSection.index() * sectionWidth * -1);
      this.addActiveClass(nextSection);
    }
    /**
     * Move to added value
     * @param {int} value
     */

  }, {
    key: "move",
    value: function move(value) {
      this.allSectionsWrapper.css({
        '-webkit-transform': "translate(".concat(value, "px, 0)"),
        '-moz-transform': "translate(".concat(value, "px, 0)"),
        '-ms-transform': "translate(".concat(value, "px, 0)"),
        '-o-transform': "translate(".concat(value, "px, 0)"),
        'transform': "translate(".concat(value, "px, 0)")
      });
    }
    /**
     * Check if section has only one input field, check it and move to next or prev section
     * @param {object} section jQuery section object
     * @param {boolean} $next If next or previous section
     * @returns {boolean}
     */

  }, {
    key: "maybeSkipSection",
    value: function maybeSkipSection(section, $next) {
      var buttonClass = $next ? this.buttonNextClass : this.buttonPrevClass;
      var fieldsDisplayed = section.find("div.".concat(this.inputGroupActiveClass));

      if (fieldsDisplayed.length <= 1 && !section.attr('id').endsWith('teams')) {
        fieldsDisplayed.find('input[type="checkbox"]').attr('checked', 'checked');
        section.find(".".concat(buttonClass)).trigger('click');
        return true;
      }

      return false;
    }
    /**
     * Remove active classes from all sections and steps and add it to current section
     * @param {object} section jQuery section object
     */

  }, {
    key: "addActiveClass",
    value: function addActiveClass(section) {
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

  }, {
    key: "displayError",
    value: function displayError(section, text, active) {
      var errorDiv = section.find('.wpcot__section-error');
      var activeClass = 'wpcot__section-error--active';

      if (active) {
        errorDiv.addClass(activeClass);
      } else {
        errorDiv.removeClass(activeClass);
      }

      errorDiv.text(text);
    }
  }]);

  return Form;
}();



/***/ }),

/***/ "./src/src/WPCOTool/assets/js/main.js":
/*!********************************************!*\
  !*** ./src/src/WPCOTool/assets/js/main.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/src/WPCOTool/assets/js/form.js");


(function ($) {
  "use strict";

  $(window).load(function () {
    new _form__WEBPACK_IMPORTED_MODULE_0__["default"]($('#wpcot form'));
  });
})(jQuery);

/***/ }),

/***/ "./src/src/WPCOTool/assets/scss/style.scss":
/*!*************************************************!*\
  !*** ./src/src/WPCOTool/assets/scss/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************************!*\
  !*** multi ./src/src/WPCOTool/assets/js/main.js ./src/src/WPCOTool/assets/scss/style.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/src/WPCOTool/assets/js/main.js */"./src/src/WPCOTool/assets/js/main.js");
module.exports = __webpack_require__(/*! ./src/src/WPCOTool/assets/scss/style.scss */"./src/src/WPCOTool/assets/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=shortcode.js.map