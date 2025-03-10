import { createMemo, splitProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

export function Switch(props: JSX.IntrinsicElements['label'] & { checked?: boolean; thumbIcon?: JSX.Element }) {
  const [privateProps, inheritProps] = splitProps(props, ['children', 'checked', 'thumbIcon']);
  const checked = createMemo(() => privateProps.checked);

  return (
    <label {...inheritProps} class="inline-flex cursor-pointer items-center relative">
      <input type="checkbox" value="" checked={checked()} class="peer hidden" />
      <span class="mr-2 text-sm text-gray-50 light:text-gray-950 transition-colors">{privateProps.children}</span>
      <div class="peer h-[32px] w-[64px] rounded-full bg-slate-700 peer-checked:bg-slate-300 transition-colors" />
      <div
        class="absolute left-[12px] top-[4px] h-[24px] w-[24px] rounded-full bg-gray-50 transition-transform content-['']
          peer-checked:translate-x-[32px]"
      >
        {privateProps.thumbIcon}
      </div>
    </label>
  );
}
