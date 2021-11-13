import React from 'react';


class App extends React.Component {

    state = {
        lat : null
    }

    // renderContent () {
    //     if(this.state.lat) {
    //         return this.state.lat
    //     }
    //     else {
    //         return 'Loading'
    //     }
    // }

    // componentDidMount () {
    //     window.navigator.geolocation.getCurrentPosition(
    //         position =>  {
    //             this.setState({lat : position.coords.latitude})
    //         },
    //         err => console.log(err)
    //     );
    // }

    // componentDidUpdate () {
    //     console.log("i am updating");
    // }

    render() {


        return (
            <h1>{this.renderContent()}</h1>
        )
    }
}

export default App;