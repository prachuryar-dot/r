import React from 'react';

interface InterestedInSectionProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const InterestedInSection: React.FC<InterestedInSectionProps> = ({ value, onChange }) => {
  const interests = ['Invest In', 'Home Loan', 'Interior'];

  const handleInterestToggle = (interest: string) => {
    if (value.includes(interest)) {
      onChange(value.filter((item) => item !== interest));
    } else {
      onChange([...value, interest]);
    }
  };

  return (
    <div>
      <h3 className="mb-3 font-body text-subheading-md font-semibold text-accent-700">
        Interested in
      </h3>

      <div className="flex gap-3">
        {interests.map((interest) => (
          <label
            key={interest}
            className={`flex cursor-pointer items-center justify-center rounded-lg border-[1px] border-accent-800 px-4 py-2 transition-all duration-300 ${
              value.includes(interest)
                ? 'border-black bg-black text-white'
                : 'border-accent-800 bg-white text-accent-800 hover:bg-grey-50'
            }`}
          >
            <input
              type="checkbox"
              name="interestedIn"
              value={interest}
              checked={value.includes(interest)}
              onChange={() => handleInterestToggle(interest)}
              className="hidden"
            />
            <span className="select-none text-nowrap font-body text-label-sm font-medium">
              {interest}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default InterestedInSection;
