import styles from "../App.module.css";
function ButtonContainer() {
  const buttonList = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonList.map((item) => (
        <button className={styles.button}>{item}</button>
      ))}
    </div>
  );
}
export default ButtonContainer;