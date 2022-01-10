import { useState } from "react";
import CountryFormModal from "./CountryFormModal";
import CountryTable from "./countryTable";
import TopNavigation from "./TopNavigation";

export default function CountriesTable() {
  let [modalStatus, setModalStatus] = useState(false);
  let [checkedList, setCheckedList] = useState([{}]);

  const [countries, setCountries] = useState([
    {
      rank: 1,
      name: "Nigeria",
      alias: "Super eagles",
      coach: "Yakubu",
      captain: "JJ Okocha",
    },
    {
      rank: 2,
      name: "S/Africa",
      alias: "Bafana Bafana",
      coach: "Tunji",
      captain: "Hammed",
    },
  ]);

  const appendCountry = (newCountry) => {
    setCountries([...countries, newCountry]);
  };

  const editCountry = (id) => {
    // do nothing
  };

  const deleteCountry = (id) => {
    const Countries = countries.filter((el, i) => i != id);
    setCountries(Countries);
    setCheckedList([{}]);
  };

  return (
    <main className="container mx-auto px-4">
      <TopNavigation />

      <section className="bg-white border rounded w-full table table-auto">
        <div className="table-header-group">
          <div className="font-medium uppercase table-row">
            <div className="text-left p-2 py-3 table-cell">Rank</div>
            <div className="text-left p-2 table-cell">Country</div>
            <div className="text-left p-2 table-cell">Alias</div>
            <div className="text-left p-2 table-cell">Coach</div>
            <div className="text-left p-2 table-cell">Captain</div>
            <div className="text-left p-2 table-cell"></div>
          </div>
        </div>

        <div className="table-row-group">
          {countries.map((country, i) => (
            <CountryTable
              key={i}
              index={i}
              data={country}
              editCountry={editCountry}
              deleteCountry={deleteCountry}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
              modalStatus={modalStatus}
              appendCountry={appendCountry}
              setModalStatus={setModalStatus}
            />
          ))}
        </div>
      </section>

      <div className="flex space-x-4 py-8 justify-end">
        {checkedList.length && (
          <button
            className="rounded flex space-x-4 bg-gray-50 border-2 text-sm py-2 px-4 items-center hover:bg-gray-200"
            onClick={() => {
              setModalStatus(true);
            }}
          >
            <div>Delete Selected</div>
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        )}

        <CountryFormModal
          modalStatus={modalStatus}
          appendCountry={appendCountry}
          setModalStatus={setModalStatus}
          data={{}}
        >
          <button
            className="rounded flex space-x-4 bg-gray-50 border-2 text-sm py-2 px-4 items-center hover:bg-gray-200"
            onClick={() => {
              setModalStatus(true);
            }}
          >
            <div>Add New Country</div>
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
        </CountryFormModal>
      </div>
    </main>
  );
}
