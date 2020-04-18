import React from 'react';
import { EmployeeContext, CompanyContext } from '.';

const ComponentC = () => {
	return (
		<div>
			<EmployeeContext.Consumer>
				{employee => {
					return (
						<CompanyContext.Consumer>
							{company => {
								return (
									<div>
										Employee context value {employee}, Company context value{' '}
										{company}
									</div>
								);
							}}
						</CompanyContext.Consumer>
					);
				}}
			</EmployeeContext.Consumer>
		</div>
	);
};

export default ComponentC;
