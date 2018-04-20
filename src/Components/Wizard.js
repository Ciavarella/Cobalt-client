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
  }

  nextPage(e) {
    this.state.currentPage < this.props.children.length - 1
      ? this.setState({ currentPage: this.state.currentPage + 1 })
      : this.setState({ currentPage: 0 });
  }

  render() {
    return (
      <div {...css(this.props.styles.wizard)} {...this.props}>
        <FlexContainer
          direction="row"
          justify="between"
          style={{ padding: "40px" }}
        >
          <Icon
            icon="fas fa-arrow-left"
            fillColor="darkMetal"
            style={{
              border: "2px solid"
            }}
          />
          <Icon
            icon="fas fa-times"
            fillColor="darkMetal"
            style={{
              border: "2px solid"
            }}
          />
        </FlexContainer>
        <Modal>
          {this.props.children.map((child, i) => (
            <li
              style={{
                display: i === this.state.currentPage ? "flex" : "none"
              }}
            >
              {child}
            </li>
          ))}
          <Button onClick={this.nextPage} appearance="secondary">
            NEXT - {this.state.currentPage + 1} / 3
          </Button>
        </Modal>
      </div>
    );
  }
}

export default withStyles(({ theme }) => {
  return {
    wizard: {}
  };
})(Wizard);
