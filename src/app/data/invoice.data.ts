import { Invoice } from "../models/invoice";

export const invoceData: Invoice = {
    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Andres',
        lastname: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 15,
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 3123123
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel 9',
            price: 599,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsair Teclado Mecanico',
            price: 800,
            quantity: 3
        },
        {
            id: 3,
            product: 'Monitor ASUS',
            price: 1099,
            quantity: 2
        },
    ]
}