'use client';
import {
  HANDSHAKE_ICON,
  MAP_LOCATION_ICON,
  PERSONALIZED_QUOTE_ICON,
  QUICK_REQUIREMENTS_ICON,
  RESERVATION_CONTRACT_ICON,
  SENIOR_ADVISOR_ICON,
} from '@/data/icons';
import { Mail, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button, IconButton } from '../atoms/buttons';
import FloatingLabelInput from '../molecules/detailsForm/floatingInput';
import InterestedInSection from '../molecules/detailsForm/interestedInSection';
import PropertyDropdown from '../molecules/detailsForm/selectPropertyDropodown';

const detailsFormData = [
  {
    id: 'private-callback',
    label: 'Private callback (senior advisor)',
    icon: SENIOR_ADVISOR_ICON,
  },
  {
    id: 'on-site-visit',
    label: 'Free on-site visit',
    icon: MAP_LOCATION_ICON,
  },
  {
    id: 'requirement-check',
    label: 'Submit your property preferences',
    icon: QUICK_REQUIREMENTS_ICON,
  },
  {
    id: 'personalised-quote',
    label: 'Personalised quote & finance options',
    icon: PERSONALIZED_QUOTE_ICON,
  },
  {
    id: 'reservation-contract',
    label: 'Reservation & Contract Concierge',
    icon: RESERVATION_CONTRACT_ICON,
  },
  {
    id: 'aftercare',
    label: 'Seamless possession & premium aftercare',
    icon: HANDSHAKE_ICON,
  },
];

export interface DetailsFormData {
  name: string;
  email?: string;
  phone: string;
  isWhatsappActive: boolean;
  interestedIn: string[];
  property: string;
  propertyName: string;
}

export interface DetailsFormProps {
  onClose?: () => void;
}

const DetailsForm: React.FC<DetailsFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<DetailsFormData>({
    name: '',
    email: '',
    phone: '',
    isWhatsappActive: false,
    interestedIn: [],
    property: '',
    propertyName: '',
  });

  const [formError, setFormError] = useState({
    nameError: '',
    emailError: '',
    phoneError: '',
    propertyError: '',
    interestedInError: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleInterestedInChange = (value: string[]) => {
    setFormData((prev) => ({
      ...prev,
      interestedIn: value,
    }));
  };

  const handlePropertyChange = (propertyId: string, propertyName: string) => {
    setFormData((prev) => ({
      ...prev,
      property: propertyId,
      propertyName: propertyName,
    }));
  };

  const handleDetailsFormSubmit = () => {
    setFormError({
      nameError: '',
      emailError: '',
      phoneError: '',
      propertyError: '',
      interestedInError: '',
    });

    let hasErrors = false;

    if (!formData.name || formData.name.trim().length < 3 || formData.name.trim().length > 18) {
      setFormError((prev) => ({
        ...prev,
        nameError: 'Name must be between 3 to 18 characters long',
      }));
      hasErrors = true;
    }

    if (!formData.email || formData.email.trim() === '') {
      setFormError((prev) => ({
        ...prev,
        emailError: 'Email is required',
      }));
      hasErrors = true;
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email.trim())) {
        setFormError((prev) => ({
          ...prev,
          emailError: 'Please enter a valid email address',
        }));
        hasErrors = true;
      }
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      setFormError((prev) => ({
        ...prev,
        phoneError: 'Please enter a valid 10-digit phone number',
      }));
      hasErrors = true;
    }

    if (!formData.interestedIn.length) {
      setFormError((prev) => ({
        ...prev,
        interestedInError: 'Please select at least one option',
      }));
      hasErrors = true;
    }

    if (!formData.propertyName) {
      setFormError((prev) => ({
        ...prev,
        propertyError: 'Please select a property',
      }));
      hasErrors = true;
    }

    if (hasErrors) return;
  };

  return (
    <section className="flex flex-col overflow-hidden rounded-3xl md:w-[664px]">
      <div className="w-full md:flex">
        <div className="hidden bg-primary-50 px-5 py-10 pr-6 md:flex md:min-w-[293px] md:flex-col md:gap-6">
          <div>
            <Image
              src="/assets/logos/pattem-estates.svg"
              alt="Pattem Estate Logo"
              width={121}
              height={35}
            />
          </div>
          <div className="flex flex-col font-heading text-heading-xl font-bold">
            <span>Your Experience,</span>
            <span className="text-primary-500">Our Priority.</span>
          </div>
          <div className="flex flex-col gap-6">
            {detailsFormData.map((detail) => {
              const Icon = detail.icon;

              return (
                <div key={detail.id} className="flex items-center gap-1">
                  <Icon />
                  <span className="text-paragraph-sm text-grey-500">{detail.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative flex flex-col gap-5 rounded-t-3xl bg-white px-4 md:w-full md:gap-7 md:rounded-none md:pb-16 md:pt-12">
          <div className="top-2 bg-white pt-6 md:hidden">
            <Image
              src="/assets/logos/pattem-estates.svg"
              alt="Pattem Estate Logo"
              width={121}
              height={35}
            />
          </div>
          <IconButton
            variant="light"
            size="sm"
            icon={<X />}
            aria-label="Close"
            className="absolute right-2 top-2 rounded-md p-1"
            onClick={onClose}
          />
          <h2 className="font-heading text-heading-lg font-bold">
            Contact our Property spacialists
          </h2>
          <div className="relative">
            <FloatingLabelInput
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              label="Name"
            />
            {formError.nameError && (
              <p className="absolute top-11 mt-1 font-body text-subheading-xs text-red-500">
                {formError.nameError}
              </p>
            )}
          </div>

          <div className="relative">
            <FloatingLabelInput
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              placeholder="Enter your Email"
              label="Email"
            />
            {formError.emailError && (
              <p className="absolute top-11 mt-1 font-body text-subheading-xs text-red-500">
                {formError.emailError}
              </p>
            )}
          </div>

          <div className="relative">
            <div className="flex items-center">
              <div className="w-11 rounded-l-md border-[1px] border-gray-300 bg-accent-50 p-2.5 text-center">
                +91
              </div>
              <input
                type="text"
                className="w-full rounded-r-md border-grey-300 p-2.5"
                pattern="^[6-9]\d{9}$"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone Number"
              />
            </div>
            {formError.phoneError && (
              <p className="absolute top-11 mt-1 font-body text-subheading-xs text-red-500">
                {formError.phoneError}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="whatsapp"
              name="isWhatsappActive"
              checked={formData.isWhatsappActive}
              onChange={handleChange}
              className="h-4 w-4 rounded-[3px] border border-primary-500 checked:border-primary-500 checked:bg-primary-500 checked:text-primary-500 focus:ring-2 focus:ring-primary-500"
            />
            <p className="text-subheading-xs text-accent-700">
              Do you have Whatsapp activated on this number?
            </p>
          </div>

          <div className="flex flex-col gap-5 md:flex-col-reverse">
            <div className="relative">
              <InterestedInSection
                value={formData.interestedIn}
                onChange={handleInterestedInChange}
              />
              {formError.interestedInError && (
                <p className="absolute mt-1 font-body text-subheading-xs text-red-500">
                  {formError.interestedInError}
                </p>
              )}
            </div>

            <div className="relative">
              <PropertyDropdown value={formData.property} onChange={handlePropertyChange} />
              {formError.propertyError && (
                <p className="absolute mt-1 font-body text-subheading-xs text-red-500">
                  {formError.propertyError}
                </p>
              )}
            </div>
          </div>

          <Button
            variant="primary"
            size="sm"
            className="mb-6 mt-5 w-full md:mb-0"
            onClick={handleDetailsFormSubmit}
          >
            Request Call back
          </Button>
        </div>
      </div>
      <div className="flex bg-grey-100 px-5 py-2 text-grey-500 md:w-full md:items-center md:justify-center">
        <div className="md:flex md:items-center">
          <span className="hidden text-paragraph-sm font-semibold md:block">Contact us: </span>
          <Link
            href="tel:+917654323451"
            className="flex items-center gap-1 text-nowrap p-3 font-body text-paragraph-xs md:text-paragraph-sm"
          >
            <Phone size={16} />
            +91 76543 23451
          </Link>
        </div>
        <Link
          href="mailto:samplepattemestates.in"
          className="flex items-center gap-1 p-3 font-body text-paragraph-xs md:text-paragraph-sm"
        >
          <Mail size={16} />
          samplepattemestates.in
        </Link>
      </div>
    </section>
  );
};

export default DetailsForm;
