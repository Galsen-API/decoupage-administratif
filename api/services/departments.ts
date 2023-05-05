import jsonfile from "jsonfile";
import { Department } from "../models/department/departments";

export namespace DepartmentsService {

  export function getDepartments(): Promise<Department[]> {
    return jsonfile.readFile("../../data/departments.json");
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