import Button from "./Button";
import styles from "./App.module.css"

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>React</h1>
      <Button text={'버튼'}></Button>
    </div>
  );
}

export default App;
