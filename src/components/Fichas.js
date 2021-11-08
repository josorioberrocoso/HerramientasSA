import React from 'react'

const Fichas = ({ fichas = [] }) => {

    
    return (

        <div className="row">
            {
          

                fichas.map((item, index) => (
                    <div key={index} className="col-lg-3">
                        <div className="card" >
                            <img className="img-fluid" src={item.image} alt=""/>"
                             <p>{item.description}</p> 
                        </div>
                    </div>
                ))
            }



        </div>
    )
}

export default Fichas