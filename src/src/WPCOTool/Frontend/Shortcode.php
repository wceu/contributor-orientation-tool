<?php

namespace WPCOTool\Frontend;

use WPCOTool\Plugin;

/**
 * Class Shortcode responsible for frontend output
 * Shortcode: [contributor-orientation-tool]
 * @package WPCOTool\Frontend
 */
class Shortcode {

	/**
	 * Plugin version.
	 *
	 * @since    0.0.1
	 * @access   public
	 * @var string
	 */
	private $version;

	/**
	 * Shortcode tag
	 * @var string
	 */
	private $shortcode_tag = 'contributor-orientation-tool';

	/**
	 * Shortcode constructor.
	 *
	 * @param string $version Plugin version
	 */
	public function __construct( string $version ) {

		$this->version = sanitize_text_field( $version );
		add_action( 'wp_enqueue_scripts', array( $this, 'scripts' ) );
		add_shortcode( $this->shortcode_tag, array( $this, 'output' ) );

	}

	/**
	 * Html output (shortcode).
	 *
	 * @param array $atts Shortcode attributes.
	 * @param string $content Shortcode content
	 * @return string
	 */
	public function output( $atts, $content = '' ) {

		return 'Just some string';

	}

	/**
	 * Scripts and styles
	 *
	 * @access public
	 * @since 0.0.1
	 */
	public function scripts() {

		if ( ! is_singular( array( 'post', 'page' ) ) ) {
			return;
		}

		/**
		 * Global $post var
		 * @param WP_Post $post
		 */
		global $post;

		if ( ! has_shortcode( $post->post_content, $this->shortcode_tag ) ) {
			return;
		}

		$handle = sprintf( '%s-public', $this->shortcode_tag );

		wp_enqueue_style(
			$handle,
			Plugin::assets_url( 'css/shortcode.css' ),
			array(),
			$this->version
		);

		wp_enqueue_script(
			$handle,
			Plugin::assets_url( 'js/shortcode.js' ),
			array( 'jquery' ),
			$this->version,
			true
		);

	}

}
