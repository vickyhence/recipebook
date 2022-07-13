import React, { useState } from 'react';
import useResult from '../hooks/useResult';
import ResultList from './ResultList';

const Homepage = (e) => {
    const [dish, setDish] = useState("");
    const [result, searchApi, errorMessage] = useResult();

    async function handleClick(e) {
        e.preventDefault();
        searchApi(dish);
    }

    return (
        <>
            <div style={styles.container}>
                <h1>Recipe Finder</h1>
                <input type="text" value={dish} onChange={input => setDish(input.target.value)} style={styles.inputField} placeholder="Enter the name of the dish" />
                <button type="submit" onClick={handleClick} style={styles.button}>Get Ingredients</button><br /><br />
                <h2>Type a Dish Name to Search for its Ingredients</h2>
                {
                    errorMessage ?
                        <p>{errorMessage}</p> :
                        null
                }
            </div>
                <ResultList data={result} />
        </>
    )
}

const styles = {
    container: {
        textAlign: "center"
    },
    inputField: {
        borderRadius: "8px",
        marginRight: "8px",
        padding: "8px",
        border: "1px solid #aaaaaa",
        textAlign: "center"
    },
    button: {
        padding: "6px"
    }
}

export default Homepage;