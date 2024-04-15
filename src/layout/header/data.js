import {
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

export const services = [
  {
    name: 'Data',
    subServices: [
      { name: 'Data Analytics', href: '#', icon: InformationCircleIcon },
      { name: 'Data Management', href: '#', icon: ShieldCheckIcon },
      { name: 'Data Integration', href: '#', icon: GlobeAltIcon },
      { name: 'Data Visualization', href: '#', icon: UsersIcon },
    ],
  },
  {
    name: 'Cloud',
    subServices: [
      { name: 'Cloud Storage', href: '#', icon: InformationCircleIcon },
      { name: 'Cloud Computing', href: '#', icon: ShieldCheckIcon },
      { name: 'Cloud Security', href: '#', icon: GlobeAltIcon },
      { name: 'Cloud Migration', href: '#', icon: UsersIcon },
    ],
  },
  {
    name: 'Generative',
    subServices: [
      { name: 'Generative Design', href: '#', icon: InformationCircleIcon },
      { name: 'Generative Adversarial Networks', href: '#', icon: ShieldCheckIcon },
      { name: 'Generative Art', href: '#', icon: GlobeAltIcon },
      { name: 'Generative Music', href: '#', icon: UsersIcon },
    ],
  },
];

export const products = [
  { name: 'Product 1', href: '#', icon: BookOpenIcon },
  { name: 'Product 2', href: '#', icon: BriefcaseIcon },
  { name: 'Product 3', href: '#', icon: GlobeAltIcon },
  { name: 'Product 4', href: '#', icon: VideoCameraIcon },
];
