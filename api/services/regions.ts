import { Region } from "../models/region/regions.js";
import { regions } from "../../data/regions.js";
import { Department } from "../models/department/departments.js";
import { departments } from "../../data/departments.js";

export namespace RegionsService {
    
    export function getRegions(): Promise<Region[]> {
        return Promise.resolve(regions);
    }

    export async function getRegionByName(name: string): Promise<Region | undefined> {
        const regions = await getRegions();
        const region = regions
        .find((region) => 
            region.name.toLowerCase() === name.toLowerCase() || 
            region.code === parseInt(name)
            );
        if (region) {
            return region;
        }
    }

    export async function getDepartmentsByRegionName(name: string): Promise<Department[] | undefined> {
        const region = await getRegionByName(name);
        if (region) {
            const departmentsByRegion = departments
            .filter((department) => 
                department.name.toLowerCase() === region.name.toLowerCase() ||
                department.region_code === region.code
                );
            if (departmentsByRegion) {
                return departmentsByRegion;
            }
        }
    }
}