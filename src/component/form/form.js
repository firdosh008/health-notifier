import axios from "axios";
import React from "react";

function Form() {

	const [first, setFirst] = React.useState(0);
	const [second, setSecond] = React.useState(0);
	const [third, setThird] = React.useState(0);
	const [forth, setForth] = React.useState(0);
	const [fifth, setFifth] = React.useState(0);
	const [sixth, setSixth] = React.useState(0);
	const [seventh, setSeventh] = React.useState(0);


	const formData = new FormData();
	formData.append('first', first);
	formData.append('second', second);
	formData.append('third', third);
	formData.append('forth', forth);
	formData.append('fifth', fifth);
	formData.append('sixth', sixth);
	formData.append('seventh', seventh);


	const predictButton = (e) => {
		e.preventDefault();
		axios.defaults.headers.common['Content-Type'] = 'application/json';
		axios.defaults.headers.common['Accept'] = 'application/json';

		axios.post('http://', formData).then((response) => {
			console.log(response.data)
		}).catch((error) => {
			console.log(error)
		}
		)
	}

	return (
		<div className="App ">
			<form action="#" method="get" >
				<div className="flex flex-col justify-between gap-10 p-4">
					<div className="flex flex-col justify-between items-start">
						<div className="flex flex-row justify-start gap-6">
							<p className="text-lg font-semibold text-neutral-800">Report Name</p>
							<div className="col-span-1 rounded-md shadow-md shadow-neutral-400 items-center p-0">
								<input
									className="py-1 px-2"
									placeholder="Enter your report name"
									type="text"
								/>
							</div>
						</div>
						<p>Date</p>
					</div>
					<div className="grid grid-cols-3 gap-4">
						<div className="col-span-1 p-2 rounded-md shadow-md shadow-neutral-400">
							<input
								type="number"
								name="first"
								placeholder="first"
								value={first}
								onChange={(e) => setFirst(e.target.value)}
								required
							/></div>

						<div className="col-span-1 p-2 rounded-md shadow-md shadow-neutral-400">
							<input
								type="number"
								name="second"
								placeholder="first"
								value={second}
								onChange={(e) => setSecond(e.target.value)}
								required
							/></div>

						<div className="col-span-1 p-2 rounded-md shadow-md shadow-neutral-400">
							<input
								type="number"
								name="third"
								placeholder="first"
								value={third}
								onChange={(e) => setThird(e.target.value)}
								required
							/></div>

						<div className="col-span-1 p-2 rounded-md shadow-md shadow-neutral-400">
							<input
								type="number"
								name="forth"
								placeholder="first"
								value={forth}
								onChange={(e) => setForth(e.target.value)}
								required
							/></div>

						<div className="col-span-1 p-2 rounded-md shadow-md shadow-neutral-400">
							<input
								type="number"
								name="fifth"
								placeholder="first"
								value={fifth}
								onChange={(e) => setFifth(e.target.value)}
								required
							/></div>

						<div className="col-span-1 p-2 rounded-md shadow-md shadow-neutral-400">
							<input
								type="number"
								name="sixth"
								placeholder="first"
								value={sixth}
								onChange={(e) => setSixth(e.target.value)}
								required
							/></div>
						<div className="col-span-1"></div>
						<div className="col-span-1 p-2 rounded-md shadow-md shadow-neutral-400">
							<input
								type="number"
								name="seventh"
								placeholder="first"
								value={seventh}
								onChange={(e) => setSeventh(e.target.value)}
								required
							/></div>
					</div>

					<button type="submit" value="Submit" onClick={predictButton}>
						Submit
					</button>
				</div>

			</form>
		</div>
	);
}

export default Form;
