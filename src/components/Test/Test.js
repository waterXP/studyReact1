import React, { Component } from 'react'
import './Test.css'

import Comp2 from '../Comp2'

class Test extends Component {
  state = { visible: true }
  toggleVisible = () => this.setState(({ visible }) => ({ visible: !visible }))
  render () {
    const { visible } = this.state
    const Hello = (props) => <span>{ `Hello ${props.prop}` }</span>
    const a = 'hello world'
    const b = <Hello prop={a} />
    const c = [a, b]
    const d = 55
    return <div className='com-test'>
      <Comp2 visible={visible} />
      <button type='button' onClick={this.toggleVisible}>
        { visible ? 'Close' : 'Open' }
      </button>
      { c.map((v, i) => <span key={i}>{ v }</span>) }
      { d === 55 ? <span>55</span> : <span>not 55</span> }
      { d < 10 && <span>lt 10</span> }
      Hello world
    </div>
  }
}

export default Test;
