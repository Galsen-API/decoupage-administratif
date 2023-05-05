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
const departments_1 = require("../services/departments");
const router = (0, express_1.Router)();
// Route pour récupérer tous les départements
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const departments = yield departments_1.DepartmentsService.getDepartments();
    res.status(201).send(departments);
}));
// Route pour récupérer un département par son nom
router.get("/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.params.name;
    const department = yield departments_1.DepartmentsService.getDepartmentByName(name);
    if (department) {
        res.status(202).send(department);
    }
    else {
        res.status(404).send(`Département avec le nom ${name} est introuvable`);
    }
}));
exports.default = router;
