import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getPlanets, getPeople, getVehicles } from "../components/api/starwars.js";
import { useEffect, useState } from "react";
import { CardPlanets, } from "../components/cards/Planets.jsx";
import { CardPeople } from "../components/cards/People.jsx";
import { CardVehicles } from "../components/cards/Vehicles.jsx";

export const Home = () => {
	const [planetApi, setPlanetApi] = useState([]);
	const [peopleApi, setPeopleApi] = useState([]);
	const [vehiclesApi, setVehiclesApi] = useState([]);


	useEffect(() => {

		const dataApi = async () => {
			const dataPlanets = await getPlanets();
			const dataPeople = await getPeople();
			const dataVehicles = await getVehicles();
			setPeopleApi(dataPeople);
			setVehiclesApi(dataVehicles);
			setPlanetApi(dataPlanets);
		}
		dataApi();

	}, [])
	const { store, dispatch } = useGlobalReducer()


	return (
		<div>

			<div className="container">

				<h1>Personas</h1>
				<div className="d-flex gap-2 people-container overflow-auto">
					{
						peopleApi.map(person => (
							<CardPeople key={person.uid} personId={person.uid} />
						))
					}
				</div>
			</div>

			<div>
				<div>
					<h1>Planetas</h1>
				</div> {
					planetApi.map(planet => (
						<CardPlanets />
					))
				}
			</div>
			<div>
				<div>
					<h1>Vehiculos</h1>
				</div> {
					vehiclesApi.map(vehicle => (
						<CardVehicles />
					))
				}


			</div>
		</div>
	);
}; 