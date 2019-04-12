<?php
/**
 * Shortcode form section 3 config array
 */
return array(
	'headline'  => esc_html__( 'Are these areas you have experience with or are eager to try?', 'contributor-orientation-tool' ),
	'questions' => array(
		array(
			'label' => esc_html__( 'Q&A, helping others use programmes, support', 'contributor-orientation-tool' ), // Form field label
			'teams' => array(
				'support',
			) // Form field value
		),
		array(
			'label' => esc_html__( 'Organizing events, groups, etc.', 'contributor-orientation-tool' ),
			'teams' => array(
				'community',
			)
		),
		array(
			'label' => esc_html__( 'Writing translations', 'contributor-orientation-tool' ),
			'teams' => array(
				'polyglots',
			)
		),
		array(
			'label' => esc_html__( 'Teaching others', 'contributor-orientation-tool' ),
			'teams' => array(
				'training',
			)
		),
		array(
			'label' => esc_html__( 'Marketing', 'contributor-orientation-tool' ),
			'teams' => array(
				'marketing',
			)
		),
		array(
			'label' => esc_html__( 'Photography, video recording or processing', 'contributor-orientation-tool' ),
			'teams' => array(
				'tv',
			)
		),
		array(
			'label' => esc_html__( 'Writing code, fixing bugs, writing developer documentation etc.', 'contributor-orientation-tool' ),
			'teams' => array(
				'core',
				'meta',
			)
		),
		array(
			'label' => esc_html__( 'Creating or editing WordPress themes', 'contributor-orientation-tool' ),
			'teams' => array(
				'themes',
			)
		),
		array(
			'label' => esc_html__( 'Creating or editing WordPress plugins', 'contributor-orientation-tool' ),
			'teams' => array(
				'plugins',
			)
		),
		array(
			'label' => esc_html__( 'Writing content, creating documentation for projects or software', 'contributor-orientation-tool' ),
			'teams' => array(
				'documentation',
			)
		),
		array(
			'label' => esc_html__( 'Web design, UX or UI design', 'contributor-orientation-tool' ),
			'teams' => array(
				'design',
			)
		),
		array(
			'label' => esc_html__( 'Mobile apps development or design', 'contributor-orientation-tool' ),
			'teams' => array(
				'mobile',
			)
		),
		array(
			'label' => esc_html__( 'Implementing accessibility standards', 'contributor-orientation-tool' ),
			'teams' => array(
				'accessibility',
			)
		),
		array(
			'label' => esc_html__( 'Writing automated tests', 'contributor-orientation-tool' ),
			'teams' => array(
				'tide',
			)
		),
	)
);
