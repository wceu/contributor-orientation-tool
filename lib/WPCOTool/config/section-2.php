<?php
/**
 * Shortcode form section 2 config array
 */
return array(
	'headline'  => esc_html__( 'What are you passionate about?', 'contributor-orientation-tool' ),
	'questions' => array(
		array(
			'label' => esc_html__( 'Web development, backend development etc.', 'contributor-orientation-tool' ), // Form field label
			'teams' => array(
				'support',
				'core',
				'themes',
				'plugins',
				'accessibility',
				'tide',
				'cli',
			) // Form field value
		),
		array(
			'label' => esc_html__( 'Writing tests, support codebase for WordPress.org', 'contributor-orientation-tool' ),
			'teams' => array(
				'meta',
				'tide',
				'cli',
			)
		),
		array(
			'label' => esc_html__( 'Helping others', 'contributor-orientation-tool' ),
			'teams' => array(
				'support',
				'training',
			)
		),
		array(
			'label' => esc_html__( 'Mobile apps', 'contributor-orientation-tool' ),
			'teams' => array(
				'mobile',
			)
		),
		array(
			'label' => esc_html__( 'Documentation', 'contributor-orientation-tool' ),
			'teams' => array(
				'core',
				'meta',
				'documentation',
			)
		),
		array(
			'label' => esc_html__( 'Testing', 'contributor-orientation-tool' ),
			'teams' => array(
				'core',
				'documentation',
				'tide',
				'cli',
			)
		),
		array(
			'label' => esc_html__( 'Web design', 'contributor-orientation-tool' ),
			'teams' => array(
				'design',
			)
		),
		array(
			'label' => esc_html__( 'Content creation', 'contributor-orientation-tool' ),
			'teams' => array(
				'support',
				'polyglots',
				'training',
				'tv',
				'meta',
			)
		),
		array(
			'label' => esc_html__( 'Marketing', 'contributor-orientation-tool' ),
			'teams' => array(
				'marketing',
			)
		),
		array(
			'label' => esc_html__( 'Organising a meetup and helping the community', 'contributor-orientation-tool' ),
			'teams' => array(
				'community',
			)
		),
		array(
			'label' => esc_html__( 'Translation', 'contributor-orientation-tool' ),
			'teams' => array(
				'polyglots',
			)
		),
		array(
			'label' => esc_html__( 'Accessibility', 'contributor-orientation-tool' ),
			'teams' => array(
				'accessibility',
			)
		),
	)
);
