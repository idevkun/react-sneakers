import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flexs">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>
    </div>


  )
}

export default App;
