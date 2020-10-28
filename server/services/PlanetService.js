import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetService {
    async getAll(query = {}){
        let data = await dbContext.Planets.find(query)
        return data
    }

    async create(body){
        return await dbContext.Planets.create(body)
    }

    async delete(id){
        let planet = await dbContext.Planets.findByIdAndDelete(id)
       if(!planet){
           throw new BadRequest("No planet by that ID")
       }
       return planet
    }
}

export const planetService = new PlanetService()