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
        }}
        disableHeader={true}

        // NOTE: custom images will only take effect if previewImages is true and
        // if the image has a valid preview image defined in recordMap.preview_images[src]
      />
    </Fragment>
  );
};
