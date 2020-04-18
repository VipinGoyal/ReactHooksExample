import React, { useContext } from 'react';
import { EmployeeContext, CompanyContext } from '.';

const ComponentC = () => {
	const employee = useContext(EmployeeContext);
	const company = useContext(CompanyContext);
	return (
		<div>
			Employee is {employee} and company is {company}
		</div>
	);
};

export default ComponentC;
