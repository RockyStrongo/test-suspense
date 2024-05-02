export default async function Plants() {

    const getPlants = async () => {
        // Simulate a delay of 3 seconds
        await new Promise(resolve => setTimeout(resolve, 3000));

        const resp = await fetch('http://localhost:5000/api/v1/plants')
        const plants = await resp.json()
        return plants.plants
    }

    const plants = await getPlants()

    return (
        <div>
            {
                plants.map((plant: any) =>
                    <div>{plant.commonName}</div>
                )
            }
        </div>
    )
}