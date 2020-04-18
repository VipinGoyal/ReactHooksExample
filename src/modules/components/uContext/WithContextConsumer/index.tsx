import React from 'react';
import ComponentA from './ComponentA';

export const EmployeeContext = React.createContext('');
export const CompanyContext = React.createContext('');

const WithContextHook = () => {
	return (
		<div className="App">
			<EmployeeContext.Provider value={'Vipin Goyal'}>
				<CompanyContext.Provider value={'Chegg India Pvt. Ltd.'}>
					<ComponentA />
				</CompanyContext.Provider>
			</EmployeeContext.Provider>
		</div>
	);
};

export default WithContextHook;
