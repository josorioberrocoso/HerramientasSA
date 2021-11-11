import React from 'react';
import ReactJson from 'react-json-view';
import Listado from './Listado';

const Fichas = ({ fichas = [] }) => {



    return (

        <div className="row">
            {


                fichas.map((item, index) => (
                    <div key={index} className="col-lg-4">
                        <div className="card text-white bg-info mb-5" >
                            <img className="img-fluid" src={item.image} />
                            <div class="card-img-overlay">
                                <p className="text-center">{item.name}</p>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        {Object.keys(item.attributes).map((key, index) => (
                                            <div>{key} :</div>
                                        ))}
                                    </div>
                                    <div className="col-lg-6">
                                        {Object.values(item.attributes).map((key, index) => (
                                            <div>{key}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {item.attributes.category === "ship" ?
                             <div className="row">
                                 <div className="col-lg-4"> <Listado ficha={item.slots.crewSlots} /> </div>
                                 <div className="col-lg-4"> <Listado ficha={item.slots.componentSlots} /></div>
                                 <div className="col-lg-4"> <Listado ficha={item.slots.moduleSlots} /></div>
                             </div>
                              : ""}


                        </div>
                    </div>
                ))
            }



        </div>
    )
}

export default Fichas