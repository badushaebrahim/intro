import React from 'react'

function Employeecard(props) {
  return (
    <div>
	  <div>
		  <table style={{}}>
			  <tr><td>serial no</td><td>{props.idno}</td></tr>
			  <tr><td>employee name</td><td>{props.name}</td></tr>
			  <tr><td>employee pwd</td><td>{props.pwd}</td></tr>
			 
		  </table>
	  </div>

    </div>
  )
}

export default Employeecard