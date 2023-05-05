import { Response, Request, Router } from "express";
import { RegionsService } from "../services/regions";

const router = Router();

// Route pour récupérer toutes les régions
router.get("/", async (req: Request, res: Response) => {
    const regions = await RegionsService.getRegions();
    res.status(201).send(regions);
});

// Route pour récupérer une région par son nom
router.get("/:name", async (req: Request, res: Response) => {
    const name = req.params.name;
    const region = await RegionsService.getRegionByName(name);
    if (region) {
        res.status(202).send(region);
    } else {
        res.status(404).send(`Région avec le nom ${name} est introuvable`);
    }
});

export default router;