import { Response, Request } from "express";
import { DepartmentsService } from "../services/departments";

const route = require("express").Router();

route.get("/", async (req: Request, res: Response) => {
    const departments = await DepartmentsService.getDepartments();
    console.log("departments", departments);
    res.send(departments);
    }
);

export default route;