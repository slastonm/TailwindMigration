/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    darkMode: 'media',
    extend: {
      colors: {
        default: {
          background: 'green',
          text: '#000',
        },
        light: {
          background: '#ccc',
          text: '#000',
        },
        dark: {
          background: '#777',
          text: '#fff',
        },
      },
      keyframes: {
        // Описуємо keyframes для "стрибаючої" анімації
        textBounce: {
          '0%': {
            transform: 'translate(0,0)' // Початок і кінець без зміщення
          },
          '25%': {
            transform: 'translate(-15px,0)' // В середині — зміщення на 15px вгору
          },
          '75%': {
            transform: 'translate(15px,0)' // В середині — зміщення на 15px вгору
          },
          '100%':{
            transform: 'translate(0,0)' // Початок і кінець без зміщення
          }
        }
      },
      animation: {
        // Створюємо готовий клас 'animate-textBounce'
        textBounce: 'textBounce 1s ease-in-out infinite'
        // animation: name duration timing-function delay iteration-count direction fill-mode;
        // textBounce: {
        //   name: 'textBounce',
        //   duration: '1s',
        //   timingFunction: 'ease-in-out',
        //   iteration: 'infinite'
        // }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      // Описуємо об'єкт з нашими новими утилітами
      const newUtilities = {
        '.rotate-175': {
          transform: 'rotate(175deg)',
        },
      };
      
      // Реєструємо їх в Tailwind
      // addUtilities(newUtilities);
      addUtilities(newUtilities, ['hover','md','lg']);
    }
  ],
}

