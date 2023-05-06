import { Response, Request, Router } from "express";
import { RegionsService } from "../services/regions";

const router = Router();

// Route pour récupérer toutes les régions
router.get("/", async (req: Request, res: Response) => {
    const regions = await RegionsService.getRegions();
    res.status(201).send(regions);
});

// Route pour récupérer une région par son nom
router.get("/:code", async (req: Request, res: Response) => {
    const code = req.params.code;
    const region = await RegionsService.getRegionByName(code);
    if (region) {
        res.status(202).send(region);
    } else {
        res.status(404).send(`Région avec le nom et/ou code ${code} est introuvable et/ou invalide`);
    }
});


// Route pour récupérer les départements d'une région
router.get("/:code/departments", async (req: Request, res: Response) => {
    const code = req.params.code;
    const departments = await RegionsService.getDepartmentsByRegionName(code);
    if (departments) {
        res.status(202).send(departments);
    } else {
        res.status(404).send(`Départements de la région avec le nom et/ou code ${code} sont introuvables et/ou invalides`);
    }
});


export default router;