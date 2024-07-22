import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="flex justify-center my-[3rem]">
      <div className="p-4 w-full max-w-5xl min-w-sm flex bg-gray-300 rounded-lg shadow-lg items-center">
        <ul className="flex flex-col border-r border-gray-200 pr-4 gap-5 w-[40%]">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`w-[100%] flex items-center gap-2 p-3 rounded-lg font-semibold ${
                  activeTab === tab.id
                    ? "bg-[#d61631] text-white"
                    : "text-gray-500 hover:bg-gray-200"
                }`}
              >
                <span className="material-symbols-outlined">{tab.icon}</span>
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="pl-4 w-full h-[20rem] overflow-hidden flex items-center">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`transition-opacity duration-300 ${
                activeTab === tab.id ? "opacity-100" : "opacity-0 absolute"
              } ${activeTab === tab.id ? "block" : "hidden"}`}
            >
              <h2 className="text-xl font-bold text-[#d61631] mb-2 underline">
                {tab.title}
              </h2>
              <div className="text-gray-600">{tab.content}</div>
              <div className="flex justify-center"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
