// Comp1.js
import React from 'react'
// 函数组件
function Comp1 (props) {
  const aaa = props.a * props.a * props.a
  return <div>{ aaa }</div>
}
export default Comp1
