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
exports.RegionsService = void 0;
const regions_js_1 = require("../../data/regions.js");
const departments_js_1 = require("../../data/departments.js");
var RegionsService;
(function (RegionsService) {
    function getRegions() {
        return Promise.resolve(regions_js_1.regions);
    }
    RegionsService.getRegions = getRegions;
    function getRegionByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const regions = yield getRegions();
            const region = regions
                .find((region) => region.name.toLowerCase() === name.toLowerCase() ||
                region.code === parseInt(name));
            if (region) {
                return region;
            }
        });
    }
    RegionsService.getRegionByName = getRegionByName;
    function getDepartmentsByRegionName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const region = yield getRegionByName(name);
            if (region) {
                const departmentsByRegion = departments_js_1.departments
                    .filter((department) => department.name.toLowerCase() === region.name.toLowerCase() ||
                    department.region_code === region.code);
                if (departmentsByRegion) {
                    return departmentsByRegion;
                }
            }
        });
    }
    RegionsService.getDepartmentsByRegionName = getDepartmentsByRegionName;
})(RegionsService = exports.RegionsService || (exports.RegionsService = {}));
