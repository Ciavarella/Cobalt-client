import React from "react";

import { storiesOf } from "@storybook/react";

import NotFound from "../../Views/NotFound";

storiesOf("NotFound", module).add("404", () => <NotFound url="errorUrl.io" />);
