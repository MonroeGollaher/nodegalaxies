import express from "express";
import BaseController from "../utils/BaseController"
import {galaxyService} from "../services/GalaxyService"

export class GalaxyController extends BaseController {
    constructor(){
        super("api/galaxies")
        this.router
        .get("", this.getAll)
        .post("", this.create)
        .delete("/:id", this.delete)
    }

    async getAll(req, res, next){
        try {
            res.send(await galaxyService.getAll(req.query))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            res.send(await galaxyService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            res.send(await galaxyService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }
}