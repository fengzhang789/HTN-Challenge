// import React, { Children } from 'react'


// const Show: React.FC<React.ReactNode> = ({ children }) => {
//   let when: React.ReactNode | null = null;
//   let otherwise: React.ReactNode | null = null;

//   Children.forEach(children, child => {
//     if (child && child.props && child.props.isTrue === undefined) {
//       otherwise = child
//     } else if (!when && child.props.isTrue === true) {
//       when = child;
//     }
//   })

//     return when || otherwise || null
// }

// Show.When = ({ isTrue, children }) => isTrue && children
// Show.Else = ({ children }) =>  children

// export default Show