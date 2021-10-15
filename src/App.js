import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./animations/under_construction";
import whatsapp from "./animations/whatsapp";
import git from "./animations/git";
import linkedin from "./animations/linkedin";
import imagen from "./res/imagen.png";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default class App extends Component {
  constructor() {
    super();
    this.state = { git: true, fb: true, w: true };
  }

  onHover(i) {
    if (i === "git") this.setState({ git: false });
    if (i === "fb") this.setState({ fb: false });
    if (i === "w") this.setState({ w: false });
  }

  onLeave(i) {
    if (i === "git") this.setState({ git: true });
    if (i === "fb") this.setState({ fb: true });
    if (i === "w") this.setState({ w: true });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#000000", height: "100%" }}>
        <Lottie options={defaultOptions} height={400} width={415} />
        <p style={{ color: "#B1DAF5", textAlign: "center", fontSize: 50 }}>
          <code>Site under construction</code>
        </p>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <img src={imagen} alt="imagen" width="80" height="80" />
        </div>
        <p style={{ color: "#B1DAF5", textAlign: "center" }}>
          <code>CONTACT ME</code>
        </p>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a
            href={"https://wa.me/+593995406061"}
            target={"_blank"}
            rel="noreferrer"
            onMouseOver={() => this.onHover("w")}
            onMouseLeave={() => this.onLeave("w")}
          >
            <Lottie
              options={{
                autoplay: false,
                loop: false,
                animationData: whatsapp,
              }}
              height={100}
              width={100}
              isStopped={this.state.w}
            />
          </a>

          <a
            href={"https://www.linkedin.com/in/roberto-garces-2021"}
            rel="noreferrer"
            target={"_blank"}
            onMouseOver={() => this.onHover("fb")}
            onMouseLeave={() => this.onLeave("fb")}
          >
            <Lottie
              options={{
                autoplay: false,
                animationData: linkedin,
                loop: false,
              }}
              height={100}
              width={100}
              isStopped={this.state.fb}
            />
          </a>
          <a
            href={"https://github.com/robertomaster"}
            rel="noreferrer"
            target={"_blank"}
            onMouseOver={() => this.onHover("git")}
            onMouseLeave={() => this.onLeave("git")}
          >
            <Lottie
              options={{ autoplay: false, loop: false, animationData: git }}
              height={100}
              width={100}
              isStopped={this.state.git}
            />
          </a>
        </div>
      </div>
    );
  }
}
