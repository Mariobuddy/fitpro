import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbSettings2 } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { TbUserSquareRounded } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { TbSquareKey } from "react-icons/tb";
import { FiBox } from "react-icons/fi";
import { TbHelpOctagon } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import rohit from "../../Assets/main.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Home = () => {
  const location = useLocation();
  const [currentSelect, setCurrentSelect] = useState(location.pathname);
  const [show, setShow] = useState(false);
  let Toggle = () => {
    setShow(!show);
  };

  const handnav = (val) => {
    setCurrentSelect(val);
    setShow(false);
  };
  return (
    <Wrapper>
      <div
        className="left"
        style={{ display: show || window.innerWidth > 768 ? "flex" : "none" }}
      >
        <div className="link">
          <p>
            <TbSettings2 className="setting" />
            Dashboard
          </p>
          <NavLink
            className={"navOne"}
            to={"dashboard"}
            onClick={() => handnav("/dashboard")}
          >
            <div className="in">
              <TbSquareKey className="icon" />
              Dashboard
            </div>
            <MdKeyboardArrowRight
              className="arrow"
              style={{
                display: currentSelect === "/dashboard" ? "none" : "block",
              }}
            />
          </NavLink>
          <NavLink
            className={"navOne"}
            to={"product"}
            onClick={() => handnav("/product")}
          >
            <div className="in">
              <FiBox className="icon" />
              Product
            </div>{" "}
            <MdKeyboardArrowRight
              className="arrow"
              style={{
                display: currentSelect === "/product" ? "none" : "block",
              }}
            />
          </NavLink>
          <NavLink
            className={"navOne"}
            to={"customer"}
            onClick={() => handnav("/customer")}
          >
            <div className="in">
              <TbUserSquareRounded className="icon" /> Customers{" "}
            </div>
            <MdKeyboardArrowRight
              className="arrow"
              style={{
                display: currentSelect === "/customer" ? "none" : "block",
              }}
            />
          </NavLink>
          <NavLink
            className={"navOne"}
            to={"income"}
            onClick={() => handnav("/income")}
          >
            <div className="in">
              <FaWallet className="icon" /> Income{" "}
            </div>
            <MdKeyboardArrowRight
              className="arrow"
              style={{
                display: currentSelect === "/income" ? "none" : "block",
              }}
            />
          </NavLink>
          <NavLink
            className={"navOne"}
            to={"promote"}
            onClick={() => handnav("/promote")}
          >
            <div className="in">
              <CiDiscount1 className="icon" /> Promote{" "}
            </div>
            <MdKeyboardArrowRight
              className="arrow"
              style={{
                display: currentSelect === "/promote" ? "none" : "block",
              }}
            />
          </NavLink>
          <NavLink
            className={"navOne"}
            to={"help"}
            onClick={() => handnav("/help")}
          >
            <div className="in">
              <TbHelpOctagon className="icon" /> Help{" "}
            </div>
            <MdKeyboardArrowRight
              className="arrow"
              style={{ display: currentSelect === "/help" ? "none" : "block" }}
            />
          </NavLink>
        </div>
        <div className="profile">
          <div className="inner-profile">
            <img alt="rohit" src={rohit} />
            <div className="name-div">
              <p className="name">Mario</p>
              <p className="role">Project Manager</p>
            </div>
          </div>
          <MdKeyboardArrowDown className="down-arrow" />
        </div>
      </div>
      <div className="mobile">
        {show ? (
          <AiOutlineClose className="logo1" onClick={Toggle} />
        ) : (
          <GiHamburgerMenu className="logo1" onClick={Toggle} />
        )}
      </div>
      <div className="right">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  background-color: #f5f5dc;

  .mobile {
    display: none;
  }

  .active {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0.4rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    color: #ffffff !important;
  }

  .back {
    display: none;
  }

  .right {
    width: 84vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 16vw;
  }

  .left {
    background-color: #03002e;
    padding: 2rem;
    width: 16vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 40000;

    .link {
      display: flex;
      flex-direction: column;

      p {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #ffffff;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        font-weight: bold;
        .setting {
          margin-right: 0.5rem;
        }
      }

      .navOne {
        color: #b7b2b2;
        font-size: 1.4rem;
        margin: 1rem 0rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-radius: 0.4rem;

        .in {
          display: flex;
          justify-content: center;
          align-items: center;
          .icon {
            font-size: 1.6rem;
            margin-right: 0.5rem;
          }
        }

        .arrow {
          color: #ffffff;
          font-size: 1.6rem;
        }
      }
    }

    .profile {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0.6rem 0.5rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.4rem;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      margin-left: -1.3rem;
      width: 15vw;

      .down-arrow {
        font-size: 2.5rem;
        color: #b7b2b2;
      }

      .inner-profile {
        display: flex;
        color: #b7b2b2;
        justify-content: center;
        align-items: center;

        .name-div {
          margin-left: 0.8rem;
          p {
            font-size: 1rem;
            &:nth-child(1) {
              color: #ffffff;
            }
          }
        }

        img {
          width: 3.2rem;
          height: 3.2rem;
          border-radius: 50%;
        }
      }
    }
  }

  @media (min-width: 360px) and (max-width: 768px) {
    .mobile {
      display: inline-flex;
      height: 100%;
      justify-content: space-between;
      align-items: center;
      margin-left: 0rem;
      position: fixed;
      top: -36rem;
      z-index: 99999999;
      right: 1rem;

      .logo1 {
        cursor: pointer;
        font-size: 3rem;
        color: orangered;
      }
    }
    .right {
      width: 100vw;
      height: 100%;
      flex-direction: column;
      margin-left: 0vw;
    }

    .left {
      background-color: #03002e;
      padding: 2rem;
      width: 100%;
      height: fit-content;
      display: none;

      .profile {
        margin-left: 0rem;
        width: 100%;
        margin-top: 10rem;
      }
    }
  }
`;
