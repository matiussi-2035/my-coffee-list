import axios from 'axios'
import Link from 'next/link'
import Head from '../components/template/Head'
import ImgDev from '../public/imgs/coffees/img.png'

export const getStaticProps = async () => {
	const response = await axios.get(
		'http://localhost:8080/coffees'
	)

	return {
		props: { coffees: response.data }
	}
}
const Index = ({ coffees }) => {
	const renderCoffees = () => {
		return coffees.map(coffee => {
			return (
				<div className="card coffe-item">
					<div className="card-content">
						<div className="card-top">
							<div className="coffee-picture">
								<img src={ImgDev.src} />
							</div>
							<div className="coffee-info">
								<h2>{coffee.name}</h2>
								<span className="info">Roast: <span className="info-highlight">{coffee.roast}</span></span>
								<span className="info">Body: <span className="info-highlight">{coffee.body}</span></span>
							</div>
						</div>
						<div className="divider"></div>
						<div className="card-bottom">
							<span class="flavor">Acidty: {coffee.acidity}</span>
							<span class="flavor">Bitterness: {coffee.bitterness}</span>
							<span class="flavor">Chocolate: {coffee.chocolate}</span>
							<span class="flavor">Floral: {coffee.floral}</span>
							<span class="flavor">Fruity: {coffee.fruity}</span>
							<span class="flavor">Herbal: {coffee.herbal}</span>
						</div>
						<Link href={"/coffees/" + coffee.id} key={coffee.id}><a>{coffee.name}</a></Link>
					</div>
				</div>

			)
		})
	}
	return (
		<>
			<Head pageTitle="My Coffee List | My Coffees"></Head>
			<main className="container">
				<button><Link href="/recipes"><a>Add new coffee</a></Link></button>
				{renderCoffees()}
			</main>
		</>
	)
}

export default Index
