import React from "react";

const providers = [
  {
    id: 1,
    name: "Conner Ludlow",
  },
  {
    id: 2,
    name: "Kyler Ockey",
  },
  {
    id: 3,
    name: "Kevin Hales",
  },
];

const appointments = [
  // {
  //     id: 1,
  //     patientName: "Patient Name",
  //     startTime: 7,
  //     providerId: 1
  // }
];

const formatHour = (hour) => {
  const isPM = hour >= 12;
  const formattedHour = hour > 12 ? hour - 12 : hour;
  return `${formattedHour}:00 ${isPM ? "PM" : "AM"}`;
};

function Calendar() {
  const startTime = 8;
  const endTime = 17;

  const hours = Array.from(
    { length: endTime - startTime + 1 },
    (_, i) => startTime + i
  );

  return (
    <div>
      <div className="shadow rounded-xl overflow-hidden w-full">
        <div className="flex bg-gray-50 divide-x border-b border-gray-200">
          <div className="w-24" />
          {providers.map((provider) => (
            <div className="w-48 px-4 py-2 text-center" key={provider.id}>
              <span className="text-sm font-semibold text-gray-900">
                {provider.name}
              </span>
            </div>
          ))}
        </div>
        {hours.map((hour) => (
          <div
            key={hour}
            className="flex bg-white divide-x border-b border-gray-200 items-center"
          >
            <div className="w-24">
              <span className="text-xs font-medium text-gray-500 flex justify-center">
                {formatHour(hour)}
              </span>
            </div>
            {providers.map((provider) => (
              <div className="w-48 h-20 p-1" key={`${hour}-${provider.id}`}>
                {/* Recognize that there is a scheduled appointment here */}
                {/* Example Component */}
                {/* <div className="w-full h-full bg-sky-100 rounded-md p-2">
                        <span className="font-semibold text-sky-700 text-sm">
                        Patient Name
                        </span>
                    </div> */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
