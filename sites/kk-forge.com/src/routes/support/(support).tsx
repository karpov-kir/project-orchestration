import { Title } from '@solidjs/meta';

import { Link } from '~/components/Link';
import { SectionHeader } from '~/components/SectionHeader';

export default function SupportRoute() {
  return (
    <>
      <Title>KK-Forge: Support</Title>
      <SectionHeader>Support</SectionHeader>
      <p class="text-slate-100 light:text-gray-800 transition-colors text-xl">
        Email: <Link href="mailto:support@kk-forge.com">support@kk-forge.com</Link>
      </p>
    </>
  );
}
