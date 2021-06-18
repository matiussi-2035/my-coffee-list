import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'

export const getStaticProps = async () => {
	const response = await axios.get(
		'http://localhost:8080/coffees'
	)
	
	return {
		props: {dados: response.data}
	}
}
const Index = ({dados}) => {
 console.log(dados)
	return (
		<div>
			<h1>Coffees</h1>
			{dados.map(dado => {
				return (
					<Link href={"/coffees/" + dado.id} key={dado.id}><a>{dado.name}</a></Link>
				)
			})}
		</div>
	)
}

export default Index
