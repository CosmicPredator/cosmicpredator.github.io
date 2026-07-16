/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0f0a0d',
          900: '#140e12',
          850: '#1a1317',
          800: '#21181d',
          700: '#2d2128',
          600: '#3d2e37',
        },
        line: 'rgba(255,255,255,0.08)',
        accent: {
          DEFAULT: '#ff9e64',
          soft: '#ffbe93',
          blue: '#fb7185',
          amber: '#f5b971',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        'dash': {
          to: { strokeDashoffset: '0' },
        },
        'pulse-node': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        'flow': {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
        'grid-drift': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'blink': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'pulse-node': 'pulse-node 3s ease-in-out infinite',
        'flow': 'flow 1s linear infinite',
        'grid-drift': 'grid-drift 20s linear infinite',
        'scan': 'scan 6s linear infinite',
        'blink': 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
}
