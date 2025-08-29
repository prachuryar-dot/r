import { render, screen } from '@testing-library/react';
import H1 from '@/components/designSystem/typography/H1';
import H2 from '@/components/designSystem/typography/H2';
import H3 from '@/components/designSystem/typography/H3';
import H4 from '@/components/designSystem/typography/H4';
import Text from '@/components/designSystem/typography/Text';

describe('Typography Components Integration', () => {
  it('should render H1 with correct semantic HTML', () => {
    render(<H1>Test Heading 1</H1>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test Heading 1');
  });

  it('should render H2 with correct semantic HTML and as prop', () => {
    render(<H2 as="h2">Test Heading 2</H2>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test Heading 2');
  });

  it('should render H3 with correct semantic HTML and as prop', () => {
    render(<H3 as="h3">Test Heading 3</H3>);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test Heading 3');
  });

  it('should render H4 with correct semantic HTML and as prop', () => {
    render(<H4 as="h4">Test Heading 4</H4>);
    const heading = screen.getByRole('heading', { level: 4 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test Heading 4');
  });

  it('should render Text with paragraph variant', () => {
    render(<Text variant="paragraph">Test paragraph text</Text>);
    const paragraph = screen.getByText('Test paragraph text');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName.toLowerCase()).toBe('p');
  });

  it('should render Text with label variant', () => {
    render(<Text variant="label">Test label text</Text>);
    const label = screen.getByText('Test label text');
    expect(label).toBeInTheDocument();
  });

  it('should preserve custom className', () => {
    render(<H1 className="custom-class">Test</H1>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('custom-class');
  });

  it('should render with different sizes', () => {
    render(
      <Text variant="paragraph" size="lg">
        Large text
      </Text>,
    );
    const text = screen.getByText('Large text');
    expect(text).toBeInTheDocument();
  });
});
