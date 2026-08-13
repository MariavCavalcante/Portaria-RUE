import type { Config } from 'tailwindcss';

// Paleta institucional definida no prompt (seção 5 — Identidade visual):
// Verde: botões, títulos secundários e estados ativos
// Amarelo: realces e marcadores (nunca como único veículo de significado)
// Azul: cabeçalho, rodapé e elementos institucionais
// Branco: fundos e contraste
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'ses-verde': {
          DEFAULT: '#19A32A',
          dark: '#137A20',
          light: '#E7F6E9',
        },
        'ses-amarelo': {
          DEFAULT: '#FFDE00',
          dark: '#B39B00',
        },
        'ses-azul': {
          DEFAULT: '#00509F',
          dark: '#00396F',
          light: '#E6EEF7',
        },
        'ses-neutro': {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E2E5E9',
          300: '#CBD1D8',
          600: '#5B6572',
          700: '#3F4750',
          800: '#2A2F36',
        },
      },
      fontFamily: {
        sans: [
          'Segoe UI',
          'Inter',
          'system-ui',
          '-apple-system',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
      },
      borderRadius: {
        card: '0.75rem',
      },
    },
  },
  plugins: [],
};

export default config;
