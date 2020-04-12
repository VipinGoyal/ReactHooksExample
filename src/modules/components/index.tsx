import React, { useState } from 'react';
import { RouteProps } from 'react-router';
import { Section } from '../../utils/config';
import { SubComponents } from './SubComponents';

interface Props extends RouteProps {
	location: any;
	history: any;
}

const MainComponent = (props: Props) => {
	const [linkIdx, setLinkIdx] = useState(0);
	const { location, history } = props;
	const pathName = location.pathname.slice(1);
	// @ts-ignore
	const section = Section[pathName];
	const { name, items, def } = section;
	const backToHome = () => {
		history.push('/');
	};
	const SubComps = SubComponents[pathName];
	const SubComp = SubComps[linkIdx];

	const renderItems = items => {
		return items.map((item: string, index: number) => {
			const idx = def ? index + 1 : index;
			return (
				<span
					className={`subLink ${linkIdx === idx ? 'activeLink' : ''}`}
					onClick={() => setLinkIdx(idx)}
				>
					{item}
				</span>
			);
		});
	};
	return (
		<div className="section">
			<button className="backHome" onClick={backToHome}>
				Back To Home
			</button>
			<h1>{name}</h1>
			<div className="subCompLink">{renderItems(items)}</div>
			<div className="subComp">
				<SubComp />
			</div>
		</div>
	);
};

export default MainComponent;