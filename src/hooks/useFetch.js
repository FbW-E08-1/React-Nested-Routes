import {useState, useEffect} from 'react'


const useFetch = (url) => {
    const [data, setData] = useState({results: null, loading: true, error: null})

   
    
    useEffect(() => {

        const abortFetch = new AbortController()

        fetch(url, {signal: abortFetch.signal})
        .then((response) => response.json())
        .then((results) => setData({results, loading: false, error: null}) )
        .catch((error) => {
            abortFetch.signal.aborted
            ? console.log('fetch aborted')
            : setData({results: null, loading: false, error: error.message})
        })

        return () => abortFetch.abort()
    },[url])

    return data
}

export default useFetch
