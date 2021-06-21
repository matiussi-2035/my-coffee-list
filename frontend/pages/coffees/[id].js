import axios from "axios"
import Head from "../../components/template/Head"

export const getStaticPaths = async () => {
	const response = await axios.get(
		'http://localhost:8080/coffees'
	)
	
	const paths = response.data.map(coffee => {
        return {
            params: {id: coffee.id.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id
    const response = await axios.get('http://localhost:8080/coffee/' + id)

    return{
        props: {coffee: response.data}
    }
}
const Details = ({coffee}) => {
    return ( 
      <>
         <Head pageTitle="My Coffee List | Edit"></Head>

        <div>
            <h1>{coffee.name}</h1>
        </div>
      </>
     );
}
 
export default Details;