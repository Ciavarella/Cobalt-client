import React from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import Modal from "./Modal";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import InputWithIcon from "../Elements/InputWithIcon";
import Icon from "../Elements/Icon";

class Wizard extends React.Component {
  constructor({ styles, ...props }) {
    super(props);
    this.state = {
      currentPage: 0
    };

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nextPage(e) {
    e.preventDefault();
    this.state.currentPage < this.props.children.length - 1
      ? this.setState({ currentPage: this.state.currentPage + 1 })
      : this.setState({ currentPage: 0 });
  }

  previousPage(e) {
    e.preventDefault();
    this.state.currentPage > 0
      ? this.setState({ currentPage: this.state.currentPage - 1 })
      : this.setState({ currentPage: 0 });
  }

  handleSubmit(e) {
    /** Handle the finished settings */
    console.log(e.target);
  }

  dummyFunction(e) {
    /** This is only used to prevent the button for breaking during storybook */
    e.preventDefault();
  }

  /** TODO: Set up redux with each input from each step so we can handle all the settings at once */

  render() {
    return (
      <div {...css(this.props.styles.wizard)} {...this.props}>
        <FlexContainer
          direction="row"
          justify="between"
          style={{ padding: "40px" }}
        >
          <a
            href=""
            onClick={this.previousPage}
            style={{
              zIndex: "99999"
            }}
          >
            <Icon
              icon="fas fa-arrow-left"
              fillColor="white"
              style={{
                border: "2px solid"
              }}
            />
          </a>
          <a
            href="#"
            style={{
              zIndex: "99999"
            }}
          >
            <Icon
              icon="fas fa-times"
              fillColor="white"
              style={{
                border: "2px solid"
              }}
            />
          </a>
        </FlexContainer>
        <form onSubmit={this.handeSubmit}>
          <Modal>
            {this.props.children.map((child, i) => (
              <li
                key={i}
                style={{
                  display: i === this.state.currentPage ? "flex" : "none"
                }}
              >
                {child}
              </li>
            ))}
            <Button
              id="submitButton"
              onClick={
                this.state.currentPage === 2
                  ? this.dummyFunction
                  : this.nextPage
              }
              appearance="secondary"
            >
              {this.state.currentPage === 2
                ? "FINISH - " + (this.state.currentPage + 1) + " / 3"
                : "NEXT - " + (this.state.currentPage + 1) + " / 3"}
            </Button>
          </Modal>
        </form>
      </div>
    );
  }
}

export default withStyles(({ colors }) => {
  return {
    wizard: {
      ":nth-child(1) a > span": {
        backgroundColor: colors.carbon,
        ":hover": {
          backgroundColor: colors.nightsky
        }
      }
    }
  };
})(Wizard);
