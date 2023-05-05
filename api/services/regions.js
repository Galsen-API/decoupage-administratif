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
const regions_1 = require("../../data/regions");
var RegionsService;
(function (RegionsService) {
    function getRegions() {
        return Promise.resolve(regions_1.regions);
    }
    RegionsService.getRegions = getRegions;
    function getRegionByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const regions = yield getRegions();
            const region = regions.find((region) => region.name.toLowerCase() === name.toLowerCase());
            if (region) {
                return region;
            }
        });
    }
    RegionsService.getRegionByName = getRegionByName;
})(RegionsService = exports.RegionsService || (exports.RegionsService = {}));
