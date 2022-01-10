import { useState } from "react";

export default function CountryFormModal({
  data,
  modalStatus,
  setModalStatus,
  appendCountry,
}) {
  const dummyCountry = {
    rank: 3,
    name: "Nigeria",
    alias: "Super eagles",
    coach: "Yakubu",
    captain: "JJ Okocha",
  };

  return (
    <>
      <span onClick={() => setModalStatus(!modalStatus)}>xxx</span>
      {modalStatus && (
        <div
          className="flex min-h-screen inset-0 z-50 fixed overflow-y-scroll items-end justify-center md:items-center"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-black bg-opacity-40 inset-0 transition-opacity fixed"
            aria-hidden="true"
            onClick={() => setModalStatus(!modalStatus)}
          ></div>

          <div className="rounded-lg max-h-screen text-left w-full p-4 transform transition-all inline-block align-bottom overflow-y-auto sm:my-8 sm:align-middle md:w-5/6 lg:w-3/4 xl:w-2/3">
            <section className="bg-white rounded p-4 8">
              <nav className="text-right pb-4">
                <button
                  type="button"
                  className="rounded-full font-medium h-8 text-lg text-dark w-8 self-end inline-flex justify-center items-center hover:bg-primary-lightest hover:bg-gray-200"
                  onClick={() => setModalStatus(false)}
                >
                  &times;
                </button>
              </nav>
              <header className="text-center">
                <div className="font-bold text-dark-light text-xl md:tracking-wider md:text-3xl">
                  Hey, what would you like to do today?
                </div>
                <div className="text-sm text-dark-light py-2 md:text-base">
                  Explore Vasiti’s diverse ecosystem
                </div>
              </header>
              <section className="flex-wrap md:flex">
                <div className="py-8">
                  <button
                    className="bg-gray-50 border-2 py-2 px-4"
                    onClick={() => {
                      appendCountry(dummyCountry);
                    }}
                  >
                    Button
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </section>
              <nav
                className="border border-primary rounded font-medium text-dark text-center text-sm p-2 md:hidden hover:bg-primary-lightest"
                onClick={() => setModalStatus(false)}
              >
                Close
              </nav>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
