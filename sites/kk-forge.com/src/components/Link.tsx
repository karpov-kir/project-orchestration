import { splitProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { twMerge } from 'tailwind-merge';

export function Link(props: JSX.IntrinsicElements['a']) {
  const [privateProps, inheritProps] = splitProps(props, ['class', 'children']);

  return (
    <a
      {...inheritProps}
      class={twMerge(
        'text-slate-100 underline hover:text-sky-400 light:hover:text-sky-700 transition-colors light:text-slate-600',
        privateProps.class,
      )}
    >
      {privateProps.children}
    </a>
  );
}
