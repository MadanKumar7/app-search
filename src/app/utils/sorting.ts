import { DatePipe } from "@angular/common";

export class Sort {

    public sortData(prop:string, order:string){
        return (a:any, b:any) => {

            if(a[prop] === b[prop]){
                return 0;
            }else if(a[prop] === null){
                return 1;
            }else if(b[prop] === null){
                return -1;
            }else if(order === 'asc'){
                return (a[prop] > b[prop]) ? -1 : 1;
            }else{
                return (a[prop] > b[prop]) ? 1 : -1;
            }

        }
    }
}
