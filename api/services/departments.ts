import jsonfile from "jsonfile";
import { Department } from "../models/department/departments";

export namespace DepartmentsService {

  export function getDepartments(): Promise<Department[]> {
    console.log("getDepartments");
    return jsonfile.readFile("./data/departments.json");
  }
}