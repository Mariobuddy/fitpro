import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineDollar } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { HiArrowDown } from "react-icons/hi";
import BarChart from "./BarChart";
import CircleChart from "./CircleChart";
import ProductSell from "./ProductSell";

const DashBoard = () => {
  let card = [
    {
      color: "#00E400",
      bg: "#00e4003d",
      textcol: "#00E400",
      icon: <AiOutlineDollar style={{ color: "#00E400", fontSize: "6rem" }} />,
      day: "this month",
      val: "37.8%",
      bar: <HiArrowUp style={{ color: "#00E400" }} />,
      money: "$198k",
      description: "Earning",
    },
    {
      color: "#D90166",
      bg: "#d901663d",
      textcol: "#FF0000",
      icon: (
        <HiOutlineClipboardDocumentList
          style={{ color: "#D90166", fontSize: "6rem" }}
        />
      ),
      day: "this month",
      val: "2%",
      bar: <HiArrowUp style={{ color: "#FF0000" }} />,
      money: "$2.4k",
      description: "Orders",
    },
    {
      color: "##0000D1",
      bg: "#0000d13d",
      textcol: "FF0000",
      icon: <FaWallet style={{ color: "#0000D1", fontSize: "6rem" }} />,
      day: "this month",
      val: "2%",
      bar: <HiArrowDown style={{ color: "red" }} />,
      money: "$2.4k",
      description: "Balance",
    },
    {
      color: "#FF0000",
      bg: "#ff00003d",
      textcol: "#00E400",
      icon: (
        <HiOutlineShoppingBag style={{ color: "#FF0000", fontSize: "6rem" }} />
      ),
      day: "this week",
      val: "11%",
      bar: <HiArrowUp style={{ color: "#00E400" }} />,
      money: "$89k",
      description: "Total Sales",
    },
  ];

  return (
    <Wrapper>
      <div className="top">
        <p>Hello Rohit 👋,</p>
        <div className="search-div">
          <FiSearch className="mg" />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="card">
        {card.map((val, i) => {
          return (
            <div className="card-main" key={i}>
              <div className="cir" style={{ backgroundColor: val.bg }}>
                {val.icon}
              </div>
              <div className="info">
                <p>{val.description}</p>
                <p>{val.money}</p>
                <p>
                  <span style={{ color: val.textcol }}>
                    {val.bar} {val.val}{" "}
                  </span>
                  {val.day}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="graph">
        <BarChart />
        <CircleChart />
      </div>
      <ProductSell />
    </Wrapper>
  );
};

export default DashBoard;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 3rem 4rem;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    p {
      font-size: 1.8rem;
      font-weight: bold;
    }
    .search-div {
      position: relative;
      .mg {
        position: absolute;
        top: 0.7rem;
        font-size: 1.6rem;
        left: 0.8rem;
        color: #636060;
      }

      input {
        border: none;
        outline: none;
        padding: 0.6rem 1rem 0.6rem 3rem;
        border-radius: 0.2rem;
        color: #a39f9f;
        border-radius: 0.2rem;

        &::placeholder {
          color: #b7b2b2;
        }
      }
    }
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    .card-main {
      width: 26rem;
      height: 14rem;
      background-color: #ffffff;
      border-radius: 0.5rem;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .info {
        p {
          &:nth-child(1) {
            color: #b7b2b2;
            font-size: 1.2rem;
          }
          &:nth-child(2) {
            font-weight: bold;
            font-size: 2rem;
          }
          &:nth-child(3) {
            font-size: 1.2rem;
            color: black;
          }
        }
      }

      .cir {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .graph {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }
`;
