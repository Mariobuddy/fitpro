import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import img1 from "../../Assets/1.jpg";
import img2 from "../../Assets/2.jpg";

const ProductSell = () => {
  let imgData = [
    {
      image: img1,
      name: "Abstract 3D",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      stock: "32 in stock",
      price: "$45.99",
      sales: "20",
    },
    {
      image: img2,
      name: "Sarphens illustration",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      stock: "32 in stock",
      price: "$45.99",
      sales: "20",
    },
  ];
  return (
    <Wrapper>
      <div className="pro-top">
        <p>Product Sell</p>
        <div className="mix-pro">
          <div className="search-div">
            <FiSearch className="mg" />
            <input placeholder="Search" type="text" />
          </div>
          <select>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>
      <div className="pro-name">
        <p>Product Name</p>
        <div className="inner-name">
          <p>Stock</p>
          <p>Price</p>
          <p>Total Sales</p>
        </div>
      </div>
      <div className="pro-main">
        {imgData.map((val, i) => {
          return (
            <div key={i} className="main-OneDiv">
              <div className="this-left">
                <img src={val.image} alt="error" />
                <div className="left-detail">
                  <p>{val.name}</p>
                  <p>{val.des}</p>
                </div>
              </div>
              <div className="this-right">
                <p>{val.stock}</p>
                <p>{val.price}</p>
                <p>{val.sales}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductSell;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 2rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: #b7b2b2;
    margin-top: 10px;
    position: absolute;
    top: 9.2rem;
    left: 0;
  }

  .pro-main {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;

    .main-OneDiv {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      .this-left {
        display: flex;
        width: fit-content;

        img {
          width: 8rem;
          height: 4.5rem;
          border-radius: 0.5rem;
          object-fit: cover;
          object-position: center;
        }

        .left-detail {
          margin-left: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            &:nth-child(1) {
              font-weight: bold;
              font-size: 1.4rem;
            }
            &:nth-child(2) {
              font-size: 1.1rem;
              color: #b7b2b2;
            }
          }
        }
      }

      .this-right {
        display: flex;
        align-items: center;
        width: 36rem;
        justify-content: space-between;

        p {
          font-size: 1.2rem;
          width: 8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          &:nth-child(2) {
            font-weight: bold;
          }
        }
      }
    }
  }

  .pro-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.8rem;
      font-weight: bold;
    }

    .mix-pro {
      display: flex;

      select {
        border: none;
        background-color: #efe9e99b;
        width: 15rem;
        height: 3.2rem;
        border-radius: 0.4rem;
        padding: 0rem 1rem;
        cursor: pointer;
        outline: none;
        color: #989595;
      }
    }
    .search-div {
      position: relative;
      margin-right: 2rem;
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
        padding: 0.6rem 0rem 0.6rem 3rem;
        border-radius: 0.2rem;
        color: #a39f9f;
        border-radius: 0.2rem;
        background-color: #efe9e99b;

        &::placeholder {
          color: #b7b2b2;
        }
      }
    }
  }

  .pro-name {
    width: 100%;
    display: flex;
    margin-top: 2rem;
    justify-content: space-between;
    position: relative;

    p {
      font-size: 1.4rem;
      white-space: nowrap;
      color: #b7b2b2;
    }

    .inner-name {
      width: 100%;
      display: flex;
      align-items: center;
      width: 36rem;
      justify-content: space-between;

      p {
        width: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media (min-width: 360px) and (max-width: 768px) {
    padding: 1rem 1rem;

    &::after {
      top: 12rem;
      left: 0;
    }

    .pro-main {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;

      .main-OneDiv {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        .this-left {
          display: flex;
          width: fit-content;

          img {
            width: 8rem;
            height: 3rem;
          }

          .left-detail {
            margin-left: 1rem;
            flex-direction: column;
            p {
              &:nth-child(1) {
                font-size: 1.2rem;
              }
              &:nth-child(2) {
                font-size: 1rem;
              }
            }
          }
        }

        .this-right {
          width: 15rem;

          p {
            font-size: 1rem;
            white-space: nowrap;
          }
        }
      }
    }

    .pro-top {
      justify-content: center;
      flex-wrap: wrap;

      p {
        font-size: 1.6rem;
        margin-bottom: 1rem;
      }

      .mix-pro {
        select {
          width: 12rem;
          height: 3rem;
          font-size: 1rem;
        }
      }
      .search-div {
        margin-right: 4rem;
        input {
          width: 12rem;
        }
      }
    }

    .pro-name {
      p {
        font-size: 1rem;
      }

      .inner-name {
        width: 15rem;
      }
    }
  }
`;
