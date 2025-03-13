import { Title } from '@solidjs/meta';
import { HttpStatusCode } from '@solidjs/start';

import { SectionHeader } from '~/components/SectionHeader';

export default function NotFoundRoute() {
  return (
    <>
      <Title>KK Forge: Not found</Title>
      <HttpStatusCode code={404} />
      <SectionHeader>Oops! Page not found</SectionHeader>
      <p class="text-slate-100 light:text-gray-800 transition-colors text-lg mb-5">
        It looks like the page you're looking for has either been moved or doesn't exist.
      </p>
    </>
  );
}
