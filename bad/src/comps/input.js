import React,{useState} from 'react'
import Employeecard from './employeecard'
import axios from 'axios';
function Input() {
	var url="http://localhost:8012/"
	const[email,setEmail]=useState('');
	const[pwd,setPwd]=useState('');
	const[islog,setIslog]=useState(false);
	const[idno,setIdno]=useState('');
	//function on submit to get data from input
	/*const onSubmit=(e)=>{
		e.preventDefault();
		console.log(email,pwd);
		alert(email,pwd)
	}
	//function to get data from input
	const onChange=(e)=>{
		if(e.target.name==='email'){	
			setEmail(e.target.value);
		}
		else{
			setPwd(e.target.value);
		}
	}*/
	 
	    function as(e){
		    setIslog(true);
		setIdno(email.length)
		e.preventDefault();
		//axios
		axios.post(url+"register", {
			body: {
				name:email,
				pwd:pwd,
				idno:idno

			}
		})
		.then(function (response) {
		})
		.catch(function (error) {
		})
	    }

	
  return (
    <div>
<form onSubmit={as}>
<input type="text"  onChange={(event) => { setEmail(event.target.value);}} id="email"/>
		  <input type="text"  onChange={(event) => { setPwd(event.target.value);}}  id="pwd"/>
		  <button type="submit">Submit</button>
		  </form>
	          {islog?<Employeecard name={email} pwd={pwd} idno={idno}/>:"login"}
		  

    </div>
  )
}

export default Input