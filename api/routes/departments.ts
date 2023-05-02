import { Response, Request, Router } from "express";
import { DepartmentsService } from "../services/departments";

const router = Router();

// Route pour récupérer tous les départements
router.get("/", async (req: Request, res: Response) => {
    const departments = await DepartmentsService.getDepartments();
    res.status(201).send(departments);
});
  
// Route pour récupérer un département par son nom
router.get("/:name", async (req: Request, res: Response) => {
    const name = req.params.name;
    const department = await DepartmentsService.getDepartmentByName(name);
    if (department) {
        res.status(202).send(department);
    } else {
        res.status(404).send(`Département avec le nom ${name} est introuvable`);
    }
});

export default router;