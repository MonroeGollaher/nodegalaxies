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
        let galaxy = await dbContext.Galaxies.findByIdAndDelete(id)
       if(!galaxy){
           throw new BadRequest("No galaxy by that ID")
       }
       return galaxy
    }
}

export const galaxyService = new GalaxyService()