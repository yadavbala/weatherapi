import React from 'react'

function Weather(props){
return(
    <div>
        {
            Object.keys(props.data).length>0&&(
            <div>
                <h1>Location:{props.data.name},{props.data.sys.country}</h1>
                <h1>Temperature:{props.data.main.temp}</h1>
                <h1>Humidity:{props.data.main.humidity}</h1>
                <h1>Conditions:{props.data.weather.map(ele=>{
                    return ele.description
                })}</h1>
            </div>
            )
        }
    </div>
)
}

export default Weather