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


	const predictButton =(e) => {
		e.preventDefault();
		axios.defaults.headers.common['Content-Type'] = 'application/json';
		axios.defaults.headers.common['Accept'] = 'application/json';

		axios.post('http://',formData).then((response) => {
			console.log(response.data)
		}).catch((error) => {
			console.log(error)
		}
		)
	}

  return (
    <div className="App">
      <form action="#" method="get">
        <input
          type="number"
          name="first"
		  placeholder="first"
		  value={first}
		  onChange={(e) => setFirst(e.target.value)}
          required
        />
        <input
          type="number"
          name="second"
		  placeholder="first"
		  value={second}
		  onChange={(e) => setSecond(e.target.value)}
          required
        />
		 <input
          type="number"
          name="third"
		    placeholder="first"
			value={third}
			onChange={(e) => setThird(e.target.value)}
          required
        />
        <input
          type="number"
          name="forth"
		    placeholder="first"
			value={forth}
			onChange={(e) => setForth(e.target.value)}
          required
        />
		 <input
          type="number"
          name="fifth"
		    placeholder="first"
			value={fifth}
			onChange={(e) => setFifth(e.target.value)}
          required
        />
        <input
          type="number"
          name="sixth"
		    placeholder="first"
			value={sixth}
			onChange={(e) => setSixth(e.target.value)}
          required
        />
		 <input
          type="number"
          name="seventh"
		    placeholder="first"
			value={seventh}
			onChange={(e) => setSeventh(e.target.value)}
          required
        />
        <button type="submit" value="Submit" onClick={predictButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
