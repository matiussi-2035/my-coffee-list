import Head from "../../components/template/Head"
import axios from "axios"
import React, { useEffect, useState } from 'react'
import {useDropzone} from 'react-dropzone'

const AddCoffee = () => {

	//Dropzone hook, setting the files types and number of files
	const [files, setFiles] = useState([]);
	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		maxFiles: 1,
		onDrop: acceptedFiles => {
			setFiles(acceptedFiles.map(file => Object.assign(file, {
				preview: URL.createObjectURL(file)
			})));
		}
	});

	//Displaying the thumb of a selected picture
	const thumbs = files.map(file => (
		<div key={file.name}>
			<div className="coffee-picture">
				<img
					src={file.preview}
				/>
			</div>
		</div>
	));

	useEffect(() => () => {
		// Make sure to revoke the data uris to avoid memory leaks
		files.forEach(file => URL.revokeObjectURL(file.preview));
	}, [files]);

	
	const [name, setName] = useState('')
	const [roast, setRoast] = useState('Medium')
	const [body, setBody] = useState('Medium')
	const [acidity, setAcidity] = useState(0)
	const [bitterness, setBitterness] = useState(0)
	const [chocolate, setChocolate] = useState(0)
	const [floral, setFloral] = useState(0)
	const [fruity, setFruity] = useState(0)
	const [herbal, setHerbal] = useState(0)
	const [picture, setPicture] = useState()
	
	const changeHandler = (event) => {
		setFiles(event.target.files[0])
	}

	const handleSubmit =  e => {
		e.preventDefault()
		console.log(picture)
		try {
			const formData = new FormData()
			formData.append('name', name)
			formData.append('roast', roast)
			formData.append('body', body)
			formData.append('acidity', acidity)
			formData.append('bitterness', bitterness)
			formData.append('chocolate', chocolate)
			formData.append('floral', floral)
			formData.append('fruity', fruity)
			formData.append('herbal', herbal)
			formData.append('picture', files[0])
			
			const res = axios({
				method: "POST",
				url: "http://localhost:8080/add-coffee",
				data: formData
			}).then((res) => {
				setFiles([])
			})
			console.log("Success")
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<>
			<Head pageTitle="New Coffee"></Head>
			<main>
				<div className="card form-card">
					<div className="card-content">
						<h1>New Coffee</h1>
						<form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
							<div className="name-wrapper">
								<p className="info">Coffee name</p>
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									name="name"
									type="text"
									minLength="3"
									maxLength="254"
									className="input-name"
									placeholder="Enter your coffee name" />
							</div>
							<p className="info">Select the coffee roast</p>
							<div className="radio-wrapper" onChange={(e) => setRoast(e.target.value)}>
								<label className="radio" htmlFor="roast-light">
									<input name="roast" type="radio" value="Light" id="roast-light" />
									<div className="checkmark"></div>
									<p className="radio-label">Light</p>
								</label>
								<label className="radio" htmlFor="roast-medium">
									<input name="roast" type="radio" value="Medium" id="roast-medium" defaultChecked/>
									<div className="checkmark"></div>
									<p className="radio-label">Medium</p>
								</label>
								<label className="radio" htmlFor="roast-dark">
									<input name="roast" type="radio" value="Dark" id="roast-dark" />
									<div className="checkmark"></div>
									<p className="radio-label">Dark</p>
								</label>
							</div>
							<p className="info">Select the coffee body</p>
							<div className="radio-wrapper" onChange={(e) => setBody(e.target.value)}>
								<label className="radio" htmlFor="body-light">
									<input name="body" type="radio" value="Light" id="body-light"/>
									<div className="checkmark"></div>
									<p className="radio-label">Light</p>
								</label>
								<label className="radio" htmlFor="body-medium">
									<input name="body" type="radio" value="Medium" id="body-medium" defaultChecked/>
									<div className="checkmark"></div>
									<p className="radio-label">Medium</p>
								</label>
								<label className="radio" htmlFor="body-heavy">
									<input name="body" type="radio" value="Heavy" id="body-heavy"/>
									<div className="checkmark"></div>
									<p className="radio-label">Heavy</p>
								</label>
							</div>
							<p className="info">Select the coffee acidity level</p>
							<div className="input-range">
								<input name="acidity" type="range" className="slider" min="0" max="5" value={acidity} onChange={(e) => setAcidity(e.target.value)}/>
								<p>{acidity}</p>
							</div>
							<p className="info">Select the coffee bitterness level</p>
							<div className="input-range">
								<input name="bitterness" type="range" className="slider" min="0" max="5" value={bitterness} onChange={(e) => setBitterness(e.target.value)}/>
								<p>{bitterness}</p>
							</div>
							<p className="info">Select the coffee chocolate level</p>
							<div className="input-range">
								<input name="chocolate" type="range" className="slider" min="0" max="5" value={chocolate} onChange={(e) => setChocolate(e.target.value)}/>
								<p>{chocolate}</p>
							</div>
							<p className="info">Select the coffee floral level</p>
							<div className="input-range">
								<input name="floral" type="range" className="slider" min="0" max="5" value={floral} onChange={(e) => setFloral(e.target.value)}/>
								<p>{floral}</p>
							</div>
							<p className="info">Select the coffee fruity level</p>
							<div className="input-range">
								<input name="fruity" type="range" className="slider" min="0" max="5" value={fruity} onChange={(e) => setFruity(e.target.value)}/>
								<p>{fruity}</p>
							</div>
							<p className="info">Select the coffee herbal level</p>
							<div className="input-range">
								<input name="herbal" type="range" className="slider" min="0" max="5" value={herbal} onChange={(e) => setHerbal(e.target.value)}/>
								<p>{herbal}</p>
							</div>
							<p className="info">Select a coffee picture (Optional)</p>
							
							<div {...getRootProps({className: 'dropzone dropzone-container'})}>
									<input  className="dropzone" type="file" name="picture" onChange={changeHandler}  {...getInputProps()} />
									<p>Drag 'n' drop a coffee picture, or click to select the picture</p>
								
								<aside className="thumb-preview">
									{thumbs}
								</aside>
								</div>
							<button className="button button-default button-submit" type="submit">Confirm</button>
						</form>
					</div>
				</div>
			</main>
		</>
	);
}

export default AddCoffee;