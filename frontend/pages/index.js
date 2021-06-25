import axios from 'axios'
import Link from 'next/link'
import Head from '../components/template/Head'

export const getStaticProps = async () => {
	const response = await axios.get(
		'http://192.168.5.7:8080/coffees'
	)

	return {
		props: { coffees: response.data }
	}
}
const Index = ({ coffees }) => {
	const renderCoffees = () => {
		return coffees.map(coffee => {
			//Search a best approach for this situation...
			const acidity = () =>{
				return coffee.acidity > 0 ? <span className="flavor acidity">Acidity: {coffee.acidity}</span> : ""
			}
			const bitterness = () =>{
				return coffee.bitterness > 0 ? <span className="flavor bitterness">Bitterness: {coffee.bitterness}</span> : ""
			}
			const chocolate = () =>{
				return coffee.chocolate > 0 ? <span className="flavor chocolate">Chocolate: {coffee.chocolate}</span> : ""
			}
			const floral = () =>{
				return coffee.floral > 0 ? <span className="flavor floral">Floral: {coffee.floral}</span> : ""
			}
			const fruity = () =>{
				return coffee.fruity > 0 ? <span className="flavor fruity">Fruity: {coffee.fruity}</span> : ""
			}
			const herbal = () =>{
				return coffee.herbal > 0 ? <span className="flavor herbal">Herbal: {coffee.herbal}</span> : ""
			}
			return (
				<div key={coffee.id} className="card coffee-item">
					<div className="card-content">
						<div className="card-top">
							<div className="coffee-picture">
								<img src={"http://192.168.5.7:8080/" + coffee.picture} />
							</div>
							<div className="coffee-info">
							<Link href={"/coffees/" + coffee.id} key={coffee.id}><a><h2>{coffee.name}</h2></a></Link>
								
								<div className="info-wrapper">
								<span className="info">Roast: <span className="info-highlight">{coffee.roast}</span></span>
								<span className="info">Body: <span className="info-highlight">{coffee.body}</span></span>	
								</div>
							</div>
						</div>
						<div className="divider"></div>
						<div className="card-bottom">
							{acidity()}
							{bitterness()}
							{chocolate()}
							{floral()}
							{fruity()}
							{herbal()}
							{/* <span className="flavor bitterness">Bitterness: {coffee.chocolate}</span>
							<span className="flavor chocolate">Chocolate: {coffee.chocolate}</span>
							<span className="flavor floral">Floral: {coffee.floral}</span>
							<span className="flavor fruity">Fruity: {coffee.fruity}</span>
							<span className="flavor herbal">Herbal: {coffee.herbal}</span> */}
						</div>
					</div>
				</div>

			)
		})
	}
	return (
		<>
			<Head pageTitle="My Coffees"></Head>
			<main className="container">
            <div className="button-list">
				   <Link href="/coffees/add"><a className="button button-default">Add a new coffee</a></Link>
            </div>
				{renderCoffees()}
			</main>
		</>
	)
}

export default Index
