import { Title } from '@solidjs/meta';

import { SectionHeader } from '~/components/SectionHeader';
import ChromeIcon from '~/icons/chrome.svg?component-solid';

export default function WordToPdfPage() {
  return (
    <>
      <Title>KK-Forge: Word to PDF</Title>
      <SectionHeader>Word to PDF</SectionHeader>
      <p class="text-slate-100 light:text-gray-800 transition-colors text-xl mb-4">
        Solution for converting Word documents to PDF.
      </p>
      <a
        href="https://chromewebstore.google.com/detail/word-to-pdf/djmlinomlgiincjehoedbklhiongnkhm"
        target="_blank"
        class="inline-flex items-center rounded-sm px-6 py-2 text-base p-3 bg-sky-700 text-gray-50 hover:bg-sky-800 transition-colors"
      >
        <ChromeIcon class="w-[30px] mr-2 bg-white rounded-full" />
        <span>Install extension</span>
      </a>
    </>
  );
}
