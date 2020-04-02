import { DecimalPipe } from '@angular/common';

export interface Product{
    id: string,
    name: string,
    brand: string,
    description: string,
    price: DecimalPipe,
    category: string,
}
