import React from 'react'

export default function index(props) {
  const { child } = props;
  return (
    <div className="name">
            <h2 style={{ color:"red" }}> &#9830; Children &#9830;</h2>
        <div className="center">
          {child.map((p) => (
              <div className="property-card">
              <div className="property-image" style={{ backgroundImage: `url(${p.image})`}}>
              <div className="property-image-title" >
                </div>
              </div>
            <div className="property-description">
              <h5 style={{ color:"#a265e7" }}> {p.name} </h5>
                <p>{ p.des }</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    )
}
