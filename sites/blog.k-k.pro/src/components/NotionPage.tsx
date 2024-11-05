'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ExtendedRecordMap } from 'notion-types';
import { Fragment } from 'react';
import { NotionRenderer } from 'react-notion-x';

import { config } from '@/config';

const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection));
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
  ssr: false,
});
const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(async (m) => {
    // Additional prism syntaxes
    const syntaxes = ['go', 'sql', 'yaml', 'docker', 'bash', 'lua', 'perl'];
    await Promise.all(syntaxes.map((syntax) => import(`prismjs/components/prism-${syntax}.js`)));

    return m.Code;
  }),
);

export const NotionPage = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  return (
    <Fragment>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={true}
        rootDomain={config.domain}
        rootPageId={config.rootNotionPageId}
        previewImages={true}
        components={{
          nextImage: Image,
          nextLink: Link,
          Collection,
          Modal,
          Code,
        }}

        // NOTE: custom images will only take effect if previewImages is true and
        // if the image has a valid preview image defined in recordMap.preview_images[src]
      />
    </Fragment>
  );
};
