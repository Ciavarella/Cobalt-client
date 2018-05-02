import React from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import Paragraph from "../Elements/Paragraph";

class VoteSlider extends React.Component {
  constructor({ styles, ...props }) {
    super(props);
    this.state = {
      cooldownTime: 0,
      currentVote: "",
      canvas: {
        height: "",
        width: ""
      }
    };
  }

  componentDidMount() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    this.setState({
      ...this.state,
      canvas: {
        height: canvas.height,
        width: canvas.width
      }
    });

    // Canvas styling
    const voteCircleColor = this.props.styles.voteCircleColor._definition;
    const voteCircleFontColor = this.props.styles.voteCircleFontColor
      ._definition;

    const HEIGHT = canvas.height;
    const WIDTH = canvas.width;
    let GRAVITY = 1;
    let isDraggable = false;
    let onCoolDown = false;
    const cooldownTime = 0;
    let cooldownTimer = cooldownTime;
    let loader = 0;

    const onMouseDown = yPosition => {
      if (!onCoolDown) {
        isDraggable = true;
        circleAnimation.reset();
        arcPosition.last.y = arcPosition.y;
        arcPosition.y = yPosition;
      }
    };

    const onMouseUp = () => {
      if (!onCoolDown) {
        isDraggable = false;

        if (arcPosition.y > HEIGHT / 2) {
          voteDown();
        }

        if (arcPosition.y < HEIGHT / 2) {
          voteUp();
        }

        if (arcPosition.y !== arcPosition.last.y) {
          circleAnimation.setReset(true);
        }
      }
    };

    const onMouseMove = yPosition => {
      if (!onCoolDown) {
        if (isDraggable) {
          const mousePos = yPosition;
          if (mousePos > 35 && mousePos < HEIGHT - 35) {
            arcPosition.y = mousePos;
          }
        }
      }
    };

    // Eventlisteners for desktop
    canvas.addEventListener("mousedown", ({ clientY }) => onMouseDown(clientY));
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mousemove", ({ clientY }) => onMouseMove(clientY));

    // Eventlisteners for mobile
    canvas.addEventListener("touchstart", ({ touches }) =>
      onMouseDown(touches[0].clientY)
    );
    canvas.addEventListener("touchend", onMouseUp);
    canvas.addEventListener("touchmove", ({ touches }) =>
      onMouseMove(touches[0].clientY)
    );

    const CircleAnimation = () => {
      let t = 0,
        current = 0,
        max = 50,
        delta = 0.05,
        shouldReset = false;

      const animate = () => {
        current += delta;
        t = current / max;
        arcPosition.y = lerp(
          arcPosition.y,
          HEIGHT / 2,
          EasingFunctions.easeInOutQuad(t)
        );
        shouldReset = true;
      };

      const reset = () => {
        shouldReset = false;
        t = 0;
        current = 0;
        max = 50;
        delta = 0.05;
      };

      const setReset = status => (shouldReset = status);
      const getReset = () => shouldReset;

      return { animate, reset, setReset, getReset };
    };

    const circleAnimation = CircleAnimation();

    const arcPosition = {
      x: WIDTH / 2,
      y: HEIGHT / 2,

      last: {
        x: null,
        y: null
      }
    };
    function moveToMiddle() {
      parseInt(arcPosition.y) !== HEIGHT / 2
        ? circleAnimation.animate()
        : circleAnimation.reset();
    }

    function lerp(p1, p2, t) {
      return p1 + (p2 - p1) * t;
    }

    function easeInOut(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    function draw() {
      requestAnimationFrame(draw);
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      ctx.beginPath();
      ctx.arc(arcPosition.x, arcPosition.y, 50, 0, 2 * Math.PI);
      ctx.fillStyle = voteCircleColor;
      ctx.fill();

      if (onCoolDown) {
        // Draws number in the middle of the vote circle
        ctx.beginPath();
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.font = "30px montserrat";
        ctx.fillStyle = voteCircleFontColor;
        ctx.fillText(cooldownTimer, arcPosition.x, arcPosition.y);
        ctx.fill();

        if (loader >= 0 && loader <= 2) {
          loader += 2 / cooldownTime / 60;

          if (loader > 2) {
            loader = 0;
          }
        }

        // Draws loader on outer edge of the vote circle
        ctx.beginPath();
        ctx.arc(
          arcPosition.x,
          arcPosition.y,
          50 - 2.5,
          1.5 * Math.PI,
          (loader + 1.5) * Math.PI
        );
        ctx.strokeStyle = "#FFF";
        ctx.lineWidth = 5;
        ctx.stroke();
      }

      if (circleAnimation.getReset()) moveToMiddle();
    }

    draw();

    var EasingFunctions = {
      easeInOutQuad: function(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }
    };

    const voteUp = () => {
      arcPosition.y > HEIGHT / 11 * 1 && arcPosition.y < HEIGHT / 11 * 2
        ? this.setState({ currentVote: "+5" })
        : "";

      arcPosition.y > HEIGHT / 11 * 2 && arcPosition.y < HEIGHT / 11 * 3
        ? this.setState({ currentVote: "+4" })
        : "";

      arcPosition.y > HEIGHT / 11 * 3 && arcPosition.y < HEIGHT / 11 * 4
        ? this.setState({ currentVote: "+3" })
        : "";

      arcPosition.y > HEIGHT / 11 * 4 && arcPosition.y < HEIGHT / 11 * 5
        ? this.setState({ currentVote: "+2" })
        : "";
      arcPosition.y > HEIGHT / 11 * 5 && arcPosition.y < HEIGHT / 11 * 6
        ? this.setState({ currentVote: "+1" })
        : "";

      initiateCooldown();
    };

    const voteDown = () => {
      arcPosition.y < HEIGHT / 11 * 11 && arcPosition.y > HEIGHT / 11 * 10
        ? this.setState({ currentVote: "-5" })
        : "";

      arcPosition.y < HEIGHT / 11 * 10 && arcPosition.y > HEIGHT / 11 * 9
        ? this.setState({ currentVote: "-4" })
        : "";

      arcPosition.y < HEIGHT / 11 * 9 && arcPosition.y > HEIGHT / 11 * 8
        ? this.setState({ currentVote: "-3" })
        : "";

      arcPosition.y < HEIGHT / 11 * 8 && arcPosition.y > HEIGHT / 11 * 7
        ? this.setState({ currentVote: "-2" })
        : "";
      arcPosition.y < HEIGHT / 11 * 7 && arcPosition.y > HEIGHT / 11 * 6
        ? this.setState({ currentVote: "-1" })
        : "";

      initiateCooldown();
    };

    const initiateCooldown = () => {
      onCoolDown = true;
      setTimeout(() => {
        onCoolDown = false;
      }, cooldownTime * 1000);
      let countCooldown = setInterval(() => {
        updateCooldownTimeLeft();
        if (this.state.cooldownTime === 0) {
          clearInterval(countCooldown);
          this.setState({
            coolDownTime: cooldownTime
          });
          cooldownTimer = cooldownTime;
        }
      }, 1000);
    };

    const updateCooldownTimeLeft = () => {
      let timeLeft;
      timeLeft = cooldownTimer--;

      this.setState({
        cooldownTime: timeLeft
      });

      return timeLeft;
    };
  }

  render() {
    return (
      <FlexContainer
        align="center"
        justify="center"
        direction="row"
        style={{ height: "100vh", width: "100vw" }}
      >
        <FlexContainer
          align="center"
          justify="between"
          style={{
            height: `${this.state.canvas.height * 0.9}px`,
            width: "25px"
          }}
        >
          <Paragraph size={this.state.currentVote === "+5" ? "leading" : "sub"}>
            +5
          </Paragraph>
          <Paragraph size={this.state.currentVote === "+4" ? "leading" : "sub"}>
            +4
          </Paragraph>
          <Paragraph size={this.state.currentVote === "+3" ? "leading" : "sub"}>
            +3
          </Paragraph>
          <Paragraph size={this.state.currentVote === "+2" ? "leading" : "sub"}>
            +2
          </Paragraph>
          <Paragraph size={this.state.currentVote === "+1" ? "leading" : "sub"}>
            +1
          </Paragraph>
          <Paragraph size={this.state.currentVote === "-1" ? "leading" : "sub"}>
            -1
          </Paragraph>
          <Paragraph size={this.state.currentVote === "-2" ? "leading" : "sub"}>
            -2
          </Paragraph>
          <Paragraph size={this.state.currentVote === "-3" ? "leading" : "sub"}>
            -3
          </Paragraph>
          <Paragraph size={this.state.currentVote === "-4" ? "leading" : "sub"}>
            -4
          </Paragraph>
          <Paragraph size={this.state.currentVote === "-5" ? "leading" : "sub"}>
            -5
          </Paragraph>
        </FlexContainer>

        <canvas
          id="myCanvas"
          height="640"
          width="400"
          {...css(
            this.props.styles.voteSlider,
            this.props.styles.background,
            this.props.styles.rounded
          )}
        >
          We're really sorry but your browser does not support our vote system
        </canvas>
      </FlexContainer>
    );
  }
}

export default withStyles(({ themes, colors, rounded }) => {
  return {
    voteSlider: {
      border: "2px solid #d3d3d3",
      background: `linear-gradient(${colors.success}, ${colors.danger})`
    },
    rounded: rounded,
    voteCircleColor: colors.nightsky,
    voteCircleFontColor: colors.aluminum
  };
})(VoteSlider);
