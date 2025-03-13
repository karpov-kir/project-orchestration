import { Title } from '@solidjs/meta';
import { Show } from 'solid-js';

import { SectionHeader } from '~/components/SectionHeader';
import { isLightModeEnabled } from '~/isLightModeEnabled';

import { TallyEmbed } from '../../../../components/TallyEmbed';

const tallyDarkFormSrc =
  'https://tally.so/embed/mOkb0p?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';
const tallyLightFormSrc =
  'https://tally.so/embed/wLka0G?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';

export default function FeedbackPage() {
  return (
    <>
      <script src="https://tally.so/widgets/embed.js" />
      <Title>KK-Forge: Word to PDF - Feedback</Title>
      <SectionHeader>🥺 We are sorry to see you go!</SectionHeader>
      <p class="text-slate-100 light:text-gray-800 transition-colors text-lg mb-5">
        Your feedback is invaluable to us. Could you take a moment to tell us about your experience? It will only take a
        few seconds and will help us make our app better for everyone.
      </p>
      <Show when={!isLightModeEnabled()}>
        <TallyEmbed src={tallyDarkFormSrc} />
      </Show>
      <Show when={isLightModeEnabled()}>
        <TallyEmbed src={tallyLightFormSrc} />
      </Show>
    </>
  );
}
