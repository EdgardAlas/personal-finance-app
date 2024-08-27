import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			screens: {
				'2xl': '1440px',
				'3xl': '1600px',
				'4xl': '1920px',
			},
			colors: {
				// theme

				theme: {
					beige: {
						DEFAULT: 'hsl(var(--theme-beige-500))',
						100: 'hsl(var(--theme-beige-100))',
						500: 'hsl(var(--theme-beige-500))',
					},
					gray: {
						DEFAULT: 'hsl(var(--theme-gray-500))',
						100: 'hsl(var(--theme-gray-100))',
						300: 'hsl(var(--theme-gray-300))',
						500: 'hsl(var(--theme-gray-500))',
						900: 'hsl(var(--theme-gray-900))',
					},
					green: 'hsl(var(--theme-green))',
					yellow: 'hsl(var(--theme-yellow))',
					cyan: 'hsl(var(--theme-cyan))',
					navy: 'hsl(var(--theme-navy))',
					red: 'hsl(var(--theme-red))',
					purple: 'hsl(var(--theme-purple))',
					purple2: 'hsl(var(--theme-purple-2))',
					turquoise: 'hsl(var(--theme-turquoise))',
					brown: 'hsl(var(--theme-brown))',
					magenta: 'hsl(var(--theme-magenta))',
					blue: 'hsl(var(--theme-blue))',
					navyGrey: 'hsl(var(--theme-navy-grey))',
					armyGreen: 'hsl(var(--theme-army-green))',
					gold: 'hsl(var(--theme-gold))',
					orange: 'hsl(var(--theme-orange))',
					white: 'hsl(var(--theme-white))',
				},

				// shadcn
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
