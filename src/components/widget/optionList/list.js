import React from 'react';
import icon_dropdown from './../../../assets/images/icon-tick-mark.svg';

const List = ({ dataList, itemClick, selectedItem, name }) => (
	<ul className="list-selection-cursor">
		{dataList
			? dataList.map((item, index) => (
					<li key={item.key} onClick={e => itemClick(item)}>
						<a>{item.value}</a>
						{selectedItem && selectedItem === item.value ? (
							<input type="radio" name={name} value={item.value} checked />
						) : (
							<input type="radio" name={name} value={item.value} />
						)}
						<span className="glyphicon" >
							<img src={icon_dropdown} alt="tick" />
						</span>
					</li>
				))
			: ''}
	</ul>
);

export default List;
