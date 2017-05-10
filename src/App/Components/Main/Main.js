import React, { Component } from 'react'
import './Main.css'
import { Button } from '../Button/Button'
import { CardGrid } from '../CardGrid/CardGrid'
import { cleanPeopleData } from '../../cleanPeopleData'
// import { cleanPlanetsData } from '../../cleanPlanetsData'
// import { cleanVehiclesData } from '../../cleanVehiclesData'

export default class Main extends Component {
  constructor() {
    super()
    this.apiKeys = {'people': 'http://swapi.co/api/people/',
                    'planets': 'http://swapi.co/api/planets/',
                    'vehicles':'http://swapi.co/api/vehicles/'
                   }
    this.state = {
      selectedButton: 'people',
      dataSet: [],
      counter: 0,
    }
  }

  componentDidMount() {
    fetch(this.apiKeys[this.state.selectedButton])
      .then(response => response.json())
      .then(data => {
        this.resetData(data)
    })
  }

  resetData(data) {
    // debugger;
    cleanPeopleData(data).then((returnedData) => this.setState({ dataSet: returnedData }))

      // console.log(this.state.dataSet)
    // }
    // if(this.state.selectedButton === 'planets'){
    //   this.setState({
    //     dataSet: data
    //   })
    // }
    // if(this.state.selectedButton === 'vehicles'){
    //   this.setState({
    //     dataSet: data
    //   })
    // }
  }

  render() {
    return (
      <div className="main-main">
        <header>
          <h1>SWAPI-Box</h1>
        </header>
        <Button buttonType={'favorites'} counter={this.state.counter} />
        <Button buttonType={'people'}/>
        <Button buttonType={'planets'}/>
        <Button buttonType={'vehicles'}/>
        <CardGrid dataSet={this.state.dataSet}/>
      </div>
    )
  }


}
