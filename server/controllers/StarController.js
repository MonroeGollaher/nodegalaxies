import express from "express";
import BaseController from "../utils/BaseController"
import {starService} from "../services/StarService"

export class StarController extends BaseController {
    constructor(){
        super("api/stars")
        this.router
        .get("", this.getAll)
        .post("", this.create)
        .delete("/:id", this.delete)
    }

    async getAll(req, res, next){
        try {
            res.send(await starService.getAll(req.query))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            res.send(await starService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            res.send(await starService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }
}