import { Department } from "../models/department/departments.js";
import { departments } from "../../data/departments.js";

export namespace DepartmentsService {

  export function getDepartments(): Promise<Department[]> {
    return Promise.resolve(departments);
  }

  export async function getDepartmentByName(name: string): Promise<Department | undefined> {
    const departments = await getDepartments();
    const department = departments.find((department) => department.name.toLowerCase() === name.toLowerCase());
    if (department) {
      return department;
    }
  } 
}