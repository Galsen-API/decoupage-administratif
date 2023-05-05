import { Region } from "../models/region/regions";
import { regions } from "../../data/regions";

export namespace RegionsService {
    
    export function getRegions(): Promise<Region[]> {
        return Promise.resolve(regions);
    }

    export async function getRegionByName(name: string): Promise<Region | undefined> {
        const regions = await getRegions();
        const region = regions.find((region) => region.name.toLowerCase() === name.toLowerCase());
        if (region) {
            return region;
        }
    }
}