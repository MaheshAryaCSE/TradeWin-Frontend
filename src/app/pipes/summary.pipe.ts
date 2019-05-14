import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
    name: "filter"
})

export class FilterPipe implements PipeTransform {
    filterdata = [];
    transform(value: any, search: string) {
        // console.log(value);
        // console.log(search);
        if (search === undefined) {
            return value;
        }
        else {
            this.filterdata = [
                
            ];
            for (let list of value) {
                if (list.toLowerCase().indexOf(search) >= 0) {
                    // console.log(list.name.indexOf(search))
                    this.filterdata.push(list);
                    console.log(this.filterdata);
                }
            }
                return this.filterdata;
        }
    }
}