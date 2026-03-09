const mockImage = import.meta.env.VITE_MOCK_IMAGE;
const mockVideo = import.meta.env.VITE_MOCK_VIDEO_ONLY;

export const devProjectsMock = [
    { 
        id:'1', 
        label: "API tienda", 
        thumbnail:  `${mockImage}shop-api/portada-shop-api_g3eqpq.jpg`, 
        images:[
            `${mockImage}shop-api/shop-api-img_2_oyicci.png`,
            `${mockImage}shop-api/shop-api-img_3_pj0qke.png`,
            `${mockImage}shop-api/shop-api-img_1_vs6yqg.png`,

        ],
        video:[],
        bg:"#DCECF3",
        description:"A complete REST API built with Node.js and Express for a robust e-commerce system. It provides functionalities for authentication, product management, shopping cart, orders, and more, with different user roles (buyer, business, admin).",
        githubLink:"https://github.com/JhonEdwar/ed-shop",
        tools:[
            "MongoDB", "Express", "Node.js", "JWT", "Passport.js", 
            "Joi", "bcrypt", "Nodemailer", "Twilio" , "Swagger", 
            "Mocha/ Chai / Supertest", "Winston"
        ]
    },
        { 
        id:'2', 
        label: "Clone Spotify", 
        thumbnail:  `${mockImage}clone-spotify/portada-spotify_vdr1gp.jpg`, 
        images:[
            `${mockImage}clone-spotify/clone-spotify-2_e8553p.png`,
            `${mockImage}clone-spotify/clone-spotify-1_biyncs.png`,
            `${mockImage}clone-spotify/clone-spotify-3_rlqnpy.png`,
            `${mockImage}clone-spotify/clone-spotify-4_ng5ja9.png`,

        ],
        video:[],
        bg:"#DCECF3",
        description:"A Spotify clone built with React that allows users to authenticate with their Spotify account and control music playback directly from the application.",
        githubLink:"https://github.com/JhonEdwar/clone-spotify",
        tools:[
            "React", "React Context", "Spotify API", "React Router", "Axios", "Styled components", "SASS", "Webpack"
        ]
    },
    { 
        id:'3', 
        label: "UX Docs AI Assistant", 
        thumbnail:  `${mockImage}UX-assistant/portada-ux-assistant_vci1on.jpg`, 
        images:[
            `${mockImage}UX-assistant/chat-assist-ux_2_wy2sjx.png`,
            `${mockImage}UX-assistant/chat-assist-ux_1_emgwpu.png`,

        ],
        video:[`${mockVideo}UX-assistant/Chat_docs_ux_huknbj.mp4`,],
        bg:"#DCECF3",
        description:"AI assistant specialized in UX and digital product design, built with a RAG architecture that queries a Pinecone vector database to answer questions exclusively from indexed UX books and documents. Designed for designers who need fast, reliable insights without manually searching through references — accessible via Telegram or a web chat, with sources always cited in every response.",
        githubLink:"https://github.com/JhonEdwar/ux-docs-ai-assistant",
        tools:[
            "n8n", "RAG", "Pinecone", "Open AI", "GPT-4.1", "PostgreSQL", "Telegram Bot", "Vector Database"
        ]
    },
    { 
        id:'4', 
        label: "Men's Clothing AI Agent", 
        thumbnail:  `${mockImage}mens-clothing/portada-clothing_sq5uyv.jpg`, 
        images:[
            `${mockImage}mens-clothing/clothing_1_ywlshb.png`,
            `${mockImage}mens-clothing/clothing_2_q1nlsl.png`,
            `${mockImage}mens-clothing/clothing_3_dyr5mi.png`,

        ],
        video:[`${mockVideo}mens-clothing/mens_clothing_chat_ybizfl.mp4`,],
        bg:"#DCECF3",
        description:"Conversational AI agent that queries and manages a men's clothing inventory through natural language, using MCP as the tool layer between the agent and a PostgreSQL database. Supports dynamic SQL generation, filtered searches by category, size, material or price, and a confirmation-based insert flow — all from Telegram, without writing a single line of SQL.",
        githubLink:"https://github.com/JhonEdwar/mens-clothing-ai-agent",
        tools:[
            "n8n", "MCP", "Open AI", "GPT-4.1", "PostgreSQL", "Telegram Bot", "Supabase"
        ]
    },
   
     
]

