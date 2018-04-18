import React from "react";

import { storiesOf } from "@storybook/react";

import Modal from "../../Components/Modal";

storiesOf("Modal", module).add("Modal", () => (
  <Modal>
    <p>DET HÄR ÄR EN PARAGRAF</p>
  </Modal>
));
