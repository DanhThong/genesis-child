const plugin = require( 'tailwindcss/plugin' );

module.exports = {
	purge: {
		content: [ './**/*.php', './src/components/*.js' ],
		layers: [ 'utilities' ],
		mode: 'layers',
	},
	theme: {
		fontSize: {
			10: '0.625rem',
			12: '0.75rem',
			14: '0.875rem',
			16: '1rem',
			18: '1.125rem',
			20: '1.25rem',
			21: '1.3125rem',
			24: '1.5rem',
			26: '1.625rem',
			28: '1.75rem',
			32: '2rem',
			48: '3rem',
			60: '3.75rem',
		},
		fontFamily: {
			timesNewRoman: 'Times New Roman, serif',
		},
		lineHeight: {
			16: '1rem',
			20: '1.25rem',
			24: '1.5rem',
			28: '1.75rem',
			32: '2rem',
			36: '2.25rem',
			40: '2.5rem',
			42: '2.625rem',
			48: '3rem',
			52: '3.25rem',
			56: '3.5rem',
			60: '3.75rem',
			64: '4rem',
		},
		spacing: {
			px: '1px',
			0: '0',
			1: '0.0625rem',
			2: '0.125rem',
			4: '0.25rem',
			8: '0.5rem',
			10: '0.625rem',
			12: '0.75rem',
			15: '0.9375rem',
			16: '1rem',
			18: '1.125rem',
			20: '1.25rem',
			24: '1.5rem',
			32: '2rem',
			48: '3rem',
			64: '4rem',
			96: '6rem',
			128: '8rem',
		},
		boxShadow: {
			none: 'none',
			20: '0 0 1px 0 rgba(48,49,51,0.05), 0 1px 3px 0 rgba(48,49,51,0.1)',
			40: '0 0 1px 0 rgba(48,49,51,0.05), 0 2px 4px 0 rgba(48,49,51,0.1)',
			50: '0 0 1px 0 rgba(48,49,51,0.05), 0 4px 8px 0 rgba(48,49,51,0.1)',
			60: '0 0 1px 0 rgba(139,120,254,0.05), 0 4px 8px 0 rgba(139,120,254,0.1)',
			80: '0 0 1px 0 rgba(139,120,254,0.05), 0 8px 16px 0 rgba(139,120,254,0.1)',
			100: '0 0 1px 0 rgba(139,120,254,0.05), 0 16px 24px 0 rgba(139,120,254,0.1)',
			sharp: '0 0 0 1pt #4688F1',
		},
		screens: {
			phone: '414px',
			'tablet-portrait': '600px',
			'wp-admin-bar': '783px',
			'tablet-landscape': '900px',
			'tablet-1024': '1024px',
			'desktop-min': { min: '1200px' },
			desktop: '1200px',
			'desktop-large': '1600px',
		},
		container: {
			center: true,
			screens: {
				phone: '100%',
				desktop: '1200px',
			},
		},
		colors: {
			primary: {
				DEFAULT: '#4285f4',
			},
			secondary: {
				DEFAULT: '#34a853',
			},
			third: {
				DEFAULT: '#3C3C3C',
			},
			success: '#34a853',
			warning: '#fbbc05',
			error: '#ea4335',
			grey: '#ccc',
			white: '#fff',
			black: '#000',
			transparent: 'transparent',
			current: 'currentColor',
		},
		extend: {
			backgroundOpacity: {
				10: '0.1',
			},
			borderRadius: {
				6: '0.375rem',
				24: '1.5rem',
				full: '50%',
			},
			zIndex: {
				'-1': '-1',
			},
			transitionDuration: {
				0: '0ms',
			},
			keyframes: {
				'scale-down': {
					'0%': {
						opacity: 1,
						transform: 'scale(1.666667)',
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				'scale-down': 'scale-down 1.5s linear',
			},
		},
	},
	variants: {},
	plugins: [
		plugin( function ( { addUtilities, config } ) {
			const newUtilities = {
				// .title classes
				'.title-1': {
					fontSize: config( 'theme.fontSize.48' ),
					lineHeight: config( 'theme.lineHeight.60' ),
				},
				'.body': {
					fontSize: config( 'theme.fontSize.16' ),
					lineHeight: config( 'theme.lineHeight.24' ),
				},
			};
			addUtilities( newUtilities );
		} ),
		plugin( function ( { addComponents, config } ) {
			const screenReaderText = {
				'.screen-reader-text': {
					clip: 'rect(1px, 1px, 1px, 1px)',
					height: '1px',
					overflow: 'hidden',
					position: 'absolute',
					whiteSpace: 'nowrap',
					width: '1px',
					'&:hover,&:active,&:focus': {
						backgroundColor: config( 'theme.colors.black' ),
						clip: 'auto',
						color: config( 'theme.colors.white' ),
						display: 'block',
						fontSize: config( 'theme.fontSize.base' ),
						fontWeight: config( 'theme.fontWeight.medium' ),
						height: 'auto',
						left: '5px',
						lineHeight: 'normal',
						padding: config( 'theme.spacing.8' ),
						textDecoration: 'none',
						top: '5px',
						width: 'auto',
						zIndex: '100000',
					},
				},
			};

			addComponents( screenReaderText, {
				variants: [ 'hover', 'active', 'focus' ],
			} );
		} ),
	],
};
