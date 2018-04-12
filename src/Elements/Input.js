import React from "react";
import { css, withStyles } from "../withStyles";

const Input = ({styles, ...props}) => (
	<input {...css(styles.input)} {...props} />
);

export default withStyles(({ theme }) => {
	return {
		input: {
			backgroundColor: theme.default.backgroundColor,
			borderColor: theme.default.borderColor,
			padding: '12px',
			margin: '20px'
		}
	}
})(Input);