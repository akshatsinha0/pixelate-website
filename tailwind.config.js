/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js, jsx, ts,tsx}",
    "./src/components/**/*.{js, jsx, ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#56299D',
        secondary: '#7E61AC',
        accent: '#F6EFEE',
        dark: '#191919'
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Poppins', 'sans-serif']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        ripple: {
          '0%': { opacity: 0.4, transform: 'scale(0.9)' },
          '100%': { opacity: 0, transform: 'scale(2)' }
        },
        tilt: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(1deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        ripple: 'ripple 1s ease-out',
        tilt: 'tilt 10s ease-in-out infinite'
      },
      boxShadow: {
        'neon-lg': '0 0 20px rgba(86,41,157,0.6), 0 0 40px rgba(126,97,172,0.4)'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.19,1,0.22,1)'
      }
    }
  },
  plugins: []
};
