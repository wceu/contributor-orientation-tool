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
	 * Prefix used for output to create ids, field names...
	 * @var string
	 */
	private $form_prefix = 'wpcot';

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

		$selected_teams = Plugin::get_form_config( 'teams.php' );

        /**
         * Multipart form sections
         */
		$sections = $this->get_questions_sections( $selected_teams );

        /**
         * Output
         */
		return sprintf(
			'<div id="%1$s"><h2>%2$s</h2>%3$s<form method="post" action=""><div class="wpcot__questions">%4$s</div><button type="submit">%5$s</button></form></div>',
			esc_attr( $this->form_prefix ),
			esc_html__( 'Contributor orientation tool', 'contributor-orientation-tool' ),
			$this->get_form_description(),
			implode( '', $sections ),
			esc_html__( 'Submit', 'contributor-orientation-tool' )
		);

	}

	private function get_questions_sections( $selected_teams ) {

	    $section_1_key = sprintf( '%s-section-1', $this->form_prefix );

        $form_sections = array(
            $section_1_key => Plugin::get_form_config( 'section-1.php' ),
            sprintf( '%s-section-2', $this->form_prefix ) => Plugin::get_form_config( 'section-2.php' ),
            sprintf( '%s-section-3', $this->form_prefix ) => Plugin::get_form_config( 'section-3.php' )
        );

        $sections = array();
        foreach ( $form_sections as $section_id => $section ) {

            $fields = array();
            foreach ( $section['questions'] as $key => $field ) {

                if ( ! isset( $field['label'] ) || ! $field['teams'] ) {
                    continue;
                }

                $question = QuestionFactory::create( $field['label'], $field['teams'] );
                $teams = $question->get_teams();

                /**
                 * Compare if question is referring to one of selected teams and get only enabled teams
                 */
                $enabled_teams = array_filter( $teams, function ( $team ) use ( $selected_teams ) {
                    return in_array( $team, array_keys( $selected_teams ) );
                } );

                if ( empty( $enabled_teams ) ) {
                    continue;
                }

                $fields[] = sprintf(
                    '<div><input id="%1$s" type="checkbox" name="%3$s[]" value="%4$s" /><label for="%1$s">%2$s</label></div>',
                    esc_attr( sprintf( '%s-%s', $section_id, $key ) ),
                    esc_html( $question->get_label() ),
                    sanitize_text_field( str_replace( '-', '_', $section_id ) ),
                    esc_js( implode( ',', $enabled_teams ) )
                );


            }

            $sections[] = sprintf(
                '<section id="%1$s" class="%5$s%6$s"><h3>%2$s</h3>%3$s<button type="button">%4$s</button></section>',
                esc_attr( $section_id ),
                esc_html( $section['headline'] ),
                implode( '', $fields ),
                esc_html__( 'Next section', 'contributor-orientation-tool' ),
                sprintf( ' %s__section', $this->form_prefix ),
                $section_1_key === $section_id ? sprintf( ' %s__section--active', $this->form_prefix ) : ''
            );

        }

        return $sections;

    }

	/**
	 * Return form description html
	 * @return string
	 */
	private function get_form_description() {

		return sprintf(
			'<div class="%1$s"><p>%2$s</p><p>%3$s</p><p>%4$s</p><p>%5$s</p><p>%6$s</p></div>',
			esc_attr( sprintf( '%s__description', $this->form_prefix ) ),
			esc_html__( 'Hello,', 'contributor-orientation-tool' ),
			esc_html__( 'Thank you for your interest in contributing to WordPress project. ', 'contributor-orientation-tool' ),
			esc_html__( 'Even though this tool is created by WordCamp Europe organising team, it is meant to help you decide in less than 1 minute which team to join at any WordCamp Contributor Day in order to start contributing. As a matter of fact, you don’t even have to use it specifically for Contributor Day. ', 'contributor-orientation-tool' ),
			esc_html__( 'We are not collecting nor storing any data from this form. It is completely anonymous and purely informative nature. This means that you can use it any time and as many times you want. Only you will know your results and these results are, by no means, obligatory for you to join recommended teams.', 'contributor-orientation-tool' ),
			esc_html__( 'Please note that this survey will not register you for any Contributor Day. You still need to do that if you want to attend Contributor Day. For more info on that please visit the website for WordCamp you are planning to attend and/or contact its organizers.', 'contributor-orientation-tool' )
		);

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
