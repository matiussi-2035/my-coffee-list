import Head from "../../components/template/Head"
import { useForm } from "react-hook-form"
import axios from "axios"

const AddCoffee = () => {
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = async data =>  {
		const response = await axios.post(
			'http://192.168.5.2:8080/add-coffee', data)
			.then(response => {
				name: response.data.name
				roast: response.data.roast
				body: response.data.body
				acidity: response.data.acidity
				bitterness: response.data.bitterness
				chocolate: response.data.chocolate
				floral: response.data.floral
				fruity: response.data.fruity
				herbal: response.data.herbal
			})
			.then(() => {
				alert("Coffee succesfully created.")
			})
	}		
   return ( 
   <> 
		<Head pageTitle="New Coffee"></Head>
		<main>
			<div className="card form-card">
				<div className="card-content">
					<h1>New Coffee</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<p className="input-info">Coffee name</p>
						<input {...register("name", {required: true})}/>
						<p className="input-info">Select the coffee roast</p>
						<div className="input-radio">
							<input {...register("roast", { required: true })} type="radio" value="Light" />		
							<label htmlFor="Light">Light</label>
							<input {...register("roast", { required: true })} type="radio" value="Medium" />
							<label htmlFor="Medium">Medium</label>		
							<input {...register("roast", { required: true })} type="radio" value="Dark" />		
							<label htmlFor="Dark">Dark</label>
						</div>
						<p className="input-info">Select the coffee body</p>
						<div className="input-radio">
							<input {...register("body", { required: true })} type="radio" value="Light" />		
							<label htmlFor="Light">Light</label>
							<input {...register("body", { required: true })} type="radio" value="Medium" />		
							<label htmlFor="Mediun">Medium</label>
							<input {...register("body", { required: true })} type="radio" value="Heavy" />		
							<label htmlFor="Heavy">Heavy</label>
						</div>
						<p className="input-info">Select the coffee acidity level</p>
						<div className="input-range">
							<input {...register("acidity", { required: true })} type="range" min="0" max="5" defaultValue="0" />			
						</div>
						<p className="input-info">Select the coffee bitterness level</p>
						<div className="input-range">
							<input {...register("bitterness", { required: true })} type="range" min="0" max="5" defaultValue="0" />			
						</div>
						<p className="input-info">Select the coffee chocolate level</p>
						<div className="input-range">
							<input {...register("chocolate", { required: true })} type="range" min="0" max="5" defaultValue="0" />			
						</div>
						<p className="input-info">Select the coffee floral level</p>
						<div className="input-range">
							<input {...register("floral", { required: true })} type="range" min="0" max="5" defaultValue="0" />			
						</div>
						<p className="input-info">Select the coffee fruity level</p>
						<div className="input-range">
							<input {...register("fruity", { required: true })} type="range" min="0" max="5" defaultValue="0" />			
						</div>
						<p className="input-info">Select the coffee herbal level</p>
						<div className="input-range">
							<input {...register("herbal", { required: true })} type="range" min="0" max="5" defaultValue="0" />			
						</div>
						
						<button type="submit">Confirm</button>
					</form>
				</div>
			</div>
		</main>
   </> 
   );
}
 
export default AddCoffee;