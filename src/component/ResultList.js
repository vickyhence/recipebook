import React, { useState } from 'react';
import '../css/style.css';

const ResultList = (props) => {
    const [like, setLike] = useState(false);
    const { data } = props;
    
    //console.log(dish)
    if (!data){
        return null;
    }

    return (
        <>
            {
                data.map(d => {
                    return (
                        <div key={d.idMeal} className="foodBody">

                            <div className="header">
                                <h2 onClick={() => window.location = `${d.strSource}`}><b>{d.strMeal}</b></h2>

                                {like ?
                                    <span onClick={()=>setLike(!like)} style={{fontSize: "22px"}}>❤️</span>:
                                    <span onClick={()=>setLike(!like)}>&#x2661;</span>
                                }

                            </div>

                            <div className="imageFluid">
                                <img src={d.strMealThumb} alt={d.strMeal} height="350" width="380" />
                            </div>

                            <div className="main">
                                <p><b><i>Category of Meal - </i>{d.strCategory}</b></p>
                                <p><b><i>Area of the Meal - </i>{d.strArea}</b></p>
                                <p style={{marginBlockEnd: "0"}}><i>Ingredients</i></p>
                                <div className="ingredients">
                                    <p>{d.strIngredient1} ----- {d.strMeasure1}</p>
                                    <p>{d.strIngredient2} ----- {d.strMeasure2}</p>
                                    <p>{d.strIngredient3} ----- {d.strMeasure3}</p>
                                    <p>{d.strIngredient4} ----- {d.strMeasure4}</p>
                                    <p>{d.strIngredient5} ----- {d.strMeasure5}</p>
                                    <p>{d.strIngredient6} ----- {d.strMeasure6}</p>
                                    <p>{d.strIngredient7} ----- {d.strMeasure7}</p>
                                    <p>{d.strIngredient8} ----- {d.strMeasure8}</p>
                                    <p>{d.strIngredient9} ----- {d.strMeasure9}</p>
                                </div>
                                <center><p style={{marginBlockEnd: "0"}}><b>Recipes</b></p></center>
                                <div className="recipe">{d.strInstructions}</div>
                            </div>

                        </div>
                    )
                })
            }
        </>
    )
}

export default ResultList;