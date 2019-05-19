// Comp2.js
import React from 'react'
import Comp1 from '../Comp1'
// 类组件
class Comp2 extends React.Component {
  // 组件状态
  state = { grade: 33 }
  // 构造函数
  constructor () {
    super(...arguments)
    this.customFunc1 = this.customFunc1.bind(this)
  }
  // 生命周期
  componentWillMount () {
    console.log('组件加载前执行')
    // ...
  }
  componentDidMount () {
    console.log('组件加载后执行')
    // ...
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('组合更新后执行', prevState)
    // ...
  }
  componentWillUnmount () {
    console.log('组件卸载前执行')
    // ...
  }
  // 自定义函数
  customFunc1 () {
    this.setState(({ grade }) => ({ grade: grade * 2 }))
    this.customFunc2()
  }
  customFunc2 = () => { console.log('it\'s custom func 2') }
  // 渲染组伯
  render () {
    const { visible } = this.props
    const { grade } = this.state
    return <div onClick={this.customFunc1}>
      { visible && <Comp1 a={grade} /> }
    </div>
  }
}
export default Comp2
