<?php
/**
 * Shortcode form section 2 config array
 */
return array(
	'headline' => esc_html__( 'What Are You Passionate About?', 'contributor-orientation-tool' ),
	'questions' => array(
		array(
			'name' => 'development', // Form field name attribute
			'label' => esc_html__( 'Web development, Backend development, etc...', 'contributor-orientation-tool' ), // Form field label
			'teams' => array(
				'support',
				'core',
				'themes',
				'plugins',
				'accessibility',
				'tide',
			) // Form field value
		),
		array(
			'name' => 'meta',
			'label' => esc_html__( 'Writing tests, Support codebase for WordPress.org.', 'contributor-orientation-tool' ),
			'teams' => array(
				'meta',
				'tide',
			)
		),
		array(
			'name' => 'support',
			'label' => esc_html__( 'Helping others.', 'contributor-orientation-tool' ),
			'teams' => array(
				'support',
				'training',
			)
		),
		array(
			'name' => 'mobile',
			'label' => esc_html__( 'Mobile apps design or development.', 'contributor-orientation-tool' ),
			'teams' => array(
				'mobile',
			)
		),
		array(
			'name' => 'documentation',
			'label' => esc_html__( 'Documentation.', 'contributor-orientation-tool' ),
			'teams' => array(
				'core',
				'meta',
				'documentation',
			)
		),
		array(
			'name' => 'testing',
			'label' => esc_html__( 'Testing.', 'contributor-orientation-tool' ),
			'teams' => array(
				'core',
				'documentation',
				'tide',
			)
		),
		array(
			'name' => 'design',
			'label' => esc_html__( 'Web design.', 'contributor-orientation-tool' ),
			'teams' => array(
				'design',
			)
		),
		array(
			'name' => 'content',
			'label' => esc_html__( 'Content creation.', 'contributor-orientation-tool' ),
			'teams' => array(
				'support',
				'polyglots',
				'training',
				'tv',
				'meta',
			)
		),
		array(
			'name' => 'marketing',
			'label' => esc_html__( 'Marketing.', 'contributor-orientation-tool' ),
			'teams' => array(
				'marketing',
			)
		),
		array(
			'name' => 'community',
			'label' => esc_html__( 'Organizing a meetup or helping community.', 'contributor-orientation-tool' ),
			'teams' => array(
				'community',
			)
		),
		array(
			'name' => 'polyglots',
			'label' => esc_html__( 'Translation.', 'contributor-orientation-tool' ),
			'teams' => array(
				'polyglots',
			)
		),
	)
);
