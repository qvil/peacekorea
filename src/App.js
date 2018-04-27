import React, { Component } from "react";
import Image1 from "./20180427165016974keev.jpg";

class App extends Component {
  styles = {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    },
    img: {
      position: "fixed",
      opacity: 0.2
    },
    text: {
      zIndex: 2
    }
  };
  render() {
    const { styles } = this;

    return (
      <div style={styles.root}>
        <img style={styles.img} src={Image1} alt="20180427165016974keev.jpg" />
        <h2 style={styles.text}>
          2018-04-27 금요일 한국시간 18 시 <br />
          대한민국은 종전선언을 하고 평화국가가 되었습니다. <br />
          <br />
          Fri, 27 April 2018, 18:00 (Korea Time, UCT+09:00 seoul) <br />
          The Republic of Korea declared the end of war and became a peacuful
          nation.
        </h2>
        {/* <div>123123</div> */}
      </div>
    );
  }
}

export default App;
