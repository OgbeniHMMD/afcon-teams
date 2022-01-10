import { useState } from "react";
import TopNavigation from "./TopNavigation";

export default function CountriesTable() {
  const [countries, setCountries] = useState([
    {
      name: "Nigeria",
      alias: "Super eagles",
      coach: "Yakubu",
      rank: 1,
      captain: "JJ Okocha",
    },
    {
      name: "S/Africa",
      alias: "Bafana Bafana",
      coach: "Tunji",
      rank: 2,
      captain: "Hammed",
    },
  ]);

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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>

                  <input
                    type="checkbox"
                    class="p-1 accent-gray-900 hover:accent-red-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
