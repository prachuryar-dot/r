import { useState } from 'react';

interface FloatingLabelInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  type?: string;
  className?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const FloatingLabelInput = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  type = 'text',
  className = '',
  onFocus,
  onBlur,
}: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`bg-white! w-full rounded-md border-[1px] p-2.5 text-grey-400 outline-none transition-all duration-300 focus:outline-none active:outline-none ${
          isFocused || value ? 'border-primary-500' : 'border-grey-500'
        } ${className}`}
        placeholder={!isFocused && !value ? placeholder : ''}
      />
      <label
        className={`pointer-events-none absolute left-3 bg-white px-1 transition-all duration-200 ${
          isFocused || value
            ? '-top-2 text-xs font-medium text-grey-400'
            : 'top-3 text-base text-gray-500'
        }`}
      >
        {isFocused || value ? label : ''}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
