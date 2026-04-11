// ================================================
// MM Mobiles - JavaScript Functionality
// ================================================

// Products Data
const products = [{
        id: 1,
        name: "iPhone 15",
        brand: "apple",
        brandDisplay: "Apple",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹79900",
        rating: 5,
        camera: "48MP Camera",
        battery: "3349 mAh",
        storage: "128GB / 256GB / 512GB",
        display: "6.1-inch OLED",
        processor: "A16 Bionic"
    },
    {
        id: 2,
        name: "iPhone 15 Plus",
        brand: "apple",
        brandDisplay: "Apple",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/k/i/p/-original-imahggetqedyhhmf.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹89900",
        rating: 5,
        camera: "48MP Camera",
        battery: "4383 mAh",
        storage: "256GB / 512GB",
        display: "6.7-inch OLED",
        processor: "A16 Bionic"
    },
    {
        id: 3,
        name: "iPhone 15 Pro",
        brand: "apple",
        brandDisplay: "Apple",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹134900",
        rating: 5,
        camera: "48MP + 12MP + 12MP",
        battery: "3274 mAh",
        storage: "256GB / 512GB / 1TB",
        display: "6.1-inch OLED",
        processor: "A17 Pro"
    },
    {
        id: 4,
        name: "iPhone 15 Pro Max",
        brand: "apple",
        brandDisplay: "Apple",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/x/t/d/-original-imahggewxkkg999k.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹159900",
        rating: 5,
        camera: "48MP + 12MP + 12MP",
        battery: "4422 mAh",
        storage: "256GB / 512GB / 1TB",
        display: "6.7-inch OLED",
        processor: "A17 Pro"
    },
    {
        id: 5,
        name: "iPhone 14",
        brand: "apple",
        brandDisplay: "Apple",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹69900",
        rating: 4,
        camera: "12MP + 12MP",
        battery: "3279 mAh",
        storage: "128GB / 256GB / 512GB",
        display: "6.1-inch OLED",
        processor: "A15 Bionic"
    },
    {
        id: 6,
        name: "iPhone 14 Plus",
        brand: "apple",
        brandDisplay: "Apple",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹79900",
        rating: 4,
        camera: "12MP + 12MP",
        battery: "4325 mAh",
        storage: "128GB / 256GB / 512GB",
        display: "6.7-inch OLED",
        processor: "A15 Bionic"
    },
    {
        id: 7,
        name: "iPhone 14 Pro",
        brand: "apple",
        brandDisplay: "Apple",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/y/l/p/-original-imaghxemc3wtcuhb.jpeg?q=90",
        specs: "6GB RAM | 256GB Storage",
        price: "₹119900",
        rating: 5,
        camera: "48MP + 12MP + 12MP",
        battery: "3200 mAh",
        storage: "256GB / 512GB / 1TB",
        display: "6.1-inch OLED",
        processor: "A16 Bionic"
    },
    {
        id: 8,
        name: "iPhone 14 Pro Max",
        brand: "apple",
        brandDisplay: "Apple",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/k/s/t/-original-imaghxengzjc2djt.jpeg?q=90",
        specs: "6GB RAM | 256GB Storage",
        price: "₹139900",
        rating: 5,
        camera: "48MP + 12MP + 12MP",
        battery: "4323 mAh",
        storage: "256GB / 512GB / 1TB",
        display: "6.7-inch OLED",
        processor: "A16 Bionic"
    },
    {
        id: 9,
        name: "iPhone 13",
        brand: "apple",
        brandDisplay: "Apple",
        image: "https://rukminim2.flixcart.com/image/1280/1280/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=90",
        specs: "4GB RAM | 128GB Storage",
        price: "₹59900",
        rating: 4,
        camera: "12MP + 12MP",
        battery: "3240 mAh",
        storage: "128GB / 256GB / 512GB",
        display: "6.1-inch OLED",
        processor: "A15 Bionic"
    },
    {
        id: 10,
        name: "iPhone 13 Mini",
        brand: "apple",
        brandDisplay: "Apple",
        image: "https://rukminim2.flixcart.com/image/1280/1280/l0igvww0/mobile/y/j/1/-original-imagca5ge9yrbrzq.jpeg?q=90",
        specs: "4GB RAM | 128GB Storage",
        price: "₹64900",
        rating: 4,
        camera: "12MP + 12MP",
        battery: "2438 mAh",
        storage: "128GB / 256GB",
        display: "5.4-inch OLED",
        processor: "A15 Bionic"
    },

    //Samsung mobile list  
    {
        id: 11,
        name: "Samsung Galaxy S24",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/f/a/6/-original-imahfz2tnafhmagr.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹79999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4000 mAh",
        storage: "256GB / 512GB",
        display: "6.2-inch AMOLED",
        processor: "Snapdragon 8 Gen 3"
    },
    {
        id: 12,
        name: "Samsung Galaxy S24 Plus",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/g/d/6/-original-imahfvuakpzdrzzx.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹99999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4900 mAh",
        storage: "256GB / 512GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 8 Gen 3"
    },
    {
        id: 13,
        name: "Samsung Galaxy S24 Ultra",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/j/m/z/-original-imahgfmxumntk7sy.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹129999",
        rating: 5,
        camera: "200MP Camera",
        battery: "5000 mAh",
        storage: "256GB / 512GB / 1TB",
        display: "6.8-inch AMOLED",
        processor: "Snapdragon 8 Gen 3"
    },

    // S23 Series
    {
        id: 14,
        name: "Samsung Galaxy S23",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/p/w/p/-original-imah4zp8tfzndmmh.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹74999",
        rating: 5,
        camera: "50MP Camera",
        battery: "3900 mAh",
        storage: "128GB / 256GB",
        display: "6.1-inch AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },
    {
        id: 15,
        name: "Samsung Galaxy S23 Plus",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/y/d/c/-original-imagzm8p5vtrszrj.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹94999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4700 mAh",
        storage: "256GB / 512GB",
        display: "6.6-inch AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },
    {
        id: 16,
        name: "Samsung Galaxy S23 Ultra",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/u/a/l/-original-imagzm8qrfdmhy8z.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹124999",
        rating: 5,
        camera: "200MP Camera",
        battery: "5000 mAh",
        storage: "256GB / 512GB / 1TB",
        display: "6.8-inch AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },

    // FE Series
    {
        id: 17,
        name: "Samsung Galaxy S23 FE",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/8/v/0/-original-imah5ywfebrs9bfg.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹59999",
        rating: 4,
        camera: "50MP Camera",
        battery: "4500 mAh",
        storage: "128GB / 256GB",
        display: "6.4-inch AMOLED",
        processor: "Exynos 2200"
    },

    // Fold & Flip
    {
        id: 18,
        name: "Samsung Galaxy Z Fold 5",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/y/g/l/-original-imagztmghzuhz7kf.jpeg?q=90",
        specs: "12GB RAM | 512GB Storage",
        price: "₹154999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4400 mAh",
        storage: "256GB / 512GB / 1TB",
        display: "7.6-inch Foldable AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },
    {
        id: 19,
        name: "Samsung Galaxy Z Flip 5",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/2/j/d/-original-imagztmgzp8ewjhn.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹99999",
        rating: 5,
        camera: "12MP Dual Camera",
        battery: "3700 mAh",
        storage: "256GB / 512GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },

    // A Series (Budget + Mid)
    {
        id: 20,
        name: "Samsung Galaxy A74",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/cases-covers/back-cover/o/y/l/gow-opof19e5-trp-hcc-glasgow-original-imahhkyqqv5dg29n.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹42999",
        rating: 4,
        camera: "108MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 7 Gen 2"
    },
    {
        id: 21,
        name: "Samsung Galaxy A54",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/cases-covers/back-cover/7/1/n/gn-space-sa545g-global-nomad-original-imahyjg6wmyybmbn.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹35999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.4-inch AMOLED",
        processor: "Exynos 1380"
    },
    {
        id: 22,
        name: "Samsung Galaxy A34",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/j/w/j/galaxy-a34-5g-sm-a346elgcins-samsung-original-imah3p2yb3fcgefq.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹30999",
        rating: 4,
        camera: "48MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.6-inch AMOLED",
        processor: "Dimensity 1080"
    },

    // Continue similar pattern...

    {
        id: 23,
        name: "Samsung Galaxy A24",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/f/a/6/-original-imahfz2tnafhmagr.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹19999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.5-inch AMOLED",
        processor: "Helio G99"
    },

    {
        id: 24,
        name: "Samsung Galaxy M54",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/t/h/6/-original-imagnrhk2jpnnajr.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹24999",
        rating: 4,
        camera: "108MP Camera",
        battery: "6000 mAh",
        storage: "128GB / 256GB",
        display: "6.7-inch AMOLED",
        processor: "Exynos 1380"
    },
    //Xiaomi mobile list 
    {
        id: 25,
        name: "Xiaomi 14",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/5/8/w/-original-imahfpwvcfvxvqfh.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹69999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4610 mAh",
        storage: "256GB / 512GB",
        display: "6.36-inch AMOLED",
        processor: "Snapdragon 8 Gen 3"
    },
    {
        id: 26,
        name: "Xiaomi 14 Ultra",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/m/i/o/14-ultra-mzb0gvnin-xiaomi-original-imagzt8cw9q2zgae.jpeg?q=90",
        specs: "16GB RAM | 512GB Storage",
        price: "₹99999",
        rating: 5,
        camera: "50MP Quad Camera",
        battery: "5300 mAh",
        storage: "512GB",
        display: "6.73-inch AMOLED",
        processor: "Snapdragon 8 Gen 3"
    },
    {
        id: 27,
        name: "Xiaomi 13 Pro",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/v/h/q/13-pro-2210132g-xiaomi-original-imagzbgp2nqtyvsw.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹79999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4820 mAh",
        storage: "256GB / 512GB",
        display: "6.73-inch AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },
    {
        id: 28,
        name: "Xiaomi 13",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/t/r/a/13-5g-black-diamond-128-gb-6-gb-ram-2406ern9ci-redmi-original-imah2srhrwrsgfuw.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹64999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4500 mAh",
        storage: "128GB / 256GB",
        display: "6.36-inch AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },
    {
        id: 29,
        name: "Redmi Note 13 Pro+",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/s/y/5/-original-imagwu894yyhyyce.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹33999",
        rating: 5,
        camera: "200MP Camera",
        battery: "5000 mAh",
        storage: "256GB / 512GB",
        display: "6.67-inch AMOLED",
        processor: "Dimensity 7200"
    },
    {
        id: 30,
        name: "Redmi Note 13 Pro",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/f/h/y/note-13-pro-5g-note-13-pro-redmi-original-imah6mkxz4pv9jrf.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹25999",
        rating: 4,
        camera: "200MP Camera",
        battery: "5100 mAh",
        storage: "128GB / 256GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 7s Gen 2"
    },
    {
        id: 31,
        name: "Redmi Note 13",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/g/l/j/-original-imagzrfwkeu2zazh.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹17999",
        rating: 4,
        camera: "108MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.6-inch AMOLED",
        processor: "Dimensity 6080"
    },
    {
        id: 32,
        name: "Redmi 13 5G",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/j/8/m/13-5g-2406ern9ci-redmi-original-imahjgnr2yaegzhu.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹13999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.79-inch LCD",
        processor: "Snapdragon 4 Gen 2"
    },
    {
        id: 33,
        name: "Redmi 12 5G",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/m/r/i/note-12-5g-mzb0ei8in-redmi-original-imagpgr9gpmjjnwa.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹11999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.79-inch LCD",
        processor: "Snapdragon 4 Gen 2"
    },
    {
        id: 34,
        name: "Poco F6",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/2/4/s/-original-imah4gzvp2fef9ys.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹29999",
        rating: 5,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "256GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 8s Gen 3"
    },
    {
        id: 35,
        name: "Poco X6 Pro",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/9/l/v/-original-imah4mdfseheaf3x.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹26999",
        rating: 5,
        camera: "64MP Camera",
        battery: "5000 mAh",
        storage: "256GB",
        display: "6.67-inch AMOLED",
        processor: "Dimensity 8300"
    },
    {
        id: 36,
        name: "Poco X6",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/j/d/e/-original-imah4mdfaydhwqc8.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹19999",
        rating: 4,
        camera: "64MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 7s Gen 2"
    },
    {
        id: 37,
        name: "Poco M6 Pro",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹14999",
        rating: 4,
        camera: "64MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.67-inch AMOLED",
        processor: "Helio G99"
    },
    {
        id: 38,
        name: "Poco M6",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/i/w/k/-original-imah3afnzmgfjnrf.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹10999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.74-inch LCD",
        processor: "Snapdragon 4 Gen 2"
    },
    {
        id: 39,
        name: "Redmi Note 12 Pro+",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/h/h/z/-original-imaghkvufhjsnw7q.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹32999",
        rating: 5,
        camera: "200MP Camera",
        battery: "4980 mAh",
        storage: "256GB",
        display: "6.67-inch AMOLED",
        processor: "Dimensity 1080"
    },
    {
        id: 40,
        name: "Redmi Note 12 Pro",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/m/j/o/-original-imaghkvue4yjecju.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹25999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.67-inch AMOLED",
        processor: "Dimensity 1080"
    },
    {
        id: 41,
        name: "Redmi Note 12",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/u/t/5/note-12-mzb0e2kin-redmi-original-imagz62rkfazphz2.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹16999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 4 Gen 1"
    },
    {
        id: 42,
        name: "Redmi 11 Prime",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/k/h/z/11-prime-mzb0cerin-redmi-original-imagzqvrgdz98jch.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹12999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.6-inch LCD",
        processor: "Helio G99"
    },
    {
        id: 43,
        name: "Redmi 10 Prime",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/ktbu6q80/mobile/x/e/t/10-prime-10-redmi-original-imag6paxhggdnsjz.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹11999",
        rating: 4,
        camera: "50MP Camera",
        battery: "6000 mAh",
        storage: "128GB",
        display: "6.5-inch LCD",
        processor: "Helio G88"
    },
    {
        id: 44,
        name: "Poco F5",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/k/s/8/f5-5g-mzb0epnin-poco-original-imagpep3afhmezhb.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹27999",
        rating: 5,
        camera: "64MP Camera",
        battery: "5000 mAh",
        storage: "256GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 7+ Gen 2"
    },
    {
        id: 45,
        name: "Poco X5 Pro",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/n/v/2/-original-imagmkjfjwtzhaag.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹22999",
        rating: 4,
        camera: "108MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 778G"
    },
    {
        id: 46,
        name: "Poco X5",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/8/q/q/-original-imagnqpnkkzmgv7h.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹17999",
        rating: 4,
        camera: "48MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 695"
    },
    {
        id: 47,
        name: "Poco M5",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/s/s/a/-original-imaghsptxpgsqqry.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹12999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.58-inch LCD",
        processor: "Helio G99"
    },
    {
        id: 48,
        name: "Redmi A3",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/i/h/z/a3-mzb0h0lin-redmi-original-imagy2wsmpetm6s2.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹7999",
        rating: 3,
        camera: "8MP Camera",
        battery: "5000 mAh",
        storage: "64GB / 128GB",
        display: "6.5-inch LCD",
        processor: "Unisoc T603"
    },
    {
        id: 49,
        name: "Redmi A2+",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/a/i/l/a2-plus-a2-redmi-original-imagqfyemhx3pyks.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹7499",
        rating: 3,
        camera: "8MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.52-inch LCD",
        processor: "Helio G36"
    },
    {
        id: 50,
        name: "Redmi 9 Activ",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/x/d/y/-original-imaghkmkwhphgnnk.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹8499",
        rating: 3,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.53-inch LCD",
        processor: "Helio G35"
    },
    {
        id: 51,
        name: "Redmi Note 11 Pro+",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/6/d/5/redmi-note-11-pro-2201116ti-mi-original-imah3gtuqepc2zzg.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹28999",
        rating: 4,
        camera: "108MP Camera",
        battery: "4500 mAh",
        storage: "128GB / 256GB",
        display: "6.67-inch AMOLED",
        processor: "Dimensity 920"
    },
    {
        id: 52,
        name: "Redmi Note 11 Pro",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/j/l/e/-original-imagcqrqw5rwhguk.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹24999",
        rating: 4,
        camera: "108MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 695"
    },
    {
        id: 53,
        name: "Redmi Note 11",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/z/u/k/-original-imagbh8dmpjfzrjw.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹15999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.43-inch AMOLED",
        processor: "Snapdragon 680"
    },
    {
        id: 54,
        name: "Poco C65",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/b/u/8/c65-mzb0g8nin-poco-original-imagw6j2kp5t5jek.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹9999",
        rating: 3,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.74-inch LCD",
        processor: "Helio G85"
    },
    {
        id: 55,
        name: "Poco C55",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/b/y/g/-original-imagnfzybft7wzmp.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹8499",
        rating: 3,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.71-inch LCD",
        processor: "Helio G85"
    },
    {
        id: 56,
        name: "Poco C51",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/o/t/a/c51-mzb0e6din-poco-original-imagzdzzraqzsrzc.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹7499",
        rating: 3,
        camera: "8MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.52-inch LCD",
        processor: "Helio G36"
    },
    {
        id: 57,
        name: "Redmi Note 10 Pro",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/l0h1g280/mobile/e/h/c/-original-imagc9cqbgtgfzum.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹18999",
        rating: 4,
        camera: "108MP Camera",
        battery: "5020 mAh",
        storage: "128GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 732G"
    },
    {
        id: 58,
        name: "Redmi Note 10",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kmax8y80/mobile/i/h/9/note-10-m2010ghtd1-redmi-original-imagf8hqq9nsmtvz.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹12999",
        rating: 4,
        camera: "48MP Camera",
        battery: "5000 mAh",
        storage: "64GB / 128GB",
        display: "6.43-inch AMOLED",
        processor: "Snapdragon 678"
    },
    {
        id: 59,
        name: "Redmi 9 Power",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/z/x/m/9-power-mobhqab3-m2010j19si-redmi-original-imah4dbk8scsfshg.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹10999",
        rating: 4,
        camera: "48MP Camera",
        battery: "6000 mAh",
        storage: "64GB",
        display: "6.53-inch LCD",
        processor: "Snapdragon 662"
    },
    {
        id: 60,
        name: "Redmi 9 Prime",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/ke0a7ww0/mobile/4/r/e/mi-redmi-9-prime-m2004j191-original-imafushhfhy3tbp9.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹9999",
        rating: 4,
        camera: "13MP Camera",
        battery: "5020 mAh",
        storage: "64GB",
        display: "6.53-inch LCD",
        processor: "Helio G80"
    },
    {
        id: 61,
        name: "Poco X3 Pro",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/p/1/1/x3-pro-mzb08t9in-poco-original-imahff36aguctrsp.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹18999",
        rating: 4,
        camera: "48MP Camera",
        battery: "5160 mAh",
        storage: "128GB",
        display: "6.67-inch LCD",
        processor: "Snapdragon 860"
    },
    {
        id: 62,
        name: "Poco X3",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kfbfr0w0/mobile/f/x/r/poco-x3-mzb07z2in-original-imafvt3hz54npsba.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹16999",
        rating: 4,
        camera: "64MP Camera",
        battery: "6000 mAh",
        storage: "128GB",
        display: "6.67-inch LCD",
        processor: "Snapdragon 732G"
    },
    {
        id: 63,
        name: "Redmi 8",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/k1fbmvk0/mobile/9/e/m/mi-redmi-8-mzb8252in-original-imafhyacczv2h27n.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹8999",
        rating: 3,
        camera: "12MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.22-inch LCD",
        processor: "Snapdragon 439"
    },
    {
        id: 64,
        name: "Redmi 7",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://rukminim2.flixcart.com/image/1280/1280/k0lbdzk0pkrrdj/mobile/z/z/g/mi-redmi-7-redmi-7-original-imafgawteysyzuzy.jpeg?q=90",
        specs: "3GB RAM | 32GB Storage",
        price: "₹7999",
        rating: 3,
        camera: "12MP Camera",
        battery: "4000 mAh",
        storage: "32GB",
        display: "6.26-inch LCD",
        processor: "Snapdragon 632"
    },
    //oneplus mobiles list 
    {
        id: 65,
        name: "OnePlus 12",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/v/g/m/12-cph2573-oneplus-original-imahk47dwgquvv8z.jpeg?q=90",
        specs: "16GB RAM | 512GB Storage",
        price: "₹69999",
        rating: 5,
        camera: "50MP + 64MP + 48MP",
        battery: "5400 mAh",
        storage: "256GB / 512GB",
        display: "6.82-inch AMOLED",
        processor: "Snapdragon 8 Gen 3"
    },
    {
        id: 66,
        name: "OnePlus 12R",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/r/w/j/12r-cph2585-oneplus-original-imah9zk6nddhcbsh.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹42999",
        rating: 5,
        camera: "50MP Camera",
        battery: "5500 mAh",
        storage: "128GB / 256GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },
    {
        id: 67,
        name: "OnePlus 11",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/screen-guard/edge-to-edge-tempered-glass/r/w/5/uv-glass-1plus-11-5g-s1-nstar-original-imah3sh86qkujfhd.jpeg?q=90",
        specs: "16GB RAM | 256GB Storage",
        price: "₹56999",
        rating: 5,
        camera: "50MP + 48MP + 32MP",
        battery: "5000 mAh",
        storage: "256GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },
    {
        id: 68,
        name: "OnePlus 11R",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/y/w/l/11r-5g-5011102527-oneplus-original-imagn3bq8t4ja5rx.jpeg?q=90",
        specs: "16GB RAM | 256GB Storage",
        price: "₹39999",
        rating: 5,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.74-inch AMOLED",
        processor: "Snapdragon 8+ Gen 1"
    },
    {
        id: 69,
        name: "OnePlus 10 Pro",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/l/j/q/-original-imagkgshx9kfayxq.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹66999",
        rating: 5,
        camera: "48MP + 50MP + 8MP",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 8 Gen 1"
    },
    {
        id: 70,
        name: "OnePlus 10T",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/v/i/f/-original-imaggceewkgkxthq.jpeg?q=90",
        specs: "16GB RAM | 256GB Storage",
        price: "₹54999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4800 mAh",
        storage: "128GB / 256GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 8+ Gen 1"
    },

    // Nord Series
    {
        id: 71,
        name: "OnePlus Nord 3",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/a/y/i/nord-3-5g-cph2491-oneplus-original-imagrk2vbpbegxmy.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹33999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.74-inch AMOLED",
        processor: "Dimensity 9000"
    },
    {
        id: 72,
        name: "OnePlus Nord CE4",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/g/2/u/nord-ce4-cph2613-oneplus-original-imahjjynmkftmy4h.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹26999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5500 mAh",
        storage: "256GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 7 Gen 3"
    },
    {
        id: 73,
        name: "OnePlus Nord CE3",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/z/j/u/nord-ce3-5g-cph2569-oneplus-original-imah5excx6wje5uf.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹24999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 782G"
    },
    {
        id: 74,
        name: "OnePlus Nord CE3 Lite",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/g/p/d/nord-ce-3-lite-5g-cph2467-oneplus-original-imah4ehbgmz4qzhz.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹19999",
        rating: 4,
        camera: "108MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.72-inch LCD",
        processor: "Snapdragon 695"
    },

    // Older Nord & Flagship
    {
        id: 75,
        name: "OnePlus Nord 2T",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/w/s/t/-original-imagfx6hzsqu438h.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹28999",
        rating: 4,
        camera: "50MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.43-inch AMOLED",
        processor: "Dimensity 1300"
    },
    {
        id: 76,
        name: "OnePlus Nord 2",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/q/n/m/-original-image7d9zgguhgcy.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹27999",
        rating: 4,
        camera: "50MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.43-inch AMOLED",
        processor: "Dimensity 1200"
    },

    // Extend similar pattern
    {
        id: 77,
        name: "OnePlus 9 Pro",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/p/a/d/-original-imaggceerybsxbff.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹64999",
        rating: 5,
        camera: "48MP Camera",
        battery: "4500 mAh",
        storage: "256GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 888"
    },
    {
        id: 78,
        name: "OnePlus 9",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/k/q/l/-original-imagdh239er3qnz2.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹49999",
        rating: 4,
        camera: "48MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.55-inch AMOLED",
        processor: "Snapdragon 888"
    },
    {
        id: 79,
        name: "OnePlus 8T",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kyrlifk0/screen-guard/tempered-glass/w/w/i/oneplus-8t-back-tempered-glass-epicshield-original-imagawn2haegvqnf.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹42999",
        rating: 4,
        camera: "48MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.55-inch AMOLED",
        processor: "Snapdragon 865"
    },
    {
        id: 80,
        name: "OnePlus 8 Pro",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kdakakw0/mobile/z/9/x/oneplus-8-pro-b078bn2h3r-original-imafu8emeypvc3vy.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹54999",
        rating: 5,
        camera: "48MP Camera",
        battery: "4510 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 865"
    },

    // Budget additions
    {
        id: 81,
        name: "OnePlus Nord N30",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/g/2/u/nord-ce4-cph2613-oneplus-original-imahjjynmkftmy4h.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹18999",
        rating: 4,
        camera: "108MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.72-inch LCD",
        processor: "Snapdragon 695"
    },
    {
        id: 82,
        name: "OnePlus Nord N20",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/d/b/a/nord-n20-se-cph2469-oneplus-original-imagjs7gxgzthg3p.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹15999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.43-inch AMOLED",
        processor: "Snapdragon 695"
    },
    {
        id: 83,
        name: "OnePlus Nord N10",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/w/s/t/-original-imagfx6hzsqu438h.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹14999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4300 mAh",
        storage: "128GB",
        display: "6.49-inch LCD",
        processor: "Snapdragon 690"
    },

    // Continue filling to 104
    {
        id: 84,
        name: "OnePlus Nord CE2",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/i/z/k/-original-imagdbyuc26yzmz8.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹22999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.43-inch AMOLED",
        processor: "Dimensity 900"
    },
    {
        id: 85,
        name: "OnePlus Nord CE",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/t/y/0/-original-imahgkgxk7yztxkg.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹19999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.43-inch AMOLED",
        processor: "Snapdragon 750G"
    },

    // filler realistic entries till 104
    {
        id: 86,
        name: "OnePlus 7 Pro",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/k0cqqvk0/mobile/q/s/4/oneplus-7-pro-gm1911-original-imafk5wg3yxjtbwp.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹39999",
        rating: 4,
        camera: "48MP Camera",
        battery: "4000 mAh",
        storage: "256GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 855"
    },
    {
        id: 87,
        name: "OnePlus 7T",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/k1b1bbk0/mobile/y/e/b/oneplus-7t-hd1901-original-imafkwsyvmpx7xhf.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹34999",
        rating: 4,
        camera: "48MP Camera",
        battery: "3800 mAh",
        storage: "128GB",
        display: "6.55-inch AMOLED",
        processor: "Snapdragon 855+"
    },
    {
        id: 88,
        name: "OnePlus 6T",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/k08gfbk0/mobile/v/b/v/oneplus-6t-a6010-original-imafk2dep8f5vntg.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹29999",
        rating: 4,
        camera: "16MP Camera",
        battery: "3700 mAh",
        storage: "128GB",
        display: "6.41-inch AMOLED",
        processor: "Snapdragon 845"
    },

    {
        id: 89,
        name: "OnePlus Nord 4",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/d/q/p/nord-4-5g-nord-4-5g-oneplus-original-imah3ya8z3tddj82.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹37999",
        rating: 5,
        camera: "50MP Camera",
        battery: "5500 mAh",
        storage: "256GB",
        display: "6.74-inch AMOLED",
        processor: "Snapdragon 7+ Gen 3"
    },
    {
        id: 90,
        name: "OnePlus Nord CE4 Lite",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/x/w/5/nord-ce4-lite-5g-cph2619-oneplus-original-imahf9mvhhg35f5y.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹20999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 695"
    },

    {
        id: 91,
        name: "OnePlus Ace",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/m/r/v/super-zx-5g-super-zx-5g-acer-original-imahdyhsyfwhkzrn.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹34999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4500 mAh",
        storage: "256GB",
        display: "6.7-inch AMOLED",
        processor: "Dimensity 8100"
    },
    {
        id: 92,
        name: "OnePlus Ace 2",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://m.media-amazon.com/images/I/61ngWlk3zjL._SL1500_.jpg",
        specs: "12GB RAM | 256GB Storage",
        price: "₹39999",
        rating: 5,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "256GB",
        display: "6.74-inch AMOLED",
        processor: "Snapdragon 8+ Gen 1"
    },

    {
        id: 93,
        name: "OnePlus Ace 3",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://m.media-amazon.com/images/I/61BTIyv+XdL._SL1500_.jpg",
        specs: "16GB RAM | 512GB Storage",
        price: "₹45999",
        rating: 5,
        camera: "50MP Camera",
        battery: "5500 mAh",
        storage: "512GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },

    {
        id: 94,
        name: "OnePlus Nord N300",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/t/y/0/-original-imahgkgxk7yztxkg.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹13999",
        rating: 3,
        camera: "48MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.56-inch LCD",
        processor: "Dimensity 810"
    },

    {
        id: 95,
        name: "OnePlus Nord N200",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/cases-covers/back-cover/s/m/3/bd-r-0227-smartlike-original-imagvazzxfektnuy.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹12999",
        rating: 3,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.49-inch LCD",
        processor: "Snapdragon 480"
    },

    {
        id: 96,
        name: "OnePlus 5T",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/jeykeq80/mobile/n/q/v/oneplus-oneplus-5-a5000-original-imaf3jfkg8jkhdfh.jpeg?q=90",
        specs: "6GB RAM | 64GB Storage",
        price: "₹24999",
        rating: 4,
        camera: "16MP Camera",
        battery: "3300 mAh",
        storage: "64GB",
        display: "6.01-inch AMOLED",
        processor: "Snapdragon 835"
    },

    {
        id: 97,
        name: "OnePlus 6",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/k20r8nk0/screen-guard/back-tempered-glass/a/j/6/runeech-one-7-backtmprd-original-imafk2cfyzdcxtxq.jpeg?q=90",
        specs: "6GB RAM | 64GB Storage",
        price: "₹27999",
        rating: 4,
        camera: "16MP Camera",
        battery: "3300 mAh",
        storage: "64GB",
        display: "6.28-inch AMOLED",
        processor: "Snapdragon 845"
    },

    {
        id: 98,
        name: "OnePlus 3T",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://m.media-amazon.com/images/I/61cNdwti0QL._SL1500_.jpg",
        specs: "6GB RAM | 64GB Storage",
        price: "₹19999",
        rating: 4,
        camera: "16MP Camera",
        battery: "3400 mAh",
        storage: "64GB",
        display: "5.5-inch AMOLED",
        processor: "Snapdragon 821"
    },

    {
        id: 99,
        name: "OnePlus X",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/y/i/g/-original-imaggcee7yprwrhx.jpeg?q=90",
        specs: "3GB RAM | 32GB Storage",
        price: "₹15999",
        rating: 3,
        camera: "13MP Camera",
        battery: "2525 mAh",
        storage: "32GB",
        display: "5-inch AMOLED",
        processor: "Snapdragon 801"
    },

    {
        id: 100,
        name: "OnePlus One",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/a/v/1/-original-imahgkgxn9gp4b9j.jpeg?q=90",
        specs: "3GB RAM | 64GB Storage",
        price: "₹14999",
        rating: 4,
        camera: "13MP Camera",
        battery: "3100 mAh",
        storage: "64GB",
        display: "5.5-inch LCD",
        processor: "Snapdragon 801"
    },

    {
        id: 101,
        name: "OnePlus Nord CE5",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/t/z/f/-original-imahgkgxm2gcukcj.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹27999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5500 mAh",
        storage: "256GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 7 Gen 3"
    },

    {
        id: 102,
        name: "OnePlus Nord 5",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/w/v/6/nord-5-cph2707-oneplus-original-imahe6runxfkugaw.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹34999",
        rating: 5,
        camera: "50MP Camera",
        battery: "5500 mAh",
        storage: "256GB",
        display: "6.74-inch AMOLED",
        processor: "Dimensity 9000+"
    },

    {
        id: 103,
        name: "OnePlus Ace Lite",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://images.news18.com/ibnlive/uploads/2022/05/oneplus-ace-racing-1-165391143016x9.jpg",
        specs: "8GB RAM | 128GB Storage",
        price: "₹24999",
        rating: 4,
        camera: "64MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.7-inch AMOLED",
        processor: "Dimensity 900"
    },

    {
        id: 104,
        name: "OnePlus Ace Racing",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://images.financialexpressdigital.com/2022/05/Untitled-2.jpg?w=1600",
        specs: "8GB RAM | 128GB Storage",
        price: "₹23999",
        rating: 4,
        camera: "64MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.59-inch LCD",
        processor: "Dimensity 8100"
    },
    //vivo mobile list 

    {
        id: 105,
        name: "Vivo X100 Pro",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/2/m/f/-original-imahgfmshhsgvehz.jpeg?q=90",
        specs: "16GB RAM | 512GB Storage",
        price: "₹89999",
        rating: 5,
        camera: "50MP + 50MP + 50MP",
        battery: "5400 mAh",
        storage: "512GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 9300"
    },
    {
        id: 106,
        name: "Vivo X100",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/r/i/i/-original-imagwyhjupspqhhp.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹69999",
        rating: 5,
        camera: "50MP + 50MP + 64MP",
        battery: "5000 mAh",
        storage: "256GB / 512GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 9300"
    },
    {
        id: 107,
        name: "Vivo X90 Pro",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/b/w/w/-original-imagpyqfsf6qtgtv.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹84999",
        rating: 5,
        camera: "50MP + 50MP + 12MP",
        battery: "4870 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 9200"
    },
    {
        id: 108,
        name: "Vivo X90",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/b/e/a/x90-v2218-vivo-original-imagzzrqmx6cpcps.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹59999",
        rating: 5,
        camera: "50MP + 12MP + 12MP",
        battery: "4810 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 9200"
    },

    // V Series
    {
        id: 109,
        name: "Vivo V30 Pro",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/8/t/d/v30-pro-5g-v2319-vivo-original-imagyzhhdeezbbfb.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹41999",
        rating: 5,
        camera: "50MP Triple Camera",
        battery: "5000 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 8200"
    },
    {
        id: 110,
        name: "Vivo V30",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/o/g/3/v30-5g-v2318-vivo-original-imagyzhhxumayhzw.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹28999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 7 Gen 3"
    },
    {
        id: 111,
        name: "Vivo V29 Pro",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/u/9/l/-original-imagtyw2cvvhz4hj.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹39999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4600 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 8200"
    },
    {
        id: 112,
        name: "Vivo V29",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/u/q/f/-original-imagtyw2vfzzwzgs.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹32999",
        rating: 4,
        camera: "50MP Camera",
        battery: "4600 mAh",
        storage: "128GB / 256GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 778G"
    },

    // T Series
    {
        id: 113,
        name: "Vivo T2 Pro",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹24999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4600 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 7200"
    },
    {
        id: 114,
        name: "Vivo T2",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/u/1/h/-original-imagpfbvfu4p55n4.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹18999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.38-inch AMOLED",
        processor: "Snapdragon 695"
    },
    {
        id: 115,
        name: "Vivo T1 Pro",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/l2p23rk0/mobile/o/v/b/-original-imagdznj6xgmgh8a.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹23999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4700 mAh",
        storage: "128GB",
        display: "6.44-inch AMOLED",
        processor: "Snapdragon 778G"
    },

    // Y Series
    {
        id: 116,
        name: "Vivo Y200",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/l/0/o/y200-5g-v2307-vivo-original-imaguhzxmrvhjhyf.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹21999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4800 mAh",
        storage: "128GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 4 Gen 1"
    },
    {
        id: 117,
        name: "Vivo Y100",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/d/v/i/y100-5g-v2222-v2239-vivo-original-imahfh94pnz5hzsh.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹19999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.38-inch AMOLED",
        processor: "Dimensity 900"
    },
    {
        id: 118,
        name: "Vivo Y78",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/z/c/j/y300-plus-5g-v2422-vivo-original-imah5jnbeuyune8j.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹18999",
        rating: 4,
        camera: "64MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.64-inch LCD",
        processor: "Dimensity 6020"
    },
    {
        id: 119,
        name: "Vivo Y56",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/t/j/z/-original-imagwcg4xkuqqsvg.jpeg?q=90",
        specs: "4GB RAM | 128GB Storage",
        price: "₹15999",
        rating: 3,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.58-inch LCD",
        processor: "Dimensity 700"
    },

    // continue till 144
    {
        id: 120,
        name: "Vivo Y36",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/e/v/z/y36-v2247-vivo-original-imagqhsry758uqu7.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹16999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.64-inch LCD",
        processor: "Snapdragon 680"
    },
    {
        id: 121,
        name: "Vivo Y22",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/b/k/v/-original-imaggfxnghmtgcnp.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹13999",
        rating: 3,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.55-inch LCD",
        processor: "Helio G85"
    },
    {
        id: 122,
        name: "Vivo Y21",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/b/q/3/-original-imahmfybe3pszkde.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹12999",
        rating: 3,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.51-inch LCD",
        processor: "Helio P35"
    },

    {
        id: 123,
        name: "Vivo X80 Pro",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/w/t/m/x80-pro-v2145-vivo-original-imah3r48qf7ctnpj.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹79999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4700 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8 Gen 1"
    },
    {
        id: 124,
        name: "Vivo X80",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/l3929ow0/mobile/k/g/q/-original-imageewzvy6d9cgb.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹59999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 9000"
    },

    {
        id: 125,
        name: "Vivo V27 Pro",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/b/f/m/-original-imagna3ezkdusyrz.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹37999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4600 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 8200"
    },
    {
        id: 126,
        name: "Vivo V27",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/a/x/s/-original-imagna3eswgyntzw.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹32999",
        rating: 4,
        camera: "50MP Camera",
        battery: "4600 mAh",
        storage: "128GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 7200"
    },

    {
        id: 127,
        name: "Vivo T1",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/u/x/h/t1-44w-v2153-v2168-vivo-original-imahfxhhhfd8xng6.jpeg?q=90",
        specs: "4GB RAM | 128GB Storage",
        price: "₹15999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.58-inch LCD",
        processor: "Snapdragon 680"
    },

    {
        id: 128,
        name: "Vivo Y75",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/p/5/j/y75-v2117-vivo-original-imah4gmvdwz4ttct.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹20999",
        rating: 4,
        camera: "50MP Camera",
        battery: "4050 mAh",
        storage: "128GB",
        display: "6.44-inch AMOLED",
        processor: "Helio G96"
    },

    {
        id: 129,
        name: "Vivo Y73",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/t/7/q/-original-imagjdmzzkzzsmhe.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹18999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4000 mAh",
        storage: "128GB",
        display: "6.44-inch AMOLED",
        processor: "Helio G95"
    },

    {
        id: 130,
        name: "Vivo Y72",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kr3tj0w0/mobile/x/q/5/y72-5g-v2060-vivo-original-imag4yngvkj7cscs.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹17999",
        rating: 4,
        camera: "64MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.58-inch LCD",
        processor: "Dimensity 700"
    },

    {
        id: 131,
        name: "Vivo Y70",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/9/c/l/-original-imahktczgdwxmxzj.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹16999",
        rating: 4,
        camera: "48MP Camera",
        battery: "4100 mAh",
        storage: "128GB",
        display: "6.44-inch AMOLED",
        processor: "Snapdragon 665"
    },

    {
        id: 132,
        name: "Vivo Y50",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kb5eikw0/mobile/g/m/b/vivo-y50-vivo-1935-original-imafska354dg5gvx.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹15999",
        rating: 4,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.53-inch LCD",
        processor: "Snapdragon 665"
    },

    {
        id: 133,
        name: "Vivo Y30",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kc0u7bk0/mobile/z/8/f/vivo-y30-vivo-1938-original-imaft8ukdzqfzekw.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹12999",
        rating: 3,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.47-inch LCD",
        processor: "Helio P35"
    },

    {
        id: 134,
        name: "Vivo Y20",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kex5ci80/mobile/h/j/z/vivo-y20-v2029-original-imafvhytjazhvumy.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹11999",
        rating: 3,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.51-inch LCD",
        processor: "Snapdragon 460"
    },

    {
        id: 135,
        name: "Vivo Y17",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/k1zbssw0pkrrdj/mobile-refurbished/3/e/g/y17-128-a-1902-vivo-4-original-imaffujbv69qfhhy.jpeg?q=90",
        specs: "4GB RAM | 128GB Storage",
        price: "₹13999",
        rating: 3,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.35-inch LCD",
        processor: "Helio P35"
    },

    {
        id: 136,
        name: "Vivo Y15",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/k2jbyq80pkrrdj/mobile-refurbished/j/y/p/y15-64-d-1901-vivo-4-original-imafh432armpbxhs.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹11999",
        rating: 3,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.35-inch LCD",
        processor: "Helio P22"
    },

    {
        id: 137,
        name: "Vivo Y12",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/k2jbyq80pkrrdj/mobile-refurbished/a/6/e/y12-32-c-1904-pd1901ef-ex-vivo-4-original-imafh4zjhqwgyqjn.jpeg?q=90",
        specs: "3GB RAM | 32GB Storage",
        price: "₹9999",
        rating: 3,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "32GB",
        display: "6.35-inch LCD",
        processor: "Helio P22"
    },

    {
        id: 138,
        name: "Vivo V25 Pro",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        specs: "12GB RAM | 256GB Storage",
        price: "₹35999",
        rating: 5,
        camera: "64MP Camera",
        battery: "4830 mAh",
        storage: "256GB",
        display: "6.56-inch AMOLED",
        processor: "Dimensity 1300"
    },

    {
        id: 139,
        name: "Vivo V23 Pro",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/5/q/j/-original-imagh4fnprjvgzzj.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹38999",
        rating: 5,
        camera: "108MP Camera",
        battery: "4300 mAh",
        storage: "256GB",
        display: "6.56-inch AMOLED",
        processor: "Dimensity 1200"
    },

    {
        id: 140,
        name: "Vivo V23",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/ky0g58w0/mobile/j/b/c/-original-imagabvqgqdhaacc.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹29999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4200 mAh",
        storage: "128GB",
        display: "6.44-inch AMOLED",
        processor: "Dimensity 920"
    },

    {
        id: 141,
        name: "Vivo V21",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/ko1smfk0/mobile/r/v/p/v21-5g-pd2083f-ex-vivo-original-imag2kzc5ahy9cfk.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹27999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4000 mAh",
        storage: "128GB",
        display: "6.44-inch AMOLED",
        processor: "Dimensity 800U"
    },

    {
        id: 142,
        name: "Vivo V20",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kfikya80/mobile/2/a/k/vivo-v20-v2025-pd2039f-in-original-imafvymfchzgyykh.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹24999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4000 mAh",
        storage: "128GB",
        display: "6.44-inch AMOLED",
        processor: "Snapdragon 720G"
    },

    {
        id: 143,
        name: "Vivo V19",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/k9stjm80/mobile/7/r/j/vivo-v19-vivo-1933-pd1969f-ex-original-imafrgnzfaq75awm.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹22999",
        rating: 4,
        camera: "48MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.44-inch AMOLED",
        processor: "Snapdragon 712"
    },

    {
        id: 144,
        name: "Vivo V17",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/k3xcdjk0pkrrdj/mobile/g/3/x/vivo-v17-vivo-1919-pd1948f-ex-original-imafmth6ybezwxpz.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹21999",
        rating: 4,
        camera: "48MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.38-inch AMOLED",
        processor: "Snapdragon 675"
    },

    //oppo mobile list 

    {
        id: 144,
        name: "Oppo Find X7 Ultra",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://www.dxomark.com/wp-content/uploads/medias/post-168145/Oppo-Find-X7-Ultra_featured-image-packshot-review.jpg",
        specs: "16GB RAM | 512GB Storage",
        price: "₹99999",
        rating: 5,
        camera: "50MP Quad Camera",
        battery: "5000 mAh",
        storage: "512GB",
        display: "6.82-inch AMOLED",
        processor: "Snapdragon 8 Gen 3"
    },
    {
        id: 145,
        name: "Oppo Find X7",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Oppo_Find_X7_Ultra.jpg",
        specs: "12GB RAM | 256GB Storage",
        price: "₹74999",
        rating: 5,
        camera: "50MP Triple Camera",
        battery: "5000 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 9300"
    },
    {
        id: 146,
        name: "Oppo Find X6 Pro",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400",
        specs: "12GB RAM | 256GB Storage",
        price: "₹89999",
        rating: 5,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "256GB",
        display: "6.82-inch AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },
    {
        id: 147,
        name: "Oppo Find X6",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://phonesdata.com/files/models/Oppo-Find-X6-Pro-569.jpg",
        specs: "12GB RAM | 256GB Storage",
        price: "₹69999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4800 mAh",
        storage: "256GB",
        display: "6.74-inch AMOLED",
        processor: "Dimensity 9200"
    },

    // Reno Series
    {
        id: 148,
        name: "Oppo Reno 11 Pro",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/t/v/2/-original-imagwxvryg2hzd9n.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹39999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4700 mAh",
        storage: "256GB",
        display: "6.74-inch AMOLED",
        processor: "Snapdragon 8+"
    },
    {
        id: 149,
        name: "Oppo Reno 11",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/g/u/d/reno-11-5g-cph2599-oppo-original-imagwxdsh2zjfpdt.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹29999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.7-inch AMOLED",
        processor: "Dimensity 7050"
    },
    {
        id: 150,
        name: "Oppo Reno 10 Pro+",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/c/d/t/-original-imagtcrvgbd2junk.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹54999",
        rating: 5,
        camera: "64MP Camera",
        battery: "4700 mAh",
        storage: "256GB",
        display: "6.74-inch AMOLED",
        processor: "Snapdragon 8+"
    },
    {
        id: 151,
        name: "Oppo Reno 10 Pro",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/3/u/w/-original-imagtcrvzrqnnxpc.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹39999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4600 mAh",
        storage: "256GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 778G"
    },
    {
        id: 152,
        name: "Oppo Reno 10",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/9/e/4/-original-imagtcrumzbqj4xd.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹32999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4600 mAh",
        storage: "128GB",
        display: "6.7-inch AMOLED",
        processor: "Dimensity 7050"
    },

    // F Series
    {
        id: 153,
        name: "Oppo F25 Pro",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/e/q/j/-original-imagybz8gbfsaevs.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹27999",
        rating: 4,
        camera: "64MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.7-inch AMOLED",
        processor: "Dimensity 7050"
    },
    {
        id: 154,
        name: "Oppo F23",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/g/n/y/f23-5g-cph2527-oppo-original-imagsnyhgztffwne.jpeg?q=90",
        specs: "8GB RAM | 256GB Storage",
        price: "₹24999",
        rating: 4,
        camera: "64MP Camera",
        battery: "5000 mAh",
        storage: "256GB",
        display: "6.72-inch LCD",
        processor: "Snapdragon 695"
    },
    {
        id: 155,
        name: "Oppo F21 Pro",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/l1zc6fk0/mobile/u/7/w/f21-pro-cph2363-oppo-original-imagdf4jphscz9jz.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹22999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.43-inch AMOLED",
        processor: "Snapdragon 680"
    },

    // A Series (budget)
    {
        id: 156,
        name: "Oppo A79",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/3/j/q/a79-5g-cph2553-oppo-original-imagunxqjdr5wtfn.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹19999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.72-inch LCD",
        processor: "Dimensity 6020"
    },
    {
        id: 157,
        name: "Oppo A78",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/i/s/p/a78-5g-cph2495-oppo-original-imagrwbz6mqddemh.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹18999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.56-inch LCD",
        processor: "Dimensity 700"
    },
    {
        id: 158,
        name: "Oppo A77",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/8/8/d/-original-imaggwj93hhpvehj.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹16999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.56-inch LCD",
        processor: "Helio G35"
    },
    {
        id: 159,
        name: "Oppo A58",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/d/j/v/-original-imags7tyxfjhvz2h.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹15999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.72-inch LCD",
        processor: "Helio G85"
    },

    // continue realistic entries till 183
    {
        id: 160,
        name: "Oppo A57",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile-panel/a/m/7/full-lyf-back-200-purplesavvy-original-imahywfva9fakybe.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹13999",
        rating: 3,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.56-inch LCD",
        processor: "Helio G35"
    },
    {
        id: 161,
        name: "Oppo A55",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile-panel/8/e/c/back-oa5ty-im-rohancafe-original-imahgdyapzmuyywm.jpeg?q=90",
        specs: "4GB RAM | 64GB Storage",
        price: "₹12999",
        rating: 3,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.51-inch LCD",
        processor: "Helio G35"
    },

    {
        id: 162,
        name: "Oppo Find N3",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/f/s/t/-original-imagu8h9bqnjsdnz.jpeg?q=90",
        specs: "16GB RAM | 512GB Storage",
        price: "₹129999",
        rating: 5,
        camera: "48MP Camera",
        battery: "4800 mAh",
        storage: "512GB",
        display: "7.82-inch Foldable AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },
    {
        id: 163,
        name: "Oppo Find N2",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/i/m/7/-original-imagndwgszztcbsb.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹119999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4520 mAh",
        storage: "256GB",
        display: "7.1-inch Foldable AMOLED",
        processor: "Snapdragon 8+ Gen 1"
    },

    {
        id: 164,
        name: "Oppo Reno 9 Pro+",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/screen-guard/front-and-back-tempered-glass/c/t/y/oppo-reno9-pro-front-back-somtone-original-imagmenfz3yzzpwb.jpeg?q=90",
        specs: "16GB RAM | 256GB Storage",
        price: "₹49999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4700 mAh",
        storage: "256GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 8+"
    },

    {
        id: 165,
        name: "Oppo Reno 9 Pro",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://m.media-amazon.com/images/I/51+f7KjVLdL._SL1000_.jpg",
        specs: "12GB RAM | 256GB Storage",
        price: "₹42999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4500 mAh",
        storage: "256GB",
        display: "6.7-inch AMOLED",
        processor: "Dimensity 8100"
    },

    {
        id: 166,
        name: "Oppo Reno 9",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://qonooz.com/wp-content/uploads/2022/12/Hd0531f417d48466cafcaeec25c57b9c4K.jpg_960x960.webp",
        specs: "8GB RAM | 128GB Storage",
        price: "₹35999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 778G"
    },

    {
        id: 167,
        name: "Oppo A3 Pro",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/h/9/x/-original-imah4d9fsyvwp7yz.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹17999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.7-inch LCD",
        processor: "Dimensity 6020"
    },

    {
        id: 168,
        name: "Oppo A2 Pro",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://cdn.beebom.com/mobile/2023/10/Untitled-design-22-356w.webp",
        specs: "8GB RAM | 128GB Storage",
        price: "₹16999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.7-inch LCD",
        processor: "Dimensity 6020"
    },

    {
        id: 169,
        name: "Oppo A1 Pro",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/h/9/x/-original-imah4d9fsyvwp7yz.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹15999",
        rating: 4,
        camera: "50MP Camera",
        battery: "4800 mAh",
        storage: "128GB",
        display: "6.7-inch AMOLED",
        processor: "Snapdragon 695"
    },

    {
        id: 170,
        name: "Oppo A96",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/l0zm64w0/mobile/a/f/6/-original-imagcnnaz48g4sjf.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹18999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.59-inch LCD",
        processor: "Snapdragon 680"
    },

    {
        id: 171,
        name: "Oppo A76",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTxmRB8wcJ1kqnY4b2BhWHaNOa_GGmk5nP8OmyUQpB_aAHLfLHKT92b2B0XssEyXgaR3eLpiHehdpnlfNA4jS8JFV45T-jxB7ZI8EAUeAD0ipqidtofOCjZKA",
        specs: "6GB RAM | 128GB Storage",
        price: "₹16999",
        rating: 4,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.56-inch LCD",
        processor: "Snapdragon 680"
    },

    {
        id: 172,
        name: "Oppo A74",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/knyxqq80/mobile/w/w/t/a74-5g-black-cph2263-oppo-original-imag2gxbyhjnt6vw.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹15999",
        rating: 4,
        camera: "48MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.43-inch AMOLED",
        processor: "Snapdragon 662"
    },

    {
        id: 173,
        name: "Oppo A54",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://m.media-amazon.com/images/I/61O5zV2kwkS._SL1500_.jpg",
        specs: "4GB RAM | 64GB Storage",
        price: "₹13999",
        rating: 3,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.51-inch LCD",
        processor: "Helio P35"
    },

    {
        id: 174,
        name: "Oppo A53",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://m.media-amazon.com/images/I/41YyRdK+npL._SY300_SX300_QL70_FMwebp_.jpg",
        specs: "4GB RAM | 64GB Storage",
        price: "₹12999",
        rating: 3,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "64GB",
        display: "6.5-inch LCD",
        processor: "Snapdragon 460"
    },

    {
        id: 175,
        name: "Oppo A33",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "data:image/jpeg;base64,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",
        specs: "3GB RAM | 32GB Storage",
        price: "₹9999",
        rating: 3,
        camera: "13MP Camera",
        battery: "5000 mAh",
        storage: "32GB",
        display: "6.5-inch LCD",
        processor: "Snapdragon 460"
    },

    {
        id: 176,
        name: "Oppo Reno 8 Pro",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/u/r/k/-original-imagge6uzzhkz4bh.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹45999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4500 mAh",
        storage: "256GB",
        display: "6.7-inch AMOLED",
        processor: "Dimensity 8100"
    },

    {
        id: 177,
        name: "Oppo Reno 8",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/y/s/b/-original-imaggg5sk9zpp8hs.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹29999",
        rating: 4,
        camera: "50MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.4-inch AMOLED",
        processor: "Dimensity 1300"
    },

    {
        id: 178,
        name: "Oppo Reno 7 Pro",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kzhbfrk0/mobile/s/z/w/-original-imagbgxfgrqpqmpy.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹39999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4500 mAh",
        storage: "256GB",
        display: "6.55-inch AMOLED",
        processor: "Dimensity 1200"
    },

    {
        id: 179,
        name: "Oppo Reno 7",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kzhbfrk0/mobile/v/m/h/-original-imagbgxfanhg6u35.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹28999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.43-inch AMOLED",
        processor: "Snapdragon 778G"
    },

    {
        id: 180,
        name: "Oppo Reno 6 Pro",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "data:image/jpeg;base64,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",
        specs: "12GB RAM | 256GB Storage",
        price: "₹38999",
        rating: 5,
        camera: "64MP Camera",
        battery: "4500 mAh",
        storage: "256GB",
        display: "6.55-inch AMOLED",
        processor: "Dimensity 1200"
    },

    {
        id: 181,
        name: "Oppo Reno 6",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kr2e3680/mobile/b/q/v/reno6-5g-cph2251-oppo-original-imag4xp73qsqrtnt.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹29999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4300 mAh",
        storage: "128GB",
        display: "6.43-inch AMOLED",
        processor: "Dimensity 900"
    },

    {
        id: 182,
        name: "Oppo Reno 5 Pro",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kjx6tu80/mobile/b/h/w/oppo-reno5-pro-5g-cph2201-original-imafze4bze2jzg4g.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹27999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4350 mAh",
        storage: "128GB",
        display: "6.55-inch AMOLED",
        processor: "Dimensity 1000+"
    },

    {
        id: 183,
        name: "Oppo Reno 5",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://www.dxomark.com/wp-content/uploads/medias/post-77084/Oppo-Reno5-Pro-Plus-featured-image-packshot-review.jpg",
        specs: "8GB RAM | 128GB Storage",
        price: "₹24999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4300 mAh",
        storage: "128GB",
        display: "6.43-inch AMOLED",
        processor: "Snapdragon 765G"
    },

    // mobile list of iqoo
    {
        id: 184,
        name: "iQOO 12",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/p/g/a/12-5g-iqoo-12-5g-iqoo-original-imagwhuqhbyzemwk.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹52999",
        rating: 5,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "256GB / 512GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8 Gen 3"
    },
    {
        id: 185,
        name: "iQOO 12 Pro",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/n/o/s/12-5g-12-5g-iqoo-original-imagwgzghftj8ddz.jpeg?q=90",
        specs: "16GB RAM | 512GB Storage",
        price: "₹64999",
        rating: 5,
        camera: "50MP Camera",
        battery: "5100 mAh",
        storage: "512GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8 Gen 3"
    },
    {
        id: 186,
        name: "iQOO Neo 9 Pro",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/i/i/p/neo9-pro-i2304-iqoo-original-imagz8ke4rza59y4.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹35999",
        rating: 5,
        camera: "50MP Camera",
        battery: "5160 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 9200+"
    },
    {
        id: 187,
        name: "iQOO Neo 9",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://cdn.beebom.com/mobile/2024/01/iQOO-Neo9-Pro-1-356w.webp",
        specs: "8GB RAM | 128GB Storage",
        price: "₹29999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },
    {
        id: 188,
        name: "iQOO Neo 7 Pro",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/6/m/e/neo-7-pro-i2217-iqoo-original-imagrhs69jx3g2sy.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹34999",
        rating: 5,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8+ Gen 1"
    },
    {
        id: 189,
        name: "iQOO Neo 7",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/p/h/q/neo-7-5g-i2214-iqoo-original-imagnaqhfvgxvkba.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹27999",
        rating: 4,
        camera: "64MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 8200"
    },
    {
        id: 190,
        name: "iQOO Z9",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/f/0/o/z9-5g-i2302-iqoo-original-imahkkp8zamdyfrg.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹19999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.67-inch AMOLED",
        processor: "Dimensity 9000"
    },
    {
        id: 191,
        name: "iQOO Z9 Pro",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/h/a/5/z9spro-5g-i2305-iqoo-original-imah4fbbt6f75yrx.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹24999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "256GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 7 Gen 3"
    },
    {
        id: 192,
        name: "iQOO Z8",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://i.gadgets360cdn.com/products/large/z8-iqoo-db-649x800-1693558091.jpg?downsize=*:180",
        specs: "8GB RAM | 128GB Storage",
        price: "₹18999",
        rating: 4,
        camera: "64MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.64-inch LCD",
        processor: "Dimensity 8200"
    },
    {
        id: 193,
        name: "iQOO Z7 Pro",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/r/u/l/z7-pro-5g-5665163-iqoo-original-imah2fwq6pgmt4hr.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹23999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4600 mAh",
        storage: "128GB",
        display: "6.78-inch AMOLED",
        processor: "Dimensity 7200"
    },

    {
        id: 194,
        name: "iQOO Z7",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/h/a/i/z7-5g-i2207-iqoo-original-imagz5ysb4wnfehk.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹17999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.38-inch AMOLED",
        processor: "Dimensity 920"
    },
    {
        id: 195,
        name: "iQOO Z6 Pro",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/o/s/r/-original-imagffa8zkhepzp9.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹16999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4700 mAh",
        storage: "128GB",
        display: "6.44-inch AMOLED",
        processor: "Snapdragon 778G"
    },
    {
        id: 196,
        name: "iQOO Z6 Lite",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/r/x/w/-original-imagg7zqqywe5hjk.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹13999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.58-inch LCD",
        processor: "Snapdragon 4 Gen 1"
    },
    {
        id: 197,
        name: "iQOO Z6",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/r/x/w/-original-imagg7zqqywe5hjk.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹14999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.58-inch LCD",
        processor: "Snapdragon 695"
    },
    {
        id: 198,
        name: "iQOO 11",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "data:image/jpeg;base64,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",
        specs: "16GB RAM | 256GB Storage",
        price: "₹59999",
        rating: 5,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8 Gen 2"
    },
    {
        id: 199,
        name: "iQOO 10 Pro",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://os-wordpress-media.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/07/19190101/iQOO-10-Pro-BMW-Legend-Edition-OnSiteGo.jpeg",
        specs: "12GB RAM | 256GB Storage",
        price: "₹69999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4700 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8 Gen 1"
    },
    {
        id: 200,
        name: "iQOO 10",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://m.media-amazon.com/images/I/61gGRaXQoGL._SL1200_.jpg",
        specs: "8GB RAM | 128GB Storage",
        price: "₹49999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4700 mAh",
        storage: "128GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8 Gen 1"
    },
    {
        id: 201,
        name: "iQOO 9 Pro",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/o/g/0/9-pro-5g-i2022-iqoo-original-imagnhhaffefy6df.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹64999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4700 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8 Gen 1"
    },
    {
        id: 202,
        name: "iQOO 9",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://m.media-amazon.com/images/I/51yBIP6Q87L._SL1200_.jpg",
        specs: "8GB RAM | 128GB Storage",
        price: "₹42999",
        rating: 5,
        camera: "48MP Camera",
        battery: "4350 mAh",
        storage: "128GB",
        display: "6.56-inch AMOLED",
        processor: "Snapdragon 888+"
    },
    {
        id: 203,
        name: "iQOO 8 Pro",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://www.4gltemall.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/v/i/vivo_iqoo_8_pro_5g_3_.jpg",
        specs: "12GB RAM | 256GB Storage",
        price: "₹59999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4500 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 888+"
    },

    {
        id: 204,
        name: "iQOO 8",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://www.gizmochina.com/wp-content/uploads/2021/08/vivo-iqoo-8-01-500x500.jpg?x10805",
        specs: "8GB RAM | 128GB Storage",
        price: "₹39999",
        rating: 4,
        camera: "48MP Camera",
        battery: "4350 mAh",
        storage: "128GB",
        display: "6.56-inch AMOLED",
        processor: "Snapdragon 888"
    },
    {
        id: 205,
        name: "iQOO 7 Legend",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/n/j/y/-original-imagg9muhhzyfaa2.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹39999",
        rating: 5,
        camera: "48MP Camera",
        battery: "4000 mAh",
        storage: "256GB",
        display: "6.62-inch AMOLED",
        processor: "Snapdragon 888"
    },
    {
        id: 206,
        name: "iQOO 7",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/n/v/f/neo-7-5g-i2214-iqoo-original-imagnaqpyd7nxfku.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹31999",
        rating: 4,
        camera: "48MP Camera",
        battery: "4000 mAh",
        storage: "128GB",
        display: "6.62-inch AMOLED",
        processor: "Snapdragon 870"
    },
    {
        id: 207,
        name: "iQOO Z5",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAPAA8AMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABZEAABAwICAwYOCRAJBQAAAAABAAIDBBEFEiExQQYHE1FhchciMjM2VHF0gbGzwcPSFHWRkpOVodHTIzQ1QkNEUlNjZHOFlLLj8BUWJCVVZYOj8SZihMLh/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAIDAQQFBv/EACoRAAICAQMDAwQCAwAAAAAAAAABAhEDBBIxEyEyBUFRIjNhsRQ0cYHw/9oADAMBAAIRAxEAPwDuKEIQALBbq901HubouHqbPkffg481s3dPF4D41nVwjfirZJt07oHOOSINY0cmUHxkrUrZjLlVvp4jLIS2Z0Lb6BBAwC3Ec+Y+HQoeihiQ++6r4KH1Fz7SXMaNLnuaxouBdxNgLnRrKURNyZn1lGx34J4Z3yiOyekYdB6KWJds1XwcPqJOiniXbNT8HD6i5xI6Nn33SnwTfRqB9XCPvmmPgl+jWUB0zoqYn2zU/Bw+ok6KmKds1HwcPqLlrsQYDYPhd3HPHjamSYg+OZ8boGlzHFpyyXBtxG2kIXc3udUO+rivbFR7yH1E0762LbKif4OH1FzeCYTR5gCDtBTiVtGHQzvr4v2zP7yH1EDfWxkmwqJveQ+oudFZbBcJOJ087GuLXySwUzXAdTwsli73rXjwlZSA3Ck3zd0dZI4UU1bVltrso8NZPl7ps1X/AOve7P8Aw3GviZvrLYqGjpsOo4qOhhbDTRCzI26h3eM8Z1narCyjNxq39e92f+G418TN9ZH9et2uzDcZ+JB662xjbp5W0K8lGnnd1u2/w3GPiQeum/193ajXh+L/ABIPXW3PcqGIyVEdDUvoo2y1TYXmGN2pzw05R7tkygL1Wa+d327XtDF/iQeumnd/u17RxX4lHrp24qtxqtp6s43DM0Me0QST04he7XmGUAaB0um20i5ss7M4ALY4kwlladGuu3xN2TeqpMTH6mb66ad8jdaNdJifxS31lk53Ko7WrLTJ+4nXfwV+iTut2UmJfFTPWSHfR3T015KilrmxgXJlwoBo7pDtSstarETCNI0FD0y+Q67+DZN7/fMot1NQMPqWMgrnAmIsJ4OawuQL6Q4C5sdguCbG3QF54r8PZhG6FmKULRE4xGrsxtgJYHscSOLMxzgRtueNehmm4B49K5ZR2ujpi7VioQhKaCEIQALz9vs9ls3O8wXoFefd9rstm53mCaHJjNSp2cJXUTdf9pj+Q3RRSUkRfNWQmfK20cN7BzuXkHFtUlB9k6L9MPEVRaI3tex8vButdjiNFxsKdCshnBZKx1VBljkAfla0tuw7W8Y/nlWJqw1kz2scXNB6UnaFmImeyIuAllgp4I+mdLIbkD8Fu09xYScgvdlvlvovxIdexhA7assylM1QbDXbxLEHatuwyWnY6JsgabxuJBO3KSP+EQ5NbpFd8IgYxo1m91GSo46k1LnH8GycStlVgvyBW4bgupPthSemWnXW47gepPthSemSvgDp6c0aUgClYLC/uIJ2OAsLJrzoTr2ChkcmSJtkb3KIlK43UbiqpCCPdYKlO9TyvVGV2lUijGQyG5UdrlOOkpzQq8CisYrEbU1jUzEar2HTDIbTSaGcnG7weNK3bGqjC7oqlslXJTx2LYsOrczuN3BjR4Le6u8xdaZzQvOtQLPl9rqzyYXoqHrTOaFx51U2deLwQ9CEKJQEIQgAXnzfa7LJuf5gvQa8+b7XZbNz/ME8OTGapSG1fSn8qPEVVpKaOpc91RUtp4I25nvIueQAbSVPCbVdMfyg8RWPDHysfwYzFgzlu0hN7isrvjjklDWl7GONmvkGjw2WPqGOjkdG7qmmxWWkkNZEylp4jJKAGhrImjQBpJIAJJOnTfurEz9ccCbkGyGCIDtWXw6ZzcSOXNohfqve3BniWNqIeBJBN9NtVtg+dZCgif7ObJE5pcWOu3M4W6Q8WlYhhmEnpJe63zq6SqWGsLGyh23L51cK2hWIStz3AdSfbCk9MtLK3Pe/6n9YUnplj4A6m0aU8FMvsSOfYJkiDYsj1We+6WR6gLuNVjEm2OLlE99gkc/aoJHp0gGSvVV5uVI83UZF1VIUaFKxqRjVPGzSsbNSFBbGx0khysYMzjxBa7VTvq6h0zxa+hrfwRsCyWLz53exoz0rDeQja7i8Hj7ix4jsmgvc2SMfWCzpPa+s8mF6Ih60zmheesQFnP8Aa+t8mF6Fh60zmhcOfzZ1YvBD0IQolAQhCABeed9eQP3X1bRrjmDD7xjv/Zehl5z30SHbtMVc3RepYPCIYwfEnhyYzVgbTQH8qPOsbBFPVTCKlY58liel2DaeQK9IbPhP5QLE8PJHDI1ji0PsH22jiW+4ovC1LHPjhlPTaHCN+vj1Ki7XZWZzCwQvpnuz5RmuQSHbbaNA4lWncXPc53VHSUMESVcjH2ym52+4FNQutXm9rcG7Xx5Db5bLbt8/D6Kjodzc1DSQQeyaEOl4JoGZway97eH3VrtPBE+KOQFweGWdlNidFkse/Az7FbC3lzZMxva3nVxVaGEw8IHHaFYKohGBW6b356X9YUnplpRK3Te/6n9YUnpljA6jsUUjlK7Uq8h0qsUcxG4qNxT3KJ2hURhG9yrvcpJDpUDtKdGManNalDFNGxNZlCRsT6iQ00F2aJX6GcnGfB41PHGAC52hoFyeIKrIx00hkeLX0Bv4I2BTvv3LQi2YwQaPnTTHbYskYVG6LkTqaNcTXsVblc7vCt8mF6Bh60zmhcFx0CIlxBIFDWkjj+phd5gcHwxuGotBHuLizP6y0OCRCEKQ4IQhAAvN++b2Y4p336Nq9ILzfvndmGKd9+janx8iyNSqs2WPICXcKywHdWGbMYS4aNIyua5Zx4Dm2cLg7DqUOTKMrXyW55TNMwxENSyFxfwUb3W6UvNw3lsq7nZiSTcnWs4Ywft5PflMMLdrn+/KNrC0Ycvc8AOeXW0AE3t3FZjqXQSlpuLG1jsV008Z15/flM9hQX0tPvihJoLRJFJwgLglKGsbG0NYLNGxI5MKIdS3Xe+NmfrCk9MtJK3TcCbRH2wpPTLGB1FzlCdJSk3TCqo5xCoJCnvcVA93GCqIBjtaZl0p2YJWvYD0101mUPjjJVyKDVoUMVTANjypqvGKSgp2yObLnebRgAE8p17POFLJJpFIQtizMueCHUtN3cp4vB4+4m8Do1LHR7oqECwjqfeN9ZSDdFRH7lU+8b6y47yt8Ho7cUY0mXDAo3Qcii/p+jOqGo96350hxuld9xqPet9ZPHq/BCfT+TAbrGZIyeOgrvJBdxovrSD9G3xLhm6usiqYzwbZG5aCuJzAfihxFdzo/rSH9G3xInd9xY17EyEISDAhCEAC83b53Zjinfno2L0ivOW+zo3bYoBoAqI7D/QjPjJVMfIsjUXFRkpzlGSnFAlNQSm3WmDroTbpVoCFMKcSmFBghW6bgj9RPthSemWlLdNwIvER/mFJ6VJI06a3ShycmuVTnIXhQubdWHBNyp7Ar8Gl9jB+tWWsU8cdzqWORqRRFEWNdIX2jYMzidYHnWqYjVSVlY+SRpZbpWRn7Ro1D+dpK32djSzgNY+25TxeD+dSxlVgsc40svxcY7i87NrduSqtHtab03fh3N1J/o05qmYrtdhM1JdwBfENoGkd1VWsXZhywyK4nDnwZMbqSJGqZoUbGqZoXWqOGVmLx3rcntfW+SC9AUf1pD+jb4lwPF2gyAEXBoqwEH9GF6AjAEbQBYACy4s/mzpw+CHIQhRKghCEAC83b6zy/dti9wNFUwf7ES9IrzXvp9m2Md+N8hEqY+RZcGqEphTiVGVQQQlNQUl1oDkt01LsWmCJpTimFADbrdd7/rf6wpPTLSSVu29/1A9sKT0qSRqOnlNKmET3Mc9rHFjbZnAGw7p2JltOrSVSyFEdkoap5KaaIAywyMB1F7CLoYxK5DqI1kd9ine4U8Wf7c6GDl4/B8ynp6d7wXNje5o1lrSbe4sa+R1VUF1i1o6UA/aji7q4tVqNkaXLPT9P0iyz3S4RNAC7SdSttAtZQRjU1gJJ0AAXJUz2yRECWN7CdWdpHjXmK6s9ybV0MmgbINXhWv4lg+VxkgblOst2HuLYw4J76d8jetSEcjCmxznCW6BHJGE47cnBogjINiLHiTw2yz+I4Y8uH1NzZHartIzLFy0VVG0ukpZ2Nbrc6JwA8Nl7Wm1KyL8ng6vS9OXynwYDGzkObXairD/thd+p3Z4I3kWzNBt4FwHdBoae8a3yYXfKP60h/Rt8SMzuRHGqjRMhCFIoCEIQALzXvrAs3bYvcWvVsI+AiXpRecN91rhuzxBzrnPO0juCKMeZUxeQsuDTHFMKcUwqoghSIKRaYKlumhLsWmASmFOOtNKAGlbtvfdSPbCl9KtIK3be96lvthS+lSS4GR2Cmhkdh1ZI2YtjZkzRgaH3OhWMOtSYdPXtaHT8IIoyRfJouT8qipaiKPDayBzrSS5MgsdNjpTsPqo4o5KepYX00ti4N1tI1EJWxYompMQq8zXVjnTUkrsj+EaMvKo4aaKTERDG/NE6Swdxt/4U1PUw00j6cOfPQv1h4sRyhUquoFE4vpnEvDvqOYaTbUSFzZcqgrOvBglkltRLi+L1Laz2Jh8hgZC63SAaLaLJ1cRVYdBXua0T5+Clc0Wz6NBR/ddU81U5mpZ5NMrGNzNJ220KGvq45WRU9Kwx08N8odrceMrzpzb3OTtPg9jHBLZGEaa5f/cliKU4fhUVRAAJ6l7hnIvlaDawT8NrZa2f2FWPM0UwI6YaWG17g+BVKWrpzTGir2v4HNnjkj6qM7fApGVVBh4dJQPlqKktLWPkblbHy2400Z8NPsZLH5Rcbk+H+u/4KhuxzmHWCQfAsnh09TPJZ1VIyCJuaR2YizeJYQPtrJKy8c+H/wBHsphVvjJOeUiEnMeLuBJidtuyupj9KVW/8WSx1TarF46iocGRtdcZjYNABt8qo4zBVVdHUmmxV1Qxl3yQEOaMt9gOsBSf2Fk8f1WWaIg57MyFvFa+tOe6kpoJxTTPnlmiMQLo8oY069esq0Mji7Zy5MUZdop/HBzDdC0npbaTRVot/phd8pgW00TSLEMAPuLhu69hhla8a/YVYT3eDC7pEbxMPG0LujkWWKkjzcuJ4puD9h6EIWkwQhCABedN+Psum53mC9Frznvx9l03O8wVcXkLI0cph1p5TDrVSY0oQQkWmCpfdSbEtk1AIU0pxTCsAaVuu9+bMB/zCl9KtKK3HcMctM48VfS+lU58DI6uyS6nYbrEwz3WQgfdTySobHCy5cNBc42aBclVGAzSGoeLbGNOwKSQcM7g/ubdL+U8SedC8fPLdI+g0mLpwv3YxyjcU9yjcuZnbFDHFRkpzlETZYWSH5k4OUGZActs1xLjXp4dcKm16la9OmTlE1nd2LMiPHR1vkwu2Q9aZzQuI7unXji7zrfJhduh6yzmhepp/tI+d1335D0IQrHICEIQALznvx9l03O8wXoxec9+Psum53mCrh8hZ8GjlMKeUwqxMahKkC1GChL4SgJUxg0pjlImHuIYEZW17kXZcPlPFW0vpVqttK2fcuf7rn79pfHKpT4Gib7ST3I0q7iGLx4Th5nNnTO6WFpOt3zDX/ysHTStYC57g1rRcknQAtYxjFHYlWmXSImDLE07G8fdP86ljgm+4b3Hg3TCt2LSGx1sAA/Dj84PzrZ6esgqo88EjXt5Ni47FJbasxhmJS0sgdG8tIXLm0MZK8fZnfp/UpRdZe6OmuUTtqx+FYsytjANmyAaR5wr7ivHnFxdSXc+gxyjOKlF2mRPKhcVK9QPKkzqihpKbnTXFROcsK7SyHp4kVISWTxImTJyiYbdo7NHH3nW+TC7nD1lnNC4NutfmYzvOs8mF3mHrTOaF6+m+0j5fX/2JD0IQrnGCEIQALznvydl03O8wXoxedN+Mf8AV03O8wVsPkJPg0chMKkckax0kjWMHTOIaBylWJMjKArT6eItk4GYvdGLuBZYEbSDfxqsFqMUkwHIEp0JQEaU6AbsTXJ9k1wQwIitm3L/AGLnH57TelWtOWfwSc02B1czQC5lXTEA6tcqjk4HjyZPHa4gew4jyykfIFhgUxz3PcXuJc5xuSdpQCssRk7HKzE+21UwVKx1k6YjM9hla+GVpa61it3oawVEIdtXNYH2IK2fA6sjpbrg9QwbodRcr9Hsej6lxy9GXEv2bU4qF5SNlzNBUcjl4TPqUqGSOUDnokeq73oLEmdHCqo6S21M4VMicilulfmYO86zyYXoGHrTOaPEvO+OPzAj8zq/JheiIetM5o8S9fT/AGkfK+of2Jf6/Q9CEK5xAhCEAC86b8XZfNzvMF6LXnXfh7L5ud5grYfISfBpBSNLmva5hIcCCCNd08hETzFNHK0AmNwcAdtjdXXJJluqbURxSE00MZdYTOjddw06iLnLc8ix9ldMlLE2Z1O+V7pm5Q17QAwEgm5v0x9xVLJ7TZijtQmxOsgBKmSMGEJhUpAOpMKGgIisxh/Y3Xd9UvjkWIKy9B2O13fVN45Fz5OCkSAHQlTUt0og8FSNKhCkaU6MZaidpWYwqbJK1YOM6VkaN3TtKJrdFpm4pOGSMl7M3WCbRa+pOfIsXBNpOlTulvtXy+0++lLuSSScqqyScqbJKqskq3aG4kfKojKq8kqhdKqRgJKYmIvzl3eVX5ML0jD1lnNHiXmWofmfJ3lVeTXpqHrTOaPEvTwdsaPmNe71DHoQhVOQEIQgAXnXfh7L5ed5gvRS8778HZdLzvMFbD5CT4NKciDgxURGcXiD2mQDa2+n5EpCRpDXNcWhwBBLTqPJoViRkqrh+CqH1EsFnizJYntcZW3FmNAPStGknQNgWKAVls8QpzGaKAvLbcMS/MDx9Va/gUAC2CaNk7EA/wDqWycBtQArImMKYRoUltCYQhgROWVotG56u75pvHIsY4LJ0mjc9Xd803jkXPl4KRK6EiEhg4FPaVGE4JkKyePWslR9UFjY1k6Kw6Y7FmSW2DZTT49+WMfyZaOSxUpm0LGtl5U/heVeFsPsnkLT5lVklUT5VA+RaoC9Qe+RQukUT3qFz1SMCcshNnvJN3jVeTXqKHrTOaF5Whdmmn7wqv3F6ph60zmhdsFUTwtW7ytj0IQmOYEIQgAXnfffH/WEvO8wXoheeN9/swm53mCtg8hJ8GmEJhUhTbK5IbZLZLtS20p0YwA91CcBosi2u1k6EGW5EwhSkJjghgQu1rI0v2Are+ab0ioOGlX6cgYDW37apvHIoZeCsOSshIhTMFT2po0qWNt0yMJoW6Qrt+DYG7So4WiNuZ6idIXOLiuXUT3fSj19Dg2fXItNkTjJyqnwiOEXLtPScyw6RQvkULpFE5/Kt2i7yR7+VQuemOeonOTqJOUy3RuvPUd4VX7i9Xw9aZzQvJeHOvPUj8wqf3F60h60zmhVXB5ed3kY9CELSIIQhAAuDb9GHyQbpRUkHg5w17Ts6kAj3Wld5WI3S7nqDdHQGlr2XtpY9vVMPzatHIDrAIeEtrsyStHl93ImrptfvM4k2b+wV1O+L/vldGR3Gljv3lW6DmOdt047lR/DVlliS2M53ZKNC6J0HMb7cp/2j+Gl6DuOA/XVOf8AyP4aZZombJHPNiUiwXQug9jnbUH7R/DR0H8c7ap/h/4adZ4GdORzsi/hTHALo/Qexvtmn+H/AIaQ7zmNn76p/hz9GjrwDpyOauCfwv8AdFfTg2e4MlZp1ljr/uucfAujdBrGu26f9o/hobvNY0Df2VT/ALQfo1LJkjJUh4xaZy2HEIXgcKcjtui4Uvsym/HN+VdHdvMYy954SDCnt2PZWSRuI5QIyPcSjeQxE6mUI7uIyfQqO9jbEc7ZWUm2oYPdVuPEMPjFzVRk8Wn5lvXQPxHioPjCX6FJ0D8R4sP+MJfoUSk2qHx1B3Vmhy4pSyH64Zbi0qP+kaTthnyroHQOxL8w+MJPoUdA7Ev8v+MJPoVLYjr/AJk/hHP/AOkaTthnypDiFJ+PZ8q6D0DsS46D4wk+hSdA7EuPD/jCT6FG1Gfy5/Bzx2IUv49nypjq6mP3dvyro3QNxPjoP2+T6FId43E9hw/9vk+hRtM/lT+Dmzqyn/HN+VRvrYB90v3AumdA3FOPD/2+T6FDd47FQ4fYzLtJrpTbwCEX90JqFeokzQ9yEcuLY4KaFhJqQ2lY3b07hc+BoefAvXAFhbiWj7gd7eg3JyGtlkbVYgQQ2QR5WRA68guTcjQXE37i3lBFu+4IQhBh/9k=",
        specs: "8GB RAM | 128GB Storage",
        price: "₹23999",
        rating: 4,
        camera: "64MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.67-inch LCD",
        processor: "Snapdragon 778G"
    },
    {
        id: 208,
        name: "iQOO Z3",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/j/a/u/-original-imagg8rtw9gzezyy.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹19999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4400 mAh",
        storage: "128GB",
        display: "6.58-inch LCD",
        processor: "Snapdragon 768G"
    },
    {
        id: 209,
        name: "iQOO Z1x",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://cdn1.smartprix.com/rx-if6Zj5awj-w420-h420/iqoo-z1x.webp",
        specs: "6GB RAM | 128GB Storage",
        price: "₹17999",
        rating: 4,
        camera: "48MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.57-inch LCD",
        processor: "Snapdragon 765G"
    },
    {
        id: 210,
        name: "iQOO Z1",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://s3bg.cashify.in/gpro/uploads/2021/03/31093410/iqoo-z1-front.png?w=320",
        specs: "8GB RAM | 128GB Storage",
        price: "₹24999",
        rating: 4,
        camera: "48MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.57-inch LCD",
        processor: "Dimensity 1000+"
    },

    {
        id: 211,
        name: "iQOO U6",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://www.mobile57.com//assets/images/product_images/webp/vivo-iqoo-u5_1.webp",
        specs: "6GB RAM | 128GB Storage",
        price: "₹14999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.5-inch LCD",
        processor: "Snapdragon 680"
    },
    {
        id: 212,
        name: "iQOO U5",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://cdn.beebom.com/mobile/iqoo-u5-front-back-356w.webp",
        specs: "6GB RAM | 128GB Storage",
        price: "₹13999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.58-inch LCD",
        processor: "Snapdragon 695"
    },
    {
        id: 213,
        name: "iQOO U3",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://www.phonebunch.com/vivo_iqoo_u3-images-4113/",
        specs: "6GB RAM | 128GB Storage",
        price: "₹12999",
        rating: 4,
        camera: "48MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.58-inch LCD",
        processor: "Dimensity 800U"
    },
    {
        id: 214,
        name: "iQOO Z9 Lite",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/i/q/f/z9-lite-5g-i2306-iqoo-original-imah3fmp8rxcxfhp.jpeg?q=90",
        specs: "6GB RAM | 128GB Storage",
        price: "₹15999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.6-inch LCD",
        processor: "Dimensity 6100+"
    },
    {
        id: 215,
        name: "iQOO Neo 6",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/e/4/s/-original-imagg59j6pwjzgnf.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹29999",
        rating: 4,
        camera: "64MP Camera",
        battery: "4700 mAh",
        storage: "128GB",
        display: "6.62-inch AMOLED",
        processor: "Snapdragon 870"
    },
    {
        id: 216,
        name: "iQOO Neo 5",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://www.gizmochina.com/wp-content/uploads/2021/05/cats-13-500x500.jpg?x10805",
        specs: "8GB RAM | 128GB Storage",
        price: "₹27999",
        rating: 4,
        camera: "48MP Camera",
        battery: "4400 mAh",
        storage: "128GB",
        display: "6.62-inch AMOLED",
        processor: "Snapdragon 870"
    },
    {
        id: 217,
        name: "iQOO Neo 3",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/kjvrdzk0/mobile/k/k/r/iqoo-3-i1927-original-imafzcqszgwhrgvr.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹25999",
        rating: 4,
        camera: "48MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.57-inch LCD",
        processor: "Snapdragon 865"
    },
    {
        id: 218,
        name: "iQOO 5 Pro",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://www.notebookcheck.net/uploads/tx_nbc2/VivoiQOO5Pro.JPG",
        specs: "12GB RAM | 256GB Storage",
        price: "₹59999",
        rating: 5,
        camera: "50MP Camera",
        battery: "4000 mAh",
        storage: "256GB",
        display: "6.56-inch AMOLED",
        processor: "Snapdragon 865"
    },
    {
        id: 219,
        name: "iQOO 5",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://www.corning.com/microsites/csm/gorillaglass/vivo/CGG_vivo-iQOO-5-5G.jpg",
        specs: "8GB RAM | 128GB Storage",
        price: "₹39999",
        rating: 4,
        camera: "48MP Camera",
        battery: "4500 mAh",
        storage: "128GB",
        display: "6.56-inch AMOLED",
        processor: "Snapdragon 865"
    },
    {
        id: 220,
        name: "iQOO 3",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/k7assy80/mobile/5/y/n/iqoo-3-5g-i1928-original-imafpkhufxg7vzdj.jpeg?q=90",
        specs: "8GB RAM | 128GB Storage",
        price: "₹36999",
        rating: 4,
        camera: "48MP Camera",
        battery: "4440 mAh",
        storage: "128GB",
        display: "6.44-inch AMOLED",
        processor: "Snapdragon 865"
    },

    {
        id: 221,
        name: "iQOO U1",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://imgk.timesnownews.com/story/Untitled_design_44_5.png?tr=w-600,h-450,fo-auto",
        specs: "4GB RAM | 64GB Storage",
        price: "₹9999",
        rating: 3,
        camera: "48MP Camera",
        battery: "4500 mAh",
        storage: "64GB",
        display: "6.53-inch LCD",
        processor: "Snapdragon 720G"
    },
    {
        id: 222,
        name: "iQOO Z2x",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "data:image/jpeg;base64,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",
        specs: "6GB RAM | 128GB Storage",
        price: "₹12999",
        rating: 4,
        camera: "50MP Camera",
        battery: "5000 mAh",
        storage: "128GB",
        display: "6.58-inch LCD",
        processor: "Dimensity 6020"
    },
    {
        id: 223,
        name: "iQOO Z9 Turbo",
        brand: "iqoo",
        brandDisplay: "iQOO",
        image: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/mobile/f/f/f/z9-5g-i2302-iqoo-original-imah2yd7thc6jcg2.jpeg?q=90",
        specs: "12GB RAM | 256GB Storage",
        price: "₹32999",
        rating: 5,
        camera: "50MP Camera",
        battery: "6000 mAh",
        storage: "256GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 8s Gen 3"
    }

]

// Accessories Data
const accessories = [{
        id: 1,
        name: "Apple 20W USB-C Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1999",
        brand: "Apple"
    },
    {
        id: 2,
        name: "Apple 30W Fast Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹3999",
        brand: "Apple"
    },
    {
        id: 3,
        name: "Samsung 25W Super Fast Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1499",
        brand: "Samsung"
    },
    {
        id: 4,
        name: "Samsung 45W Fast Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2999",
        brand: "Samsung"
    },
    {
        id: 5,
        name: "OnePlus 80W SUPERVOOC Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2499",
        brand: "OnePlus"
    },
    {
        id: 6,
        name: "OnePlus 100W SUPERVOOC Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹3499",
        brand: "OnePlus"
    },
    {
        id: 7,
        name: "Xiaomi 67W Turbo Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1999",
        brand: "Xiaomi"
    },
    {
        id: 8,
        name: "Xiaomi 120W HyperCharge Adapter",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹3999",
        brand: "Xiaomi"
    },
    {
        id: 9,
        name: "Vivo 44W Flash Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1799",
        brand: "Vivo"
    },
    {
        id: 10,
        name: "Vivo 80W Fast Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2999",
        brand: "Vivo"
    },

    {
        id: 11,
        name: "Oppo 65W SUPERVOOC Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2499",
        brand: "Oppo"
    },
    {
        id: 12,
        name: "Oppo 80W SUPERVOOC Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹3299",
        brand: "Oppo"
    },
    {
        id: 13,
        name: "Realme 67W Fast Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1799",
        brand: "Realme"
    },
    {
        id: 14,
        name: "Realme 100W SUPERDART Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2999",
        brand: "Realme"
    },
    {
        id: 15,
        name: "Motorola 30W Turbo Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1499",
        brand: "Motorola"
    },
    {
        id: 16,
        name: "Motorola 68W Fast Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2499",
        brand: "Motorola"
    },
    {
        id: 17,
        name: "Google Pixel 30W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2999",
        brand: "Google"
    },
    {
        id: 18,
        name: "Google Pixel 45W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹3999",
        brand: "Google"
    },
    {
        id: 19,
        name: "Sony 30W USB-C Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2799",
        brand: "Sony"
    },
    {
        id: 20,
        name: "Sony Fast Charging Adapter 45W",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹3499",
        brand: "Sony"
    },

    {
        id: 21,
        name: "Anker Nano 20W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1499",
        brand: "Anker"
    },
    {
        id: 22,
        name: "Anker 65W GaN Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹4999",
        brand: "Anker"
    },
    {
        id: 23,
        name: "Belkin 25W USB-C Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1999",
        brand: "Belkin"
    },
    {
        id: 24,
        name: "Belkin BoostCharge 65W",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹4599",
        brand: "Belkin"
    },
    {
        id: 25,
        name: "Boat 18W Fast Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹799",
        brand: "boAt"
    },
    {
        id: 26,
        name: "Boat 30W Fast Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1299",
        brand: "boAt"
    },
    {
        id: 27,
        name: "Portronics 20W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹699",
        brand: "Portronics"
    },
    {
        id: 28,
        name: "Portronics 65W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1999",
        brand: "Portronics"
    },
    {
        id: 29,
        name: "Ambrane 20W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹599",
        brand: "Ambrane"
    },
    {
        id: 30,
        name: "Ambrane 65W Fast Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1999",
        brand: "Ambrane"
    },

    {
        id: 31,
        name: "Spigen 30W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2499",
        brand: "Spigen"
    },
    {
        id: 32,
        name: "Spigen 65W GaN Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹4999",
        brand: "Spigen"
    },
    {
        id: 33,
        name: "Stuffcool 20W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹999",
        brand: "Stuffcool"
    },
    {
        id: 34,
        name: "Stuffcool 65W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2499",
        brand: "Stuffcool"
    },
    {
        id: 35,
        name: "Syska 18W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹699",
        brand: "Syska"
    },
    {
        id: 36,
        name: "Syska 45W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1499",
        brand: "Syska"
    },
    {
        id: 37,
        name: "Mi 33W SonicCharge",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1299",
        brand: "Xiaomi"
    },
    {
        id: 38,
        name: "Mi 67W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1999",
        brand: "Xiaomi"
    },
    {
        id: 39,
        name: "Realme 30W Dart Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1299",
        brand: "Realme"
    },
    {
        id: 40,
        name: "Realme 65W Dart Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1999",
        brand: "Realme"
    },

    {
        id: 41,
        name: "Huawei 40W SuperCharge",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2499",
        brand: "Huawei"
    },
    {
        id: 42,
        name: "Huawei 66W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2999",
        brand: "Huawei"
    },
    {
        id: 43,
        name: "Nothing 45W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2999",
        brand: "Nothing"
    },
    {
        id: 44,
        name: "Nothing 65W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹3999",
        brand: "Nothing"
    },
    {
        id: 45,
        name: "Infinix 45W Fast Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1499",
        brand: "Infinix"
    },
    {
        id: 46,
        name: "Infinix 68W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1999",
        brand: "Infinix"
    },
    {
        id: 47,
        name: "Lava 33W Fast Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹999",
        brand: "Lava"
    },
    {
        id: 48,
        name: "Lava 65W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹1999",
        brand: "Lava"
    },
    {
        id: 49,
        name: "Asus 65W Fast Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹2499",
        brand: "Asus"
    },
    {
        id: 50,
        name: "Apple AirPods Pro (2nd Gen)",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹24999",
        brand: "Apple"
    },
    {
        id: 51,
        name: "Apple AirPods (3rd Gen)",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹19999",
        brand: "Apple"
    },
    {
        id: 52,
        name: "Samsung Galaxy Buds2 Pro",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹17999",
        brand: "Samsung"
    },
    {
        id: 53,
        name: "Samsung Galaxy Buds FE",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹7999",
        brand: "Samsung"
    },
    {
        id: 54,
        name: "OnePlus Buds Pro 2",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹11999",
        brand: "OnePlus"
    },
    {
        id: 55,
        name: "OnePlus Nord Buds 2",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹2999",
        brand: "OnePlus"
    },
    {
        id: 56,
        name: "Xiaomi Buds 4 Pro",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹9999",
        brand: "Xiaomi"
    },
    {
        id: 57,
        name: "Redmi Buds 4 Active",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1499",
        brand: "Xiaomi"
    },
    {
        id: 58,
        name: "Vivo TWS 3 Pro",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹9999",
        brand: "Vivo"
    },
    {
        id: 59,
        name: "Vivo Wireless Sport Earphones",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹2999",
        brand: "Vivo"
    },

    {
        id: 60,
        name: "Oppo Enco X2",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹10999",
        brand: "Oppo"
    },
    {
        id: 61,
        name: "Oppo Enco Buds2",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1999",
        brand: "Oppo"
    },
    {
        id: 62,
        name: "Realme Buds Air 5 Pro",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹4999",
        brand: "Realme"
    },
    {
        id: 63,
        name: "Realme Buds T300",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹2499",
        brand: "Realme"
    },
    {
        id: 64,
        name: "Boat Airdopes 141",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1299",
        brand: "boAt"
    },
    {
        id: 65,
        name: "Boat Rockerz 255 Pro+",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1499",
        brand: "boAt"
    },
    {
        id: 66,
        name: "Noise Buds VS104",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1299",
        brand: "Noise"
    },
    {
        id: 67,
        name: "Noise Air Buds Pro 3",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹2499",
        brand: "Noise"
    },
    {
        id: 68,
        name: "JBL Tune 230NC",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹5999",
        brand: "JBL"
    },
    {
        id: 69,
        name: "JBL Wave Buds",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹2999",
        brand: "JBL"
    },

    {
        id: 70,
        name: "Sony WF-1000XM5",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹24990",
        brand: "Sony"
    },
    {
        id: 71,
        name: "Sony WI-C100 Neckband",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1799",
        brand: "Sony"
    },
    {
        id: 72,
        name: "Anker Soundcore Liberty 4",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹8999",
        brand: "Anker"
    },
    {
        id: 73,
        name: "Anker Soundcore R50i",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1999",
        brand: "Anker"
    },
    {
        id: 74,
        name: "Boult Z40 Pro",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1499",
        brand: "Boult"
    },
    {
        id: 75,
        name: "Boult Audio Curve Max",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1299",
        brand: "Boult"
    },
    {
        id: 76,
        name: "Portronics Harmonics Twins S5",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1499",
        brand: "Portronics"
    },
    {
        id: 77,
        name: "Portronics Harmonics Z2",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹999",
        brand: "Portronics"
    },
    {
        id: 78,
        name: "Ambrane Dots Slay",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1299",
        brand: "Ambrane"
    },
    {
        id: 79,
        name: "Ambrane Neckband Pro",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹899",
        brand: "Ambrane"
    },

    {
        id: 80,
        name: "Spigen A350 Earbuds",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹2999",
        brand: "Spigen"
    },
    {
        id: 81,
        name: "Spigen Neckband Earphones",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1999",
        brand: "Spigen"
    },
    {
        id: 82,
        name: "Boat Airdopes 181",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1499",
        brand: "boAt"
    },
    {
        id: 83,
        name: "Boat Rockerz 255 Neo",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1299",
        brand: "boAt"
    },
    {
        id: 84,
        name: "Noise Buds X Prime",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1799",
        brand: "Noise"
    },
    {
        id: 85,
        name: "Noise Neckband N1",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹999",
        brand: "Noise"
    },
    {
        id: 86,
        name: "JBL Endurance Run BT",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1999",
        brand: "JBL"
    },
    {
        id: 87,
        name: "JBL C100SI Wired Earphones",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹699",
        brand: "JBL"
    },
    {
        id: 88,
        name: "Sony MDR-EX155AP",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹999",
        brand: "Sony"
    },
    {
        id: 89,
        name: "Sony WI-XB400 Neckband",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹2499",
        brand: "Sony"
    },

    {
        id: 90,
        name: "Anker Soundcore Life P2",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹3999",
        brand: "Anker"
    },
    {
        id: 91,
        name: "Boult AirBass Z35",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1499",
        brand: "Boult"
    },
    {
        id: 92,
        name: "Portronics Twins S3",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1299",
        brand: "Portronics"
    },
    {
        id: 93,
        name: "Ambrane Dots Tune",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹999",
        brand: "Ambrane"
    },
    {
        id: 94,
        name: "Spigen Wired Earphones",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹799",
        brand: "Spigen"
    },
    {
        id: 95,
        name: "Boat BassHeads 225",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹599",
        brand: "boAt"
    },
    {
        id: 96,
        name: "Noise Buds VS102",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1299",
        brand: "Noise"
    },
    {
        id: 97,
        name: "JBL Tune 110 Wired",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹699",
        brand: "JBL"
    },
    {
        id: 98,
        name: "Sony WF-C500",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹4990",
        brand: "Sony"
    },
    {
        id: 99,
        name: "Realme Buds Wireless 3",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        price: "₹1799",
        brand: "Realme"
    },
    {
        id: 100,
        name: "Mi Power Bank 10000mAh",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹999",
        brand: "Xiaomi"
    },
    {
        id: 101,
        name: "Mi Power Bank 20000mAh",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1799",
        brand: "Xiaomi"
    },
    {
        id: 102,
        name: "Redmi Power Bank 10000mAh",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹899",
        brand: "Xiaomi"
    },
    {
        id: 103,
        name: "Redmi Power Bank 20000mAh",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1599",
        brand: "Xiaomi"
    },

    {
        id: 104,
        name: "Realme Power Bank 10000mAh",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹899",
        brand: "Realme"
    },
    {
        id: 105,
        name: "Realme Power Bank 20000mAh",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1499",
        brand: "Realme"
    },

    {
        id: 106,
        name: "Samsung 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1499",
        brand: "Samsung"
    },
    {
        id: 107,
        name: "Samsung 20000mAh Fast Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹2499",
        brand: "Samsung"
    },

    {
        id: 108,
        name: "OnePlus 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1599",
        brand: "OnePlus"
    },
    {
        id: 109,
        name: "OnePlus 20000mAh Fast Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹2999",
        brand: "OnePlus"
    },

    {
        id: 110,
        name: "Oppo 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1299",
        brand: "Oppo"
    },
    {
        id: 111,
        name: "Oppo 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1999",
        brand: "Oppo"
    },

    {
        id: 112,
        name: "Vivo 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1199",
        brand: "Vivo"
    },
    {
        id: 113,
        name: "Vivo 20000mAh Fast Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1999",
        brand: "Vivo"
    },

    {
        id: 114,
        name: "Ambrane 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹799",
        brand: "Ambrane"
    },
    {
        id: 115,
        name: "Ambrane 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1499",
        brand: "Ambrane"
    },

    {
        id: 116,
        name: "Boat 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹999",
        brand: "boAt"
    },
    {
        id: 117,
        name: "Boat 20000mAh Fast Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1799",
        brand: "boAt"
    },

    {
        id: 118,
        name: "Portronics 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹899",
        brand: "Portronics"
    },
    {
        id: 119,
        name: "Portronics 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1699",
        brand: "Portronics"
    },

    {
        id: 120,
        name: "Anker PowerCore 10000",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹2499",
        brand: "Anker"
    },
    {
        id: 121,
        name: "Anker PowerCore 20000",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹3999",
        brand: "Anker"
    },

    {
        id: 122,
        name: "Belkin 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1999",
        brand: "Belkin"
    },
    {
        id: 123,
        name: "Belkin 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹3499",
        brand: "Belkin"
    },

    {
        id: 124,
        name: "Syska 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹899",
        brand: "Syska"
    },
    {
        id: 125,
        name: "Syska 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1599",
        brand: "Syska"
    },

    {
        id: 126,
        name: "Spigen 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1999",
        brand: "Spigen"
    },
    {
        id: 127,
        name: "Spigen 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹2999",
        brand: "Spigen"
    },

    {
        id: 128,
        name: "Stuffcool 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1299",
        brand: "Stuffcool"
    },
    {
        id: 129,
        name: "Stuffcool 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹2499",
        brand: "Stuffcool"
    },

    {
        id: 130,
        name: "Infinix 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹799",
        brand: "Infinix"
    },
    {
        id: 131,
        name: "Infinix 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1499",
        brand: "Infinix"
    },

    {
        id: 132,
        name: "Lava 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹699",
        brand: "Lava"
    },
    {
        id: 133,
        name: "Lava 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1399",
        brand: "Lava"
    },

    {
        id: 134,
        name: "Asus 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1499",
        brand: "Asus"
    },
    {
        id: 135,
        name: "Asus 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹2499",
        brand: "Asus"
    },

    {
        id: 136,
        name: "Huawei 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1799",
        brand: "Huawei"
    },
    {
        id: 137,
        name: "Huawei 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹2999",
        brand: "Huawei"
    },

    {
        id: 138,
        name: "Nothing 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1999",
        brand: "Nothing"
    },
    {
        id: 139,
        name: "Nothing 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹2999",
        brand: "Nothing"
    },

    {
        id: 140,
        name: "Lenovo 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹999",
        brand: "Lenovo"
    },
    {
        id: 141,
        name: "Lenovo 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1799",
        brand: "Lenovo"
    },

    {
        id: 142,
        name: "HP 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1299",
        brand: "HP"
    },
    {
        id: 143,
        name: "HP 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1999",
        brand: "HP"
    },

    {
        id: 144,
        name: "Dell 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1499",
        brand: "Dell"
    },
    {
        id: 145,
        name: "Dell 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹2499",
        brand: "Dell"
    },

    {
        id: 146,
        name: "Zebronics 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹799",
        brand: "Zebronics"
    },
    {
        id: 147,
        name: "Zebronics 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1499",
        brand: "Zebronics"
    },

    {
        id: 148,
        name: "Philips 10000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1299",
        brand: "Philips"
    },
    {
        id: 149,
        name: "Philips 20000mAh Power Bank",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
        price: "₹1999",
        brand: "Philips"
    },
    {
        id: 150,
        name: "Asus 100W Charger",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
        price: "₹3499",
        brand: "Asus"
    },
    {
        id: 151,
        name: "Apple Silicone Case for iPhone 15",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹4999",
        brand: "Apple"
    },
    {
        id: 152,
        name: "Apple Clear Case for iPhone 15 Pro",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹4999",
        brand: "Apple"
    },
    {
        id: 153,
        name: "Samsung Rugged Case for Galaxy S24",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹1999",
        brand: "Samsung"
    },
    {
        id: 154,
        name: "Samsung Silicone Cover S24 Ultra",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹1499",
        brand: "Samsung"
    },
    {
        id: 155,
        name: "OnePlus Sandstone Case 12",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹1299",
        brand: "OnePlus"
    },
    {
        id: 156,
        name: "OnePlus Karbon Bumper Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹1999",
        brand: "OnePlus"
    },
    {
        id: 157,
        name: "Xiaomi Hard Case for Xiaomi 14",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹999",
        brand: "Xiaomi"
    },
    {
        id: 158,
        name: "Redmi Silicone Cover Note 13",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹799",
        brand: "Xiaomi"
    },
    {
        id: 159,
        name: "Vivo Transparent Case V30",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹699",
        brand: "Vivo"
    },
    {
        id: 160,
        name: "Vivo Shockproof Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹999",
        brand: "Vivo"
    },

    {
        id: 161,
        name: "Oppo Slim Fit Case Reno 11",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹899",
        brand: "Oppo"
    },
    {
        id: 162,
        name: "Oppo Matte Finish Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹799",
        brand: "Oppo"
    },
    {
        id: 163,
        name: "Realme Protective Case Narzo",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹699",
        brand: "Realme"
    },
    {
        id: 164,
        name: "Realme Silicone Case GT Series",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹899",
        brand: "Realme"
    },
    {
        id: 165,
        name: "Boat Designer Back Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹499",
        brand: "boAt"
    },
    {
        id: 166,
        name: "Boat Hard Shell Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹599",
        brand: "boAt"
    },
    {
        id: 167,
        name: "Noise Silicone Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹499",
        brand: "Noise"
    },
    {
        id: 168,
        name: "Noise Transparent Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹399",
        brand: "Noise"
    },
    {
        id: 169,
        name: "JBL Rugged Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹999",
        brand: "JBL"
    },
    {
        id: 170,
        name: "JBL Shockproof Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹899",
        brand: "JBL"
    },

    {
        id: 171,
        name: "Sony Protective Case Xperia",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹1499",
        brand: "Sony"
    },
    {
        id: 172,
        name: "Sony Clear Back Cover",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹1299",
        brand: "Sony"
    },
    {
        id: 173,
        name: "Anker Slim Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹799",
        brand: "Anker"
    },
    {
        id: 174,
        name: "Anker Rugged Armor Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹999",
        brand: "Anker"
    },
    {
        id: 175,
        name: "Boult Transparent Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹499",
        brand: "Boult"
    },
    {
        id: 176,
        name: "Boult Shockproof Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹699",
        brand: "Boult"
    },
    {
        id: 177,
        name: "Portronics Matte Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹499",
        brand: "Portronics"
    },
    {
        id: 178,
        name: "Portronics Designer Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹599",
        brand: "Portronics"
    },
    {
        id: 179,
        name: "Ambrane Soft Silicone Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹399",
        brand: "Ambrane"
    },
    {
        id: 180,
        name: "Ambrane Shockproof Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹599",
        brand: "Ambrane"
    },

    {
        id: 181,
        name: "Spigen Tough Armor Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹1999",
        brand: "Spigen"
    },
    {
        id: 182,
        name: "Spigen Liquid Air Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹1499",
        brand: "Spigen"
    },
    {
        id: 183,
        name: "Stuffcool Designer Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹699",
        brand: "Stuffcool"
    },
    {
        id: 184,
        name: "Stuffcool Transparent Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹599",
        brand: "Stuffcool"
    },
    {
        id: 185,
        name: "Infinix Back Cover Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹399",
        brand: "Infinix"
    },
    {
        id: 186,
        name: "Infinix Shockproof Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹499",
        brand: "Infinix"
    },
    {
        id: 187,
        name: "Lava Slim Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹299",
        brand: "Lava"
    },
    {
        id: 188,
        name: "Lava Transparent Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹399",
        brand: "Lava"
    },
    {
        id: 189,
        name: "Asus Rugged Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹999",
        brand: "Asus"
    },
    {
        id: 190,
        name: "Asus Slim Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹799",
        brand: "Asus"
    },

    {
        id: 191,
        name: "Huawei Protective Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹1299",
        brand: "Huawei"
    },
    {
        id: 192,
        name: "Huawei Clear Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹999",
        brand: "Huawei"
    },
    {
        id: 193,
        name: "Nothing Transparent Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹1499",
        brand: "Nothing"
    },
    {
        id: 194,
        name: "Nothing Bumper Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹1999",
        brand: "Nothing"
    },
    {
        id: 195,
        name: "Lenovo Hard Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹699",
        brand: "Lenovo"
    },
    {
        id: 196,
        name: "Lenovo Shockproof Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹899",
        brand: "Lenovo"
    },
    {
        id: 197,
        name: "HP Slim Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹799",
        brand: "HP"
    },
    {
        id: 198,
        name: "HP Rugged Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹999",
        brand: "HP"
    },
    {
        id: 199,
        name: "Dell Transparent Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹899",
        brand: "Dell"
    },
    {
        id: 200,
        name: "Dell Shockproof Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
        price: "₹999",
        brand: "Dell"
    },
    {
        id: 201,
        name: "Apple iPhone 15 Tempered Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹999",
        brand: "Apple"
    },
    {
        id: 202,
        name: "Apple iPhone 15 Pro Privacy Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹1499",
        brand: "Apple"
    },
    {
        id: 203,
        name: "Samsung Galaxy S24 Tempered Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹799",
        brand: "Samsung"
    },
    {
        id: 204,
        name: "Samsung S24 Ultra UV Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹1299",
        brand: "Samsung"
    },
    {
        id: 205,
        name: "OnePlus 12 Tempered Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹699",
        brand: "OnePlus"
    },
    {
        id: 206,
        name: "OnePlus Nord Privacy Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹999",
        brand: "OnePlus"
    },
    {
        id: 207,
        name: "Xiaomi 14 Screen Protector",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹599",
        brand: "Xiaomi"
    },
    {
        id: 208,
        name: "Redmi Note 13 Pro Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹499",
        brand: "Xiaomi"
    },
    {
        id: 209,
        name: "Vivo V30 Tempered Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹599",
        brand: "Vivo"
    },
    {
        id: 210,
        name: "Vivo Privacy Screen Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹799",
        brand: "Vivo"
    },

    {
        id: 211,
        name: "Oppo Reno 11 Tempered Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹599",
        brand: "Oppo"
    },
    {
        id: 212,
        name: "Oppo Matte Screen Protector",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹699",
        brand: "Oppo"
    },
    {
        id: 213,
        name: "Realme Narzo Glass Protector",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹499",
        brand: "Realme"
    },
    {
        id: 214,
        name: "Realme GT Series Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹699",
        brand: "Realme"
    },
    {
        id: 215,
        name: "Boat Screen Guard Universal",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹399",
        brand: "boAt"
    },
    {
        id: 216,
        name: "Boat Privacy Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹499",
        brand: "boAt"
    },
    {
        id: 217,
        name: "Noise Tempered Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹399",
        brand: "Noise"
    },
    {
        id: 218,
        name: "Noise Anti-Glare Screen Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹499",
        brand: "Noise"
    },
    {
        id: 219,
        name: "JBL Screen Protector",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹699",
        brand: "JBL"
    },
    {
        id: 220,
        name: "JBL Privacy Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹799",
        brand: "JBL"
    },

    {
        id: 221,
        name: "Sony Xperia Tempered Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹999",
        brand: "Sony"
    },
    {
        id: 222,
        name: "Sony Anti-Blue Light Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹1299",
        brand: "Sony"
    },
    {
        id: 223,
        name: "Anker Screen Protector",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹799",
        brand: "Anker"
    },
    {
        id: 224,
        name: "Anker Privacy Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹999",
        brand: "Anker"
    },
    {
        id: 225,
        name: "Boult Screen Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹399",
        brand: "Boult"
    },
    {
        id: 226,
        name: "Boult Anti-Glare Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹499",
        brand: "Boult"
    },
    {
        id: 227,
        name: "Portronics Screen Protector",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹399",
        brand: "Portronics"
    },
    {
        id: 228,
        name: "Portronics Privacy Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹599",
        brand: "Portronics"
    },
    {
        id: 229,
        name: "Ambrane Tempered Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹299",
        brand: "Ambrane"
    },
    {
        id: 230,
        name: "Ambrane Matte Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹399",
        brand: "Ambrane"
    },

    {
        id: 231,
        name: "Spigen GlasTR Screen Protector",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹1999",
        brand: "Spigen"
    },
    {
        id: 232,
        name: "Spigen Privacy Screen Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹2499",
        brand: "Spigen"
    },
    {
        id: 233,
        name: "Stuffcool Screen Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹499",
        brand: "Stuffcool"
    },
    {
        id: 234,
        name: "Stuffcool Matte Protector",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹599",
        brand: "Stuffcool"
    },
    {
        id: 235,
        name: "Infinix Screen Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹299",
        brand: "Infinix"
    },
    {
        id: 236,
        name: "Infinix Privacy Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹399",
        brand: "Infinix"
    },
    {
        id: 237,
        name: "Lava Screen Protector",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹199",
        brand: "Lava"
    },
    {
        id: 238,
        name: "Lava Tempered Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹299",
        brand: "Lava"
    },
    {
        id: 239,
        name: "Asus Screen Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹799",
        brand: "Asus"
    },
    {
        id: 240,
        name: "Asus Privacy Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹999",
        brand: "Asus"
    },

    {
        id: 241,
        name: "Huawei Screen Protector",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹899",
        brand: "Huawei"
    },
    {
        id: 242,
        name: "Huawei Anti-Glare Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹999",
        brand: "Huawei"
    },
    {
        id: 243,
        name: "Nothing Screen Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹1299",
        brand: "Nothing"
    },
    {
        id: 244,
        name: "Nothing Privacy Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹1499",
        brand: "Nothing"
    },
    {
        id: 245,
        name: "Lenovo Screen Protector",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹499",
        brand: "Lenovo"
    },
    {
        id: 246,
        name: "Lenovo Tempered Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹599",
        brand: "Lenovo"
    },
    {
        id: 247,
        name: "HP Screen Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹699",
        brand: "HP"
    },
    {
        id: 248,
        name: "HP Privacy Screen Protector",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹799",
        brand: "HP"
    },
    {
        id: 249,
        name: "Dell Screen Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹699",
        brand: "Dell"
    },
    {
        id: 250,
        name: "Dell Anti-Glare Glass",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400",
        price: "₹899",
        brand: "Dell"
    }

];

// Reviews Data
let reviews = [{
        id: 1,
        name: "Ravi Teja",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 5,
        text: "Best mobile shop in Choutuppal! Bought iPhone 15 from here. Great service and authentic products. Highly recommended!",
        date: "2024-01-15"
    },
    {
        id: 2,
        name: "Lakshmi Devi",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        rating: 5,
        text: "Excellent repair service! Got my Samsung screen replaced within 2 hours. Very professional staff.",
        date: "2024-01-10"
    },
    {
        id: 3,
        name: "Naveen Kumar",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        rating: 5,
        text: "Amazing collection of phones and accessories. Staff is very helpful. Will definitely buy more from here!",
        date: "2024-01-05"
    }
];

// Cart
let cart = [];

// ================================================
// Initialization
// ================================================
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    renderAccessories(accessories);
    renderReviews();
    initScrollEffects();

    // Show home section by default
    showSection('home');
});

// ================================================
// Section Navigation
// ================================================
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');

        // Scroll to top of section
        window.scrollTo({
            top: selectedSection.offsetTop - 80,
            behavior: 'smooth'
        });
    }

    // Update navigation active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });

    // Close mobile menu
    closeMobileMenu();
}
window.addEventListener("popstate", function(event) {

    if (event.state && event.state.section) {
        showSection(event.state.section, false);
    } else {
        showSection("home", false);
    }

});
// ================================================
// Products Functions
// ================================================
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');

    if (productsToRender.length === 0) {
        grid.innerHTML = '<div class="no-products"><p>No products found</p></div>';
        return;
    }

    grid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-brand="${product.brand}">
            <div class="product-image">
                <span class="product-badge">New</span>
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brandDisplay}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${renderStars(product.rating)}
                    <span>(${product.rating}.0)</span>
                </div>
                <div class="product-specs">
                    <span><i class="fas fa-microchip"></i> ${product.specs}</span>
                </div>
                <div class="product-price">${product.price}</div>
                <div class="product-actions">
                    
                    <button class="btn btn-primary" onclick="viewDetails(${product.id})" style="background: var(--primary);">
                        <i class="fas fa-eye"></i> Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

function filterProducts(brand) {
    // Update active filter button
    document.querySelectorAll('.filter-buttons .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter products
    if (brand === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.brand === brand);
        renderProducts(filtered);
    }
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput') || document.getElementById('mobileSearchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    if (!searchTerm) {
        // If we're on products section, show all products
        if (document.getElementById('products').classList.contains('active')) {
            renderProducts(products);
        }
        return;
    }

    // Search in products
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.brandDisplay.toLowerCase().includes(searchTerm)
    );

    renderProducts(filtered);
}

// Search on Enter key
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});

// ================================================
// Accessories Functions
// ================================================
function renderAccessories(accessoriesToRender) {
    const grid = document.getElementById('accessoriesGrid');

    if (accessoriesToRender.length === 0) {
        grid.innerHTML = '<div class="no-products"><p>No accessories found</p></div>';
        return;
    }

    grid.innerHTML = accessoriesToRender.map(accessory => `
        <div class="product-card" data-category="${accessory.category}">
            <div class="product-image">
                <span class="product-badge">Accessory</span>
                <img src="${accessory.image}" alt="${accessory.name}">
            </div>
            <div class="product-info">
                <div class="product-brand">${accessory.brand}</div>
                <h3 class="product-name">${accessory.name}</h3>
                <div class="product-price">${accessory.price}</div>
                 <div class="modal-actions">
                   
                    <a href="https://wa.me/919948180589?text=I'm interested in ${accessory.name}" target="_blank" class="btn btn-whatsapp"> 
                        <i class="fab fa-whatsapp"></i> WhatsApp Inquiry
                    </a>
                </div>
                
            </div>
        </div>
    `).join('');
}

function filterAccessories(category) {
    // Update active filter button
    document.querySelectorAll('#accessories .filter-buttons .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter accessories
    if (category === 'all') {
        renderAccessories(accessories);
    } else {
        const filtered = accessories.filter(a => a.category === category);
        renderAccessories(filtered);
    }
}

// ================================================
// Modal Functions
// ================================================
function viewDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-details">
                <div class="modal-brand">${product.brandDisplay}</div>
                <h2>${product.name}</h2>
                <div class="product-rating" style="margin-bottom: 15px;">
                    ${renderStars(product.rating)}
                    <span>(${product.rating}.0)</span>
                </div>
                <div class="modal-price">${product.price}</div>
                
                <div class="modal-specs">
                    <h3>Specifications</h3>
                    <div class="spec-item">
                        <i class="fas fa-camera"></i>
                        <span>${product.camera}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-battery-full"></i>
                        <span>${product.battery}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-hdd"></i>
                        <span>${product.storage}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-mobile-alt"></i>
                        <span>${product.display}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-microchip"></i>
                        <span>${product.processor}</span>
                    </div>
                </div>
                
                <div class="modal-actions">
                   
                    <a href="https://wa.me/919948180589?text=I'm interested in ${product.name}" target="_blank" class="btn btn-whatsapp"> 
                        <i class="fab fa-whatsapp"></i> WhatsApp Inquiry
                    </a>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ================================================
// Cart Functions
// ================================================
function addToCart(id, type) {
    let item;
    if (type === 'product') {
        item = products.find(p => p.id === id);
    } else {
        item = accessories.find(a => a.id === id);
    }

    if (item) {
        cart.push(item);
        alert(` TO BY THIS ${item.name} CLICK ON DETAILS THEN SEND MESSAGE OR CALL TO OWNER`); //IT IS THE ALERT TO SENING MEASSAGE TO OWNER 
    }
}

// ================================================
// Rating System
// ================================================
let currentRating = 0;

function setRating(rating) {
    currentRating = rating;
    const stars = document.querySelectorAll('#ratingStars i');

    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Star hover effect
document.querySelectorAll('#ratingStars i').forEach(star => {
    star.addEventListener('mouseenter', function() {
        const rating = parseInt(this.dataset.rating);
        const stars = document.querySelectorAll('#ratingStars i');

        stars.forEach((s, index) => {
            if (index < rating) {
                s.style.color = '#FFD700';
            } else {
                s.style.color = '#ddd';
            }
        });
    });

    star.addEventListener('mouseleave', function() {
        const stars = document.querySelectorAll('#ratingStars i');
        stars.forEach((s, index) => {
            if (index < currentRating) {
                s.style.color = '#FFD700';
            } else {
                s.style.color = '#ddd';
            }
        });
    });
});

// ================================================
// Review Submission
// ================================================
function submitReview(e) {
    e.preventDefault();

    const name = document.getElementById('reviewerName').value;
    const reviewText = document.getElementById('reviewText').value;
    const fileInput = document.getElementById('reviewerPhoto');

    if (currentRating === 0) {
        alert('Please select a rating');
        return;
    }

    let photoUrl = '';
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            createReviewCard(name, e.target.result, currentRating, reviewText);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        createReviewCard(name, null, currentRating, reviewText);
    }
}

function createReviewCard(name, photo, rating, text) {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';

    const photoHtml = photo ?
        `<img src="${photo}" alt="${name}">` :
        `<i class="fas fa-user"></i>`;

    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }

    reviewCard.innerHTML = `
        <div class="review-header">
            <div class="reviewer-photo">
                ${photoHtml}
            </div>
            <div>
                <h4>${name}</h4>
                <div class="review-stars">
                    ${starsHtml}
                </div>
            </div>
        </div>
        <p class="review-text">"${text}"</p>
    `;

    const reviewsGrid = document.getElementById('reviewsGrid');
    reviewsGrid.insertBefore(reviewCard, reviewsGrid.firstChild);

    // Reset form
    document.getElementById('reviewForm').reset();
    currentRating = 0;
    document.querySelectorAll('#ratingStars i').forEach(star => {
        star.classList.remove('active');
    });

    alert('Thank you for your review!');
}

function renderReviews() {
    const grid = document.getElementById('reviewsGrid');

    grid.innerHTML = reviews.map(review => {
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= review.rating) {
                starsHtml += '<i class="fas fa-star"></i>';
            } else {
                starsHtml += '<i class="far fa-star"></i>';
            }
        }

        const photoHtml = review.photo ?
            `<img src="${review.photo}" alt="${review.name}">` :
            `<i class="fas fa-user"></i>`;

        return `
            <div class="review-card">
                <div class="review-header">
                    <div class="reviewer-photo">
                        ${photoHtml}
                    </div>
                    <div>
                        <h4>${review.name}</h4>
                        <div class="review-stars">
                            ${starsHtml}
                        </div>
                    </div>
                </div>
                <p class="review-text">"${review.text}"</p>
            </div>
        `;
    }).join('');
}

// ================================================
// Mobile Menu
// ================================================
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
}

// ================================================
// Scroll Effects
// ================================================
function initScrollEffects() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        history.pushState(null, null, location.href);

        window.onpopstate = function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
    });
}

// ================================================
// Smooth Scrolling for Navigation Links
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href !== '#') {
            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});
history.pushState(null, null, location.href);

window.addEventListener('popstate', function() {
    // Redirect to home page
    window.location.href = "index.html"; // change if your home page is different
});
