/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryButton: '#F22539',
        primaryButtonHover: '#C00E20',
        secondaryButton: '#BFBFBF',
        buttonText: '#ffffff',
        background: '#F9F9F9',
        backgroundSecondary: '#FFFFFF',
        backgroundNav: '#FFFFFF',
        textColor: '#5E5E5E',
        textColorTitle: '#353535',
      },
      borderRadius: {
        'general': '5px',
      },
      boxShadow: {
        general: '0px 0px 18px -8px rgba(0, 0, 0, 0.1)',
        nav: '0px -9px 18px -3px rgba(0, 0, 0, 0.1)'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '15%': { transform: 'translateX(-10px) rotate(-15deg)' },
          '30%': { transform: 'translateX(10px) rotate(15deg)' },
          '45%': { transform: 'translateX(-8px) rotate(-10deg)' },
          '60%': { transform: 'translateX(8px) rotate(10deg)' },
          '75%': { transform: 'translateX(-4px) rotate(-5deg)' },
          '90%': { transform: 'translateX(4px) rotate(5deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

