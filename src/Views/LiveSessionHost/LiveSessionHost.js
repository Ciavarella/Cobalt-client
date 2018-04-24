import React from "react";
import { css, withStyles } from "../../withStyles";

import FlexContainer from "../../Containers/FlexContainer";
import Button from "../../Elements/Button";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Input from "../../Elements/Input";

/* TODO: Figure out better name */
class LiveSessionHost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { styles } = this.props;
    return <div {...css(styles.LiveSessionHost)} />;
  }
}

export default withStyles(({ themes, text, colors }) => {
  return {
    LiveSessionHost: {
      backgroundColor: colors.sand,
      minHeight: "100vh"
    }
  };
})(LiveSessionHost);
