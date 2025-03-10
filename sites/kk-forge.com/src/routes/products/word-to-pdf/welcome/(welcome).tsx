import { Title } from '@solidjs/meta';

const googleTagConversionScript = `
  gtag('event', 'conversion', {'send_to': 'AW-16917618859/WfR2CIelpqgaEKvB-YI_'});
`;

export default function WelcomePage() {
  return (
    <>
      {/* Record conversion for the Word to PDF extension campaign */}
      {/* eslint-disable-next-line solid/no-innerhtml */}
      <script innerHTML={googleTagConversionScript} />
      <Title>KK-Forge: Word to PDF - Welcome!</Title>
      <div class="max-w-[800px] mx-auto text-center">
        <h1 class="text-slate-100 text-5xl leading-normal mb-16 light:text-slate-800 transition-colors">
          Now you can covert Word&nbsp;to&nbsp;PDF&nbsp;🎉
        </h1>

        <p class="text-slate-100 text-2xl mb-6 light:text-slate-600 transition-colors">
          1. Pin the extension for quick access to the Word to PDF converter:
        </p>
        <div class="mb-12">
          <img class="block light:hidden" src="/word-to-pdf-guide-dark-1.png" alt="Guide to convert Word to PDF" />
          <img class="hidden light:block" src="/word-to-pdf-guide-light-1.png" alt="Guide to convert Word to PDF" />
        </div>

        <p class="text-slate-100 text-2xl mb-6 light:text-slate-600 transition-colors">
          2. Simply click on the extension icon to open the converter:
        </p>
        <div class="mb-12">
          <img class="block light:hidden" src="/word-to-pdf-guide-dark-2.png" alt="Guide to convert Word to PDF" />
          <img class="hidden light:block" src="/word-to-pdf-guide-light-2.png" alt="Guide to convert Word to PDF" />
        </div>
      </div>
    </>
  );
}
