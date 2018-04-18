import React from "react";

import { storiesOf } from "@storybook/react";

import Modal from "../../Components/Modal";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../Elements/Button";
import FlexContainer from "../../Containers/FlexContainer";

storiesOf("Modal", module)
  .add("Modal (without overlay)", () => (
    <Modal>
      <Heading size="3" appearance="primary">
        Are you sure?
      </Heading>
      <Paragraph size="normal">
        This is a popup box! Maybe to confirm some selection or something? Who
        knows!
      </Paragraph>

      <FlexContainer direction="row">
        <Button appearance="success">Yes</Button>
        <Button appearance="danger">Cancel</Button>
      </FlexContainer>
    </Modal>
  ))
  .add("Modal (with overlay)", () => (
    <React.Fragment>
      <Heading size="1">Stuff behind the modal</Heading>
      <Modal fade="fade">
        <Heading size="3" appearance="primary">
          Are you sure?
        </Heading>
        <Paragraph size="normal">
          This is a popup box! Maybe to confirm some selection or something? Who
          knows!
        </Paragraph>

        <FlexContainer direction="row">
          <Button appearance="success">Yes</Button>
          <Button appearance="danger">Cancel</Button>
        </FlexContainer>
      </Modal>
    </React.Fragment>
  ));
