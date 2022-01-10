export default function TopNavigation() {
  return (
    <header className="flex pt-4 pb-8 justify-between items-center">
      <header className="">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Africa_Cup_of_Nation_official_logo.png/200px-Africa_Cup_of_Nation_official_logo.png"
          className="mx-auto h-20 w-auto"
          alt="logo"
        />
      </header>

      <div className="flex-grow max-w-lg ">
        <div className="flex min-w-screen-lg justify-end">
          <div className="bg-white border rounded flex w-full min:w-screen-md justify-center items-center overflow-hidden">
            <input
              type="search"
              className="flex-grow outline-none text-sm py-2 px-4"
            />
            <button className="h-full px-4 text-gray-500 hover:bg-gray-100">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
