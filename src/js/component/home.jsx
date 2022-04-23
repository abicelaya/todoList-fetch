import React from "react";

//include images into your bundle

//create your first component
const List = () => {
	return (
		<div className="container d-flex justify-content-center">
			<div className="row">
				<div className="col-12 mt-5">Tareas por hacer</div>
			</div>
			<div className="row">
				<ul class="list-group">
					<li class="list-group-item">An item</li>
					<li class="list-group-item">A second item</li>
					<li class="list-group-item">A third item</li>
					<li class="list-group-item">A fourth item</li>
					<li class="list-group-item">And a fifth one</li>
				</ul>
			</div>
		</div>
	);
};

export default List;
