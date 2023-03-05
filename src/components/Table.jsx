import React from 'react'
import WeatherContext from '../context/Weather'
import { useContext } from 'react'
import CardItem from './CardItem';


function Table() {
    const { weather } = useContext(WeatherContext);
    console.log(weather)
    return (
        <div style={{display:'flex'}}>
          {
            weather.map((item)=>{
              return(

                <CardItem item={item}/>
              )

            })
          }

        </div>
    )
}

export default Table