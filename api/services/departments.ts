import jsonfile from "jsonfile";
import { Department } from "../models/department/departments";
import { departments } from "../../data/departments";

export namespace DepartmentsService {

  export function getDepartments(): Promise<Department[]> {
    //const departments = [{"name" : "Pikine","region_code" : 1},{"name" : "Bambey","region_code" : 3}];

    return Promise.resolve(departments);
  }

  export async function getDepartmentByName(name: string): Promise<Department | undefined> {
    const departments = await getDepartments();
    console.log(name)
    const department = departments.find((department) => department.name.toLowerCase() === name.toLowerCase());
    if (department) {
      return department;
    }
  } 
}