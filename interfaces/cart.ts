import { SizeStock } from "./products";

export interface ICardProduct {
    _id: string;
    image: string;
    price: number;
    size?: SizeStock;
    slug: string;
    title: string;
    gender: 'men'|'women'|'kid'|'unisex';
    quantity: number;
}

