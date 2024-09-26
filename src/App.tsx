import CocktailRecipes from "./components/CocktailRecipes.tsx";
import styled from 'styled-components';
import {useEffect, useState} from "react";
import {Drinks} from "./interfaces/Cocktails.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px lightgray solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Drinks[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d");
            const {drinks} : {drinks: Drinks[]} = await rawData.json();
            setData(drinks);
            console.log(drinks);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <CocktailRecipes data={data}/>
        </ParentDiv>
    )
}