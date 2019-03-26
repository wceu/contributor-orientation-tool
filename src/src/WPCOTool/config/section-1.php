<?php
/**
 * Shortcode form section 1 config array
 */
return array(
	'headline' => esc_html__( 'What do you do with WordPress', 'contributor-orientation-tool' ),
	'questions' => array(
		array(
			'name' => 'developer', // Form field name attribute
			'label' => esc_html__( 'I\'m developer', 'contributor-orientation-tool' ), // Form field label
			'teams' => array(
				'support',
				'community',
				'core',
				'meta',
				'themes',
				'plugins',
				'documentation',
				'mobile',
				'accessibility',
				'tide',
			) // Form field value
		),
		array(
			'name' => 'designer',
			'label' => esc_html__( 'I\'m designer', 'contributor-orientation-tool' ),
			'teams' => array(
				'support',
				'community',
				'documentation',
				'design',
				'mobile',
			)
		),
		array(
			'name' => 'content',
			'label' => esc_html__( 'I\'m content creator, blogger or marketeer', 'contributor-orientation-tool' ),
			'teams' => array(
				'support',
				'community',
				'polyglots',
				'training',
				'marketing',
				'tv',
				'documentation',
			)
		),
		array(
			'name' => 'user',
			'label' => esc_html__( 'I\'m WordPress user  / other', 'contributor-orientation-tool' ),
			'teams' => array(
				'support',
				'community',
				'polyglots',
				'marketing',
				'documentation',
			)
		),
	)
);
