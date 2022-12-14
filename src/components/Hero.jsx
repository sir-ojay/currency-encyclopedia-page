import { ArrangeHorizontal } from "iconsax-react";
import React from "react";
import styled from "styled-components";

const Hero = () => {
  const Wrapper = styled.div`
    display: flex;
    padding: 0 80px;
    align-items: center;
    font-family: "Inter", sans-serif;
    margin-top: 100px;
    margin-bottom: 50px;
    max-width: 1600px;
    margin: auto;

    @media screen and (max-width: 400px) {
      flex-direction: column;
      padding: 0 15px;
    }

    @media screen and (max-width: 768px) {
      padding: 0 20px;
    }
  `;

  const Container1 = styled.div`
    width: 40%;
    margin-right: 10px;

    h5 {
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #0062ff;
      font-weight: 400;
    }

    h2 {
      font-size: 3rem;
      font-weight: 800;
    }

    p {
      margin-top: 20px;
      color: #555962;
      line-height: 28px;
    }

    div {
      margin-top: 20px;
      display: flex;
      align-items: center;

      img {
        padding-right: 10px;
      }

      p {
        color: #000;
        font-weight: 700;
        line-height: 20px;
      }
    }

    .download {
      margin-top: 30px;
    }

    @media screen and (max-width: 400px) {
      width: 100%;
      margin-right: 0;
      text-align: center;
      order: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 20px;

      h2 {
        font-size: 2rem;
      }

      div {
        justify-content: center;
      }
    }

    @media screen and (max-width: 768px) {
      h2 {
        font-size: 1.5rem;
        margin-top: 5px;
      }

      p {
        font-size: 0.9rem;
        line-height: 20px;
      }
    }
  `;

  const Container2 = styled.div`
    width: 60%;
    margin-left: 10px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;

    h3 {
      text-align: center;
      padding: 10px 0;
    }

    form {
      .amount {
        display: flex;
        flex-direction: column;
        margin: 30px 0;
        outline: none;
      }

      label {
        font-weight: 800;
        margin-bottom: 10px;
      }

      input {
        padding: 15px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        outline: none;
      }
      select {
        text-decoration: none;
        border: none;
        padding: 10px 10px;
        cursor: pointer;
        font-size: medium;
        width: 100%;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        outline: none;
      }

      select:first-child {
        margin-right: 10px;
      }

      select:last-child {
        margin-left: 10px;
      }
      button {
        background-color: #b0ceff;
        border: none;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        margin: 20px 0;
      }

      .currency {
        display: flex;
        align-items: center;
        margin: 10px 0;
      }
    }

    @media screen and (max-width: 400px) {
      width: 100%;
      margin-right: 0;
      text-align: center;

      form {
        input {
          padding: 20px 10px;
        }

        .currency {
          flex-direction: column;
        }

        select:first-child {
          margin-right: 0px;
          margin-bottom: 20px;
        }

        select:last-child {
          margin-left: 0px;
          margin-top: 20px;
        }
      }
    }

    @media screen and (max-width: 768px) {
    }
  `;
  return (
    <Wrapper>
      <Container1>
        <h5>Simple and Quick</h5>
        <h2>Check parallel market rate In Real time</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          reale he point of using Lorem Ipsum is that it has a more-or-less
          normal valid equity.
        </p>
        <div>
          <img src="/qr.svg" alt="" />
          <img src="/arrow.svg" alt="" />
          <p>
            Scan to <br /> Download <br /> Streerates
          </p>
        </div>
        <div className="download">
          <a href="#!">
            <img src="/apple-store.svg" alt="" />
          </a>
          <a href="#!">
            <img src="/googleplay.svg" alt="" />
          </a>
        </div>
      </Container1>
      <Container2>
        <h3>Select a currency</h3>
        <form action="">
          <div className="amount">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              name="amount"
              id="amount"
              placeholder="Enter amount"
            />
          </div>
          <div className="currency">
            <select name="currency" id="currency1">
              <option selected>Select a currency</option>
              <option value="NG">Naira</option>
              <option value="NG">Naira</option>
              <option value="NG">Naira</option>
            </select>
            <ArrangeHorizontal size="32" color="#00296B" />
            <select name="currency" id="currency1">
              <option selected>Select a currency</option>
              <option value="NG">Naira</option>
              <option value="NG">Naira</option>
              <option value="NG">Naira</option>
            </select>
          </div>
          <button type="submit">Convert</button>
        </form>
      </Container2>
    </Wrapper>
  );
};

export default Hero;
