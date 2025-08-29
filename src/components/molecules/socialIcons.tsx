import Link from 'next/link';
import Image from 'next/image';
import facebook from '@/assets/icons/facebook.svg';
import instagram from '@/assets/icons/instagram.svg';
import twitter from '@/assets/icons/twitter.svg';
import linkedIn from '@/assets/icons/linkedin.svg';
import youtube from '@/assets/icons/youtube.svg';
import grayFacebook from '@/assets/icons/facebook-initial.svg';
import grayInstagram from '@/assets/icons/instagram-initial.svg';
import grayX from '@/assets/icons/x-initial.svg';
import grayLinkedIn from '@/assets/icons/linkedin-initial.svg';
import grayYouTube from '@/assets/icons/youtube-initial.svg';

export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/pattemestate',
    icon: facebook,
    grayIcon: grayFacebook,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/pattemestate',
    icon: instagram,
    grayIcon: grayInstagram,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/pattemestate',
    icon: twitter,
    grayIcon: grayX,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/pattemestate',
    icon: linkedIn,
    grayIcon: grayLinkedIn,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@pattemestate',
    icon: youtube,
    grayIcon: grayYouTube,
  },
];

export const SocialIcons: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="group flex h-14 w-14 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-white hover:text-primary-400"
        >
          <Image
            src={link.grayIcon}
            alt={link.name}
            width={24}
            height={24}
            className="absolute opacity-100 transition-opacity duration-300 group-hover:opacity-0"
          />

          <Image
            src={link.icon}
            alt={link.name}
            width={24}
            height={24}
            className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </Link>
      ))}
    </div>
  );
};
