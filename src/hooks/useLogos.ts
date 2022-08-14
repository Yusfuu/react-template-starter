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
      src: 'https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg',
      alt: 'Vitest',
      href: 'https://vitest.dev',
    },
    {
      src: 'https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png',
      alt: 'Testing Library',
      href: 'https://testing-library.com',
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
      src: 'https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg',
      alt: 'ESLint',
      href: 'https://eslint.org',
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
