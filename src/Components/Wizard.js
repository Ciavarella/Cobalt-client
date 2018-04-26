import React from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import Modal from "./Modal";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import Icon from "../Elements/Icon";

class Wizard extends React.Component {
  constructor({ styles, handleSubmit = null, ...props }) {
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
    e.preventDefault();

    const data = new FormData(e.target);
    this.props.handleSubmit(data);

    // this.props.handleSubmit ? this.props.handleSubmit(data) : console.log(data);
  }

  render() {
    console.log(this.props.sessionId);
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
              zIndex: "9999"
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
              zIndex: "9999"
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
        <form onSubmit={this.handleSubmit}>
          <Modal withOverlay>
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
              onClick={
                this.state.currentPage === this.props.children.length - 1
                  ? ""
                  : this.nextPage
              }
              appearance="secondary"
              style={{
                width: "150px",
                height: "50px",
                position: "relative"
              }}
            >
              {this.props.isLoading ? (
                <Icon
                  icon="fas fa-spinner"
                  size="large"
                  {...css(this.props.styles.spinner)}
                />
              ) : this.state.currentPage === this.props.children.length - 1 ? (
                `SUBMIT - ${this.state.currentPage + 1} / ${
                  this.props.children.length
                }`
              ) : (
                `NEXT - ${this.state.currentPage + 1} / ${
                  this.props.children.length
                }`
              )}
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
    },
    spinner: {
      fontSize: "30px",
      position: "absolute",
      top: "calc(50% - 15px)",
      left: "calc(50% - 15px)",

      ":nth-child(1) svg": {
        animation: "spin 1.5s ease infinite"
      }
    }
  };
})(Wizard);
