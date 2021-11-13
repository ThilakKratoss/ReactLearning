import React from 'react';

class App extends React.Component {
    
    render () {
        const welcomeText = " Welcome Guys";
        return (
            <div>
                <label className="firstName" htmlFor="name">FirstName</label>
                <input id="name" type="text"></input>
                 <h1 className="name" style={{backgroundColor:'black', color:'white'}}> {welcomeText}</h1>
            </div>
        )
    }
    }



// const App = () => { //Functional component
//     return (
//         <div>
//                          <label className="firstName" htmlFor="name">FirstName</label>
//                        <input id="name" type="text"></input>
//                         <h1 className="name" style={{backgroundColor:'black', color:'white'}}> {welcomeText}</h1>
//                  </div>
//     )
// }
    
// class App REact.component
//render()
//return

// class App extends React.Component (
//     render() {
//         return {

//         }
//     }
// )


    //background-color:blue
    //backgroundColor:'blue'
   

export default App;