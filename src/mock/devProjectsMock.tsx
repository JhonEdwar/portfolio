const mockImage = import.meta.env.VITE_MOCK_IMAGE;
const mockVideo = import.meta.env.VITE_MOCK_VIDEO;

export const devProjectsMock = [
    { 
        id:'1', 
        label: "API tienda", 
        thumbnail:  `${mockImage}bigpass/ahmhw2vgztzzimd5jnxh`,
        images:[
            `${mockImage}bigpass/nvv0uibtvfcdobnzsoya`,
            `${mockImage}bigpass/qs86meqs31rkwdqojrxt`,
            `${mockImage}bigpass/pk7qyf5genfpzr4psrgb`,
            `${mockImage}bigpass/bxj0ynuwatgi35pci3zz`,

        ],
        videoTest:[],
        videoFinal:[`${mockVideo}bigpass/uzlvieddqtkeb5xrlhew`],
        bg:"#DCECF3",
        description:"Una API REST completa construida con **Node.js y Express** para un sistema de comercio electrónico robusto. Proporciona funcionalidades de autenticación, gestión de productos, carrito de compras, órdenes y más, con diferentes roles de usuario (buyer, business, admin).",
        githubLink:"https://github.com/JhonEdwar/portfolio",
        tools:[
            "tool 1", "tool 2", "tool 3"
        ]
    },
   
    
    
]

