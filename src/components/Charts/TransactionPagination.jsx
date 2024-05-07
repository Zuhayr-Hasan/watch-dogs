import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "../../App.css";

const TransactionPagination = ({ data, itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderTableData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end).map((row, index) => (
      <tr key={index} className="border-b border-[#898787]">
        <td className="text-gradient px-2 py-5 text-white md:px-4">
          {row.hash}
        </td>
        <td className="px-2 py-2 text-center text-white md:px-12">
          {row.date}
        </td>
        <td className="px-2 py-2 text-center text-white md:px-4">{row.from}</td>
        <td className="px-2 py-2 text-center text-white md:px-4">{row.to}</td>
        <td className="text-gradient px-2 py-2 text-center text-white md:px-4">
          {row.tokenId}
        </td>
        <td className="px-2 py-2 text-center text-white md:px-4">{row.pl}</td>
        <td className="px-2 py-2 text-center text-white md:px-4">{row.type}</td>
      </tr>
    ));
  };

  return (
    <div className="w-full bg-[#333639] p-4 rounded-2xl TransactionFont">
      <h2 className="text-[#fff] text-2xl font-semibold mt-3">NFT Transactions</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="bg-[#FFFFFF0F]">
              <th className="px-2 py-3.5 text-left text-sm font-normal text-white md:px-4">
                TxnHash
              </th>
              <th className="px-2 py-3.5 text-center text-white font-normal md:px-12">
                Date
              </th>
              <th className="px-2 py-3.5 text-center text-white font-normal md:px-4">
                From
              </th>
              <th className="px-2 py-3.5 text-center text-white font-normal md:px-4">
                To
              </th>
              <th className="px-2 py-3.5 text-center text-white font-normal md:px-4">
                TokenID
              </th>
              <th className="px-2 py-3.5 text-center text-white font-normal md:px-4">
                Profit/Loss
              </th>
              <th className="px-2 py-3.5 text-center text-white font-normal md:px-4">
                Type
              </th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <div className="flex gap-x-3 justify-end pr-10 pt-24">
        <button
          onClick={() => handleClick(1)}
          className="text-white h-[39px] w-[53px] font-semibold hover:bg-[#434044] bg-[#5A555B] rounded-lg text-xs"
          disabled={currentPage === 1}
        >
          First
        </button>
        <button
          onClick={() => handleClick(currentPage - 1)}
          className="text-white h-[39px] w-[53px] font-semibold hover:bg-[#434044] bg-[#5A555B] rounded-lg flex justify-center items-center"
          disabled={currentPage === 1}
        >
          <IoIosArrowBack className="text-sm" />
        </button>
        <button className="text-white h-[39px] w-[140px] font-semibold hover:bg-[#434044] bg-[#5A555B] rounded-lg text-sm">
          Page {currentPage} of {totalPages}
        </button>
        <button
          onClick={() => handleClick(currentPage + 1)}
          className="text-white h-[39px] w-[53px] font-semibold hover:bg-[#434044] bg-[#5A555B] rounded-lg flex justify-center items-center"
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward className="text-sm" />
        </button>
        <button
          onClick={() => handleClick(totalPages)}
          className="text-white h-[39px] w-[53px] font-semibold hover:bg-[#434044] bg-[#5A555B] rounded-lg text-xs"
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </div>
    </div>
  );
};

// ----------------------------------------------------

const Transaction = () => {
  const people = [
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "10",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "5",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "145",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "345",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "4563",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "13",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "55",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "64",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "344",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "245",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "66",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "10",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "5",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "145",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "345",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "4563",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "13",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "55",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "64",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "344",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "245",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "66",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "10",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "5",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "145",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "345",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "4563",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "13",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "55",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "64",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "344",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "245",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "66",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "10",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "5",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "145",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "345",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "4563",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "13",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "55",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "64",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "344",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "245",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "66",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "10",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "5",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "145",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "345",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "4563",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "13",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "3455",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "55",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "64",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "344",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "245",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "66",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
    {
      hash: "0x123Hei0001223dju...",
      data: "15 days 4 hrs ago",
      from: "Null Address: 0x00...00",
      to: "0x45ty7632skjdbcbu...",
      tokenId: "112",
      pl: "None",
      type: "ERC-721",
    },
  ];

  const itemsPerPage = 10;

  return <TransactionPagination data={people} itemsPerPage={itemsPerPage} />;
};

export default Transaction;
