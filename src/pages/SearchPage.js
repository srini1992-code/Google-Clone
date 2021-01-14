import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';

function SearchPage() {
	const [{ term }, dispatch] = useStateValue();
	// live api call
	// const { data } = useGoogleSearch(term);

	const data = Response;

	console.log(data);

	return (
		<div className="searchPage">
			<div className="searchPage__header">
				<h1>{term}</h1>
			</div>
			<div className="searchPage__results"></div>
		</div>
	);
}

export default SearchPage;

// for creating the search

// https://developers.google.com/custom-search/v1/using_rest
//
