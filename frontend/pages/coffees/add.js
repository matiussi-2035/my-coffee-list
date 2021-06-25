import Head from "../../components/template/Head"
import axios from "axios"
import { useForm } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'


const AddCoffee = () => {

	const { register, handleSubmit, formState:{errors} } = useForm({
		defaultValues:{
			name: "",
			roast: "Medium",
			body: "Medium",
			acidity: 0,
			bitterness: 0, 
			chocolate: 0,
			floral: 0,
			fruity: 0,
			herbal: 0,
			picture: null
		}
	})
	const onSubmit = async data =>  {

		try {
			const formData = new FormData()
			formData.append('name', data.name)
			formData.append('roast', data.roast)
			formData.append('body', data.body)
			formData.append('acidity', data.acidity)
			formData.append('bitterness', data.bitterness)
			formData.append('chocolate', data.chocolate)
			formData.append('floral', data.floral)
			formData.append('fruity', data.fruity)
			formData.append('herbal', data.herbal)
			data.picture === null ? '' : formData.append('picture', data.picture[0])

			const res = await axios({
				method: "POST",
				url: "http://localhost:8080/add-coffee",
				data: formData
			}).then((res) =>{
				console.log(res)
			})
			console.log("Success")
		} catch (error) {
			console.log(error)
		}
		// // console.log(picture)
		// const response = await axios.post(
		// 	'http://192.168.5.7:8080/add-coffee', data)
		// 	.then(response => {
		// 		name: response.data.name
		// 		roast: response.data.roast
		// 		body: response.data.body
		// 		acidity: response.data.acidity
		// 		bitterness: response.data.bitterness
		// 		chocolate: response.data.chocolate
		// 		floral: response.data.floral
		// 		fruity: response.data.fruity
		// 		herbal: response.data.herbal
				
		// 	})
		// 	.then(() => {
		// 		alert("Coffee succesfully created.")
		// 	})
		// 	.then(() => {
				
		// 	})
	}		
   return ( 
   <> 
		<Head pageTitle="New Coffee"></Head>
		<main>
			<div className="card form-card">
				<div className="card-content">
					<h1>New Coffee</h1>
					<form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
						<p className="info">Coffee name</p>
						<input 
							{...register("name", 
							{required: "Please testing"}
							)} 
							type="text"
							minLength="3" 
							maxLength="254" 
							className="input-name" 
							placeholder="Enter your coffee name"/>
							<ErrorMessage errors={errors} name="singleErrorInput" />

							<ErrorMessage
								errors={errors}
								name="name"
								render={({ message }) => <p>{message}</p>}
							/>

						<p className="info">Select the coffee roast</p>
						<div className="radio-wrapper">
							<label className="radio" htmlFor="roast-light">
								<input {...register("roast", { required: true })} type="radio" value="Light" id="roast-light"/>
								<div className="checkmark"></div>	
								Light	
							</label>
							<label className="radio" htmlFor="roast-medium">
								<input {...register("roast", { required: true })} type="radio" value="Medium" id="roast-medium"/>
								<div className="checkmark"></div>
								Medium
							</label>		
							<label className="radio" htmlFor="roast-dark">
								<input {...register("roast", { required: true })} type="radio" value="Dark" id="roast-dark"/>	
								<div className="checkmark"></div>	
								Dark
							</label>
						</div>
						<p className="info">Select the coffee body</p>
						<div className="radio-wrapper">
							<label className="radio" htmlFor="Light">
							<input {...register("body", { required: true })} type="radio" value="Light" />		
								<div className="checkmark"></div>
								Light
							</label>
							<label className="radio" htmlFor="Mediun">
							<input {...register("body", { required: true })} type="radio" value="Medium"/>
							<div className="checkmark"></div>		
								Medium
							</label>
							<label className="radio" htmlFor="Heavy">
							<input {...register("body", { required: true })} type="radio" value="Heavy" />
							<div className="checkmark"></div>		
								Heavy
							</label>
						</div>
						<p className="info">Select the coffee acidity level</p>
						<div className="input-range">
							<input {...register("acidity", { required: true })} type="range" min="0" max="5" />			
						</div>
						<p className="info">Select the coffee bitterness level</p>
						<div className="input-range">
							<input {...register("bitterness", { required: true })} type="range" min="0" max="5"  />			
						</div>
						<p className="info">Select the coffee chocolate level</p>
						<div className="input-range">
							<input {...register("chocolate", { required: true })} type="range" min="0" max="5" />			
						</div>
						<p className="info">Select the coffee floral level</p>
						<div className="input-range">
							<input {...register("floral", { required: true })} type="range" min="0" max="5" />			
						</div>
						<p className="info">Select the coffee fruity level</p>
						<div className="input-range">
							<input {...register("fruity", { required: true })} type="range" min="0" max="5" />			
						</div>
						<p className="info">Select the coffee herbal level</p>
						<div className="input-range">
							<input {...register("herbal", { required: true })} type="range" min="0" max="5" />			
						</div>
						<p className="info">Select a coffee picture (Optional)</p>
						<input {...register("picture")} type="file" accept="image/*"/>
						<button className="button button-default button-submit" type="submit">Confirm</button>
					</form>
				</div>
			</div>
		</main>
   </> 
   );
}
 
export default AddCoffee;