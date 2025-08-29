// stories/CardSlider.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import CardSlider from './cardSlider';

const meta: Meta<typeof CardSlider> = {
  title: 'Atoms/CardSlider',
  component: CardSlider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# CardSlider Component

A high-performance, accessible image slider component optimized for the best user experience with minimal configuration.

## Features

- ✨ **Intelligent Touch & Swipe**: Optimized touch sensitivity and mouse drag support
- 🖱️ **Smart TrackPad Controls**: Perfectly tuned trackPad gestures and scroll controls
- 🚀 **Optimized Lazy Loading**: Performance-tuned preloading for smooth navigation
- ⚡ **Hardware-accelerated animations** with ideal timing (500ms)
- ♿ **Full Accessibility**: Keyboard navigation and screen reader support
- 🔄 **Smart Auto-play**: 4-second intervals with automatic loop when enabled
- 🎨 **Customizable visuals** with optimal defaults

## Usage

\`\`\`tsx
// Basic usage - all performance optimizations included
<CardSlider
  items={images}
  showDots={true}
  showArrows={true}
/>

// Auto-play mode - automatically enables loop and uses optimal timing
<CardSlider
  items={images}
  autoPlay={true}
/>

// Fade animation with lazy loading
<CardSlider
  items={images}
  animationType="fade"
  autoPlay={true}
/>
\`\`\`

## Optimized Defaults
- **Touch sensitivity**: 50px threshold for perfect swipe detection
- **TrackPad sensitivity**: 100ms accumulation for smooth gestures
- **Animation duration**: 500ms for the ideal balance of smooth and responsive
- **Auto-play interval**: 4 seconds for optimal engagement
- **Preload range**: 1 image ahead for best performance
- **Loop behavior**: Automatically enabled with auto-play

Always wrap in a sized container:

\`\`\`tsx
<div className="w-full max-w-4xl overflow-hidden rounded-lg h-96">
  <CardSlider items={images} />
</div>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of image items to display',
      control: { type: 'object' },
    },
    autoPlay: {
      description: 'Enable automatic slideshow with optimal 4s interval and loop',
      control: { type: 'boolean' },
    },
    showDots: {
      description: 'Show dot indicators',
      control: { type: 'boolean' },
    },
    showArrows: {
      description: 'Show arrow navigation',
      control: { type: 'boolean' },
    },
    animationType: {
      description: 'Animation type',
      control: { type: 'select' },
      options: ['slide', 'fade'],
    },
    controlVariant: {
      description: 'Control button style',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'light', 'ghost'],
    },
    controlSize: {
      description: 'Control button size',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImages = [
  {
    id: 'SampleImage1',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&auto=format',
    alt: 'Mountain landscape with snow-capped peaks',
    width: 1200,
    height: 800,
  },
  {
    id: 'SampleImage2',
    src: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1200&h=800&fit=crop&auto=format',
    alt: 'Serene ocean view with crystal clear water',
    width: 1200,
    height: 800,
  },
  {
    id: 'SampleImage3',
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop&auto=format',
    alt: 'Mystical forest path through tall trees',
    width: 1200,
    height: 800,
  },
  {
    id: 'SampleImage4',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop&auto=format',
    alt: 'Desert landscape with golden sand dunes',
    width: 1200,
    height: 800,
  },
  {
    id: 'SampleImage5',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&auto=format',
    alt: 'Urban cityscape at twilight',
    width: 1200,
    height: 800,
  },
];

const defaultDecorator = (Story: React.ComponentType) => (
  <div
    style={{ height: '600px', width: '100%', maxWidth: '1200px' }}
    className="overflow-hidden rounded-lg shadow-xl"
  >
    <Story />
  </div>
);

export const Default: Story = {
  args: {
    items: sampleImages,
    showDots: true,
    showArrows: true,
  },
  decorators: [defaultDecorator],
  parameters: {
    docs: {
      description: {
        story:
          'Default slider with all optimizations enabled. Supports touch/swipe, mouse drag, trackPad gestures, and keyboard navigation.',
      },
    },
  },
};

export const AutoPlay: Story = {
  args: {
    items: sampleImages,
    autoPlay: true,
    showDots: true,
    showArrows: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Auto-play mode with optimal 4-second intervals and automatic loop. Pauses during any user interaction for the best experience.',
      },
    },
  },
  decorators: [defaultDecorator],
};

export const FadeAnimation: Story = {
  args: {
    items: sampleImages,
    animationType: 'fade',
    autoPlay: true,
    showDots: true,
    showArrows: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Smooth fade transitions with auto-play. Perfect for hero sections and image showcases.',
      },
    },
  },
  decorators: [defaultDecorator],
};

export const MinimalControls: Story = {
  args: {
    items: sampleImages,
    showDots: false,
    showArrows: false,
    autoPlay: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Clean, minimal design with hidden controls. Navigation still works via touch, trackPad, and keyboard.',
      },
    },
  },
  decorators: [defaultDecorator],
};

export const LargeGallery: Story = {
  args: {
    items: [...sampleImages, ...sampleImages, ...sampleImages],
    showDots: true,
    showArrows: true,
    animationType: 'slide',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Performance-optimized for large galleries. Only nearby images are loaded, ensuring smooth navigation even with many images.',
      },
    },
  },
  decorators: [defaultDecorator],
};

export const CustomStyling: Story = {
  args: {
    items: sampleImages,
    autoPlay: true,
    controlVariant: 'light',
    controlSize: 'lg',
    showDots: true,
    showArrows: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom control styling with larger, light-variant buttons.',
      },
    },
  },
  decorators: [defaultDecorator],
};
