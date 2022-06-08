const products = [
    {
        id:1,
        name: "Gabinete Cougar Mini Conquer Pink",
        price: 20000,
        stock:15,
        category: "gabinete",
        img: "../img/Cougar-mini-Conquer.png",
        description: "Conquer encarna el ADN de diseño excepcional y consistente de COUGAR, que muestra su inspiración industrial / militar en una nueva creación impresionante y compacta. Basado en un poderoso marco de aleación de aluminio fresado por CNC, y con el inconfundible ADN de diseño de inspiración militar-industrial de COUGAR presente en cada centímetro de su cuerpo, este estuche es una obra de arte refinada."
    },
    {
        id:2,
        name: "Gabinete Helicopter Thermaltake",
        price: 25000,
        stock:10,
        category: "gabinete",
        img: "../img/Helicopter-Thermaltake .png",
        description: "Thermaltake Ah T200 Pink Helicopter Styled Open Frame Tempered Glass Swing Door Usb3.1 (gen.2) Type-c M-atx Micro Case Ca-1r4-00sawn-00, Pink- ah t200 micro chassis es la version pequeña de nuestra iconica arquitectura estilo fuerza aerea - vista clara de los juegos de pc: dos paneles de ventana de vidrio templado de 5 mm de espesor de alta calidad a la izquierda y a la derecha - dos paneles de vidrio templado de 5 mm: mas gruesos y mas resistentes a los arañazos en comparacion con el acrilico estandar - diseño modular desmontable: el diseño de ventana transparente permite a los usuarios mostrar y admirar completamente todos los componentes de los sistemas de refrigeracion liquida. muestra tu conjunto dedicado de la manera mas sutil. "
    },
    {
        id:3,
        name: "Gabinete Kediers Atx Mid Tower",
        price: 19000,
        stock: 5,
        category: "gabinete",
        img:"../img/Kediers-atx-Mid-Tower.png",
        description: "Marca KEDIERSMaterial Vidrio templadoFactor de forma de disco duro 3.5 PulgadasMétodo de refrigeración AirTamaño del ventilador 120 MilímetrosCompatibilidad de la placa base Micro ATXPeso del artículo 9 KilogramosDimensiones del artículo LxWxH 19.69 x 10.63 x 20.47 pulgadasTipo de estuche Mid TowerSobre este artículoPotente sistema de refrigeración: la carcasa para computadora de juegos KEDIERS está preinstalada con 7 ventiladores LED RGB de doble anillo de luz: 3 delanteros, 2 superiores, 2 laterales; el diseño abierto puede mantener la GPU continuamente baja, haciendo que tu computadora funcione más sin problemas.2 paneles de vidrio templado: la funda para juegos KEDIERS 570 está equipada con 2 cristales templado translúcidos de 0.157 in de grosor, que pueden ver claramente la iluminación RGB, que puede proteger y mostrar todos los componentes en el edificio, y traer mejor a los jugadores.Iluminación RGB sincronizada a través de la placa base: te permite controlar la iluminación del ventilador con placas base RGB direccionables de 5 V-3 pines."
    },
    {
        id:4,
        name: "Monitor Asus",
        price: 19000,
        stock: 5,
        category: "monitor",
        img:"../img/Monitor Asus.png",
        description:""
    },
    {
        id:5,
        name: "Monitor BenQ",
        price: 15000,
        stock: 5,
        category: "monitor",
        img:"../img/Monitor BenQ.png",
        description:""
    },
    {
        id:6,
        name: "Monitor Gigabyte",
        price: 25000,
        stock: 5,
        category: "monitor",
        img:"../img/Monitor Gigabyte.png",
        description:""
    }
]
// FUNCIONES

export const getProducts = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve(products)
        }, 1000)
    })
};

export const getProductByType = (typeId) => {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(products.filter(prod=>prod.category === typeId) )
        }, 500)
    })
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === Number(id) ))
        })
    })
};