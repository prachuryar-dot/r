import { Building2, ChevronDown, CircleCheck } from 'lucide-react';
import React, { useState } from 'react';

interface Property {
  id: number;
  name: string;
  location: string;
}

const properties: Property[] = [
  { id: 1, name: 'Sattva hamlet', location: 'Chikkajala, North Bangalore' },
  { id: 2, name: 'Prestige Lakeside', location: 'Whitefield, Bangalore' },
  { id: 3, name: 'Brigade Meadows', location: 'Kanakapura, Bangalore' },
  { id: 4, name: 'Sobha Dream Acres', location: 'Panathur, Bangalore' },
  { id: 5, name: 'Purva Atmosphere', location: 'Thanisandra, Bangalore' },
];

interface PropertyDropdownProps {
  value: string;
  onChange: (propertyId: string, propertyName: string) => void;
}

const PropertyDropdown: React.FC<PropertyDropdownProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedProperty = properties.find((property) => property.id.toString() === value) || null;

  const handleSelect = (property: Property) => {
    onChange(property.id.toString(), property.name);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <p className="mb-3 font-body text-subheading-md font-semibold text-accent-700">Properties</p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-3 flex w-full items-center justify-between rounded-md border border-grey-300 bg-white p-2.5 text-grey-400"
      >
        <span className={`${!selectedProperty ? 'font-medium' : ''}`}>
          {selectedProperty ? selectedProperty.name : 'Select Property'}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-grey-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg">
          {properties.map((property, index) => {
            const isItemSelected = selectedProperty?.id === property.id;

            return (
              <li key={property.id}>
                <button
                  onClick={() => handleSelect(property)}
                  className={`flex w-full items-center justify-between px-4 py-3 text-left ${isItemSelected ? 'bg-grey-300 transition-colors duration-300' : 'bg-gray-50'} hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 ${index !== properties.length - 1 ? 'border-b border-gray-200' : ''}`}
                  aria-pressed={isItemSelected}
                >
                  <div className="flex gap-1">
                    <Building2 size={16} className="mt-1 text-grey-600" />
                    <div>
                      <p className="font-body text-subheading-sm text-grey-600">{property.name}</p>
                      <p className="font-body text-subheading-xs text-grey-400">
                        {property.location}
                      </p>
                    </div>
                  </div>

                  {isItemSelected && <CircleCheck className="h-5 w-5 text-primary-500" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PropertyDropdown;
