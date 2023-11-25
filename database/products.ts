interface SeedProduct {
    description: string;
    images: string[];
    sizes: SizeStock[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    price: number;
    gender: 'men' | 'women' | 'kid' | 'unisex';
}

interface SizeStock {
    name: ValidSizes;
    inStock: number;
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

interface SeedData {
    products: SeedProduct[];
}




export const initialData: SeedData = {
    products: [
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740176-00-A_0_2000.jpg',
                '1740176-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 5 },
                { name: 'S', inStock: 2 },
                { name: 'M', inStock: 3 },
                { name: 'L', inStock: 1 },
                { name: 'XL', inStock: 0 },
                { name: 'XXL', inStock: 1 },
            ],
            slug: "mens_chill_crew_neck_sweatshirt",
            type: 'shirts',
            tags: ['sweatshirt'],
            title: "Men’s Chill Crew Neck Sweatshirt",
            gender: 'men',
            price: 75
        },
        {
            description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            images: [
                '1740507-00-A_0_2000.jpg',
                '1740507-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 3 },
                { name: 'S', inStock: 1 },
                { name: 'M', inStock: 2 },
                { name: 'XL', inStock: 4 },
                { name: 'XXL', inStock: 0 },
            ],
            slug: "men_quilted_shirt_jacket",
            type: 'shirts',
            tags: ['jacket'],
            title: "Men's Quilted Shirt Jacket",
            gender: 'men',
            price: 200
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            images: [
                '1740250-00-A_0_2000.jpg',
                '1740250-00-A_1.jpg'
            ],
            sizes: [
                { name: 'S', inStock: 8 },
                { name: 'M', inStock: 5 },
                { name: 'L', inStock: 2 },
                { name: 'XL', inStock: 3 },
                { name: 'XXL', inStock: 7 },
            ],
            slug: "men_raven_lightweight_zip_up_bomber_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Raven Lightweight Zip Up Bomber Jacket",
            gender: 'men',
            price: 130
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
                '1740280-00-A_0_2000.jpg',
                '1740280-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 15 },
                { name: 'S', inStock: 10 },
                { name: 'M', inStock: 8 },
                { name: 'L', inStock: 12 },
            ],
            slug: "men_turbine_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Turbine Long Sleeve Tee",
            gender: 'men',
            price: 45
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
                '1741416-00-A_0_2000.jpg',
                '1741416-00-A_1.jpg',
            ],
            sizes: [
                { name: 'M', inStock: 20 },
                { name: 'L', inStock: 15 },
                { name: 'XL', inStock: 18 },
                { name: 'XXL', inStock: 10 },
            ],
            slug: "men_turbine_short_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Turbine Short Sleeve Tee",
            gender: 'men',
            price: 40
        },
        {
            description: "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
                '7654393-00-A_2_2000.jpg',
                '7654393-00-A_3.jpg',
            ],
            sizes: [
                { name: 'M', inStock: 0 },
                { name: 'L', inStock: 5 },
                { name: 'XL', inStock: 2 },
                { name: 'XXL', inStock: 0 },
            ],
            slug: "men_cybertruck_owl_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Cybertruck Owl Tee",
            gender: 'men',
            price: 35
        },
        {
            description: "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
                '1703767-00-A_0_2000.jpg',
                '1703767-00-A_1.jpg',
            ],
            sizes: [
                { name: 'S', inStock: 15 },
                { name: 'M', inStock: 15 },
                { name: 'L', inStock: 15 },
                { name: 'XL', inStock: 15 },
            ],
            slug: "men_solar_roof_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Solar Roof Tee",
            gender: 'men',
            price: 35
        },
        {
            description: "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
                '1700280-00-A_0_2000.jpg',
                '1700280-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 17 },
                { name: 'S', inStock: 17 },
                { name: 'XL', inStock: 17 },
                { name: 'XXL', inStock: 17 },
            ],
            slug: "men_let_the_sun_shine_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Let the Sun Shine Tee",
            gender: 'men',
            price: 35
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
            images: [
                '8764734-00-A_0_2000.jpg',
                '8764734-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 12 },
                { name: 'S', inStock: 12 },
                { name: 'M', inStock: 12 },
            ],
            slug: "men_3d_large_wordmark_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D Large Wordmark Tee",
            gender: 'men',
            price: 35
        },
        {
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: [
                '7652426-00-A_0_2000.jpg',
                '7652426-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 5 },
                { name: 'S', inStock: 5 },
            ],
            slug: "men_3d_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D T Logo Tee",
            gender: 'men',
            price: 35
        },
        {
            description: "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
            images: [
                '8528839-00-A_0_2000.jpg',
                '8528839-00-A_2.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 2 },
                { name: 'S', inStock: 2 },
                { name: 'M', inStock: 2 },
            ],
            slug: "men_3d_small_wordmark_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men’s 3D Small Wordmark Tee",
            gender: 'men',
            price: 35
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: [
                '1549268-00-A_0_2000.jpg',
                '1549268-00-A_2.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 82 },
                { name: 'S', inStock: 82 },
                { name: 'M', inStock: 82 },
                { name: 'L', inStock: 82 },
                { name: 'XL', inStock: 82 },
                { name: 'XXL', inStock: 82 },
            ],
            slug: "men_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Plaid Mode Tee",
            gender: 'men',
            price: 35
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
            images: [
                '9877034-00-A_0_2000.jpg',
                '9877034-00-A_2.jpg',
            ],
            sizes: [
                { name: 'XL', inStock: 24 },
                { name: 'XXL', inStock: 24 },
            ],
            slug: "men_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Powerwall Tee",
            gender: 'men',
            price: 35
        },
        {
            description: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
            images: [
                '1633802-00-A_0_2000.jpg',
                '1633802-00-A_2.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 5 },
                { name: 'S', inStock: 5 },
                { name: 'XXL', inStock: 5 },
            ],
            slug: "men_battery_day_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Battery Day Tee",
            gender: 'men',
            price: 30
        },
        {
            description: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
                '7654399-00-A_0_2000.jpg',
                '7654399-00-A_1.jpg',
            ],
            sizes: [
                { name: 'M', inStock: 150 },
                { name: 'L', inStock: 150 },
            ],
            slug: "men_cybertruck_bulletproof_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men’s Cybertruck Bulletproof Tee",
            gender: 'men',
            price: 30
        },
        {
            description: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
            images: [
                '7652410-00-A_0.jpg',
                '7652410-00-A_1_2000.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 10 },
                { name: 'M', inStock: 10 },
                { name: 'L', inStock: 10 },
                { name: 'XL', inStock: 10 },
                { name: 'XXL', inStock: 10 },
            ],
            slug: "men_haha_yes_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Haha Yes Tee",
            gender: 'men',
            price: 35
        },
        {
            description: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
            images: [
                '8764600-00-A_0_2000.jpg',
                '8764600-00-A_2.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 34 },
                { name: 'S', inStock: 34 },
                { name: 'M', inStock: 34 },
                { name: 'L', inStock: 34 },
            ],
            slug: "men_s3xy_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's S3XY Tee",
            gender: 'men',
            price: 35
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
            images: [
                '8764813-00-A_0_2000.jpg',
                '8764813-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XL', inStock: 15 },
                { name: 'XXL', inStock: 15 },
            ],
            slug: "men_3d_wordmark_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D Wordmark Long Sleeve Tee",
            gender: 'men',
            price: 40
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
            images: [
                '8529198-00-A_0_2000.jpg',
                '8529198-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 12 },
                { name: 'XXL', inStock: 12 },
            ],
            slug: "men_3d_t_logo_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D T Logo Long Sleeve Tee",
            gender: 'men',
            price: 40
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                '1740245-00-A_0_2000.jpg',
                '1740245-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 10 },
                { name: 'M', inStock: 10 },
                { name: 'L', inStock: 10 },
                { name: 'XL', inStock: 10 },
                { name: 'XXL', inStock: 10 },
            ],
            slug: "men_raven_lightweight_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Men's Raven Lightweight Hoodie",
            gender: 'men',
            price: 115
        },
        {
            description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740051-00-A_0_2000.jpg',
                '1740051-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 10 },
                { name: 'M', inStock: 10 },
                { name: 'L', inStock: 10 },
                { name: 'XL', inStock: 10 },
                { name: 'XXL', inStock: 10 },
            ],
            slug: "chill_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Chill Pullover Hoodie",
            gender: 'unisex',
            price: 130
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1741111-00-A_0_2000.jpg',
                '1741111-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 100 },
                { name: 'L', inStock: 100 },
                { name: 'XL', inStock: 100 },
                { name: 'XXL', inStock: 100 },
            ],
            slug: "men_chill_full_zip_hoodie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Full Zip Hoodie",
            gender: 'men',
            price: 85
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740140-00-A_0_2000.jpg',
                '1740140-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 7 },
                { name: 'S', inStock: 7 },
                { name: 'M', inStock: 7 },
            ],
            slug: "men_chill_quarter_zip_pullover_-_gray",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Quarter Zip Pullover - Gray",
            gender: 'men',
            price: 85
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740145-00-A_2_2000.jpg',
                '1740145-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 15 },
                { name: 'S', inStock: 15 },
                { name: 'M', inStock: 15 },
                { name: 'L', inStock: 15 },
            ],
            slug: "men_chill_quarter_zip_pullover_-_white",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Quarter Zip Pullover - White",
            gender: 'men',
            price: 85
        },
        {
            description: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
            images: [
                '8529107-00-A_0_2000.jpg',
                '8529107-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 15 },
                { name: 'S', inStock: 15 },
                { name: 'XL', inStock: 15 },
                { name: 'XXL', inStock: 15 },
            ],
            slug: "3d_large_wordmark_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "3D Large Wordmark Pullover Hoodie",
            gender: 'unisex',
            price: 70
        },
        {
            description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
            images: [
                '7654420-00-A_0_2000.jpg',
                '7654420-00-A_1_2000.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 13 },
                { name: 'S', inStock: 13 },
                { name: 'M', inStock: 13 },
                { name: 'L', inStock: 13 },
                { name: 'XL', inStock: 13 },
                { name: 'XXL', inStock: 13 },
            ],
            slug: "cybertruck_graffiti_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Cybertruck Graffiti Hoodie",
            gender: 'unisex',
            price: 60
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                '1657932-00-A_0_2000.jpg',
                '1657932-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 11 },
                { name: 'S', inStock: 11 },
                { name: 'M', inStock: 11 },
                { name: 'L', inStock: 11 },
                { name: 'XL', inStock: 11 },
                { name: 'XXL', inStock: 11 },
            ],
            slug: "relaxed_t_logo_hat",
            type: 'hats',
            tags: ['hats'],
            title: "Relaxed T Logo Hat",
            gender: 'unisex',
            price: 30
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                '1740417-00-A_0_2000.jpg',
                '1740417-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 13 },
                { name: 'S', inStock: 13 },
                { name: 'M', inStock: 13 },
                { name: 'L', inStock: 13 },
                { name: 'XL', inStock: 13 },
                { name: 'XXL', inStock: 13 },
            ],
            slug: "thermal_cuffed_beanie",
            type: 'hats',
            tags: ['hats'],
            title: "Thermal Cuffed Beanie",
            gender: 'unisex',
            price: 35
        },
        {
            description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
            images: [
                '1740535-00-A_0_2000.jpg',
                '1740535-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 85 },
                { name: 'S', inStock: 85 },
                { name: 'M', inStock: 85 },
            ],
            slug: "women_cropped_puffer_jacket",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Women's Cropped Puffer Jacket",
            gender: 'women',
            price: 225
        },
        {
            description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740226-00-A_0_2000.jpg',
                '1740226-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 10 },
                { name: 'M', inStock: 10 },
                { name: 'XXL', inStock: 10 },
            ],
            slug: "women_chill_half_zip_cropped_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Women's Chill Half Zip Cropped Hoodie",
            gender: 'women',
            price: 130
        },
        {
            description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                '1740260-00-A_0_2000.jpg',
                '1740260-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 9 },
                { name: 'S', inStock: 9 },
                { name: 'M', inStock: 9 },
                { name: 'L', inStock: 9 },
                { name: 'XL', inStock: 9 },
                { name: 'XXL', inStock: 9 },
            ],
            slug: "women_raven_slouchy_crew_sweatshirt",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Women's Raven Slouchy Crew Sweatshirt",
            gender: 'women',
            price: 110
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
            images: [
                '1740290-00-A_0_2000.jpg',
                '1740290-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 10 },
                { name: 'M', inStock: 10 },
                { name: 'L', inStock: 10 },
                { name: 'XL', inStock: 10 },
                { name: 'XXL', inStock: 10 },
            ],
            slug: "women_turbine_cropped_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Turbine Cropped Long Sleeve Tee",
            gender: 'women',
            price: 45
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
                '1741441-00-A_0_2000.jpg',
                '1741441-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 0 },
                { name: 'S', inStock: 0 },
            ],
            slug: "women_turbine_cropped_short_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Turbine Cropped Short Sleeve Tee",
            gender: 'women',
            price: 40
        },
        {
            description: "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            images: [
                '8765090-00-A_0_2000.jpg',
                '8765090-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 30 },
                { name: 'S', inStock: 30 },
                { name: 'M', inStock: 30 },
                { name: 'L', inStock: 30 },
                { name: 'XL', inStock: 30 },
                { name: 'XXL', inStock: 30 },
            ],
            slug: "women_t_logo_short_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's T Logo Short Sleeve Scoop Neck Tee",
            gender: 'women',
            price: 35
        },
        {
            description: "Designed for style and comfort, the ultrasoft Women's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            images: [
                '8765100-00-A_0_2000.jpg',
                '8765100-00-A_1.jpg',
            ],
            sizes: [
                { name: 'XS', inStock: 16 },
                { name: 'S', inStock: 16 },
                { name: 'L', inStock: 16 },
                { name: 'XL', inStock: 16 },
                { name: 'XXL', inStock: 16 },
            ],
            slug: "women_t_logo_long_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's T Logo Long Sleeve Scoop Neck Tee",
            gender: 'women',
            price: 40
        },
        {
            description: "Designed for style and comfort, the Women's Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.",
            images: ['8765120-00-A_0_2000.jpg', '8765120-00-A_1.jpg'],
            sizes: [
                { name: 'XS', inStock: 0 },
                { name: 'S', inStock: 0 },
                { name: 'M', inStock: 0 },
                { name: 'L', inStock: 0 },
                { name: 'XL', inStock: 0 },
                { name: 'XXL', inStock: 0 }
            ],
            slug: "women_small_wordmark_short_sleeve_v-neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Small Wordmark Short Sleeve V-Neck Tee",
            gender: 'women',
            price: 35
        },
        {
            description: "Designed for style and comfort, the Women's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
            images: ['8765115-00-A_0_2000.jpg', '8765115-00-A_1.jpg'],
            sizes: [
                { name: 'XL', inStock: 5 },
                { name: 'XXL', inStock: 0 }
            ],
            slug: "women_large_wordmark_short_sleeve_crew_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
            gender: 'women',
            price: 35
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort, and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: ['1549275-00-A_0_2000.jpg', '1549275-00-A_1.jpg'],
            sizes: [
                { name: 'S', inStock: 16 },
                { name: 'M', inStock: 0 }
            ],
            slug: "women_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Plaid Mode Tee",
            gender: 'women',
            price: 35
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort, and style, the exclusive tee promotes sustainable energy in any",
            images: ['9877040-00-A_0_2000.jpg', '9877040-00-A_1.jpg'],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 0 },
                { name: 'M', inStock: 0 },
                { name: 'L', inStock: 0 },
                { name: 'XL', inStock: 0 },
                { name: 'XXL', inStock: 0 }
            ],
            slug: "women_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women’s Powerwall Tee",
            gender: 'women',
            price: 130
        },
        {
            description: "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and a prominent Tesla wordmark across the back.",
            images: ['5645680-00-A_0_2000.jpg', '5645680-00-A_3.jpg'],
            sizes: [
                { name: 'M', inStock: 3 },
                { name: 'L', inStock: 0 },
                { name: 'XL', inStock: 0 },
                { name: 'XXL', inStock: 0 }
            ],
            slug: "women_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Corp Jacket",
            gender: 'women',
            price: 90
        },
        {
            description: "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket, or other favorite on-the-go fit. Made from 70% bamboo and 30% cotton.",
            images: ['1740270-00-A_0_2000.jpg', '1740270-00-A_1.jpg'],
            sizes: [
                { name: 'XS', inStock: 162 },
                { name: 'S', inStock: 162 },
                { name: 'M', inStock: 162 },
                { name: 'L', inStock: 162 },
                { name: 'XL', inStock: 162 },
                { name: 'XXL', inStock: 162 }
            ],
            slug: "women_raven_joggers",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Raven Joggers",
            gender: 'women',
            price: 100
        },
        {
            description: "Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.",
            images: ['1742694-00-A_1_2000.jpg', '1742694-00-A_3.jpg'],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 10 },
                { name: 'M', inStock: 10 }
            ],
            slug: "kids_cybertruck_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Cybertruck Long Sleeve Tee",
            gender: 'kid',
            price: 30
        },
        {
            description: "The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.",
            images: ['8529312-00-A_0_2000.jpg', '8529312-00-A_1.jpg'],
            sizes: [
                { name: 'XS', inStock: 0 },
                { name: 'S', inStock: 0 },
                { name: 'M', inStock: 0 }
            ],
            slug: "kids_scribble_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Scribble T Logo Tee",
            gender: 'kid',
            price: 25
        },
        {
            description: "The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.",
            images: ['8529342-00-A_0_2000.jpg', '8529342-00-A_1.jpg'],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 10 },
                { name: 'M', inStock: 10 }
            ],
            slug: "kids_cybertruck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Cybertruck Tee",
            gender: 'kid',
            price: 25
        },        
        {
            description: "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
            images: ['8529354-00-A_0_2000.jpg', '8529354-00-A_1.jpg'],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 10 },
                { name: 'M', inStock: 10 }
            ],
            slug: "kids_racing_stripe_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Racing Stripe Tee",
            gender: 'kid',
            price: 30
        },
        {
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: ['7652465-00-A_0_2000.jpg', '7652465-00-A_1.jpg'],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 10 },
                { name: 'M', inStock: 10 }
            ],
            slug: "kids_3d_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids 3D T Logo Tee",
            gender: 'kid',
            price: 30
        },
        {
            description: "The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environmentally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.",
            images: ['100042307_0_2000.jpg', '100042307_alt_2000.jpg'],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 10 },
                { name: 'M', inStock: 10 }
            ],
            slug: "kids_checkered_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Checkered Tee",
            gender: 'kid',
            price: 30
        },
        {
            description: "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
            images: ['1473809-00-A_1_2000.jpg', '1473809-00-A_alt.jpg'],
            sizes: [
                { name: 'XS', inStock: 16 },
                { name: 'S', inStock: 16 }
            ],
            slug: "made_on_earth_by_humans_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Made on Earth by Humans Onesie",
            gender: 'kid',
            price: 25
        },
        {
            description: "The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
            images: ['8529387-00-A_0_2000.jpg', '8529387-00-A_1.jpg'],
            sizes: [
                { name: 'XS', inStock: 0 },
                { name: 'S', inStock: 0 }
            ],
            slug: "scribble_t_logo_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Scribble T Logo Onesie",
            gender: 'kid',
            price: 30
        },
        {
            description: "Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.",
            images: ['1473834-00-A_2_2000.jpg', '1473829-00-A_2_2000.jpg'],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 10 }
            ],
            slug: "zero_emissions_(almost)_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Zero Emissions (Almost) Onesie",
            gender: 'kid',
            price: 30
        },
        {
            description: "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
            images: ['1742702-00-A_0_2000.jpg', '1742702-00-A_1.jpg'],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 10 },
                { name: 'M', inStock: 10 }
            ],
            slug: "kids_cyberquad_bomber_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Cyberquad Bomber Jacket",
            gender: 'kid',
            price: 65
        },
        {
            description: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
            images: ['1506211-00-A_0_2000.jpg', '1506211-00-A_1_2000.jpg'],
            sizes: [
                { name: 'XS', inStock: 10 },
                { name: 'S', inStock: 10 },
                { name: 'M', inStock: 10 }
            ],
            slug: "kids_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Corp Jacket",
            gender: 'kid',
            price: 30
        }        
    ]
}