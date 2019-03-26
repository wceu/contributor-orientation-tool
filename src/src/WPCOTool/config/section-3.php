<?php
/**
 * Shortcode form section 3 config array
 */
return array(
	'headline' => esc_html__( 'Do you have experience with or you are eager to try?', 'contributor-orientation-tool' ),
	'questions' => array(
		array(
			'name' => 'support', // Form field name attribute
			'label' => esc_html__( 'Q&A, helping others use program, tech support or any type of support.', 'contributor-orientation-tool' ), // Form field label
			'teams' => array(
				'support',
			) // Form field value
		),
		array(
			'name' => 'community',
			'label' => esc_html__( 'Organizing events, groups, etc...', 'contributor-orientation-tool' ),
			'teams' => array(
				'community',
			)
		),
		array(
			'name' => 'polyglots',
			'label' => esc_html__( 'Writing translations.', 'contributor-orientation-tool' ),
			'teams' => array(
				'polyglots',
			)
		),
		array(
			'name' => 'training',
			'label' => esc_html__( 'Teaching others.', 'contributor-orientation-tool' ),
			'teams' => array(
				'training',
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
			'name' => 'tv',
			'label' => esc_html__( 'Photography, video recording or processing.', 'contributor-orientation-tool' ),
			'teams' => array(
				'tv',
			)
		),
		array(
			'name' => 'core_meta',
			'label' => esc_html__( 'Writing code, fixing bugs, writing developer documentation, etc...', 'contributor-orientation-tool' ),
			'teams' => array(
				'core',
				'meta',
			)
		),
		array(
			'name' => 'themes',
			'label' => esc_html__( 'Creating or editing WordPress themes', 'contributor-orientation-tool' ),
			'teams' => array(
				'themes',
			)
		),
		array(
			'name' => 'plugins',
			'label' => esc_html__( 'Creating or editing WordPress plugins.', 'contributor-orientation-tool' ),
			'teams' => array(
				'plugins',
			)
		),
		array(
			'name' => 'documentation',
			'label' => esc_html__( 'Writing in general. Creating documentations for projects or software.', 'contributor-orientation-tool' ),
			'teams' => array(
				'documentation',
			)
		),
		array(
			'name' => 'design',
			'label' => esc_html__( 'Web design, UX or UI design.', 'contributor-orientation-tool' ),
			'teams' => array(
				'design',
			)
		),
		array(
			'name' => 'mobile',
			'label' => esc_html__( 'Mobile apps development or design.', 'contributor-orientation-tool' ),
			'teams' => array(
				'mobile',
			)
		),
		array(
			'name' => 'accessibility',
			'label' => esc_html__( 'Implementing accessibility standards.', 'contributor-orientation-tool' ),
			'teams' => array(
				'accessibility',
			)
		),
		array(
			'name' => 'tide',
			'label' => esc_html__( 'Writing automated tests.', 'contributor-orientation-tool' ),
			'teams' => array(
				'tide',
			)
		),
	)
);
