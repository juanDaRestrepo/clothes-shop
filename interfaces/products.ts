export interface IProduct {
    _id: string;
    description: string;
    images: string[];
    sizes: SizeStock[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    price: number;
    gender: 'men' | 'women' | 'kid' | 'unisex';

    createdAt: string;
    updatedAt: string;
}

export interface SizeStock {
    name: ValidSizes;
    inStock: number;
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

