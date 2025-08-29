module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './stories/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem', // 1440px, slightly wider than Tailwind's 7xl (80rem)
      },
      colors: {
        // Primary colors (warm browns/golds)
        primary: {
          50: '#E7DED0',
          100: '#DACCB5',
          200: '#D1BFA3',
          300: '#C5AF8C',
          400: '#B69B6F',
          500: '#A4824B', // Main primary color
          600: '#83683C',
          DEFAULT: '#A4824B',
        },

        // Accent colors (blues/greys)
        accent: {
          50: '#E8E9E9',
          100: '#E2E3E4',
          200: '#DBDCDD',
          300: '#D2D3D5',
          400: '#C7C8CA',
          500: '#B9BABD',
          600: '#A8A9AD',
          700: '#929499',
          800: '#77797F',
          900: '#55575F',
          1000: '#2A2D37', // Main accent color
          DEFAULT: '#2A2D37',
        },

        // Grey scale
        grey: {
          50: '#F5F5F5',
          100: '#E7E7E7',
          200: '#D9D9D9',
          300: '#C3C3C3',
          400: '#8A8A8A',
          500: '#484848',
          600: '#1A1A1A', // Main accent color
          DEFAULT: '#1A1A1A',
        },

        // Overlay colors for backgrounds with opacity
        overlay: {
          light: 'rgba(42, 45, 55, 0.05)', // #B9BABD0D
          medium: 'rgba(42, 45, 55, 0.10)', // #B9BABD1A
          strong: 'rgba(42, 45, 55, 0.20)', // #B9BABD33
        },

        // Success (pastel green)
        success: {
          50: '#E6F7EC', // pastel bg
          100: '#C3EED7',
          500: '#15803D', // text
          600: '#116233',
          DEFAULT: '#15803D',
        },
        // Danger (pastel red)
        danger: {
          50: '#FDE7E9', // pastel bg
          100: '#FACDD1',
          500: '#B91C1C', // text
          600: '#991B1B',
          DEFAULT: '#B91C1C',
        },

        // White (using our grey-50)
        white: '#F5F5F5', // Same as grey-50

        // Overlay colors for backgrounds with opacity
        'overlay-primary-light': 'rgba(164, 130, 75, 0.05)',
        'overlay-primary-medium': 'rgba(164, 130, 75, 0.10)',
        'overlay-primary-strong': 'rgba(164, 130, 75, 0.20)',
        'overlay-accent-light': 'rgba(42, 45, 55, 0.05)',
        'overlay-accent-medium': 'rgba(42, 45, 55, 0.10)',
        'overlay-accent-strong': 'rgba(42, 45, 55, 0.20)',
        'overlay-grey-light': 'rgba(72, 72, 72, 0.05)',
        'overlay-grey-medium': 'rgba(72, 72, 72, 0.10)',
        'overlay-grey-strong': 'rgba(72, 72, 72, 0.20)',
        'overlay-success-light': 'rgba(21, 128, 61, 0.05)',
        'overlay-success-medium': 'rgba(21, 128, 61, 0.10)',
        'overlay-success-strong': 'rgba(21, 128, 61, 0.20)',
        'overlay-danger-light': 'rgba(185, 28, 28, 0.05)',
        'overlay-danger-medium': 'rgba(185, 28, 28, 0.10)',
        'overlay-danger-strong': 'rgba(185, 28, 28, 0.20)',
      },

      // Background gradients
      backgroundImage: {
        // Primary gradients
        'primary-gradient':
          'linear-gradient(267.3deg, #CDAB6B 0.17%, #A47F4F 49.47%, #A4824B 98.76%)',
        'primary-gradient-reverse':
          'linear-gradient(87.3deg, #CDAB6B 0.17%, #A47F4F 49.47%, #A4824B 98.76%)',
        'primary-radial': 'radial-gradient(circle at center, #A4824B 0%, #83683C 100%)',

        // Accent gradients
        'accent-gradient': 'linear-gradient(135deg, #2A2D37 0%, #55575F 50%, #77797F 100%)',
        'accent-gradient-reverse': 'linear-gradient(315deg, #2A2D37 0%, #55575F 50%, #77797F 100%)',
        'accent-radial': 'radial-gradient(circle at center, #77797F 0%, #2A2D37 100%)',

        // Grey gradients
        'grey-gradient': 'linear-gradient(180deg, #F5F5F5 0%, #E7E7E7 50%, #D9D9D9 100%)',
        'grey-gradient-reverse': 'linear-gradient(0deg, #F5F5F5 0%, #E7E7E7 50%, #D9D9D9 100%)',
        'grey-radial': 'radial-gradient(circle at center, #E7E7E7 0%, #484848 100%)',

        // Mixed gradients
        'primary-accent-gradient': 'linear-gradient(135deg, #A4824B 0%, #2A2D37 100%)',
        'accent-primary-gradient': 'linear-gradient(135deg, #2A2D37 0%, #A4824B 100%)',
        'primary-grey-gradient': 'linear-gradient(135deg, #A4824B 0%, #484848 100%)',
        'accent-grey-gradient': 'linear-gradient(135deg, #2A2D37 0%, #484848 100%)',

        // Success gradients
        'success-gradient': 'linear-gradient(135deg, #15803D 0%, #116233 100%)',
        'success-radial': 'radial-gradient(circle at center, #15803D 0%, #116233 100%)',

        // Danger gradients
        'danger-gradient': 'linear-gradient(135deg, #B91C1C 0%, #991B1B 100%)',
        'danger-radial': 'radial-gradient(circle at center, #B91C1C 0%, #991B1B 100%)',
      },

      // Typography - Brand fonts with optimized line heights
      fontFamily: {
        // Use CSS variables that Next.js generates
        heading: ['var(--font-raleway)', 'sans-serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'], // Default sans-serif
      },

      // Font sizes with corresponding line heights based on your standards
      fontSize: {
        // Headings (Raleway, 140% line-height)
        'heading-xs': ['12px', { lineHeight: '140%' }],
        'heading-sm': ['14px', { lineHeight: '140%' }],
        'heading-md': ['16px', { lineHeight: '140%' }],
        'heading-lg': ['20px', { lineHeight: '140%' }],
        'heading-xl': ['24px', { lineHeight: '140%' }],
        'heading-2xl': ['32px', { lineHeight: '140%' }],
        'heading-3xl': ['40px', { lineHeight: '140%' }],
        'heading-4xl': ['48px', { lineHeight: '140%' }],
        'heading-5xl': ['56px', { lineHeight: '140%' }],
        'heading-6xl': ['64px', { lineHeight: '140%' }],
        'heading-7xl': ['80px', { lineHeight: '140%' }],

        // Paragraphs (Montserrat, 170% line-height)
        'paragraph-xs': ['12px', { lineHeight: '170%' }],
        'paragraph-sm': ['14px', { lineHeight: '170%' }],
        'paragraph-md': ['16px', { lineHeight: '170%' }],
        'paragraph-lg': ['20px', { lineHeight: '170%' }],
        'paragraph-xl': ['24px', { lineHeight: '170%' }],
        'paragraph-2xl': ['28px', { lineHeight: '170%' }],
        'paragraph-3xl': ['32px', { lineHeight: '170%' }],

        // Sub-headings (Montserrat, 140% line-height)
        'subheading-xs': ['12px', { lineHeight: '140%' }],
        'subheading-sm': ['14px', { lineHeight: '140%' }],
        'subheading-md': ['16px', { lineHeight: '140%' }],
        'subheading-lg': ['20px', { lineHeight: '140%' }],
        'subheading-xl': ['24px', { lineHeight: '140%' }],
        'subheading-2xl': ['28px', { lineHeight: '140%' }],
        'subheading-3xl': ['32px', { lineHeight: '140%' }],

        // Labels (Montserrat, 120% line-height)
        'label-xs': ['12px', { lineHeight: '120%' }],
        'label-sm': ['14px', { lineHeight: '120%' }],
        'label-md': ['16px', { lineHeight: '120%' }],
        'label-lg': ['20px', { lineHeight: '120%' }],
        'label-xl': ['24px', { lineHeight: '120%' }],
        'label-2xl': ['28px', { lineHeight: '120%' }],
        'label-3xl': ['32px', { lineHeight: '120%' }],
      },

      // Font weights
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },

      // Custom shadows using your colors
      boxShadow: {
        'primary-sm': '0 1px 2px 0 rgba(164, 130, 75, 0.05)',
        primary: '0 4px 6px -1px rgba(164, 130, 75, 0.1), 0 2px 4px -1px rgba(164, 130, 75, 0.06)',
        'primary-lg':
          '0 10px 15px -3px rgba(164, 130, 75, 0.1), 0 4px 6px -2px rgba(164, 130, 75, 0.05)',
        'accent-sm': '0 1px 2px 0 rgba(42, 45, 55, 0.05)',
        accent: '0 4px 6px -1px rgba(42, 45, 55, 0.1), 0 2px 4px -1px rgba(42, 45, 55, 0.06)',
        'accent-lg':
          '0 10px 15px -3px rgba(42, 45, 55, 0.1), 0 4px 6px -2px rgba(42, 45, 55, 0.05)',
        'danger-sm': '0 1px 2px 0 rgba(185, 28, 28, 0.05)',
        danger: '0 4px 6px -1px rgba(185, 28, 28, 0.1), 0 2px 4px -1px rgba(185, 28, 28, 0.06)',
        'danger-lg':
          '0 10px 15px -3px rgba(185, 28, 28, 0.1), 0 4px 6px -2px rgba(185, 28, 28, 0.05)',
        'success-sm': '0 1px 2px 0 rgba(21, 128, 61, 0.05)',
        success: '0 4px 6px -1px rgba(21, 128, 61, 0.1), 0 2px 4px -1px rgba(21, 128, 61, 0.06)',
        'success-lg':
          '0 10px 15px -3px rgba(21, 128, 61, 0.1), 0 4px 6px -2px rgba(21, 128, 61, 0.05)',
        'grey-sm': '0 1px 2px 0 rgba(72, 72, 72, 0.05)',
        grey: '0 4px 6px -1px rgba(72, 72, 72, 0.1), 0 2px 4px -1px rgba(72, 72, 72, 0.06)',
        'grey-lg': '0 10px 15px -3px rgba(72, 72, 72, 0.1), 0 4px 6px -2px rgba(72, 72, 72, 0.05)',
      },
    },
  },
  safelist: [
    // Text colors
    'text-grey-50',
    'text-grey-500',
    'text-grey-400',
    'text-primary-500',
    'text-primary-600',
    'text-accent-1000',
    'text-accent-800',
    'text-danger-500',
    'text-danger-600',
    'text-success-500',
    'text-success-600',
    // Background colors
    'bg-primary-500',
    'bg-primary-400',
    'bg-primary-600',
    'bg-accent-1000',
    'bg-accent-800',
    'bg-primary-900',
    'bg-grey-50',
    'bg-grey-100',
    'bg-grey-200',
    'bg-danger-50',
    'bg-danger-100',
    'bg-danger-500',
    'bg-danger-600',
    'bg-success-50',
    'bg-success-100',
    'bg-success-500',
    'bg-success-600',
    // Border colors (for outline)
    'border-primary-500',
    'border-primary-600',
    'border-accent-1000',
    'border-accent-800',
    'border-primary-900',
    'border-grey-50',
    'border-grey-100',
    'border-grey-200',
    'border-danger-500',
    'border-danger-600',
    'border-success-500',
    'border-success-600',
    // Shadow classes
    'shadow-primary',
    'shadow-primary-lg',
    'shadow-accent',
    'shadow-accent-lg',
    'shadow-danger',
    'shadow-danger-lg',
    'shadow-success',
    'shadow-success-lg',
    'shadow-grey',
    'shadow-grey-lg',
    // Gradient classes
    'bg-primary-gradient',
    'bg-primary-gradient-reverse',
    'bg-primary-radial',
    'bg-accent-gradient',
    'bg-accent-gradient-reverse',
    'bg-accent-radial',
    'bg-grey-gradient',
    'bg-grey-gradient-reverse',
    'bg-grey-radial',
    'bg-primary-accent-gradient',
    'bg-accent-primary-gradient',
    'bg-primary-grey-gradient',
    'bg-accent-grey-gradient',
    'bg-success-gradient',
    'bg-success-radial',
    'bg-danger-gradient',
    'bg-danger-radial',
    // Overlay classes
    'bg-overlay-primary-light',
    'bg-overlay-primary-medium',
    'bg-overlay-primary-strong',
    'bg-overlay-accent-light',
    'bg-overlay-accent-medium',
    'bg-overlay-accent-strong',
    'bg-overlay-grey-light',
    'bg-overlay-grey-medium',
    'bg-overlay-grey-strong',
    'bg-overlay-success-light',
    'bg-overlay-success-medium',
    'bg-overlay-success-strong',
    'bg-overlay-danger-light',
    'bg-overlay-danger-medium',
    'bg-overlay-danger-strong',
  ],
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
