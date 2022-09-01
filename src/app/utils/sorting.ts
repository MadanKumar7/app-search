import { DatePipe } from "@angular/common";

export class Sort {

    public sortData(prop:string, order:string, type:string){
        return (a:any, b:any) => {

            let prop1, prop2;

            if(type === 'date'){
                prop1 = new Date(a[prop]);
                prop2 = new Date(b[prop]);
            }else{
                prop1 = a[prop];
                prop2 = b[prop];
            }

            if(prop1 === prop2){
                return 0;
            }else if(prop1 === null){
                return 1;
            }else if(prop2 === null){
                return -1;
            }else if(order === 'asc'){
                return (prop1 > prop2) ? -1 : 1;
            }else{
                return (prop1 > prop2) ? 1 : -1;
            }

        }
    }
}
