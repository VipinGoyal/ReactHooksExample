import * as React from 'react';
import { Section } from '../../../utils/config';

interface Props {
	history: any;
}

export const HomePage = (props: Props) => {
	const { history } = props;

	const onClickSection = (path: string) => {
		history.push(`/${path}`);
	};
	return (
		<>
			<ul className="AppG">
				{Object.keys(Section).map((section, idx) => (
					<li className="AppGLi" key={idx}>
						<div className="box" onClick={() => onClickSection(section)}>
							<h3>{Section[section].name}</h3>
							<ul className="s1">
								{Section[section].items.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					</li>
				))}
			</ul>
			<span>Reference Links : </span>
			<ul>
				https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
			</ul>
			<ul>https://kentcdodds.com/blog/how-to-use-react-context-effectively</ul>
			<ul>
				https://kentcdodds.com/blog/how-to-implement-usestate-with-usereducer
			</ul>
			<ul>
				https://stackoverflow.com/questions/57005663/when-to-use-useimperativehandle-uselayouteffect-and-usedebugvalue
			</ul>
		</>
	);
};
