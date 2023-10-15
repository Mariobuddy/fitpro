import React from "react";
import styled from "styled-components";

const CircleChart = () => {
  return (
    <Wrapper>
      <div className="cir-top">
        <p>Customers</p>
        <p>Customers that buy products</p>
      </div>
      <div className="cir-bottom">
        <div className="mid">
          <p>65%</p>
          <p>Total New</p>
          <p>Customers</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default CircleChart;

const Wrapper = styled.div`
  width: 26vw;
  height: 45vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  .cir-top {
    p {
      &:nth-child(1) {
        font-size: 1.8rem;
        font-weight: 600;
      }

      &:nth-child(2) {
        font-size: 1.2rem;
        color: #b7b2b2;
      }
    }
  }
  .cir-bottom {
    border-radius: 50%;
    width: 22rem;
    height: 22rem;
    background-color: #ffffff;
    box-shadow: 2px 2px 8px 2px #d9d8d8;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;

    .mid {
      width: 17rem;
      height: 17rem;
      border: 25px solid #e4ddddba;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        &:nth-child(1) {
          font-size: 2rem;
          font-weight: 600;
        }
        &:nth-child(2) {
          font-size: 1.2rem;
        }
        &:nth-child(3) {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
