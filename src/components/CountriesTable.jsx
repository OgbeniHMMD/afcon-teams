import { useState } from "react";
import CountryFormModal from "./CountryFormModal";
import CountryTable from "./countryTable";
import TopNavigation from "./TopNavigation";

export default function CountriesTable() {
  let [modalStatus, setModalStatus] = useState(false);

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
    const Countries = countries.filter((el, i) => i != id);
    setCountries(Countries);
  };

  const deleteCountry = (id) => {
    const Countries = countries.filter((el, i) => i != id);
    setCountries(Countries);
  };

  return (
    <main className="container mx-auto px-4">
      <TopNavigation />

      <section className="bg-white border rounded w-full table table-auto">
        <div className="table-header-group">
          <div className="font-medium text-lg p-4 uppercase table-row">
            <div className="text-left p-2 table-cell">Rank</div>
            <div className="text-left p-2 table-cell">Country</div>
            <div className="text-left p-2 table-cell">Alias</div>
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
            />
          ))}
        </div>
      </section>

      <div className="py-8">
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
      </div>

      {modalStatus && (
        <CountryFormModal
          modalStatus={modalStatus}
          appendCountry={appendCountry}
          setModalStatus={setModalStatus}
          data={{}}
        />
      )}
    </main>
  );
}
