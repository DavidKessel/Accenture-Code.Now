import { useEffect, useState } from 'react';
import axios from 'axios';
import { sortData } from '../Helpers/helper.js'

function useApiData( pageNum, query, selectedOption, orderAsc) {

    const [loading, setLoading ] = useState(false);
    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(false);
  

    useEffect(() => {
        setData([])
    }, [query])

    useEffect(() => {
        let cancel
        const queryParam = query.length > 2 ? {city: query, page: pageNum} : {country: query, page: pageNum}
        console.log(queryParam)
        setLoading(true)
        axios({
            method: 'GET',
            // url: 'https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/latest',
            url: 'http://localhost:8081/airpoll/latest',
            params: queryParam,
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then(res => {
            console.log(res.data.results)
            setLoading(false);
            setData(prevData => {
                return [...prevData, ...sortData(res.data.results, selectedOption, orderAsc)]
            })
            setHasMore(res.data.results.length > 1);
        })
        .catch(err => {
            if (axios.isCancel(err)) return
        })
        return () => cancel()
    }, [pageNum, query])
    return {data, loading, hasMore};
}

export default useApiData
