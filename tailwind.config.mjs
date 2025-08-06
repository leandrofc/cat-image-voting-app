/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
    	colors: {
    		white: '#ffffff',
    		black: '#000000',
    		gray: {
    			'300': '#E8EAED',
    			'900': '#66686D'
    		},
    		orange: {
    			'700': '#FD6841'
    		},
    		transparent: 'transparent',
    		current: 'currentColor'
    	},
    	fontSize: {
    		sm: 12,
    		md: 16,
    		lg: 24,
    		xl: 36,
    		xxl: 72
    	},
    	extend: {
    		fontFamily: {
    			sans: [
    				'Inter',
    				'Arial',
    				'sans-serif'
    			]
    		},
    		keyframes: {
    			spinVariable: {
    				'0%': {
    					transform: 'rotate(0deg)'
    				},
    				'50%': {
    					transform: 'rotate(180deg)',
    					animationTimingFunction: 'ease-in'
    				},
    				'100%': {
    					transform: 'rotate(360deg)',
    					animationTimingFunction: 'ease-out'
    				}
    			}
    		},
    		animation: {
    			'spin-variable': 'spinVariable 1.5s infinite'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
}