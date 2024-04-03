import React, { Fragment } from "react";
import "./styles.css"; 


// CSS
// 1. Inline 
// 2. import file with styles to component


// 1. Return several elements from component: via array
const Columns = () => ([
	<td key="1">Hello</td>,
	<td key="2">world-1</td>
])

const my_style = {color: "red", textTransform: "uppercase" };

// 2. Fragment
const ColumnsFr = () => (
	<Fragment>
		<td style={my_style}>Inline</td>
		<td className="title">Simple class</td>
	</Fragment>
);

const Table = () => (
	<table>
		<tbody>
			<tr>
				<Columns />
				<ColumnsFr />
			</tr>
		</tbody>
	</table>
)

export default Table;