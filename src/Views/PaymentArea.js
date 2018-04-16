import React from "react";
import { css, withStyles } from "../withStyles";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import Button from "../Elements/Button";
// import List from "../Elements/List";
import Icon from "../Elements/Icon";
import Card from "../Elements/Card";

const PaymentArea = ({ styles, ...props }) => (
  <div {...css(styles.paymentArea)}>
    <Card shadow="shadow">
      <Heading size="5">PERSONAL</Heading>
      <Icon size="large">
        <i className="fas fa-briefcase" />
      </Icon>
      <Paragraph size="leading">$ 9.99 / month</Paragraph>

      <ul>
        <li>
          1-50 attendess per session<Icon>
            <i class="fas fa-check" />
          </Icon>
        </li>
        <li>
          Customizable themes<Icon>
            <i class="fas fa-check" />
          </Icon>
        </li>
        <li>
          Up to 25 saved sessions<Icon>
            <i class="fas fa-check" />
          </Icon>
        </li>
        <li>Exclusive graphs</li>
        <li>Fancy stuff</li>
      </ul>
    </Card>
    <Card shadow="shadow">
      <Heading size="5">ENTERPRISE</Heading>
      <Icon size="large">
        <i className="fas fa-building" />
      </Icon>
      <Paragraph size="leading">$ 49.99 / month</Paragraph>

      <ul>
        <li>
          Unlimited attendess<Icon>
            <i class="fas fa-check" />
          </Icon>
        </li>
        <li>
          Customizable themes<Icon>
            <i class="fas fa-check" />
          </Icon>
        </li>
        <li>
          Unlimited saved sessions<Icon>
            <i class="fas fa-check" />
          </Icon>
        </li>
        <li>
          Exclusive graphs<Icon>
            <i class="fas fa-check" />
          </Icon>
        </li>
        <li>
          Fancy stuff<Icon>
            <i class="fas fa-check" />
          </Icon>
        </li>
      </ul>
    </Card>
    <Card shadow="shadow">
      <Heading size="5">ADVANCED</Heading>
      <Icon size="large">
        <i className="fas fa-boxes" />
      </Icon>
      <Paragraph size="leading">$ 19.99 / month</Paragraph>

      <ul>
        <li>
          51-250 attendess per session<Icon>
            <i class="fas fa-check" />
          </Icon>
        </li>
        <li>
          Customizable themes<Icon>
            <i class="fas fa-check" />
          </Icon>
        </li>
        <li>
          Unlimited saved sessions<Icon>
            <i class="fas fa-check" />
          </Icon>
        </li>
        <li>
          Exclusive graphs<Icon>
            <i class="fas fa-check" />
          </Icon>
        </li>
        <li>Fancy stuff</li>
      </ul>
    </Card>
  </div>
);

export default withStyles(({ theme, text }) => {
  return {
    paymentArea: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  };
})(PaymentArea);
