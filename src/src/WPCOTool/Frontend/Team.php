<?php

namespace WPCOTool\Frontend;

/**
 * Class Team
 * Represents WP.org team
 *
 * @package WPCOTool\Frontend
 */
class Team {

	/**
	 * Team id. Usualy team name with
	 * @var string
	 */
	private $id;

	/**
	 * Team name
	 * @var string
	 */
	private $name;

	public function __construct( string $id, string $name ) {

		$this->id = sanitize_text_field( $id );
		$this->name = sanitize_text_field( $name );

	}

	/**
	 * Return team id
	 * @return string
	 */
	public function get_id() {
		return $this->id;
	}

	/**
	 * Return team name
	 * @return string
	 */
	public function get_name() {
		return $this->name;
	}

}
