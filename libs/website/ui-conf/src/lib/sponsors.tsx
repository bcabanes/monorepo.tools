import { LinkIcon } from '@heroicons/react/24/outline';

export function Sponsors() {
  return (
    <div className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
      <div className="mx-auto">
        <header className="relative">
          <div
            id="speakers"
            className="group text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Sponsors
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#speakers"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
        </header>
        <p className="mt-3 text-center text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
          Interested in seeing your company here?{' '}
          <a
            href="mailto:nxconf@nrwl.io"
            className="border-mw-green hover:bg-mw-green border-b transition hover:rounded hover:text-gray-800"
          >
            Email us for sponsorship opportunities
          </a>
        </p>
        <div className="mx-auto mt-3 max-w-2xl text-center text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
          <h2 className="text-2xl font-bold leading-loose tracking-tight text-gray-800 dark:text-gray-100 sm:text-3xl sm:leading-relaxed">
            Premier
          </h2>
          <a href="https://nx.dev" className="-mt-12 flex justify-center">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="max-w-md"
            >
              <title>Nx</title>
              <path d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645zm5.634 4.134a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88zm3.39 1.061c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
