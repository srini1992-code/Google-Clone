import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

function SearchPage() {
	const [{ term }, dispatch] = useStateValue();
	// live api call
	// const { data } = useGoogleSearch(term);
	// not obtained google search api result only search results
	const data = Response;

	console.log(data);

	return (
		<div className="searchPage">
			<div className="searchPage__header">
				<Link to="/">
					<img
						className="searchPage__logo"
						src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
						alt=""
					/>
				</Link>
				{/* <h1>{term}</h1> */}
				<div className="searchPage__headerBody">
					<Search hideButtons />
				</div>
			</div>
			<div className="searchPage__results"></div>
		</div>
	);
}

export default SearchPage;

// for creating the search

// https://developers.google.com/custom-search/v1/using_rest
//
