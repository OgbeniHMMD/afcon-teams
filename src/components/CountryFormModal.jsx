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
            <section className="bg-white rounded p-8">
              <nav className="flex text-right pb-4 justify-between item">
                <header className="font-bold text-center text-xl text-gray-900">
                  Enter the country Information
                </header>

                <button
                  type="button"
                  className="border rounded font-medium h-8 text-lg text-dark w-8 self-end inline-flex justify-center items-center hover:bg-primary-lightest hover:bg-gray-200"
                  onClick={() => setModalStatus(false)}
                >
                  &times;
                </button>
              </nav>
              <section className="flex-wrap md:flex">
                <div className="py-8">
                  <button
                    className="bg-gray-50 border-2 py-2 px-4"
                    onClick={() => {
                      appendCountry(dummyCountry);
                    }}
                  >
                    Submit
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
