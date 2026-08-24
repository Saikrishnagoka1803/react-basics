import { useEffect, useState } from 'react';
import RestoCard from './RestoCard.jsx'

const RestaurantContainer = () => {

    const [response, setResponse] = useState([])

    useEffect(() => {
        async function getData() {
            try {
                const data = await fetch('https://namastedev.com/api/v1/listRestaurants')
                if (data) {
                    const dataJSON = await data.json()
                    setResponse(dataJSON?.data.data.data)
                    console.log(" fetched data ", response)
                }

            }
            catch (err) {
                console.log(err)
            }

        }
        getData();
    }, [])

    return (
        <div id="restaurant-container">

            <input type="search" placeholder="start searching ..."></input>
            <button id='search-button' onClick={() => {
                console.log("Hey Iam clicked")
            }}> click to filter </button>
            <div id="resto-cards">
                {
                    [].map((each) => {
                        return (<>
                            <RestoCard />
                        </>)
                    })
                }
            </div>
        </div>
    );
}

export default RestaurantContainer;