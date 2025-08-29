import React, { useState, useMemo } from 'react';
import { Copy, Check, Search, Type, Eye } from 'lucide-react';
import { clsx } from 'clsx';

// Typography data structure
interface TypographyExample {
  name: string;
  class: string;
  description: string;
  example: string;
  usage: string;
}

interface TypographyCategory {
  title: string;
  description: string;
  examples: TypographyExample[];
}

const typographyData: TypographyCategory[] = [
  {
    title: 'Headings',
    description: 'Raleway font family with 140% line-height and 4% letter-spacing',
    examples: [
      {
        name: 'Heading XS',
        class: 'font-heading text-heading-xs font-medium',
        description: 'Small section headers, captions, and fine details',
        example: 'Section Header',
        usage: 'font-heading text-heading-xs font-medium',
      },
      {
        name: 'Heading SM',
        class: 'font-heading text-heading-sm font-medium',
        description: 'Subsection headers and minor titles',
        example: 'Subsection Title',
        usage: 'font-heading text-heading-sm font-medium',
      },
      {
        name: 'Heading MD',
        class: 'font-heading text-heading-md font-medium',
        description: 'Section headers and content titles',
        example: 'Content Section',
        usage: 'font-heading text-heading-md font-medium',
      },
      {
        name: 'Heading LG',
        class: 'font-heading text-heading-lg font-medium',
        description: 'Page headers and major sections',
        example: 'Page Header',
        usage: 'font-heading text-heading-lg font-medium',
      },
      {
        name: 'Heading XL',
        class: 'font-heading text-heading-xl font-medium',
        description: 'Main page titles and hero sections',
        example: 'Main Title',
        usage: 'font-heading text-heading-xl font-medium',
      },
      {
        name: 'Heading 2XL',
        class: 'font-heading text-heading-2xl font-medium',
        description: 'Hero titles and prominent displays',
        example: 'Hero Title',
        usage: 'font-heading text-heading-2xl font-medium',
      },
    ],
  },
  {
    title: 'Paragraphs',
    description: 'Montserrat font family with 170% line-height for optimal readability',
    examples: [
      {
        name: 'Paragraph XS',
        class: 'font-body text-paragraph-xs',
        description: 'Small body text, captions, and fine print',
        example:
          'This is small body text ideal for legal disclaimers, captions, and supplementary information that needs to be present but not prominent.',
        usage: 'font-body text-paragraph-xs',
      },
      {
        name: 'Paragraph SM',
        class: 'font-body text-paragraph-sm',
        description: 'Standard body text for most content',
        example:
          'This is the default size for regular paragraphs, descriptions, and general content that makes up the bulk of your text. It provides excellent readability with proper line spacing.',
        usage: 'font-body text-paragraph-sm',
      },
      {
        name: 'Paragraph MD',
        class: 'font-body text-paragraph-md',
        description: 'Larger body text for emphasis',
        example:
          'This is larger body text for important content, featured descriptions, or when you want to draw more attention to the text content while maintaining readability.',
        usage: 'font-body text-paragraph-md',
      },
      {
        name: 'Paragraph LG',
        class: 'font-body text-paragraph-lg',
        description: 'Large body text for featured content',
        example:
          'This is large body text perfect for lead paragraphs, important announcements, or content that needs to stand out from regular body text while maintaining excellent readability.',
        usage: 'font-body text-paragraph-lg',
      },
    ],
  },
  {
    title: 'Sub-headings',
    description: 'Montserrat font family with 140% line-height for content hierarchy',
    examples: [
      {
        name: 'Subheading XS',
        class: 'font-body text-subheading-xs font-medium',
        description: 'Small sub-sections and minor content headers',
        example: 'Minor Section',
        usage: 'font-body text-subheading-xs font-medium',
      },
      {
        name: 'Subheading SM',
        class: 'font-body text-subheading-sm font-medium',
        description: 'Sub-sections and content groupings',
        example: 'Content Group',
        usage: 'font-body text-subheading-sm font-medium',
      },
      {
        name: 'Subheading MD',
        class: 'font-body text-subheading-md font-medium',
        description: 'Content sections and article headers',
        example: 'Article Section',
        usage: 'font-body text-subheading-md font-medium',
      },
      {
        name: 'Subheading LG',
        class: 'font-body text-subheading-lg font-medium',
        description: 'Major sections and important content headers',
        example: 'Major Section',
        usage: 'font-body text-subheading-lg font-medium',
      },
      {
        name: 'Subheading XL',
        class: 'font-body text-subheading-xl font-medium',
        description: 'Important sections and featured content headers',
        example: 'Featured Content',
        usage: 'font-body text-subheading-xl font-medium',
      },
    ],
  },
  {
    title: 'Labels',
    description: 'Montserrat font family with 120% line-height for compact text',
    examples: [
      {
        name: 'Label XS',
        class: 'font-body text-label-xs',
        description: 'Small form labels, tags, and compact text',
        example: 'Small Label',
        usage: 'font-body text-label-xs',
      },
      {
        name: 'Label SM',
        class: 'font-body text-label-sm',
        description: 'Form labels, buttons, and navigation items',
        example: 'Form Label',
        usage: 'font-body text-label-sm',
      },
      {
        name: 'Label MD',
        class: 'font-body text-label-md',
        description: 'Navigation, buttons, and prominent labels',
        example: 'Navigation Item',
        usage: 'font-body text-label-md',
      },
      {
        name: 'Label LG',
        class: 'font-body text-label-lg',
        description: 'Prominent labels and featured text',
        example: 'Featured Label',
        usage: 'font-body text-label-lg',
      },
      {
        name: 'Label XL',
        class: 'font-body text-label-xl',
        description: 'Featured labels and prominent text elements',
        example: 'Featured Text',
        usage: 'font-body text-label-xl',
      },
    ],
  },
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
        <Check className="h-3 w-3 text-green-600" />
      ) : (
        <Copy className="h-3 w-3 text-grey-600" />
      )}
      <span className="text-grey-700">{copied ? 'Copied!' : label || text}</span>
    </button>
  );
};

interface TypographyExampleProps {
  example: TypographyExample;
}

const TypographyExample: React.FC<TypographyExampleProps> = ({ example }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-grey-200 bg-white shadow-sm">
      <div className="p-4">
        <div className="mb-3">
          <h3 className="mb-1 font-medium text-accent-800">{example.name}</h3>
          <p className="mb-3 text-sm text-grey-600">{example.description}</p>
        </div>

        <div className="mb-4">
          <div className={clsx(example.class, 'mb-2 text-accent-800')}>{example.example}</div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-grey-600">Class:</span>
            <CopyButton text={example.usage} label="Copy" />
          </div>
          <code className="block rounded bg-grey-100 px-2 py-1 font-mono text-xs">
            {example.usage}
          </code>
        </div>
      </div>
    </div>
  );
};

interface TypographyCategoryProps {
  category: TypographyCategory;
}

const TypographyCategory: React.FC<TypographyCategoryProps> = ({ category }) => (
  <div className="mb-8">
    <div className="mb-4">
      <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-accent-800">
        <Type className="h-5 w-5" />
        {category.title}
      </h3>
      <p className="text-grey-700">{category.description}</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {category.examples.map((example, index) => (
        <TypographyExample key={index} example={example} />
      ))}
    </div>
  </div>
);

const FontWeights: React.FC = () => {
  const weights = [
    { name: 'Regular', class: 'font-regular', weight: '400' },
    { name: 'Medium', class: 'font-medium', weight: '500' },
    { name: 'Semibold', class: 'font-semibold', weight: '600' },
    { name: 'Bold', class: 'font-bold', weight: '700' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="mb-6 text-2xl font-bold text-accent-800">Font Weights</h2>
      <p className="text-grey-700 mb-6">
        Available font weights for both Raleway (headings) and Montserrat (body) fonts.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {weights.map((weight) => (
          <div
            key={weight.name}
            className="rounded-lg border border-grey-200 bg-white p-4 shadow-sm"
          >
            <div className="mb-3">
              <h3 className="mb-1 font-medium text-accent-800">{weight.name}</h3>
              <p className="text-sm text-grey-600">Weight: {weight.weight}</p>
            </div>

            <div className="space-y-2">
              <div className={clsx(weight.class, 'text-heading-md text-accent-800')}>
                Heading Text
              </div>
              <div className={clsx(weight.class, 'text-paragraph-sm text-accent-600')}>
                Body text example
              </div>
            </div>

            <div className="mt-3">
              <CopyButton text={weight.class} label="Copy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const UsageExamples: React.FC = () => {
  const examples = [
    {
      title: 'Article Layout',
      description: 'Complete article with proper typography hierarchy',
      content: (
        <div className="space-y-4">
          <h1 className="font-heading text-heading-2xl font-bold text-accent-800">
            Main Article Title
          </h1>
          <p className="font-body text-paragraph-lg text-accent-600">
            This is the lead paragraph that introduces the article. It uses larger paragraph text to
            draw attention and provide context for the content that follows.
          </p>
          <h2 className="font-heading text-heading-lg font-semibold text-accent-700">
            Section Header
          </h2>
          <p className="font-body text-paragraph-md text-accent-600">
            This is the main content paragraph. It uses standard paragraph styling with proper line
            height for optimal readability and comfortable reading experience.
          </p>
          <h3 className="font-body text-subheading-md font-medium text-accent-700">Subsection</h3>
          <p className="font-body text-paragraph-sm text-accent-600">
            This subsection uses smaller paragraph text for supporting content and details.
          </p>
        </div>
      ),
    },
    {
      title: 'Form Layout',
      description: 'Form with proper label and input typography',
      content: (
        <div className="space-y-4">
          <h2 className="font-heading text-heading-lg font-semibold text-accent-800">
            Contact Form
          </h2>
          <div className="space-y-3">
            <div>
              <label
                htmlFor="full-name"
                className="mb-1 block font-body text-label-sm text-accent-700"
              >
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                className="input w-full"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                htmlFor="email-address"
                className="mb-1 block font-body text-label-sm text-accent-700"
              >
                Email Address
              </label>
              <input
                id="email-address"
                type="email"
                className="input w-full"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block font-body text-label-sm text-accent-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="input h-24 w-full"
                placeholder="Enter your message"
              />
            </div>
            <button className="btn-primary">
              <span className="font-body text-label-md">Submit Form</span>
            </button>
          </div>
        </div>
      ),
    },
    {
      title: 'Card Layout',
      description: 'Card component with proper typography hierarchy',
      content: (
        <div className="card p-6">
          <h3 className="mb-2 font-heading text-heading-md font-semibold text-accent-800">
            Card Title
          </h3>
          <p className="mb-4 font-body text-paragraph-sm text-accent-600">
            This is the card description that provides context and details about the card content.
          </p>
          <div className="flex gap-2">
            <span className="rounded bg-accent-50 px-2 py-1 font-body text-label-xs text-accent-500">
              Tag
            </span>
            <span className="rounded bg-primary-50 px-2 py-1 font-body text-label-xs text-primary-600">
              Primary
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="mb-6 text-2xl font-bold text-accent-800">Usage Examples</h2>
      <p className="text-grey-700 mb-6">
        Real-world examples showing how to combine typography classes for different layouts and use
        cases.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((example, index) => (
          <div key={index} className="space-y-3">
            <div>
              <h3 className="mb-1 font-semibold text-accent-800">{example.title}</h3>
              <p className="text-sm text-grey-600">{example.description}</p>
            </div>
            <div className="rounded-lg bg-grey-50 p-4">{example.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export interface TypographyProps {
  variant?: 'all' | 'examples' | 'weights' | 'usage';
}

export const Typography: React.FC<TypographyProps> = ({ variant = 'all' }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return typographyData;

    return typographyData
      .map((category) => ({
        ...category,
        examples: category.examples.filter(
          (example) =>
            example.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            example.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            example.usage.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      }))
      .filter((category) => category.examples.length > 0);
  }, [searchTerm]);

  const renderExamples = () => (
    <div className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-accent-800">Typography System</h1>
          <p className="text-grey-700">
            Comprehensive typography guide with proper hierarchy and usage patterns
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-grey-500" />
          <input
            type="text"
            placeholder="Search typography..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-grey-300 py-2 pl-9 pr-4 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 sm:w-64"
          />
        </div>
      </div>

      <div className="rounded-lg border border-primary-200 bg-primary-50 p-4">
        <div className="flex items-start gap-3">
          <Eye className="mt-0.5 h-5 w-5 text-primary-600" />
          <div>
            <h3 className="text-primary-800 mb-1 font-semibold">Typography Standards</h3>
            <p className="text-primary-700 text-sm">
              All typography follows established standards: Headings (140% line-height), Paragraphs
              (170% line-height), Sub-headings (140% line-height), and Labels (120% line-height).
            </p>
          </div>
        </div>
      </div>

      {filteredCategories.map((category, index) => (
        <TypographyCategory key={index} category={category} />
      ))}

      {filteredCategories.length === 0 && searchTerm && (
        <div className="py-12 text-center">
          <Search className="mx-auto mb-4 h-12 w-12 text-grey-400" />
          <h3 className="text-grey-900 mb-2 text-lg font-medium">No typography found</h3>
          <p className="text-grey-600">Try adjusting your search term</p>
        </div>
      )}
    </div>
  );

  switch (variant) {
    case 'examples':
      return renderExamples();
    case 'weights':
      return <FontWeights />;
    case 'usage':
      return <UsageExamples />;
    case 'all':
    default:
      return (
        <div className="space-y-12">
          {renderExamples()}
          <div className="border-t border-grey-200 pt-12">
            <FontWeights />
          </div>
          <div className="border-t border-grey-200 pt-12">
            <UsageExamples />
          </div>
        </div>
      );
  }
};
