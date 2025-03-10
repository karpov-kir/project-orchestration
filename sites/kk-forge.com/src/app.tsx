import './app.css';

import { Link as MetaLink, MetaProvider, Title } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { createSignal, onMount, Suspense } from 'solid-js';
import { twMerge } from 'tailwind-merge';

import { Link } from './components/Link';
import { Switch } from './components/Switch';
import MoonIcon from './icons/moon.svg?component-solid';
import SunIcon from './icons/sun.svg?component-solid';

const persistIsLightModeEnabled = (isLightModeEnabled: boolean) => {
  window.localStorage.setItem('isLightModeEnabled', JSON.stringify(isLightModeEnabled));
};

const [isLightModeEnabled, setIsLightModeEnabled] = createSignal(false);

const updateDocumentDataTheme = (newIsLightModeEnabled: boolean) =>
  document.documentElement.setAttribute('data-theme', newIsLightModeEnabled ? 'light' : 'dark');

const addThemeAttributeScript = `
  (function() {
    window.getIsLightModeEnabledFromPersistence = () => {
      if (window.localStorage.getItem('isLightModeEnabled') === null) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      return window.localStorage.getItem('isLightModeEnabled') === 'true';
    };

    document.documentElement.setAttribute('data-theme', window.getIsLightModeEnabledFromPersistence() ? 'light' : 'dark');
  })();
`;

const googleTagScript = `
  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16917618859');
`;

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          {/* eslint-disable-next-line solid/no-innerhtml */}
          <script innerHTML={addThemeAttributeScript} />

          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16917618859" />
          {/* eslint-disable-next-line solid/no-innerhtml */}
          <script innerHTML={googleTagScript} />
          <MetaLink rel="preconnect" href="https://fonts.googleapis.com" />
          <MetaLink rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <Link
            href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap"
            rel="stylesheet"
          />
          <Title>KK Forge</Title>
          <div class="bg-slate-950 light:bg-gray-100 transition-colors min-h-screen min-w-full">
            <Header />
            <main class="max-w-[1180px] py-20 px-6 mx-auto box-content max-md:px-4">
              <Suspense>{props.children}</Suspense>
            </main>
          </div>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

/**
 * This script is used to toggle the theme switch when the page is loaded
 * and before the first render of the theme switch to workaround annoying flash of its UI state.
 * TODO: Is there no better way to do this?
 */
const toggleThemeSwitchScript = `
  (function() {
    const updateThemeSwitch = (addedNode) => {
      if (!(addedNode instanceof HTMLElement) || addedNode.id !== "theme-switch") {
        return false;
      }

      const isLightModeEnabled = window.getIsLightModeEnabledFromPersistence();
      addedNode.querySelector("input").checked = isLightModeEnabled;

      if (isLightModeEnabled) {
        addedNode.querySelector("#theme-switch-sun-icon").classList.remove("hidden");
      } else {
        addedNode.querySelector("#theme-switch-moon-icon").classList.remove("hidden");
      }

      return true;
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (addedNode of mutation.addedNodes) {
          if (!updateThemeSwitch(addedNode)) {
            continue;
          }

          observer.disconnect();
          return;
        }
      }

      console.error("Failed to find theme switch");
      observer.disconnect();
    })

    observer.observe(document.getElementById('theme-switch-container'), { childList: true, subtree: true });
  })();
`;

function Header() {
  const [isMounted, setIsMounted] = createSignal(false);

  onMount(() => {
    setIsMounted(true);
  });

  onMount(() => {
    // Sync the theme switch state with the persisted state
    setIsLightModeEnabled(
      (
        window as typeof window & { getIsLightModeEnabledFromPersistence: () => boolean }
      ).getIsLightModeEnabledFromPersistence(),
    );
  });

  return (
    <>
      <header class="pt-10 max-w-[1180px] px-6 mx-auto box-content max-md:px-4 flex items-center">
        <a
          href="/"
          class="text-gray-800 text-3xl bg-slate-100 inline-flex px-2.5 py-0.5 rounded-md hover:bg-slate-200 transition-colors
            light:bg-gray-800 light:text-gray-100 light:hover:bg-gray-900 font-extrabold"
        >
          KK
        </a>
        <div class="flex mx-7 grow">
          <Link href="/" class="mr-10">
            Home
          </Link>
          <Link href="/support" class="mr-10">
            Support
          </Link>
        </div>
        <div id="theme-switch-container">
          {/* eslint-disable-next-line solid/no-innerhtml */}
          <script innerHTML={toggleThemeSwitchScript} />
          <Switch
            id="theme-switch"
            checked={isLightModeEnabled()}
            thumbIcon={
              <>
                <SunIcon
                  id="theme-switch-sun-icon"
                  class={twMerge(
                    // Have Solid.js to alter the hidden class only after mounting and let the inline script
                    // to handle the initial state to avoid flickering.
                    (!isMounted() || !isLightModeEnabled()) && 'hidden',
                    'p-0.5 w-full bg-slate-100 rounded-full text-slate-600 transition-colors',
                  )}
                />
                <MoonIcon
                  id="theme-switch-moon-icon"
                  class={twMerge(
                    // Same as above
                    (!isMounted() || isLightModeEnabled()) && 'hidden',
                    'p-0.5 w-full bg-slate-950 rounded-full text-slate-100 transition-colors',
                  )}
                />
              </>
            }
            onChange={(event) => {
              const target = event.target as HTMLInputElement;
              const isLightModeEnabled = target.checked;
              setIsLightModeEnabled(isLightModeEnabled);
              updateDocumentDataTheme(isLightModeEnabled);
              persistIsLightModeEnabled(isLightModeEnabled);
            }}
          />
        </div>
      </header>
    </>
  );
}
