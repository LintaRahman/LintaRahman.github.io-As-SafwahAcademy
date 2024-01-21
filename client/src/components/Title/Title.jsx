import React from 'react'



const Title = ({image, title}) => {
  return (
    <section >
        <img src={image} alt=""/>
      <h1>{title}</h1>
    </section>
  )
}

export default Title