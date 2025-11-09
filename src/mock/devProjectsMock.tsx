const mockImage = import.meta.env.VITE_MOCK_IMAGE;
// const mockVideo = import.meta.env.VITE_MOCK_VIDEO;

export const devProjectsMock = [
    { 
        id:'1', 
        label: "API tienda", 
        thumbnail:  `${mockImage}shop-api/portada-shop-api_hkketu.jpg`, 
        images:[
            `${mockImage}shop-api/shop-api-img_2_oyicci.png`,
            `${mockImage}shop-api/shop-api-img_3_pj0qke.png`,
            `${mockImage}shop-api/shop-api-img_1_vs6yqg.png`,

        ],
        bg:"#DCECF3",
        description:"A complete REST API built with Node.js and Express for a robust e-commerce system. It provides functionalities for authentication, product management, shopping cart, orders, and more, with different user roles (buyer, business, admin).",
        githubLink:"https://github.com/JhonEdwar/ed-shop",
        tools:[
            "MongoDB", "Express", "Node.js", "JWT", "Passport.js", 
            "Joi", "bcrypt", "Nodemailer", "Twilio" , "Swagger", 
            "Mocha, Chai", "Winston"
        ]
    },
   
    
    
]

