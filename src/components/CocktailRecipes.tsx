import styled from "styled-components";
import {Drinks} from "../interfaces/Cocktails.ts";

const AllDrinksDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleDrinkDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: lightseagreen;
    color: mintcream;
    border: 3px solid darkslategray;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function CocktailRecipes({data}: { data: Drinks[] } ){
    return (
        <AllDrinksDiv >
            {
                data.map((char: Drinks) =>
                    <SingleDrinkDiv key={char.idDrink}>
                        <h1>{char.strDrink}</h1>
                        <h3>Glass Type: {char.strGlass}</h3>
                        <h5>Liquor Type: {char.strIngredient1}</h5>
                        <p>Instructions: {char.strInstructions}</p>
                    </SingleDrinkDiv>
                )
            }
        </AllDrinksDiv>
    );
}
