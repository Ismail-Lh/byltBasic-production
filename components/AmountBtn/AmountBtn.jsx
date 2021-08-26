import classes from './AmountBtn.module.scss';

const AmountBtn = ({ incAmount, decAmount, productAmount }) => {
  return (
    <div className={classes.amountBtn}>
      <button onClick={decAmount}> - </button>
      <span> {productAmount} </span>
      <button onClick={incAmount}> + </button>
    </div>
  );
};

export default AmountBtn;
