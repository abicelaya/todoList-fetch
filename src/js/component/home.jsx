import React, { useState, useEffect } from "react";

//include images into your bundle

//create your first component
const List = () => {
	const [items, setItems] = useState([]);

	const deleteItems = (indexToDel) => {
		let result = items.filter(
			(tarea, filterIndex) => filterIndex !== indexToDel
		);
		setItems(result);
	};

	function conseguirDatos() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/abicelaya")
			.then((response) => response.json())
			.then((result) => setItems(result))
			.catch((error) => console.log("error", error));
	}

	function guardarDatos(items) {
		var raw = JSON.stringify(items);

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var requestOptions = {
			method: "PUT",
			body: raw,
			headers: myHeaders,
			redirect: "follow",
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/abicelaya",
			requestOptions
		)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	}

	useEffect(() => {
		conseguirDatos();
	}, []);

	useEffect(() => {
		guardarDatos(items);
	}, [items]);

	return (
		<div className="container-fluid justify-content-center">
			<div className="row">
				<div className="titulo col-12 mt-5">todos</div>
			</div>
			<div className="row">
				<ul className="list-group">
					<li className="list-group-item">
						<input
							type="text"
							id="name"
							placeholder="What's need to be done?"
							onKeyDown={(e) => {
								if (e.key == "Enter" && e.target.value != "") {
									/* primero añadimos a la variable de estado items lo que escribio el usuario y con ... guardamos lo que ya habia*/
									setItems([
										...items,
										{ label: e.target.value, done: false },
									]);
									/*limpio el imput*/
									e.target.value = "";
								}
							}}
						/>
					</li>
					{/* uso map para iterar cada uno de los items guardados en la variable de estado intems*/}
					{items.map((tarea, idx) => {
						return (
							<li className="list-group-item" key={idx}>
								{tarea.label}

								<button
									onClick={() => {
										deleteItems(idx);
									}}>
									X
								</button>
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
