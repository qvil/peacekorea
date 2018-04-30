import React, { Component } from "react";
import Image1 from "img/20180427165016974keev.jpg";
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

    return (
      <div style={styles.root}>
        <img style={styles.img} src={Image1} alt="20180427165016974keev.jpg" />
        <h2 style={styles.item}>
          {text.kr.time}
          <br />
          {text.kr.declare}
          <br />
          <br />
          {text.en.time}
          <br />
          {text.en.declare}
          <br />
        </h2>
        <br />
        <h2>{text.kr.relatedNews}</h2>
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
