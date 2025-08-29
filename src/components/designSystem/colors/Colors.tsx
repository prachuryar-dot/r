import React, { useState, useMemo } from 'react';
import { Copy, Check, Search, Palette, Eye, Type, Square, Circle } from 'lucide-react';
import { clsx } from 'clsx';

// Define proper types for the color system
interface ColorShades {
  [key: string]: string;
}

interface ColorData {
  primary: ColorShades;
  accent: ColorShades;
  grey: ColorShades;
  success: ColorShades;
  danger: ColorShades;
}

// Color data from your Tailwind config
const colorData: ColorData = {
  primary: {
    50: '#E7DED0',
    100: '#DACCB5',
    200: '#D1BFA3',
    300: '#C5AF8C',
    400: '#B69B6F',
    500: '#A4824B',
    600: '#83683C',
  },
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
    1000: '#2A2D37',
  },
  grey: {
    50: '#F5F5F5',
    100: '#E7E7E7',
    200: '#D9D9D9',
    300: '#C3C3C3',
    400: '#8A8A8A',
    500: '#484848',
    600: '#1A1A1A',
  },
  success: {
    50: '#E6F7EC',
    100: '#C3EED7',
    500: '#15803D',
    600: '#116233',
  },
  danger: {
    50: '#FDE7E9',
    100: '#FACDD1',
    500: '#B91C1C',
    600: '#991B1B',
  },
};

// Utility types and their descriptions
interface UtilityType {
  key: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const utilityTypes: UtilityType[] = [
  { key: 'bg', name: 'Background', icon: Square, description: 'Background colors' },
  { key: 'text', name: 'Text', icon: Type, description: 'Text colors' },
  { key: 'border', name: 'Border', icon: Square, description: 'Border colors' },
  { key: 'ring', name: 'Ring', icon: Circle, description: 'Focus ring colors' },
  { key: 'shadow', name: 'Shadow', icon: Square, description: 'Drop shadow colors' },
];

interface CopyButtonProps {
  text: string;
  label?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition-colors hover:bg-grey-100"
      title={`Copy ${label || text}`}
    >
      {copied ? (
        <Check className="h-3 w-3 text-success-500" />
      ) : (
        <Copy className="h-3 w-3 text-grey-500" />
      )}
      <span className="text-grey-600">{copied ? 'Copied!' : label || text}</span>
    </button>
  );
};

export interface ColorSwatchProps {
  colorKey: string;
  shade: string;
  hex: string;
  selectedUtility: string;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
  colorKey,
  shade,
  hex,
  selectedUtility,
}) => {
  const getTextColor = (hex: string): string => {
    // Convert hex to RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? 'text-grey-900' : 'text-white';
  };

  const className =
    shade === 'DEFAULT' || shade === 'pure' || shade === 'soft'
      ? `${colorKey}`
      : `${colorKey}-${shade}`;

  const utilityClass = `${selectedUtility}-${className}`;
  const textColor = getTextColor(hex);

  // Function to get the appropriate class name for the utility
  const getUtilityClass = (utility: string, colorClass: string): string => {
    const classMap: Record<string, Record<string, string>> = {
      bg: {
        primary: 'bg-primary',
        'primary-50': 'bg-primary-50',
        'primary-100': 'bg-primary-100',
        'primary-200': 'bg-primary-200',
        'primary-300': 'bg-primary-300',
        'primary-400': 'bg-primary-400',
        'primary-500': 'bg-primary-500',
        'primary-600': 'bg-primary-600',
        accent: 'bg-accent',
        'accent-50': 'bg-accent-50',
        'accent-100': 'bg-accent-100',
        'accent-200': 'bg-accent-200',
        'accent-300': 'bg-accent-300',
        'accent-400': 'bg-accent-400',
        'accent-500': 'bg-accent-500',
        'accent-600': 'bg-accent-600',
        'accent-700': 'bg-accent-700',
        'accent-800': 'bg-accent-800',
        'accent-900': 'bg-accent-900',
        'accent-1000': 'bg-accent-1000',
        grey: 'bg-grey',
        'grey-50': 'bg-grey-50',
        'grey-100': 'bg-grey-100',
        'grey-200': 'bg-grey-200',
        'grey-300': 'bg-grey-300',
        'grey-400': 'bg-grey-400',
        'grey-500': 'bg-grey-500',
        'grey-600': 'bg-grey-600',
        'grey-700': 'bg-grey-700',
        'grey-800': 'bg-grey-800',
        'grey-900': 'bg-grey-900',
        success: 'bg-success',
        'success-50': 'bg-success-50',
        'success-100': 'bg-success-100',
        'success-500': 'bg-success-500',
        'success-600': 'bg-success-600',
        danger: 'bg-danger',
        'danger-50': 'bg-danger-50',
        'danger-100': 'bg-danger-100',
        'danger-500': 'bg-danger-500',
        'danger-600': 'bg-danger-600',
      },
      text: {
        primary: 'text-primary',
        'primary-50': 'text-primary-50',
        'primary-100': 'text-primary-100',
        'primary-200': 'text-primary-200',
        'primary-300': 'text-primary-300',
        'primary-400': 'text-primary-400',
        'primary-500': 'text-primary-500',
        'primary-600': 'text-primary-600',
        'primary-700': 'text-primary-700',
        'primary-800': 'text-primary-800',
        'primary-900': 'text-primary-900',
        accent: 'text-accent',
        'accent-50': 'text-accent-50',
        'accent-100': 'text-accent-100',
        'accent-200': 'text-accent-200',
        'accent-300': 'text-accent-300',
        'accent-400': 'text-accent-400',
        'accent-500': 'text-accent-500',
        'accent-600': 'text-accent-600',
        'accent-700': 'text-accent-700',
        'accent-800': 'text-accent-800',
        'accent-900': 'text-accent-900',
        grey: 'text-grey',
        'grey-50': 'text-grey-50',
        'grey-100': 'text-grey-100',
        'grey-200': 'text-grey-200',
        'grey-300': 'text-grey-300',
        'grey-400': 'text-grey-400',
        'grey-500': 'text-grey-500',
        'grey-600': 'text-grey-600',
        'grey-700': 'text-grey-700',
        'grey-800': 'text-grey-800',
        'grey-900': 'text-grey-900',
        success: 'text-success',
        'success-50': 'text-success-50',
        'success-100': 'text-success-100',
        'success-500': 'text-success-500',
        'success-600': 'text-success-600',
        danger: 'text-danger',
        'danger-50': 'text-danger-50',
        'danger-100': 'text-danger-100',
        'danger-500': 'text-danger-500',
        'danger-600': 'text-danger-600',
      },
      border: {
        primary: 'border-primary',
        'primary-50': 'border-primary-50',
        'primary-100': 'border-primary-100',
        'primary-200': 'border-primary-200',
        'primary-300': 'border-primary-300',
        'primary-400': 'border-primary-400',
        'primary-500': 'border-primary-500',
        'primary-600': 'border-primary-600',
        'primary-700': 'border-primary-700',
        'primary-800': 'border-primary-800',
        'primary-900': 'border-primary-900',
        accent: 'border-accent',
        'accent-50': 'border-accent-50',
        'accent-100': 'border-accent-100',
        'accent-200': 'border-accent-200',
        'accent-300': 'border-accent-300',
        'accent-400': 'border-accent-400',
        'accent-500': 'border-accent-500',
        'accent-600': 'border-accent-600',
        'accent-700': 'border-accent-700',
        'accent-800': 'border-accent-800',
        'accent-900': 'border-accent-900',
        grey: 'border-grey',
        'grey-50': 'border-grey-50',
        'grey-100': 'border-grey-100',
        'grey-200': 'border-grey-200',
        'grey-300': 'border-grey-300',
        'grey-400': 'border-grey-400',
        'grey-500': 'border-grey-500',
        'grey-600': 'border-grey-600',
        'grey-700': 'border-grey-700',
        'grey-800': 'border-grey-800',
        'grey-900': 'border-grey-900',
        success: 'border-success',
        'success-50': 'border-success-50',
        'success-100': 'border-success-100',
        'success-500': 'border-success-500',
        'success-600': 'border-success-600',
        danger: 'border-danger',
        'danger-50': 'border-danger-50',
        'danger-100': 'border-danger-100',
        'danger-500': 'border-danger-500',
        'danger-600': 'border-danger-600',
      },
      ring: {
        primary: 'ring-primary',
        'primary-50': 'ring-primary-50',
        'primary-100': 'ring-primary-100',
        'primary-200': 'ring-primary-200',
        'primary-300': 'ring-primary-300',
        'primary-400': 'ring-primary-400',
        'primary-500': 'ring-primary-500',
        'primary-600': 'ring-primary-600',
        'primary-700': 'ring-primary-700',
        'primary-800': 'ring-primary-800',
        'primary-900': 'ring-primary-900',
        accent: 'ring-accent',
        'accent-50': 'ring-accent-50',
        'accent-100': 'ring-accent-100',
        'accent-200': 'ring-accent-200',
        'accent-300': 'ring-accent-300',
        'accent-400': 'ring-accent-400',
        'accent-500': 'ring-accent-500',
        'accent-600': 'ring-accent-600',
        'accent-700': 'ring-accent-700',
        'accent-800': 'ring-accent-800',
        'accent-900': 'ring-accent-900',
        grey: 'ring-grey',
        'grey-50': 'ring-grey-50',
        'grey-100': 'ring-grey-100',
        'grey-200': 'ring-grey-200',
        'grey-300': 'ring-grey-300',
        'grey-400': 'ring-grey-400',
        'grey-500': 'ring-grey-500',
        'grey-600': 'ring-grey-600',
        'grey-700': 'ring-grey-700',
        'grey-800': 'ring-grey-800',
        'grey-900': 'ring-grey-900',
        success: 'ring-success',
        'success-50': 'ring-success-50',
        'success-100': 'ring-success-100',
        'success-500': 'ring-success-500',
        'success-600': 'ring-success-600',
        danger: 'ring-danger',
        'danger-50': 'ring-danger-50',
        'danger-100': 'ring-danger-100',
        'danger-500': 'ring-danger-500',
        'danger-600': 'ring-danger-600',
      },
      shadow: {
        primary: 'shadow-primary',
        'primary-50': 'shadow-primary-50',
        'primary-100': 'shadow-primary-100',
        'primary-200': 'shadow-primary-200',
        'primary-300': 'shadow-primary-300',
        'primary-400': 'shadow-primary-400',
        'primary-500': 'shadow-primary-500',
        'primary-600': 'shadow-primary-600',
        'primary-700': 'shadow-primary-700',
        'primary-800': 'shadow-primary-800',
        'primary-900': 'shadow-primary-900',
        accent: 'shadow-accent',
        'accent-50': 'shadow-accent-50',
        'accent-100': 'shadow-accent-100',
        'accent-200': 'shadow-accent-200',
        'accent-300': 'shadow-accent-300',
        'accent-400': 'shadow-accent-400',
        'accent-500': 'shadow-accent-500',
        'accent-600': 'shadow-accent-600',
        'accent-700': 'shadow-accent-700',
        'accent-800': 'shadow-accent-800',
        'accent-900': 'shadow-accent-900',
        grey: 'shadow-grey',
        'grey-50': 'shadow-grey-50',
        'grey-100': 'shadow-grey-100',
        'grey-200': 'shadow-grey-200',
        'grey-300': 'shadow-grey-300',
        'grey-400': 'shadow-grey-400',
        'grey-500': 'shadow-grey-500',
        'grey-600': 'shadow-grey-600',
        'grey-700': 'shadow-grey-700',
        'grey-800': 'shadow-grey-800',
        'grey-900': 'shadow-grey-900',
        success: 'shadow-success',
        'success-50': 'shadow-success-50',
        'success-100': 'shadow-success-100',
        'success-500': 'shadow-success-500',
        'success-600': 'shadow-success-600',
        danger: 'shadow-danger',
        'danger-50': 'shadow-danger-50',
        'danger-100': 'shadow-danger-100',
        'danger-500': 'shadow-danger-500',
        'danger-600': 'shadow-danger-600',
      },
    };

    return classMap[utility]?.[colorClass] || '';
  };

  // Demo content based on utility type
  const getDemoContent = (): JSX.Element => {
    switch (selectedUtility) {
      case 'bg':
        return (
          <div
            className={clsx(
              getUtilityClass('bg', className),
              textColor,
              'flex h-20 w-full items-center justify-center rounded-t-lg font-medium',
            )}
          >
            {shade}
          </div>
        );
      case 'text':
        return (
          <div className="flex h-20 w-full items-center justify-center rounded-t-lg bg-grey-50 font-medium">
            <span className={getUtilityClass('text', className)}>{shade}</span>
          </div>
        );
      case 'border':
        return (
          <div
            className="text-grey-800 flex h-20 w-full items-center justify-center rounded-t-lg border-4 bg-grey-50 font-medium"
            style={{ borderColor: hex }}
          >
            <span>{shade}</span>
          </div>
        );
      case 'ring':
        return (
          <div className="flex h-20 w-full items-center justify-center rounded-t-lg bg-grey-50 p-2">
            <div
              className={clsx(
                'flex h-12 w-12 items-center justify-center rounded-full border-2 border-grey-200',
                getUtilityClass('ring', className),
              )}
            >
              <span className="text-grey-800 text-xs font-medium">{shade}</span>
            </div>
          </div>
        );
      case 'shadow':
        return (
          <div className="flex h-20 w-full items-center justify-center rounded-t-lg bg-grey-50 p-2">
            <div
              className="text-grey-800 flex h-12 w-16 items-center justify-center rounded bg-grey-50 text-xs font-medium shadow-lg"
              style={{
                boxShadow: `0 10px 15px -3px ${hex}, 0 4px 6px -2px ${hex}`,
              }}
            >
              {shade}
            </div>
          </div>
        );
      default:
        return (
          <div
            className={clsx(
              getUtilityClass('bg', className),
              textColor,
              'flex h-20 w-full items-center justify-center rounded-t-lg font-medium',
            )}
          >
            {shade}
          </div>
        );
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border border-grey-200 bg-grey-50 shadow-sm">
      {getDemoContent()}
      <div className="space-y-2 p-3">
        <div className="flex items-center justify-between">
          <span className="text-grey-800 font-medium">{shade}</span>
          <CopyButton text={hex} label="Hex" />
        </div>
        <div className="text-xs text-grey-600">{hex}</div>
        <div className="flex items-center justify-between">
          <code className="rounded bg-grey-100 px-2 py-1 text-xs">{utilityClass}</code>
          <CopyButton text={utilityClass} label="Class" />
        </div>
      </div>
    </div>
  );
};

export interface ColorPaletteProps {
  title: string;
  colors: ColorShades;
  colorKey: string;
  selectedUtility: string;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({
  title,
  colors,
  colorKey,
  selectedUtility,
}) => (
  <div className="mb-8">
    <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-accent-800">
      <Palette className="h-5 w-5" />
      {title}
    </h3>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {Object.entries(colors).map(([shade, hex]) => (
        <ColorSwatch
          key={shade}
          colorKey={colorKey}
          shade={shade}
          hex={hex}
          selectedUtility={selectedUtility}
        />
      ))}
    </div>
  </div>
);

interface DesignToken {
  category: string;
  prefix: string;
  colors: ColorShades;
}

const DesignTokens: React.FC = () => {
  const tokens: DesignToken[] = [
    { category: 'Primary', prefix: '--color-primary', colors: colorData.primary },
    { category: 'Accent', prefix: '--color-accent', colors: colorData.accent },
    { category: 'Grey', prefix: '--color-grey', colors: colorData.grey },
    { category: 'Success', prefix: '--color-success', colors: colorData.success },
    { category: 'Danger', prefix: '--color-danger', colors: colorData.danger },
  ];

  return (
    <div className="space-y-6">
      <h2 className="mb-6 text-2xl font-bold text-accent-800">Design Tokens</h2>
      <p className="text-grey-700 mb-6">
        CSS custom properties for your color system. Use these for dynamic styling or integration
        with other frameworks.
      </p>

      {tokens.map(({ category, prefix, colors }) => (
        <div key={category} className="rounded-lg bg-grey-50 p-4">
          <h3 className="mb-3 font-semibold text-accent-800">{category} Colors</h3>
          <div className="space-y-2">
            {Object.entries(colors).map(([shade, hex]) => {
              const cssProperty = `--color-${prefix}-${shade}`;
              return (
                <div
                  key={shade}
                  className="flex items-center justify-between rounded border bg-grey-50 p-2"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="h-6 w-6 rounded border border-grey-300"
                      style={{ backgroundColor: hex }}
                    />
                    <code className="text-grey-800 font-mono text-sm">{cssProperty}</code>
                  </div>
                  <CopyButton text={cssProperty} />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export const GradientShowcase: React.FC = () => (
  <div className="space-y-6">
    <h2 className="mb-6 text-2xl font-bold text-accent-800">Gradients</h2>

    {/* Linear Gradients */}
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-accent-800">Linear Gradients</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Primary Gradients */}
        <div className="space-y-3">
          <h4 className="font-semibold text-accent-800">Primary</h4>
          <div className="flex h-20 items-center justify-center rounded-lg bg-primary-gradient font-semibold text-white">
            bg-primary-gradient
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">bg-primary-gradient</code>
            <CopyButton text="bg-primary-gradient" />
          </div>
          <div className="flex h-20 items-center justify-center rounded-lg bg-primary-gradient-reverse font-semibold text-white">
            bg-primary-gradient-reverse
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">
              bg-primary-gradient-reverse
            </code>
            <CopyButton text="bg-primary-gradient-reverse" />
          </div>
        </div>

        {/* Accent Gradients */}
        <div className="space-y-3">
          <h4 className="font-semibold text-accent-800">Accent</h4>
          <div className="flex h-20 items-center justify-center rounded-lg bg-accent-gradient font-semibold text-white">
            bg-accent-gradient
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">bg-accent-gradient</code>
            <CopyButton text="bg-accent-gradient" />
          </div>
          <div className="flex h-20 items-center justify-center rounded-lg bg-accent-gradient-reverse font-semibold text-white">
            bg-accent-gradient-reverse
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">
              bg-accent-gradient-reverse
            </code>
            <CopyButton text="bg-accent-gradient-reverse" />
          </div>
        </div>

        {/* Grey Gradients */}
        <div className="space-y-3">
          <h4 className="font-semibold text-accent-800">Grey</h4>
          <div className="text-grey-800 flex h-20 items-center justify-center rounded-lg bg-grey-gradient font-semibold">
            bg-grey-gradient
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">bg-grey-gradient</code>
            <CopyButton text="bg-grey-gradient" />
          </div>
          <div className="text-grey-800 flex h-20 items-center justify-center rounded-lg bg-grey-gradient-reverse font-semibold">
            bg-grey-gradient-reverse
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">bg-grey-gradient-reverse</code>
            <CopyButton text="bg-grey-gradient-reverse" />
          </div>
        </div>

        {/* Success Gradients */}
        <div className="space-y-3">
          <h4 className="font-semibold text-accent-800">Success</h4>
          <div className="flex h-20 items-center justify-center rounded-lg bg-success-gradient font-semibold text-white">
            bg-success-gradient
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">bg-success-gradient</code>
            <CopyButton text="bg-success-gradient" />
          </div>
        </div>

        {/* Danger Gradients */}
        <div className="space-y-3">
          <h4 className="font-semibold text-accent-800">Danger</h4>
          <div className="flex h-20 items-center justify-center rounded-lg bg-danger-gradient font-semibold text-white">
            bg-danger-gradient
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">bg-danger-gradient</code>
            <CopyButton text="bg-danger-gradient" />
          </div>
        </div>

        {/* Mixed Gradients */}
        <div className="space-y-3">
          <h4 className="font-semibold text-accent-800">Mixed</h4>
          <div className="flex h-20 items-center justify-center rounded-lg bg-primary-accent-gradient font-semibold text-white">
            bg-primary-accent-gradient
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">
              bg-primary-accent-gradient
            </code>
            <CopyButton text="bg-primary-accent-gradient" />
          </div>
        </div>
      </div>
    </div>

    {/* Radial Gradients */}
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-accent-800">Radial Gradients</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3">
          <h4 className="font-semibold text-accent-800">Primary Radial</h4>
          <div className="flex h-20 items-center justify-center rounded-lg bg-primary-radial font-semibold text-white">
            bg-primary-radial
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">bg-primary-radial</code>
            <CopyButton text="bg-primary-radial" />
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-accent-800">Accent Radial</h4>
          <div className="flex h-20 items-center justify-center rounded-lg bg-accent-radial font-semibold text-white">
            bg-accent-radial
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">bg-accent-radial</code>
            <CopyButton text="bg-accent-radial" />
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-accent-800">Grey Radial</h4>
          <div className="flex h-20 items-center justify-center rounded-lg bg-grey-radial font-semibold text-white">
            bg-grey-radial
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">bg-grey-radial</code>
            <CopyButton text="bg-grey-radial" />
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-accent-800">Success Radial</h4>
          <div className="flex h-20 items-center justify-center rounded-lg bg-success-radial font-semibold text-white">
            bg-success-radial
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">bg-success-radial</code>
            <CopyButton text="bg-success-radial" />
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-accent-800">Danger Radial</h4>
          <div className="flex h-20 items-center justify-center rounded-lg bg-danger-radial font-semibold text-white">
            bg-danger-radial
          </div>
          <div className="flex items-center justify-between">
            <code className="rounded bg-grey-100 px-2 py-1 text-sm">bg-danger-radial</code>
            <CopyButton text="bg-danger-radial" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface OverlayColor {
  name: string;
  class: string;
  opacity: string;
}

const OverlayColors: React.FC = () => {
  const overlayColors: OverlayColor[] = [
    // Primary overlays
    { name: 'Primary Light Overlay', class: 'bg-overlay-primary-light', opacity: '5%' },
    { name: 'Primary Medium Overlay', class: 'bg-overlay-primary-medium', opacity: '10%' },
    { name: 'Primary Strong Overlay', class: 'bg-overlay-primary-strong', opacity: '20%' },
    // Accent overlays
    { name: 'Accent Light Overlay', class: 'bg-overlay-accent-light', opacity: '5%' },
    { name: 'Accent Medium Overlay', class: 'bg-overlay-accent-medium', opacity: '10%' },
    { name: 'Accent Strong Overlay', class: 'bg-overlay-accent-strong', opacity: '20%' },
    // Grey overlays
    { name: 'Grey Light Overlay', class: 'bg-overlay-grey-light', opacity: '5%' },
    { name: 'Grey Medium Overlay', class: 'bg-overlay-grey-medium', opacity: '10%' },
    { name: 'Grey Strong Overlay', class: 'bg-overlay-grey-strong', opacity: '20%' },
    // Success overlays
    { name: 'Success Light Overlay', class: 'bg-overlay-success-light', opacity: '5%' },
    { name: 'Success Medium Overlay', class: 'bg-overlay-success-medium', opacity: '10%' },
    { name: 'Success Strong Overlay', class: 'bg-overlay-success-strong', opacity: '20%' },
    // Danger overlays
    { name: 'Danger Light Overlay', class: 'bg-overlay-danger-light', opacity: '5%' },
    { name: 'Danger Medium Overlay', class: 'bg-overlay-danger-medium', opacity: '10%' },
    { name: 'Danger Strong Overlay', class: 'bg-overlay-danger-strong', opacity: '20%' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="mb-6 text-2xl font-bold text-accent-800">Overlay Colors</h2>
      <p className="text-grey-700 mb-6">
        Comprehensive overlay system for creating depth and layering effects over images and
        backgrounds.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {overlayColors.map(({ name, class: className, opacity }) => (
          <div key={name} className="space-y-2">
            <h3 className="font-semibold text-accent-800">{name}</h3>
            <div className="relative">
              <div className="h-24 w-full rounded-lg bg-primary-gradient"></div>
              <div
                className={clsx(
                  className,
                  'absolute inset-0 flex items-center justify-center rounded-lg font-semibold',
                )}
              >
                <span className={className.includes('strong') ? 'text-white' : 'text-accent-800'}>
                  {opacity} opacity
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <code className="rounded bg-grey-100 px-2 py-1 text-sm">{className}</code>
              <CopyButton text={className} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export interface ColorsProps {
  variant?: 'all' | 'palettes' | 'tokens' | 'gradients' | 'overlays' | 'utilities';
}

export const Colors: React.FC<ColorsProps> = ({ variant = 'all' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUtility, setSelectedUtility] = useState('bg');

  const filteredColors = useMemo((): ColorData => {
    if (!searchTerm) return colorData;

    const filtered: ColorData = {} as ColorData;
    Object.entries(colorData).forEach(([colorKey, shades]) => {
      const matchingShades: ColorShades = {};
      (Object.entries(shades) as [string, string][]).forEach(([shade, hex]) => {
        if (
          colorKey.toLowerCase().includes(searchTerm.toLowerCase()) ||
          shade.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hex.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          matchingShades[shade] = hex;
        }
      });
      if (Object.keys(matchingShades).length > 0) {
        filtered[colorKey as keyof ColorData] = matchingShades;
      }
    });
    return filtered;
  }, [searchTerm]);

  const renderPalettes = (): JSX.Element => (
    <div className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-accent-800">Color System</h1>
          <p className="text-grey-700">
            Comprehensive color palette with interactive utilities and design tokens
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-grey-500" />
            <input
              type="text"
              placeholder="Search colors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-grey-300 py-2 pl-9 pr-4 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 sm:w-64"
            />
          </div>

          <select
            value={selectedUtility}
            onChange={(e) => setSelectedUtility(e.target.value)}
            className="rounded-lg border border-grey-300 px-3 py-2 focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
          >
            {utilityTypes.map(({ key, name }) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-lg border border-primary-200 bg-primary-50 p-4">
          <div className="flex items-start gap-3">
            <Eye className="mt-0.5 h-5 w-5 text-primary-600" />
            <div>
              <h3 className="text-primary-800 mb-1 font-semibold">
                {utilityTypes.find((t) => t.key === selectedUtility)?.name} Utility Preview
              </h3>
              <p className="text-primary-700 text-sm">
                {utilityTypes.find((t) => t.key === selectedUtility)?.description}. Each color shows
                how it looks with the selected utility type.
              </p>
            </div>
          </div>
        </div>
      </div>

      {Object.entries(filteredColors).map(([colorKey, colors]) => (
        <ColorPalette
          key={colorKey}
          title={`${colorKey.charAt(0).toUpperCase() + colorKey.slice(1)} Colors`}
          colors={colors}
          colorKey={colorKey}
          selectedUtility={selectedUtility}
        />
      ))}

      {Object.keys(filteredColors).length === 0 && searchTerm && (
        <div className="py-12 text-center">
          <Search className="mx-auto mb-4 h-12 w-12 text-grey-400" />
          <h3 className="text-grey-900 mb-2 text-lg font-medium">No colors found</h3>
          <p className="text-grey-600">Try adjusting your search term</p>
        </div>
      )}
    </div>
  );

  switch (variant) {
    case 'palettes':
      return renderPalettes();
    case 'tokens':
      return <DesignTokens />;
    case 'gradients':
      return <GradientShowcase />;
    case 'overlays':
      return <OverlayColors />;
    case 'utilities':
      return renderPalettes();
    case 'all':
    default:
      return (
        <div className="space-y-12">
          {renderPalettes()}
          <div className="border-t border-grey-200 pt-12">
            <DesignTokens />
          </div>
          <div className="border-t border-grey-200 pt-12">
            <GradientShowcase />
          </div>
          <div className="border-t border-grey-200 pt-12">
            <OverlayColors />
          </div>
        </div>
      );
  }
};
