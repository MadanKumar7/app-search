export class CategoryList {

    public getNameList(prop: string){

        switch (prop) {

            case 'gender':
                return [
                    {'name':'Male', 'prop':'Male', 'value': 0},
                    {'name':'Female', 'prop':'Female', 'value': 0}
                ];
                break;

            case 'age':
                return [
                    {'name':'20-30', 'prop':[20, 30], 'value': 0},
                    {'name':'30-40', 'prop':[30, 40], 'value': 0},
                    {'name':'40-50', 'prop':[40, 50], 'value': 0},
                    {'name':'50-60', 'prop':[50, 60], 'value': 0}
                ];
                break;

            default:
                return [];

        }
    }
}

          