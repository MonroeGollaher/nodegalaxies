import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxyService {
    async getAll(query = {}){
        let data = await dbContext.Galaxies.find(query)
        return data
    }

    async create(body){
        return await dbContext.Galaxies.create(body)
    }

    async delete(id){
        let planet = await dbContext.Galaxies.findByIdAndDelete(id)
       if(!planet){
           throw new BadRequest("No planet by that ID")
       }
       return planet
    }
}

export const galaxyService = new GalaxyService()