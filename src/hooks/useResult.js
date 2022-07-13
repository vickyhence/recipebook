import {useState, useEffect} from 'react';
import axios from 'axios';

export default () =>{
    const [result, setResult] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async (searchTerm) => {
        try{
            const response = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            setResult(response.data.meals);
        }
        catch(e){
            setErrorMessage("No Data Has been received");
        }
        
    }
    //console.log(result);
    useEffect(() => {
        searchApi(`''`)
    }, []);
    return [result, searchApi, errorMessage];
}