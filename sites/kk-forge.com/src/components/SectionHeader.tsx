import { splitProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { twMerge } from 'tailwind-merge';

export function SectionHeader(props: JSX.IntrinsicElements['h1']) {
  const [privateProps, inheritProps] = splitProps(props, ['class', 'children']);

  return (
    <h1
      {...inheritProps}
      class={twMerge(
        'text-slate-100 text-6xl pb-10 light:text-gray-800 transition-colors font-extrabold',
        privateProps.class,
      )}
    >
      {privateProps.children}
    </h1>
  );
}
