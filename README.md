# contributor-orientation-tool
A WordPress plugin aiming to help new contributors decide which make team/s to contribute to or join at Contributor Day.

## Getting Started
Install [node.js](http://nodejs.org).

	npm install

You are done.

### `npm run start`

Use `npm run start` for on–the–fly updates of your code (templates, js, css)...

### `npm run build`

This will create production ready (minified) verions of the assets in the `build` directory.

## Workflow

Workflow for adding new features is as follows:

* Add new issue 
* Fork repository
* Checkout new brancs with name `feature/name-of-the-feature`, usually name of the issue
* Commit with message `#{issue id} Name of the issue - description`
* Push to the forked repository
* Create pull request to develop branch
* Checkout to develop branch
* Fetch upstream [more info](https://help.github.com/en/articles/syncing-a-fork)

## Local Development environment setup

For local development use [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV), Docker, [wp-env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) or any other local development environment you prefer.

* Clone repository outside your WordPress installation plugins folder
* Run `npm run start` to start development
* Note: Don't make changes to `build` folder as it is regenerated on every compile

## Changing plugin version

Please note: If changing version of the plugin you need to modify version in this files:
* README.txt (also add update description at the end of file for new version)
* lib/WPCOTool/Plugin.php (modify class property: $version)
* contributor-orientation-tool.php (modify plugin header)

## Plugin options

Plugin options are located under Settings admin menu. 

Visit Settings -> Contributor orientation tool page and there you can  disable teams that you don't need. 

## Licence

The WordPress Widget Boilerplate is licensed under the GPL v2 or later.

>This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License, version 2, as published by the Free Software Foundation.

>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

>You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA

## Developers

Miss a feature? Pull requests are welcome.

Hopefully the project will receive contributions from awesome WordPress Developers throughout the world.
