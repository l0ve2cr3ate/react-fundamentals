// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// const smallBox = (
//   <div
//     style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
//     className="box box--small"
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     style={{backgroundColor: 'pink', fontStyle: 'italic'}}
//     className="box box--medium"
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     style={{backgroundColor: 'orange', fontStyle: 'italic'}}
//     className="box box--large"
//   >
//     large orange box
//   </div>
// )

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// export default App

// Extra Credit
// 1. 💯 Create a custom component
// function Box({children, className, style}) {
//   return (
//     <div className={`box ${className}`} style={{fontStyle: 'italic', ...style}}>
//       {children}
//     </div>
//   )
// }

// const smallBox = (
//   <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//     small lightblue box
//   </Box>
// )
// const mediumBox = (
//   <Box className="box--medium" style={{backgroundColor: 'pink'}}>
//     medium pink box
//   </Box>
// )
// const largeBox = (
//   <Box className="box--large" style={{backgroundColor: 'orange'}}>
//     large orange box
//   </Box>
// )

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// export default App

// 2. 💯 accept a size prop to encapsulate styling
function Box({children, size, style}) {
  let className

  const getClassName = () => {
    if (size === 'small') {
      className = 'box--small'
    } else if (size === 'medium') {
      className = 'box--medium'
    } else if (size === 'large') {
      className = 'box--large'
    }
    return className
  }

  return (
    <div
      className={`box ${getClassName(size)}`}
      size={size}
      style={{fontStyle: 'italic', ...style}}
    >
      {children}
    </div>
  )
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
