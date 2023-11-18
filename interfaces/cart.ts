import { ISize } from "./products";

export interface ICardProduct {
    _id: string;
    image: string;
    price: number;
    sizes: ISize;
    slug: string;
    title: string;
    gender: 'men'|'women'|'kid'|'unisex';
    quantity: number;

    createdAt: string;
    updatedAt: string;
}

