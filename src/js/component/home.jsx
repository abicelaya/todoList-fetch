import React, { useState } from "react";

//include images into your bundle

//create your first component
const List = () => {
	const [items, setItems] = useState([]);
	return (
		<div className="container-fluid justify-content-center">
			<div className="row">
				<div className="titulo col-12 mt-5">todos</div>
			</div>
			<div className="row">
				<ul className="list-group ">
					<li className="list-group-item">
						<input
							type="text"
							id="name"
							placeholder="An item"
							onKeyDown={(e) => {
								if (e.key == "Enter") {
									setItems([...items, e.target.value]);
									e.target.value = "";
								}
							}}
						/>
					</li>

					{items.map((item, idx) => {
						return (
							<li className="list-group-item">
								{item}
								{idx == items.length - 1 ? (
									<button
										onClick={() => {
											items.pop();
											setItems([...items]);
										}}>
										X
									</button>
								) : (
									""
								)}
							</li>
						);
					})}
					<li className="list-group-item contador">
						{items.length} item left
					</li>
				</ul>
			</div>
		</div>
	);
};

export default List;
