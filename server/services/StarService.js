import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarService {
    async getAll(query = {}){
        let data = await dbContext.Stars.find(query)
        return data
    }

    async create(body){
        return await dbContext.Stars.create(body)
    }

    async delete(id){
        let star = await dbContext.Stars.findByIdAndDelete(id)
       if(!star){
           throw new BadRequest("No star by that ID")
       }
       return star
    }
}

export const starService = new StarService()