import { Title } from '@solidjs/meta';
import { HttpStatusCode } from '@solidjs/start';

export default function NotFoundRoute() {
  return (
    <>
      <Title>KK Forge: Not Found</Title>
      <HttpStatusCode code={404} />
      <h1 class="text-slate-100">Page Not Found</h1>
    </>
  );
}
