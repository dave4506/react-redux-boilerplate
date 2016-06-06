import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
