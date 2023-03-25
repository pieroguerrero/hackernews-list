import { useState } from "react";
import appStyles from "./App.module.css";
import List from "./components/List/List";
import { ListType } from "./interfaces/ListTypes";
import svgHeader from "./assets/app/hacker-news.svg";

function App() {
  const [tabValue, setTabValue] = useState(ListType.ALL);

  const handleTabClick = (selectedValue: ListType) => {
    setTabValue(selectedValue);
  };
  return (
    <div className={appStyles["app"]}>
      <header className={appStyles["header"]}>
        <img
          className={appStyles["header-img"]}
          src={svgHeader}
          alt="Hacker News title"
        />
      </header>
      <main className={appStyles["main"]}>
        <nav className={appStyles["tabs"]}>
          <button
            className={
              tabValue === ListType.ALL
                ? appStyles["tab-button-selected"]
                : appStyles["tab-button"]
            }
            onClick={handleTabClick.bind(null, ListType.ALL)}
          >
            All
          </button>
          <button
            className={
              tabValue === ListType.FAVOURITES
                ? appStyles["tab-button-selected"]
                : appStyles["tab-button"]
            }
            onClick={handleTabClick.bind(null, ListType.FAVOURITES)}
          >
            My faves
          </button>
        </nav>
        <section className={appStyles["news-list"]}>
          <List listType={tabValue} />
        </section>
      </main>
    </div>
  );
}

export default App;
