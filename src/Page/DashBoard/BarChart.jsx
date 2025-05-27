import React from "react";
import styled from "styled-components";

const BarChart = () => {
  let data = [
    { height: "15rem", color: "#e4ddddba", des: "Jan" },
    { height: "12rem", color: "#e4ddddba", des: "Feb" },
    { height: "20rem", color: "#e4ddddba", des: "Mar" },
    { height: "16rem", color: "#e4ddddba", des: "Apr" },
    { height: "17rem", color: "#e4ddddba", des: "May" },
    { height: "8rem", color: "#e4ddddba", des: "June" },
    { height: "19rem", color: "#e4ddddba", des: "July" },
    { height: "22rem", color: "#B026FF", des: "Aug" },
    { height: "20rem", color: "#e4ddddba", des: "Sep" },
    { height: "16rem", color: "#e4ddddba", des: "Oct" },
    { height: "14rem", color: "#e4ddddba", des: "Nov" },
    { height: "16rem", color: "#e4ddddba", des: "Dec" },
  ];
  return (
    <Wrapper>
      <div className="c-top">
        <div className="c-left">
          <p>Overview</p>
          <p>Monthly Earning</p>
        </div>
        <select>
          <option>Quaterly</option>
        </select>
      </div>
      <div className="chart">
        {data.map((val, i) => {
          return (
            <div className="inner-chart" key={i}>
              <div
                className="bar-in"
                style={{ height: val.height, backgroundColor: val.color }}
              ></div>
              <p>{val.des}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default BarChart;

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 50vw;
  height: 45vh;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0rem;

  .c-top {
    display: flex;
    width: inherit;
    justify-content: space-between;
    padding: 0rem 2rem;

    .c-left {
      p {
        &:nth-child(1) {
          font-size: 1.8rem;
          font-weight: bold;
        }
        &:nth-child(2) {
          color: #b7b2b2;
          font-size: 1.2rem;
        }
      }
    }
    select {
      border: none;
      background-color: #efe9e99b;
      width: 12rem;
      height: 3.5rem;
      border-radius: 0.4rem;
      padding: 0rem 1rem;
      cursor: pointer;
      outline: none;
      color: #989595;
    }
  }

  .chart {
    display: flex;
    width: inherit;
    padding: 0rem 1rem;
    .inner-chart {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      width: inherit;

      .bar-in {
        border-radius: 1rem;
        width: 4.5rem;
      }
      p {
        margin-top: 1.5rem;
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 360px) and (max-width: 768px) {
    width: 100%;
    padding: 0rem 0rem;
    height: 40vh;
    margin-bottom: 3rem;
    .c-top {
      padding: 0rem 1rem;

      .c-left {
        p {
          &:nth-child(1) {
            font-size: 1.6rem;
          }
          &:nth-child(2) {
            font-size: 1rem;
          }
        }
      }
      select {
        width: 10rem;
        height: 3rem;
        font-size: 1rem;
      }
    }

    .chart {
      .inner-chart {
        .bar-in {
          border-radius: 0.5rem;
          width: 2rem;
        }
        p {
          margin-top: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`;
