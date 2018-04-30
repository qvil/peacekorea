import React, { Component } from "react";
import Image1 from "img/20180427165016974keev.jpg";
import Image2 from "img/1RYF45S8SV_2.jpg";
import text from "./text.json";
import News from "components/News";

class App extends Component {
  styles = {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      flexDirection: "column"
    },
    img: {
      position: "fixed",
      opacity: 0.2
    },
    item: {
      zIndex: 2,
      textAlign: "center"
    }
  };
  render() {
    const { styles } = this;
    const newsList = text.newsList;
    const kr = text.kr;
    const en = text.en;

    return (
      <div style={styles.root}>
        {/* Apple Swipe? */}
        <img style={styles.img} src={Image1} alt="20180427165016974keev.jpg" />
        <img style={styles.img} src={Image2} alt="1RYF45S8SV_2.jpg" />
        <h2 style={styles.item}>
          {kr.time}
          <br />
          {kr.declare}
          <br />
          <br />
          {en.time}
          <br />
          {en.declare}
          <br />
        </h2>
        <br />
        <h2>{`${kr.relatedNews} (${en.relatedNews})`}</h2>
        <ul style={styles.item}>
          {newsList.map((news, index) => (
            <News key={index} title={news.title} link={news.link} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
