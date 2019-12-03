import React, { useState, useEffect } from 'react';
import Layout from '../components/base/layout';
import HomeContent from '../components/home-content';
import axios from 'axios';

import { HomeContext } from '../data-contexts/HomeContext';

const Home = () => {
	const [data, setData] = useState({});
	
	useEffect(() => {
		async function getTopComedyMovies() {
			const response = await axios.get('../data/top-20-comedy.json');
			setData({ comedyMovies: response.data });
		}
		
		getTopComedyMovies();
	}, []);
	
	console.log(data);
	
	return (
		<HomeContext.Provider value={{ data }}>
			<Layout> 
				<HomeContent/>
			</Layout>
		</HomeContext.Provider>
	)
}



export default Home;
