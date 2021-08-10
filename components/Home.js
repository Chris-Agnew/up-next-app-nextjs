import Image from 'next/image'

const Home = ( { results } ) => {
	  const BASE_URL = "https://image.tmdb.org/t/p/original/";
	return (
		<div className="flex flex-wrap w-full bg-gray-900 justify-center">
	{results.map((result) => (
		<div key={result.id} className="flex m-5 bg-gray-200 w-1/3">
	<div className="flex justify-center items-center">
		<Image
        src={
          `${BASE_URL}${result.backdrop_path} `||
          `${BASE_URL}${result.poster_path}`
        }
        height={150}
        width={250}
		alt={`${result.name} poster`}
      />
	</div>

	
			<div className="p-5 w-1/2">
			<h2 className="text-2xl font-bold py-2">{result.name}</h2>
			<p className="text-xs">{result.overview}</p>
			</div>
       
     </div>
	))}

	
	</div>
 )
}

export default Home
