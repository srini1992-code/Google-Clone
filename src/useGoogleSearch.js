import { useEffect, useState } from 'react';
import API_KEY from './keys';

// obtained from google search
//https://cse.google.com/cse/create/new
const CONTEXT_KEY = '49feb33edb646ce8c';

// custom hook-usercreated hook
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};
export default useGoogleSearch;
