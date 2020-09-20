import React from 'react'
import axios from 'axios'
import Weather from './Weather'
import {Row,Col,Container,Card,Button} from 'bootstrap-4-react'
class Form extends React.Component{
    constructor(){
        super()
        this.state={
            city:'',
            country:'',
            weather:{},
            error:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.city.length==0 && this.state.country.length==0){
            this.setState({error:'not entered'})
        }
        else{
        const api_key='6cd96536484ad51fa34c2eaf2d326088'
        //const city=this.state.city
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${api_key}`)
        .then((response)=>{
            console.log(response)
            const weather=response.data
            console.log(weather.main.temp,weather.main.humidity,weather.name)
            this.setState({weather})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    this.setState({
        city:'',
        country:'',
        weather:{},
        error:''
    })

    }

    render(){
        console.log(this.state)
        return(
            <div className='weather-center'>
            <div className='weather-align'>
                <Container>
                    <Row>
                        <Col col='col-sm-5 col-xs-12 no-padding-right'>
                            <Card>
                                <div className='left-side'>
                                <h1>weather finder</h1>
                                <p>find out temperature conditions and more...</p>
                                </div>
                            </Card>
                        </Col>
                        <Col col='col-sm-7 col-xs-12 no-padding-left'>
                            <Card style={{background:'antiquewhite'}}>
                         <div className='right-side'>       
                    <form onSubmit={this.handleSubmit}>
                        {/*<label className='pad_rit'>city</label>*/}
                        <input
                            className='input_citycoun'
                            type='text'
                            name='city'
                            value={this.state.city}
                            onChange={this.handleChange}
                            placeholder='enter city'
                        />
                        {/*<label className="pad_rit">country</label>*/}
                        <input
                            style={{paddingLeft:'6px'}}
                            className='input_citycou'
                            type='text'
                            name='country'
                            value={this.state.country}
                            onChange={this.handleChange}
                            placeholder='enter country'
                        />
                        <div style={{padding:'20px 0',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <input type='submit' className='btn btn-danger'/>
                        </div>
                    </form>
            <h1>{this.state.error}</h1>
                    <Weather data={this.state.weather}/>
                    </div>
                    </Card>
                    </Col>
                    </Row>
                </Container>
            </div>
            </div>
        )
    }
}

export default Form