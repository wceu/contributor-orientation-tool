<?php
/**
 * Plugin Name: Contributor orientation tool
 * Plugin URI: https://github.com/wceu/contributor-orientation-tool
 * Description: A WordPress plugin aiming to help new contributors decide which make team/s to contribute to or join at Contributor Day.
 * Version: 0.0.1
 * Author: Aleksandar Predic
 * Author URI: https://www.acapredic.com/
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: contributor-orientation-tool
 * Domain Path: /languages
 */

// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'Direct script access denied.' );
}

if ( ! class_exists( 'WCEUCDTool_Plugin' ) ) {
	// Setup class autoloader.
	require_once plugin_dir_path( __FILE__ ) . 'src/WCEUCDTool/Autoloader.php';
	\WCEUCDTool\Autoloader::register();

	// Load plugin.
	$contributor_orientation_tool_plugin = new \WCEUCDTool\Plugin( __FILE__ );
	add_action( 'plugins_loaded', array( $contributor_orientation_tool_plugin, 'load' ), 1 );
}
