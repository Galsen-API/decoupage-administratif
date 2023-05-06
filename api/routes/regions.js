"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regions_js_1 = require("../services/regions.js");
const router = (0, express_1.Router)();
// Route pour récupérer toutes les régions
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const regions = yield regions_js_1.RegionsService.getRegions();
    res.status(201).send(regions);
}));
// Route pour récupérer une région par son nom
router.get("/:code", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const code = req.params.code;
    const region = yield regions_js_1.RegionsService.getRegionByName(code);
    if (region) {
        res.status(202).send(region);
    }
    else {
        res.status(404).send(`Région avec le nom et/ou code ${code} est introuvable et/ou invalide`);
    }
}));
// Route pour récupérer les départements d'une région
router.get("/:code/departments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const code = req.params.code;
    const departments = yield regions_js_1.RegionsService.getDepartmentsByRegionName(code);
    if (departments) {
        res.status(202).send(departments);
    }
    else {
        res.status(404).send(`Départements de la région avec le nom et/ou code ${code} sont introuvables et/ou invalides`);
    }
}));
exports.default = router;
