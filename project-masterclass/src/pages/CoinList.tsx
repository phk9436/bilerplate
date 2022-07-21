import React, { useEffect, useState, useCallback } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function CoinList() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  const getCoins = useCallback(async () => {
    try {
      const { data } = await axios.get("https://api.coinpaprika.com/v1/coins");
      const coinData = data.filter((e: Coin, i: number) => i < 100);
      data.length ? setCoins(coinData) : setCoins([]);
    } catch (err) {
      console.dir(err);
      setCoins([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Coins</h1>
      </Header>
      <CoinsUl>
        {!loading
          ? coins.map((e) => (
              <CoinsLi key={e.id}>
                <Link
                  to={`/${e.id}`}
                  state={{
                    name: e.name,
                    rank: e.rank,
                  }}
                >
                  <img
                    src={`https://coinicons-api.vercel.app/api/icon/${e.symbol.toLowerCase()}`}
                    alt=""
                  />
                  {`${e.name} (${e.type})`} &rarr;
                </Link>
              </CoinsLi>
            ))
          : "loading..."}
      </CoinsUl>
    </Container>
  );
}

export default CoinList;

const Container = styled("div")`
  padding: 0 20px;
`;

const Header = styled("header")`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 48px;
    color: ${(props) => props.theme.textColor};
  }
`;

const CoinsUl = styled("ul")`
  max-width: 400px;
  margin: auto;
`;

const CoinsLi = styled("li")`
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 15px;
  cursor: pointer;

  a {
    font-weight: 700;
    transition: 0.1s;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 20px;
  }

  img {
    width: 30px;
  }

  ${(props) => {
    const { accentColor, bgColor } = props.theme;

    return css`
      color: ${bgColor};

      a {
        color: ${bgColor};
      }

      &:hover a {
        color: ${accentColor};
      }
    `;
  }};
`;