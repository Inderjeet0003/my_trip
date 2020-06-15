// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// // Components
// import { Nav } from './Nav';
// import { TripsCount } from './trips/TripsCount';
// import { AddTrip } from './trips/AddTrip';
// import { TripsList } from './trips/TripsList';
// import { Error404 } from './Error404';


// export class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             apiResponse:" ",
//             allTrips: [
//                 {
//                     place: "Manali",
//                     date: "2017-01-01",
//                     type: "Temple"
//                 },
//                 {
//                     place: "Mumbai",
//                     date: "2017-04-05",
//                     type: "Club"
//                 },
//                 {
//                     place: "Marina",
//                     date: "2017-02-09",
//                     type: "Mountain"
//                 }
//             ]
//         }
//         this.addTrip = this.addTrip.bind(this);
//     }
    
//     // callAPI(){
//     //     fetch("https://localhost:9000/testAPI")
//     //     .then(res=>res.text())
//     //     .then(res=> this.setState({ apiResponse: res }))
//     // }

//     // componentDidMount(){
//     //     this.callAPI();
//     // }

//     addTrip(newTrip) {
//         this.setState((prevState) => {
//             return {
//                 allTrips: [
//                 ...prevState.allTrips,
//                 newTrip
//                 ]
//             }
//         });
//     }

//     countDays(filter) {
//         const { allTrips } = this.state;
//         return allTrips.filter(trip => filter ? trip.type === filter : trip).length;
//     }

//     // Switch goes to first matching route
//     render () {
//         return (
//             <div className="app">    
//             {/* <p>{this.state.apiResponse}</p>             */}
//                 <Router>
//                     <div className="route-container">
//                         <Nav />
//                         <Switch>
//                             <Route exact path="/" render={(props) => (
//                                 <TripsCount
//                                     {...props}
//                                     total={this.countDays()}
//                                     trek={this.countDays('Temple')}
//                                     tropic={this.countDays('Mountain')}
//                                     club={this.countDays('Club')}
//                                 />
//                             )}>
//                             </Route>
//                             <Route path="/list/:filter" render={(props) => (
//                                 <TripsList 
//                                     {...props} 
//                                     days={this.state.allTrips}
//                                 /> 
//                             )}/>
//                             <Route path="/list" render={(props) => (
//                                 <TripsList
//                                     {...props}
//                                     days={this.state.allTrips}
//                                 />
//                             )} />
//                             <Route path="/add" render={(props) => (
//                                 <AddTrip
//                                     {...props}
//                                     newTrip={this.addTrip}
//                                 />
//                             )} />
//                             <Route component={Error404} />
//                         </Switch>
//                     </div>                    
//                 </Router>                
//             </div>
//         )
//     }
// }
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import { Nav } from './Nav';
import { TripsCount } from './trips/TripsCount';
import { AddTrip } from './trips/AddTrip';
import { TripsList } from './trips/TripsList';
import { Error404 } from './Error404';


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTrips: [
                {
                    place: "Manali",
                    date: "2017-01-01",
                    type: "Temple"
                },
                {
                    place: "Mumbai",
                    date: "2017-04-05",
                    type: "Club"
                },
                {
                    place: "Marina",
                    date: "2017-02-09",
                    type: "Mountain"
                }
            ]
        }
        this.addTrip = this.addTrip.bind(this);
    }
    
    // callAPI(){
    //     fetch("https://localhost:9000/testAPI")
    //     .then(res=>res.text())
    //     .then(res=> this.setState({ apiResponse: res }))
    // }

    // componentDidMount(){
    //     this.callAPI();
    // }

    addTrip(newTrip) {
        // let allTrips=this.setState.allTrips;
        // allTrips.push(newTrip);
        this.setState( {
            
               allTrips:"newTrip"
                // allTrips: {...prevState.allTrips, ...newTrip}
            
        });
    }
    
    countDays(filter) {
        const { allTrips } = this.state;
        return allTrips.filter(trip => filter ? trip.type === filter : trip).length;
    }

    // Switch goes to first matching route
    render () {
        return (
            <div className="app">    
            {/* <p>{this.state.apiResponse}</p>             */}
                <Router>
                    <div className="route-container">
                        <Nav />
                        <Switch>
                            <Route exact path="/" render={(props) => (
                                <TripsCount
                                    {...props}
                                    total={this.countDays()}
                                    trek={this.countDays('Temple')}
                                    tropic={this.countDays('Mountain')}
                                    club={this.countDays('Club')}
                                />
                            )}>
                            </Route>
                            <Route path="/list/:filter" render={(props) => (
                                <TripsList 
                                    {...props} 
                                    days={this.state.allTrips}
                                /> 
                            )}/>
                            <Route path="/list" render={(props) => (
                                <TripsList
                                    {...props}
                                    days={this.state.allTrips}
                                />
                            )} />
                            <Route path="/add" render={(props) => (
                                <AddTrip
                                    {...props} newTrip={this.addTrip}
                                />
                            )} />
                            <Route component={Error404} />
                        </Switch>
                    </div>                    
                </Router>                
            </div>
        )
    }
}

    