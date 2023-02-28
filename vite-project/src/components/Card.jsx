import { useEffect, useState } from "react";
import { server } from "../lib/axios";
import Botao from "./Botao";
import classes from "./Card.module.css";

function Card() {
  const [frase, setFrase] = useState("");

  function randomNumberAndTakingPhrase() {
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    server.get(`${randomNumber}`).then((res) => {
      const { advice } = res.data.slip;
      setFrase(advice);
    });
  }

  useEffect(() => {
    randomNumberAndTakingPhrase();
  }, []);

  return (
    <>
      <h1 className={classes.cartao}>{frase}</h1>
      <Botao
        setFrase={setFrase}
        randomNumberAndTakingPhrase={randomNumberAndTakingPhrase}
      />
    </>
  );
}

export default Card;
