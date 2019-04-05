/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './navigation-menu-item-edit';

export const name = 'core/navigation-menu-item';

export const settings = {
	title: __( 'Menu Item (Experimental)' ),

	parent: [ 'core/navigation-menu' ],

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" /></SVG>,

	description: __( 'A single menu item.' ),

	category: 'common',

	attributes: {
		label: {
			type: 'string',
		},
		destination: {
			type: 'string',
		},
	},

	supports: {},

	edit,

	save( { attributes } ) {
		return (
			<li>
				<a href={ attributes.destination }>
					{ attributes.label }
				</a>
			</li>
		);
	},
};

