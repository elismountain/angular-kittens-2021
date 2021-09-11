import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: "ellipsis-pipe"
})

export class EllipsisPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {

    }
}
