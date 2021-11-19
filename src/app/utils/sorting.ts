import { Employee } from "../models/Employee.model";

export class Sort {

    public sortData(prop:any, order:any){
        return function sort(a:any, b:any){

            if(order === 'asc'){
                return (a[prop] > b[prop] )? 1: (a[prop] < b[prop]? -1 : 0)
            }else {
                return a[prop] < b[prop] ? 1: (a[prop] > b[prop]? -1 : 0)
            }

        }
    }
}
