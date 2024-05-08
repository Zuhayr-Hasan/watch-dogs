// import React from "react";
import Header from "../components/Header/Header";
import Chart from "react-apexcharts";
import TransactionPlot from "../components/Charts/TransactionPlot";
import TransactionPagination from "../components/Charts/TransactionPagination";
// Icons Imports
import NFT1 from "../assets/nft-col-dp-1.png";
import NFT2 from "../assets/nft-col-dp-2.png";
import NFT3 from "../assets/nft-col-dp-3.png";
// Dashboard Imports
import DB1 from "../assets/dashboard-dp-1.png";
import DB2 from "../assets/dashboard-dp-2.png";
import DB3 from "../assets/dashboard-dp-3.png";
// Checkmark Imports
import CheckMark from "../assets/checkmark.png";
// CSS Imports
import "../App.css";

function Dashboard() {
  const pieData = {
    series: [44, 55, 13],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["ETH Balance", "Token Balance", "NFT Balance"],
      colors: ["#C553ED", "#D946AA", "#FFA234"],
      stroke: {
        width: 0,
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        position: "bottom", // Positions legends at the bottom
        color: "#fff",
        horizontalAlign: "center", // Centers the legends horizontally
        fontSize: "12px", // Adjust font size as needed
        fontFamily: "Helvetica, Arial", // Set the font family as desired
        fontWeight: 400, // Set font weight as needed
        markers: {
          width: 10,
          height: 10,
          radius: 2,
        },
        itemMargin: {
          vertical: 5, // Adds vertical margin for spacing between legend items
        },
        labels: {
          colors: "#fff", // Sets the text color for the legend labels
        },
      },
      responsive: [
        {
          breakpoint: 768, // Example for tablets
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
              fontSize: "10px", // Smaller font size for tablet
            },
          },
        },
        {
          breakpoint: 480, // Example for mobile devices
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
              fontSize: "8px", // Even smaller font size for mobile
            },
          },
        },
      ],
    },
  };

  const people = [
    {
      name: "Alice",
      profit: "2.5 ETH",
      image: DB1,
      duration: "40 days ago",
    },
    {
      name: "Bob",
      profit: "1.8 ETH",
      image: DB2,
      duration: "2 days ago",
    },
    {
      name: "Carol",
      profit: "1.2 ETH",
      image: DB3,
      duration: "78 days ago",
    },
    {
      name: "Carol",
      profit: "1.2 ETH",
      image: DB1,
      duration: "78 days ago",
    },
    // Add more people as needed
  ];

  const collectionData = [
    {
      name: "Clone X",
      floorPrice: "10.3 ETH",
      profitPerceant: "+34%",
      mint: "3",
      image: NFT1,
      verify: CheckMark,
      profitAmm: " 10ETH",
      total: "12",
    },
    {
      name: "TOSHIES",
      floorPrice: "5.4 ETH",
      profitPerceant: "-12%",
      mint: "1",
      image: NFT2,
      verify: CheckMark,
      profitAmm: "3ETH",
      total: "5",
    },
    {
      name: "Sewer Pass",
      floorPrice: "0.44 ETH",
      profitPerceant: "+11%",
      mint: "7",
      image: NFT3,
      verify: CheckMark,
      profitAmm: "6.5ETH",
      total: "23",
    },
    {
      name: "Bored Ape Yacht Club",
      floorPrice: "0.34 ETH",
      profitPerceant: "-149%",
      mint: "2",
      image: NFT1,
      verify: CheckMark,
      profitAmm: "0.5ETH",
      total: "3",
    },
    {
      name: "Crypto Punks",
      floorPrice: "1.3 ETH",
      profitPerceant: "+22%",
      mint: "1",
      image: NFT2,
      verify: CheckMark,
      profitAmm: "1.34ETH",
      total: "7",
    },
  ];

  return (
    <div className="bg-primary max-w-screen-2xl">
      <Header />
      <div className="relative h-[40vh]">
        <h1 className="font-medium mt-12 text-center text-5xl text-[#fff]">
          WatchDogs
        </h1>
        <div className="relative border-[1px] rounded-lg mt-[60px] flex justify-center mx-[100px] shadow-custom">
          <input
            className="rounded-lg w-full h-[45px] px-5 bg-primary z-10"
            type="text"
            placeholder="Type in ETH Address.."
            style={{
              borderRight: "1px solid #eee",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            }}
          />
          <button className="text-[#fff] px-10">Generate</button>
        </div>
      </div>
      {/* Charts Section Starts */}
      <div className="lg:ml-10 ml-6">
        <p className="text-white">
          Address:{" "}
          <span className="text-[#aaa]">0x123Hdedhei0001223332dju</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row p-3 sm:p-5 bg-[#000]">
        <div className="w-full sm:w-1/2 px-2 sm:px-4 py-3 sm:py-6">
          <div className="rounded-2xl px-3 sm:px-4 py-4 sm:py-6 bg-[#333639]">
            <h1 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white">
              Total Balance
            </h1>
            <h1 className="text-2xl sm:text-3xl dark:text-white mb-3 sm:mb-4 font-bold">
              $101,230
            </h1>
            <div className="flex justify-center">
              <Chart
                options={pieData.options}
                series={pieData.series}
                type="donut"
                width="350px" 
                height="auto"
              />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-2 sm:px-4 py-3 sm:py-6">
          <div className="rounded-2xl px-3 sm:px-4 py-4 sm:py-6 bg-[#333639]">
            <div className="flex justify-between">
              <h1 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white">
                Actual Profitability
              </h1>
              <p className="text-xs pr-1 sm:pr-3 pt-1 sm:pt-2 text-[#aaa]">
                3M / 6 M / 12M
              </p>
            </div>
            <h1 className="text-2xl sm:text-3xl text-[#2DE93F] mb-3 sm:mb-4 dark:text-green-400 font-bold">
              +$20,457
            </h1>
            <ul className="space-y-3">
              {people.map((person) => (
                <li
                  key={person.name}
                  className="px-2 sm:px-3 py-2 flex items-center hover:bg-[#525a61] cursor-pointer rounded-xl"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-md mr-2 sm:mr-3"
                  />
                  <div className="flex justify-between w-full">
                    <div>
                      <div className="font-semibold dark:text-gray-200">
                        {person.name}
                      </div>
                      <div className="text-xs text-[#F19C44]">
                        {person.duration}
                      </div>
                    </div>
                    <div className="text-[#FCFAF4] font-bold text-xs sm:text-sm">
                      <p>{person.profit}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Charts Section Ends */}

      {/* NFT Section Starts */}
      <div className="px-4 sm:px-9">
        <div className="w-full bg-[#333639] p-4 rounded-2xl overflow-auto sm:overflow-visible">
          <div className="flex justify-between flex-col sm:flex-row pl-2 sm:pl-4 pr-2 sm:pr-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-0">
              NFT Collections
            </h1>
            <div className="text-sm gap-x-3 text-white flex flex-col sm:flex-row justify-center">
              <p>OWNED BY WALLET:</p>
              <p>0x123Hdedhei00012htg...</p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <table className="w-full divide-gray-200 bg-[#333639] rounded-lg">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-normal text-[#E2E2E2]"
                  >
                    COLLECTION
                  </th>
                  <th
                    scope="col"
                    className="px-3 sm:px-12 py-3 text-left text-xs sm:text-sm font-normal text-[#E2E2E2]"
                  >
                    FLOOR PRICE
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-normal text-[#E2E2E2]"
                  >
                    PROFIT
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-normal text-[#E2E2E2]"
                  >
                    MINTED
                  </th>
                  <th
                    scope="col"
                    className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-normal text-[#E2E2E2]"
                  >
                    TOTAL
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#333639]">
                {collectionData.map((person, index) => (
                  <tr key={person.name} className="odd:bg-[#FFFFFF0F]">
                    <td className="whitespace-nowrap px-2 sm:px-4 py-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-x-4">
                        <p className="text-lg font-semibold text-white">
                          {index + 1}
                        </p>
                        <div className="h-8 w-8 sm:h-10 sm:w-10">
                          <img
                            className="h-full w-full rounded-md object-cover"
                            src={person.image}
                            alt="person-image"
                          />
                        </div>
                        <div className="flex items-center gap-x-1">
                          <div className="text-xs sm:text-lg font-semibold text-white">
                            {person.name}
                          </div>
                          <img
                            src={person.verify}
                            alt="verification"
                            className="h-4 sm:h-6"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 sm:px-12 py-4 text-xs sm:text-lg">
                      <div className="text-lg font-semibold text-white">
                        {person.floorPrice}
                      </div>
                      <div
                        className={`text-xs sm:text-sm ${
                          index % 2 === 0 ? "text-[#31CF61]" : "text-red-500"
                        } pl-3 sm:pl-9`}
                      >
                        {person.profitPerceant}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-2 sm:px-4 py-4 text-xs sm:text-lg">
                      <span className="text-lg text-white font-semibold">
                        {person.profitAmm}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-2 sm:px-4 text-xs sm:text-lg text-white font-semibold">
                      {person.mint}
                    </td>
                    <td className="whitespace-nowrap px-2 sm:px-4 py-4 text-xs sm:text-lg text-white font-semibold">
                      {person.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* NFT Section Ends */}

      {/* Transaction Plot Starts */}
      <div className="px-4 lg:px-8 mt-9">
        <TransactionPlot />
      </div>
      {/* Transaction Plot Ends */}

      {/* Transaction Pagination Starts */}
      <div className="px-4 lg:px-8 mt-9 pb-5">
        <TransactionPagination />
      </div>
      {/* Transaction Pagination Ends */}
    </div>
  );
}

export default Dashboard;
