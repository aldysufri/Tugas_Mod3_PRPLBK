import React from 'react'

export default function index(props) {
    const { parent } = props;
    return (
    <div className="name">
        <h2 style={{ color:"red" }}> &#9829; Parent &#9829;</h2>
            <div className="a-box">
            {parent.map((p) => (
            <div className="card">
                <div className="img-container">
                    <div className="img-inner">
                        <div className="inner-skew">
                        <img src={ p.image } />
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    <h3>{p.name}</h3>
                    <div>
                        {p.des}
                    </div>
                </div>
                </div>
            ))}
        </div>
    </div>
    )
}
