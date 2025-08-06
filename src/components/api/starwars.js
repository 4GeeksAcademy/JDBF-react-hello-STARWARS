export const getPlanets = async () => {
    const response = await fetch ("https://www.swapi.tech/api/planets/")
    const data = await response.json () 
    return data.results
}
export const getPeople = async () => {
    const response = await fetch ("https://www.swapi.tech/api/people/")
    const data = await response.json ()
    return data.results
}

export const getVehicles = async () => {
    const response = await fetch ("https://www.swapi.tech/api/vehicles/")
    const data = await response.json ()
    return data.results
}

export const getPleopleId = async (id) => {
    const response = await fetch (`https://www.swapi.tech/api/people/${id}`)
    const data = await response.json ()
    return data.result.properties 
}

export const getImage = async (iamge) => {
    const response = await fetch (`https://akabab.github.io/starwars-api/api${image}`)
    const data = await response.json ()
    return data.results
}