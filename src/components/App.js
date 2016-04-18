import React, { PropTypes } from 'react'
import Messages from './Messages'
import InputArea from './InputArea'
import Banner from './Banner'
import Channels from './Channels'

const propTypes = {
  messages: PropTypes.object.isRequired,
}

const App = (props) => {
  const { data } = props.messages

  return (
    <div id='content-wrapper' className='clearfix'>
      <Banner />
      <Channels />
      <Messages data={data}/>
      <div id='footer'>
        <div id='filter-feature'></div>
        <InputArea dispatch={props.dispatch} />
      </div>
    </div>
  )
}

App.propTypes = propTypes

export default App