<?php
/**
 * contributor-orientation-tool plugin
 *
 * @package    contributor-orientation-tool
 * @subpackage Core
 * @since      0.0.1
 * @author     Aleksandar Predic
 */

namespace WCEUCDTool;

/**
 * Class Plugin
 *
 * @package WCEUCDTool
 */
class Plugin {

	/**
	 * Flag to track if the plugin is loaded
	 *
	 * @since    0.0.1
	 * @access   private
	 * @var bool
	 */
	private $loaded;

	/**
	 * Plugin version.
	 *
	 * @since    0.0.1
	 * @access   public
	 * @var string
	 */
	public $version = '0.0.1';

	/**
	 * Absolute path to the directory where WordPress installed the plugin with the trailing slash
	 *
	 * @since   0.0.1
	 * @access   private
	 * @var string
	 */
	private $plugin_path;

	/**
	 * URL to the directory where WordPress installed the plugin with the trailing slash
	 *
	 * @since   0.0.1
	 * @access   private
	 * @var string
	 */
	private $plugin_url;

	/**
	 * Constructor.
	 *
	 * @access public
	 * @since 0.0.1
	 *
	 * @param string $file
	 */
	public function __construct( $file ) {
		$this->loaded      = false;
		$this->plugin_path = plugin_dir_path( $file );
		$this->plugin_url  = plugin_dir_url( $file );
	}

	/**
	 * Checks if the plugin is loaded.
	 *
	 * @access public
	 * @since 0.0.1
	 * @return bool
	 */
	public function is_loaded() {
		return $this->loaded;
	}

	/**
	 * Loads the plugin into WordPress and add all needed hooks.
	 *
	 * @access public
	 * @since 0.0.1
	 */
	public function load() {

		if ( $this->is_loaded() ) {
			return;
		}

		/**
		 * Plugin scripts and styles
		 */
		add_action( 'wp_enqueue_scripts', array( $this, 'scripts' ), 1010 );

		/*
		 * Add actions sorted via components we are adding trought plugin
		 * All hooks are going to be added via class __construct method to make plugin modular
		 */


		// Set all as loaded.
		$this->loaded = true;

	}

	/**
	 * Scripts and styles with very late priority.
	 *
	 * @access public
	 * @since 0.0.1
	 */
	public function scripts() {

		// Enque Styles.
		wp_enqueue_style( 'contributor-orientation-tool-main', plugins_url( 'assets/css/main/style.min.css', __FILE__ ), array(), $this->version );

	}

	/**
	 * Return scripts url for the plugin.
	 *
	 * @access public
	 * @since 0.0.1
	 *
	 * @param string $filename
	 *
	 * @return string
	 */
	public static function scripts_url( $filename ) {

		$is_min = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : 'min.';

		return plugins_url( 'assets/js/' . $filename . '.' . $is_min . 'js', __FILE__ );

	}

	/**
	 * Fired during plugin activation.
	 *
	 * @access public
	 * @since 0.0.1
	 */
	public function activation() {

	}
}