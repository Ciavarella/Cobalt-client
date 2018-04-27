import React from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import Paragraph from "../Elements/Paragraph";

class VoteSlider extends React.Component {
  constructor({ styles, ...props }) {
    super(props);
    this.state = {
      cooldownTime: 0
    };
  }

  componentDidMount() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Styling
    const voteCircleColor = this.props.styles.voteCircleColor._definition;
    const voteCircleFontColor = this.props.styles.voteCircleFontColor
      ._definition;
    console.log(voteCircleFontColor);

    const HEIGHT = canvas.height;
    const WIDTH = canvas.width;
    let GRAVITY = 1;
    let isDraggable = false;
    let onCoolDown = false;
    const cooldownTime = 15;
    let cooldownTimer = cooldownTime;

    canvas.addEventListener("mousedown", function() {
      if (!onCoolDown) {
        isDraggable = true;
        circleAnimation.reset();
        arcPosition.last.y = arcPosition.y;
      }
    });
    canvas.addEventListener("mouseup", function() {
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
    });
    canvas.addEventListener("mousemove", function(event) {
      if (!onCoolDown) {
        if (isDraggable) {
          const mousePos = event.clientY;
          if (mousePos > 35 && mousePos < HEIGHT - 35) {
            arcPosition.y = mousePos;
          }
        }
      }
    });

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
        ctx.beginPath();
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.font = "30px montserrat";
        ctx.fillStyle = voteCircleFontColor;
        ctx.fillText(cooldownTimer, arcPosition.x, arcPosition.y);
        ctx.fill();
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
      // THIS IS WHERE WE SEND THE UP VOTE

      console.log("Up vote success");
      initiateCooldown();
      console.log(onCoolDown);
    };

    const voteDown = () => {
      //THIS IS WHERE WE SEND THE DOWN VOTE

      console.log("Down vote success");
      initiateCooldown();
      console.log(onCoolDown);
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

      this.setState(
        {
          cooldownTime: timeLeft
        },
        () => {
          console.log(this.state.cooldownTime);
        }
      );

      return timeLeft;
    };
  }

  render() {
    return (
      <FlexContainer
        align="center"
        justify="center"
        style={{ height: "100%", width: "100%" }}
      >
        <canvas
          id="myCanvas"
          width="300"
          height="700"
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
    voteCircleColor: colors.carbon,
    voteCircleFontColor: colors.aluminum
  };
})(VoteSlider);
