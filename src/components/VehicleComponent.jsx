import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { updateVehicle, createVehicle, getVehicleById} from '../services/VehicleService';

const VehicleComponent = () => {

    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [conditionVehicle, setConditionVehicle] = useState('')
    const [mileage, setMileage] = useState('')
    const [constructionOfYear, setConstructionOfYear] = useState('')
    const [fuelKind, setFuelKind] = useState('')

    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateVehicle = (e) => {
        e.preventDefault();

        const vehicle = {brand, model, conditionVehicle, mileage, constructionOfYear, fuelKind}

        console.log(vehicle);
        if(id){
            updateVehicle(id, vehicle).then((response) => {
                navigate('/vehicle')
            }).catch(error => {
                console.log(error)
            })

        }else{
            createVehicle(vehicle).then((response) =>{

                console.log(response.data)
    
                navigate('/vehicle');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        if(id){
            getVehicleById(id).then((response) =>{
                setBrand(response.data.brand)
                setModel(response.data.model)
                setConditionVehicle(response.data.conditionVehicle)
                setMileage(response.data.mileage)
                setConstructionOfYear(response.data.constructionOfYear)
                setFuelKind(response.data.fuelKind)
            }).catch(error => {
                console.log(error)
            })
        }

    }, [id])

    const pageTitle = () => {

        if(id){
            return <h2 className = "text-center">Update Vehicle</h2>
        }else{
            return <h2 className = "text-center">Add Vehicle</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           pageTitle()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Brand :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter vehicle brand"
                                        name = "brand"
                                        className = "form-control"
                                        value = {brand}
                                        onChange = {(e) => setBrand(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Model :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter vehicle model"
                                        name = "model"
                                        className = "form-control"
                                        value = {model}
                                        onChange = {(e) => setModel(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Condition of Vehicle :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter condition of vehicle"
                                        name = "conditionVehicle"
                                        className = "form-control"
                                        value = {conditionVehicle}
                                        onChange = {(e) => setConditionVehicle(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Mileage :</label>
                                    <input
                                        type = "mileage"
                                        placeholder = "Enter mileage of vehicle"
                                        name = "text"
                                        className = "form-control"
                                        value = {mileage}
                                        onChange = {(e) => setMileage(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Construction of year :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Construction of year"
                                        name = "constructionOfYear"
                                        className = "form-control"
                                        value = {constructionOfYear}
                                        onChange = {(e) => setConstructionOfYear(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Fuel kind :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter fuel kind"
                                        name = "fuelKind"
                                        className = "form-control"
                                        value = {fuelKind}
                                        onChange = {(e) => setFuelKind(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateVehicle(e)} >Submit </button>
                                {/* <Link to="/vehicle" className="btn btn-danger"> Cancel </Link> */}
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default VehicleComponent