import { useState } from 'react';

interface ILogos {
  src: string;
  alt: string;
  href: string;
}

export const useLogos = () => {
  const [logos, setLogos] = useState<ILogos[]>([
    {
      src: 'https://avatars.githubusercontent.com/u/44036562?s=280&v=4',
      alt: 'Github Actions',
      href: 'https://github.com/features/actions',
    },
    {
      src: 'https://pbs.twimg.com/profile_images/1512090708181725184/KAPAXmDg_400x400.jpg',
      alt: 'Cypress',
      href: 'https://www.cypress.io',
    },
    {
      src: 'https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg',
      alt: 'Tailwind',
      href: 'https://tailwindcss.com',
    },
    {
      src: 'https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg',
      alt: 'Prettier',
      href: 'https://prettier.io',
    },
    {
      src: 'https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg',
      alt: 'TypeScript',
      href: 'https://typescriptlang.org',
    },
    {
      src: 'https://vitejs.dev/logo-with-shadow.png',
      alt: 'Vite',
      href: 'https://vitejs.dev',
    },
    {
      src: 'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
      alt: 'Redux',
      href: 'https://redux.js.org',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      alt: 'React',
      href: 'https://reactjs.org',
    },
  ]);

  return { logos, setLogos };
};
