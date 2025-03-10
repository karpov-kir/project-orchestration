import { Show } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { twMerge } from 'tailwind-merge';

import { SectionHeader } from '~/components/SectionHeader';

export default function HomeRoute() {
  return (
    <>
      <SectionHeader>KK Forge</SectionHeader>
      <div class="grid grid-cols-6 gap-5 max-lg:min-md:grid-cols-4 max-md:grid-cols-2">
        <Product href="/products/word-to-pdf" image={<img class="w-full" src="/word-to-pdf.png" />} />
        <Product />
        <Product />
        <Product
          class="row-span-2 col-span-3 w-full h-full aspect-auto max-lg:min-md:order-last max-lg:min-md:col-span-2
            max-lg:min-md:row-span-1 max-md:order-last max-md:col-span-2 max-md:min-h-[340px]"
        />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}

function Product(props: { image?: JSX.Element; class?: string; href?: string }) {
  return (
    <div class={twMerge('w-full aspect-square flex items-center justify-center ', props.class)}>
      <Show when={props.href}>
        <a
          href={props.href}
          class="h-full w-full flex flex-col items-center justify-center p-3 bg-slate-800 hover:bg-slate-900 transition-colors"
        >
          {props.image}
        </a>
      </Show>

      <Show when={!props.href}>
        <div
          class="pt-2 text-3xl lowercase text-slate-50/20 font-light bg-slate-900 h-full w-full flex items-center justify-center
            light:bg-gray-200 light:text-gray-800/20 transition-colors"
        >
          Soon
        </div>
      </Show>
    </div>
  );
}
