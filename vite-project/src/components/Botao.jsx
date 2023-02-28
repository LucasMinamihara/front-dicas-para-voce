import classes from "./Botao.module.css";

function Botao(props) {
  function trocarFrase() {
    props.randomNumberAndTakingPhrase();
  }

  return (
    <div className={classes.container}>
      <button className={classes.botao} onClick={trocarFrase}>
        Clique aqui para mostrar outra frase
      </button>
    </div>
  );
}

export default Botao;
