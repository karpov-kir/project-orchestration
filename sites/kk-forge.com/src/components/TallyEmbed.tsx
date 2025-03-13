import { createEffect, createSignal } from 'solid-js';

// There are no types for this props, but they are copied from the Tally embed script docs
const unknownProps = {
  frameBorder: 0,
  marginHeight: 0,
  marginWidth: 0,
};

export function TallyEmbed(props: { src: string }) {
  const [tallyIframeElement, setTallyIframeElement] = createSignal<HTMLIFrameElement | undefined>();

  createEffect(() => {
    if (tallyIframeElement() === undefined) {
      return;
    }

    // @ts-expect-error Tally is a global variable
    Tally.loadEmbeds();
  });

  return (
    <iframe
      data-tally-src={props.src}
      loading="lazy"
      width="100%"
      height="595"
      title="Word to PDF feedback [dark]"
      ref={setTallyIframeElement}
      {...unknownProps}
    />
  );
}
