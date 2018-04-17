import React from "react";
import { css, withStyles } from "../withStyles";

const FlexContainer = ({
	styles,
	direction = 'column',
	align = 'center',
	...props
}) => (
	<div 
		{...css(styles.flexContainer, styles[direction], styles[align])}
		{...props} 
	>
	{props.children}
	</div>
);

export default withStyles(() => {
  return {
    flexContainer: {
    	display: 'flex'
    },
    column: {
    	flexDirection: 'column',
    },
    row: {
    	flexDirection: 'row',
    	alignItems: 'center'
    },
    left: {
    	alignItems: 'flex-start'
    },
    right: {
    	alignItems: 'flex-end'
    },
    center: {
    	alignItems: 'center'
    }
  };
})(FlexContainer);
