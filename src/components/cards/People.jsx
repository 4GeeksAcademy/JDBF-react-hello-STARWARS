import { useEffect, useState } from "react"
import { getPleopleId } from "../api/starwars";


export const CardPeople = ({personId}) => {

    const [peopleInfo, setPeopleInfo] = useState([]);
    useEffect (()=> {
        const dataInfo = async() => {
            const data = await getPleopleId(personId);
            setPeopleInfo(data)
        
        }
        dataInfo()
    },[]) 
    return (
        <div className="card" style={{width: "25rem"}}>
            <img src="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{peopleInfo.name}</h5>

                    <p className="card-text">gender: { peopleInfo.gender }</p>
                    <p className="card-text">hair: { peopleInfo.hair_color}</p>
                    <a href="#" className="btn btn-primary">Leer mas</a>
                    
                </div>
        </div>
    )
}