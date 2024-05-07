// import React from "react";
import Header from "../components/Header/Header";
import Chart from "react-apexcharts";
import TransactionPlot from "../components/Charts/TransactionPlot";
import TransactionPagination from "../components/Charts/TransactionPagination";

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
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  // Sample data for the list
  const people = [
    {
      name: "Alice",
      profit: "2.5 ETH",
      image: "src/assets/dashboard-dp-1.png",
      duration: "40 days ago",
    },
    {
      name: "Bob",
      profit: "1.8 ETH",
      image: "src/assets/dashboard-dp-2.png",
      duration: "2 days ago",
    },
    {
      name: "Carol",
      profit: "1.2 ETH",
      image: "src/assets/dashboard-dp-3.png",
      duration: "78 days ago",
    },
    {
      name: "Carol",
      profit: "1.2 ETH",
      image: "src/assets/dashboard-dp-3.png",
      duration: "78 days ago",
    },
    // Add more people as needed
  ];

  // const nftData = [
  //   {
  //     id: 1,
  //     collection: "CryptoPunks",
  //     floorPrice: "120.5 ETH",
  //     profit: "+30%",
  //     minted: "10,000",
  //     total: "10,000",
  //   },
  //   {
  //     id: 2,
  //     collection: "Bored Ape Yacht Club",
  //     floorPrice: "300 ETH",
  //     profit: "+50%",
  //     minted: "10,000",
  //     total: "10,000",
  //   },
  //   {
  //     id: 3,
  //     collection: "Art Blocks",
  //     floorPrice: "50 ETH",
  //     profit: "+20%",
  //     minted: "5,000",
  //     total: "5,000",
  //   },
  // ];

  const collectionData = [
    {
      name: "Clone X",
      floorPrice: "10.3 ETH",
      profitPerceant: "+34%",
      mint: "3",
      image: "src/assets/nft-col-dp-1.png",
      verify: "src/assets/checkmark.png",
      profitAmm: " 10ETH",
      total: "12",
    },
    {
      name: "TOSHIES",
      floorPrice: "5.4 ETH",
      profitPerceant: "-12%",
      mint: "1",
      image: "src/assets/nft-col-dp-2.png",
      verify: "src/assets/checkmark.png",
      profitAmm: "3ETH",
      total: "5",
    },
    {
      name: "Sewer Pass",
      floorPrice: "0.44 ETH",
      profitPerceant: "+11%",
      mint: "7",
      image: "src/assets/nft-col-dp-1.png",
      verify: "src/assets/checkmark.png",
      profitAmm: "6.5ETH",
      total: "23",
    },
    {
      name: "Bored Ape Yacht Club",
      floorPrice: "0.34 ETH",
      profitPerceant: "-149%",
      mint: "2",
      image: "src/assets/nft-col-dp-2.png",
      verify: "src/assets/checkmark.png",
      profitAmm: "0.5ETH",
      total: "3",
    },
    {
      name: "Crypto Punks",
      floorPrice: "1.3 ETH",
      profitPerceant: "+22%",
      mint: "1",
      image: "src/assets/nft-col-dp-3.png",
      verify: "src/assets/checkmark.png",
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
      <div className="ml-10">
        <p className="text-[#fff]">
          Address:{" "}
          <span className="text-[#aaa]">0x123Hdedhei0001223332dju</span>
        </p>
      </div>
      <div className="flex p-5 bg-[#000]">
        {" "}
        {/* Dark background */}
        <div className="w-1/2 px-4 py-6">
          <div className="rounded-2xl px-4 py-6 bg-[#333639]">
            <h1 className="text-2xl font-bold mb-2 dark:text-white">
              Total Balance
            </h1>
            <h1 className="text-3xl dark:text-white mb-4 font-bold">
              $101,230
            </h1>
            <div className="flex justify-center">
              <Chart
                options={pieData.options}
                series={pieData.series}
                type="donut"
                width="310px"
                height="310px"
              />
            </div>
          </div>
        </div>
        <div className="rounded-2xl w-1/2  px-4 py-6">
          <div className="rounded-2xl px-4 py-6 bg-[#333639]">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold mb-2 dark:text-white">
                Actual Profitability
              </h1>
              <p className="text-[#aaa] text-sm pr-3 pt-2">3M / 6 M / 12M</p>
            </div>
            <h1 className="text-3xl text-[#2DE93F] mb-4 dark:text-green-400 font-bold">
              +$20,457
            </h1>
            <ul className="space-y-4">
              {people.map((person) => (
                <li
                  key={person.name}
                  className="px-3 py-2 flex items-center hover:bg-[#525a61] cursor-pointer rounded-xl"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-10 h-10 rounded-md mr-3"
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
                    <div className="text-[#FCFAF4] font-bold text-sm">
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

      {/* NFT Section Ends */}
      {/* <div className="px-9">
        <div className="w-full bg-[#333639] p-4 rounded-2xl mob:overflow-scroll ">
          <div className="flex justify-between mob:flex-col pl-4 pr-8 mob:pl-2 mob:pr-2">
            <h1 className="text-3xl font-bold text-white">NFT Collections</h1>
            <div className="text-sm gap-x-3 text-white flex justify-center mob:flex-col">
              <p>OWNED BY WALLET:</p>
              <p>0x123Hdedhei00012htg...</p>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <table className="w-full  divide-gray-200 bg-[#333639] rounded-lg">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-[#E2E2E2]"
                  >
                    <span>COLLECTION</span>
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-left text-sm font-normal text-[#E2E2E2]"
                  >
                    FLOOR PRICE
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-[#E2E2E2]"
                  >
                    PROFIT
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-[#E2E2E2]"
                  >
                    MINTED
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-[#E2E2E2]"
                  >
                    TOTAL
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-[#333639]">
                {collectionData.map((person, index) => (
                  <tr key={person.name} className="odd:bg-[#FFFFFF0F]">
                    <td className="whitespace-nowrap px-4 py-4 ">
                      <div className="flex items-center gap-x-4">
                        <p className="text-xl font-semibold text-white  ">
                          {index + 1}
                        </p>
                        <div className="h-10 w-10 ">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={person.image}
                            alt="person-image"
                          />
                        </div>
                        <div className=" flex items-center gap-x-1">
                          <div className="text-lg font-semibold text-white">
                            {person.name}
                          </div>
                          <div>
                            <img src={person.verify} alt="verification" className="h-6" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-lg text-white font-semibold">
                        {person.floorPrice}
                      </div>
                      <div
                        className={`text-sm ${
                          index % 2 == 0 ? "text-[#31CF61]" : "text-red-500"
                        }   pl-9 `}
                      >
                        {person.profitPerceant}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="  text-lg text-white  font-semibold ">
                        {person.profitAmm}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4  text-lg text-white font-semibold">
                      {person.mint}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-lg text-white font-semibold">
                      {person.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
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
                            className="h-full w-full rounded-full object-cover"
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
      <div className="px-9 mt-9">
        <TransactionPlot />
      </div>
      {/* Transaction Plot Ends */}

      {/* Transaction Pagination Starts */}
      <div className="px-9 pb-6 mt-9">
        <TransactionPagination />
      </div>
      {/* Transaction Pagination Ends */}
    </div>
  );
}

export default Dashboard;
