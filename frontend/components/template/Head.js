import HeadNext from 'next/head'

const Head = (props) => {
	return ( 
		<HeadNext>
			<title>My Coffee List | {props.pageTitle}</title>
        	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			
		</HeadNext>	
   );
}

export default Head;