import * as React from 'react';

type Ids = 'facebook' | 'linkedin' | 'instagram' | string

type Props = {
  width: number;
  height: number;
  id: Ids;
};
export const SharedSvgIcons = ({width, id, height}: Props) => {

  switch (id) {
    case 'facebook':
      return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path
          d="M21.8 0H2.2C1 0 0 1 0 2.2v19.6C0 23 1 24 2.2 24H12V14H9v-3h3V8c0-2.5 1-4 4-4h3v3h-1.3c-.9 0-1.7.8-1.7 1.7V11h4l-.5 3H16v10h5.8c1.2 0 2.2-1 2.2-2.2V2.2C24 1 23 0 21.8 0Z" />
      </svg>;
    case 'instagram':
      return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 26 26">
        <path
          d="M7.5 0A7.6 7.6 0 0 0 0 7.5v11C0 22.6 3.4 26 7.5 26h11c4.1 0 7.5-3.4 7.5-7.5v-11C26 3.4 22.6 0 18.5 0Zm0 2h11c3 0 5.5 2.5 5.5 5.5v11c0 3-2.5 5.5-5.5 5.5h-11c-3 0-5.5-2.5-5.5-5.5v-11C2 4.5 4.5 2 7.5 2Zm13 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM13 6a7 7 0 0 0 0 14 7 7 0 0 0 0-14Zm0 2a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5Z" />
      </svg>;
    case 'linkedin':
      return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 26 26">
        <path
          d="M21.1 0H5A4.9 4.9 0 0 0 0 4.9V21C0 23.8 2.2 26 4.9 26H21c2.7 0 4.9-2.2 4.9-4.9V5C26 2.2 23.8 0 21.1 0Zm-13 22H4V10h4ZM5.8 8.5c-1.3 0-2.2-1-2.2-2 0-1.2.9-2 2.2-2 1.4 0 2.2.8 2.2 2 0 1-.8 2-2.2 2ZM22 22h-4v-6.6c0-1.6-.5-2.7-1.9-2.7-1 0-1.6.8-2 1.5V22H9.8V10H14v1.7c.6-.8 1.4-2 3.5-2 2.6 0 4.5 1.7 4.5 5.3v7Z" />
      </svg>;
    default:
      return null;
  }
};
