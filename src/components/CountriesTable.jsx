import { useState } from "react";
import TopNavigation from "./TopNavigation";

export default function CountriesTable() {
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

  const dummyCountry = {
    rank: 1,
    name: "Nigeria",
    alias: "Super eagles",
    coach: "Yakubu",
    captain: "JJ Okocha",
  };

  const appendCountry = (newCountry) => {
    setCountries([...countries, newCountry]);
  };

  const editCountry = (newCountry) => {
    setCountries([...countries, newCountry]);
  };

  return (
    <main class="container mx-auto px-4">
      <TopNavigation />

      <section class="bg-white border rounded w-full table table-auto">
        <div class="table-header-group">
          <div class="font-medium text-lg p-4 uppercase table-row">
            <div class="text-left p-2 table-cell">Rank</div>
            <div class="text-left p-2 table-cell">Country</div>
            <div class="text-left p-2 table-cell">Alias</div>
            <div class="text-left p-2 table-cell">Captain</div>
            <div class="text-left p-2 table-cell"></div>
          </div>
        </div>

        <div class="table-row-group">
          {countries.map((country) => (
            <div class="text-sm table-row">
              <div class="border-t p-2 table-cell">{country.rank}</div>
              <div class="border-t p-2 table-cell">{country.name}</div>
              <div class="border-t p-2 table-cell">{country.alias}</div>
              <div class="border-t p-2 table-cell">{country.captain}</div>
              <div class="border-t p-2 table-cell">
                <div class="flex space-x-4 items-center justify-end">
                  <button className="rounded h-full p-2 hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                  <button
                    className="rounded h-full p-2 hover:bg-gray-100"
                    onClick={() => {
                      editCountry(dummyCountry);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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

                  <label className="rounded flex h-full p-2 hover:bg-gray-100 ">
                    <input
                      type="checkbox"
                      class="p-1 accent-gray-900 hover:accent-red-700"
                    />
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="py-8">
        <button
          className="bg-white bg-gray-50 border-2 py-2 px-4"
          onClick={() => {
            appendCountry(dummyCountry);
          }}
        >
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
    </main>
  );
}
