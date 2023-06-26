import React, {useState, useEffect} from 'react'
import {listVehicles, deleteVehicle} from '../services/VehicleService'
import { useNavigate } from 'react-router-dom'

const ListVehicleComponent = () => {

    const [vehicles, setVehicles] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllVehicles();
    }, [])

    const getAllVehicles = () => {
        listVehicles().then((response) => {
            setVehicles(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const removeVehicle = (vehicleId) => {
        deleteVehicle(vehicleId).then(() =>{
         getAllVehicles();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }

    function addNewVehicle() {
        navigate('/add-vehicle')
    }

    const updateVehicle = (id) => {
        navigate(`/edit-vehicle/${id}`)
    }

    return (
        <div className = "container">
            <br /><br />
            <h2 className = "text-center"> Registered Vehicles  </h2>
            {/* <Link to = "/add-vehicle" className = "btn btn-primary mb-2" > Add Vehicle </Link> */}
            <button className = "btn btn-primary mb-2" onClick={addNewVehicle }>Add New Vehicle</button>
            <table className="table table-bordered table-striped">
                {/* <thead className="table-dark"> */}
                <thead>
                    <tr>
                        <th> Vehicle Brand</th>
                        <th> Vehicle Model</th>
                        <th> Vehicle Condition</th>
                        <th> Vehicle Mileage</th>
                        <th> Vehicle Construction of year</th>
                        <th> Vehicle Fuel kind</th>
                        <th> Actions</th>
                    </tr>    
                </thead>
                <tbody>
                    {
                        vehicles.map(
                            vehicle =>
                            <tr key = {vehicle.id}> 
                                <td> {vehicle.brand} </td>   
                                <td> {vehicle.model}</td>
                                <td> {vehicle.conditionVehicle}</td>
                                <td> {vehicle.mileage}</td>
                                <td> {vehicle.constructionOfYear}</td>
                                <td> {vehicle.fuelKind}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => updateVehicle(vehicle.id)} >Update</button>
                                    <button className = "btn btn-danger" onClick = {() => removeVehicle(vehicle.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListVehicleComponent