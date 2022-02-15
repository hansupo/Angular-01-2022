export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public imgSrc: string,
        public description: string,
        public category: string,
        public isActive: boolean,
    ) {}
}

// any vs tüüp
// Õiged asjad läheksid õigete kohtade peale
// ja kui mitte, siis annab koheselt errori

// Any korral võib see viga välja tulla tunduvalt hiljem

// 1. lühendamine - kui on 20 erinevat, siis

//  kodustes projektides - võin any hoida
// ettevõtetes lähevad prjoektid väga suureks, slp 
// kindlasti tüüp, sest ei pruugi olla minu kood ja orienteerumine on koodis raskem, 
// tüübid aitavad vigu leida ja orienteeruda

// miks model? 
// 1. lühendamine, et failid pikaks ei läheks
// 2. kui teha muutus siis läheb kõigile korraga
// 3. näen ühe pilguga ära, mis tüüp on