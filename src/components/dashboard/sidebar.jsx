import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accordionState, setAccordionState] = useState({
    usersAccordion: false,
    usersSubAccordion1: false,
    usersSubAccordion2: false,
    accountAccordion: false,
    projectsAccordion: false,
  });

  const toggleAccordion = (accordion) => {
    setAccordionState((prev) => ({
      ...prev,
      [accordion]: !prev[accordion],
    }));
  };

  return (
    <div>
      {/* Navigation Toggle Button */}
      <button
        type="button"
        className="text-gray-500 hover:text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="docs-sidebar"
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg
          className="flex-shrink-0 size-4"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        id="docs-sidebar"
        className={`hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700`}
      >
        <div className="px-6">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>
        </div>
        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul className="space-y-1.5">
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                href="#"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Dashboard
              </a>
            </li>

            <li>
              <button
                type="button"
                onClick={() => toggleAccordion('usersAccordion')}
                className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 ${accordionState.usersAccordion ? 'hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:hs-accordion-active:text-white' : ''}`}
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Users

                <svg
                  className={`hs-accordion-active:block ms-auto ${accordionState.usersAccordion ? 'block' : 'hidden'} size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>

                <svg
                  className={`hs-accordion-active:hidden ms-auto ${accordionState.usersAccordion ? 'hidden' : 'block'} size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {accordionState.usersAccordion && (
                <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                  <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                    <li>
                      <button
                        type="button"
                        onClick={() => toggleAccordion('usersSubAccordion1')}
                        className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 ${accordionState.usersSubAccordion1 ? 'hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:hs-accordion-active:text-white' : ''}`}
                      >
                        Sub Menu 1

                        <svg
                          className={`hs-accordion-active:block ms-auto ${accordionState.usersSubAccordion1 ? 'block' : 'hidden'} size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>

                        <svg
                          className={`hs-accordion-active:hidden ms-auto ${accordionState.usersSubAccordion1 ? 'hidden' : 'block'} size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>

                      {accordionState.usersSubAccordion1 && (
                        <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                          <ul className="ps-2 pt-2">
                            <li>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                                href="#"
                              >
                                Link 1
                              </a>
                            </li>
                            <li>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                                href="#"
                              >
                                Link 2
                              </a>
                            </li>
                            <li>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                                href="#"
                              >
                                Link 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li>
                      <button
                        type="button"
                        onClick={() => toggleAccordion('usersSubAccordion2')}
                        className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 ${accordionState.usersSubAccordion2 ? 'hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:hs-accordion-active:text-white' : ''}`}
                      >
                        Sub Menu 2

                        <svg
                          className={`hs-accordion-active:block ms-auto ${accordionState.usersSubAccordion2 ? 'block' : 'hidden'} size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>

                        <svg
                          className={`hs-accordion-active:hidden ms-auto ${accordionState.usersSubAccordion2 ? 'hidden' : 'block'} size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>

                      {accordionState.usersSubAccordion2 && (
                        <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                          <ul className="ps-2 pt-2">
                            <li>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                                href="#"
                              >
                                Link 1
                              </a>
                            </li>
                            <li>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                                href="#"
                              >
                                Link 2
                              </a>
                            </li>
                            <li>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                                href="#"
                              >
                                Link 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <button
                type="button"
                onClick={() => toggleAccordion('accountAccordion')}
                className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 ${accordionState.accountAccordion ? 'hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:hs-accordion-active:text-white' : ''}`}
              >
                Account

                <svg
                  className={`hs-accordion-active:block ms-auto ${accordionState.accountAccordion ? 'block' : 'hidden'} size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>

                <svg
                  className={`hs-accordion-active:hidden ms-auto ${accordionState.accountAccordion ? 'hidden' : 'block'} size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {accordionState.accountAccordion && (
                <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                  <ul className="ps-3 pt-2">
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                        href="#"
                      >
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                        href="#"
                      >
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                        href="#"
                      >
                        Link 3
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <button
                type="button"
                onClick={() => toggleAccordion('projectsAccordion')}
                className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 ${accordionState.projectsAccordion ? 'hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:hs-accordion-active:text-white' : ''}`}
              >
                Projects

                <svg
                  className={`hs-accordion-active:block ms-auto ${accordionState.projectsAccordion ? 'block' : 'hidden'} size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>

                <svg
                  className={`hs-accordion-active:hidden ms-auto ${accordionState.projectsAccordion ? 'hidden' : 'block'} size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {accordionState.projectsAccordion && (
                <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                  <ul className="ps-3 pt-2">
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                        href="#"
                      >
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                        href="#"
                      >
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                        href="#"
                      >
                        Link 3
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
