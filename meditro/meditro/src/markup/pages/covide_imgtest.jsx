import React from "react";
import axios from "axios";

const Form = ()=>{
	const [selectedFile,setSelectedFile] = React.useState(null);
	const handelsubmit = (event)=>{
		event.preventDefault()
		const formData = new FormData();
		formData.append("image",selectedFile);
		axios.post('http://ac20-45-100-144-237.ngrok.io/test2', formData, {
			headers: {
			  'Accept-Language': 'en-US,en;q=0.8',
			  'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
			}
		  })
			.then((response) => {
			  //handle success
			  alert(response.data)
			}).catch((error) => {
			  //handle error
			  alert(error.data)
			});
	}
	const handelFileSelect = (event)=>{
		setSelectedFile(event.target.files[0])
	}
	return(
		<form onSubmit={handelsubmit}>
			<input type="file" accept="image/*"  onChange={handelFileSelect}/>
			<input type="submit" value="Upload File"/>			
		</form>
	)
};
export default Form;