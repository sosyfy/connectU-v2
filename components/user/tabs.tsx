"use client";

type TabsProp = {
  activeTab: number;
  setActiveTab: any;
};

export default function Tabs({ activeTab, setActiveTab }: TabsProp) {
  return (
    <div className="w-full pt-6 mt-6">
      <div className="flex items-center w-full text-dimgray bg-whitesmoke flex-nowrap text-[1rem] transition-all duration-200">
        <button
          onClick={() => setActiveTab(1)}
          className={`flex items-center justify-center flex-1 px-2 py-3 space-x-2 border-b focus:outline-none border-deepskyblue ${activeTab == 1 && "border border-b-0 text-deepskyblue border-deepskyblue rounded-t-lg"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
          </svg>

          <span>Posts</span>
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`flex items-center justify-center border-b  border-deepskyblue flex-1 px-2 py-3 space-x-2  focus:outline-none   ${activeTab == 2 && "border border-b-0 text-deepskyblue  border-deepskyblue rounded-t-lg"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>

          <span>Connections</span>
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`flex items-center justify-center flex-1 px-2 py-3 space-x-2 border-b focus:outline-none border-deepskyblue ${activeTab == 3 && "border border-b-0 text-deepskyblue border-deepskyblue rounded-t-lg"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span>About</span>
        </button>
      </div>
    </div>
  );
}
