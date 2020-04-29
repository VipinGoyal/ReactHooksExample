import React, {createContext} from 'react';
import ComponentA from './ComponentA';

export const EmployeeContext = createContext('');
export const CompanyContext = createContext('');

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
