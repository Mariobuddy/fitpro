import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
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

const Home = () => {
  const [currentSelect, setCurrentSelect] = useState("block");

  const handnav = (e) => {
    console.log(e.target.id);
  };
  return (
    <Wrapper>
      <div className="left">
        <div className="link">
          <p>
            <TbSettings2 className="setting" />
            Dashboard
          </p>
          <NavLink className={"navOne"} to={"dashboard"}>
            <div className="in" onClick={handnav} id={"home"}>
              <TbSquareKey className="icon" />
              Dashboard
            </div>
            <MdKeyboardArrowRight className="arrow" />
          </NavLink>
          <NavLink className={"navOne"} to={"product"}>
            <div className="in" onClick={handnav} id={"product"}>
              <FiBox className="icon" />
              Product
            </div>{" "}
            <MdKeyboardArrowRight className="arrow" />
          </NavLink>
          <NavLink className={"navOne"} to={"customer"}>
            <div className="in" onClick={handnav} id={"customer"}>
              <TbUserSquareRounded className="icon" /> Customers{" "}
            </div>
            <MdKeyboardArrowRight className="arrow" />
          </NavLink>
          <NavLink className={"navOne"} to={"income"}>
            <div className="in" onClick={handnav} id={"income"}>
              <FaWallet className="icon" /> Income{" "}
            </div>
            <MdKeyboardArrowRight className="arrow" />
          </NavLink>
          <NavLink className={"navOne"} to={"promote"}>
            <div className="in" onClick={handnav} id={"promote"}>
              <CiDiscount1 className="icon" /> Promote{" "}
            </div>
            <MdKeyboardArrowRight className="arrow" />
          </NavLink>
          <NavLink className={"navOne"} to={"help"}>
            <div className="in" onClick={handnav} id={"help"}>
              <TbHelpOctagon className="icon" /> Help{" "}
            </div>
            <MdKeyboardArrowRight className="arrow" />
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
      <div className="right">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;

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
    background-color: #f5f5dc;
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
`;
