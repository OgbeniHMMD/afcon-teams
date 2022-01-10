import { useState } from "react";
import CountryFormModal from "./CountryFormModal";

export default function CountryTable({
  index,
  data,
  editCountry,
  deleteCountry,
  checkedList,
  setCheckedList,

  modalStatus,
  appendCountry,
  setModalStatus,
}) {
  const status = !!checkedList.filter((el) => el.id == index)[0]?.status;

  const toggleCheckBox = () => {
    const CheckedList = checkedList;
    CheckedList[index] = { id: index, status };

    setCheckedList(CheckedList);
    console.log(CheckedList);
    console.log(status);
  };

  return (
    <div className="text-sm table-row">
      <div className="border-t p-2 table-cell">{index + 1}</div>
      <div className="border-t p-2 table-cell">{data.name}</div>
      <div className="border-t p-2 table-cell">{data.alias}</div>
      <div className="border-t p-2 table-cell">{data.coach}</div>
      <div className="border-t p-2 table-cell">{data.captain}</div>
      <div className="border-t p-2 table-cell">
        <div className="flex space-x-4 items-center justify-end">
          <CountryFormModal
            modalStatus={modalStatus}
            appendCountry={appendCountry}
            setModalStatus={setModalStatus}
            data={{}}
          >
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
          </CountryFormModal>

          <button
            className="rounded h-full p-2 hover:bg-gray-100"
            onClick={() => {
              deleteCountry(index);
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
              onChange={() => {
                toggleCheckBox();
              }}
              type="checkbox"
              checked={status}
              className="p-1 accent-gray-900 hover:accent-red-700"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
