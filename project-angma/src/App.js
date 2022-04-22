import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";

function App() {
  const name = "Tom";
  const naver = {
    name: "네이버",
    url: "https://naver.com"
  }
  return (
    <div className="App">
      <Header></Header>
      <DayList></DayList>
      <Day></Day>
    </div>
  );
}

export default App;
