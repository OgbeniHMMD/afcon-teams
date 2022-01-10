import { Children, useState } from "react";
import { useForm } from "react-hook-form";

export default function CountryFormModal({
  data,
  children,
  modalStatus,
  setModalStatus,
  appendCountry,
}) {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");

  const dummyCountry = {
    rank: 3,
    name: "Nigeria",
    alias: "Super eagles",
    coach: "Yakubu",
    captain: "JJ Okocha",
  };

  const addCountry = (data) => {
    appendCountry(data);
    setModalStatus(false);
  };

  return (
    <>
      <span onClick={() => setModalStatus(!modalStatus)}>{children}</span>
      {modalStatus && (
        <div
          className="flex min-h-screen inset-0 z-50 fixed overflow-y-scroll items-end justify-center md:items-center"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-gray-900 bg-opacity-25 inset-0 transition-opacity fixed"
            aria-hidden="true"
            onClick={() => setModalStatus(!modalStatus)}
          ></div>

          <div className="rounded-lg max-h-screen text-left w-full p-4 transform transition-all inline-block align-bottom overflow-y-auto sm:my-8 sm:align-middle md:w-5/6 lg:w-3/4 xl:w-2/3">
            <form
              className="bg-white rounded p-8"
              onSubmit={handleSubmit((data) => addCountry(data))}
            >
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

              <div className="flex flex-col space-y-4 py-4">
                <input
                  {...register("name", { required: true })}
                  required
                  placeholder="Country"
                  className="border rounded text-sm py-2 px-4"
                />
                <input
                  {...register("alias", { required: true })}
                  required
                  placeholder="Alias"
                  className="border rounded text-sm py-2 px-4"
                />
                <input
                  {...register("coach", { required: true })}
                  required
                  placeholder="Coach"
                  className="border rounded text-sm py-2 px-4"
                />
                <input
                  {...register("captain", { required: true })}
                  required
                  placeholder="Captain"
                  className="border rounded text-sm py-2 px-4"
                />
              </div>

              <section className="flex space-x-4 pt-4 justify-end item-center">
                <nav
                  className="bg-gray-50 border-2 py-2 px-4"
                  onClick={() => setModalStatus(false)}
                >
                  Close
                </nav>

                <button type="submit" className="bg-gray-50 border-2 py-2 px-4">
                  Submit
                </button>
              </section>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
