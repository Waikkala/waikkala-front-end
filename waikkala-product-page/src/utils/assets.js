// Asset URLs from Figma Design
export const assets = {
  images: {
    productMain: "https://www.figma.com/api/mcp/asset/249ad6ca-d8e2-4d5c-86e1-fdd7e403f802",
    bgImage: "https://www.figma.com/api/mcp/asset/5e9454c7-c0ec-4b1a-93b2-df5659489235",
    logo: "https://www.figma.com/api/mcp/asset/7fcd4fad-dd67-476a-baed-787ec69a807b",
  },
  icons: {
    delivery: "https://www.figma.com/api/mcp/asset/0630b332-e36d-42e0-bb27-ac480276e39b",
    clock: "https://www.figma.com/api/mcp/asset/f47c9b74-f8f0-4109-b62e-76c817db91f8",
    facebook: "https://www.figma.com/api/mcp/asset/3c6ad340-1e56-45b3-9fc7-1581e3396ad4",
    instagram: "https://www.figma.com/api/mcp/asset/76dc2dcd-621e-496c-a180-362f666a7f57",
    mail: "https://www.figma.com/api/mcp/asset/40eb26d7-225d-4ea0-b951-5cf8456be3c0",
    call: "https://www.figma.com/api/mcp/asset/e50bf9e4-f45a-47e4-961b-b4532a54e2f2",
    search: "https://www.figma.com/api/mcp/asset/0c613936-651e-4108-8720-481239a0746d",
  }
};

export const productData = {
  title: "Ceylon Raga Reserve",
  subtitle: "Masala Brew",
  price: "1,500.00",
  currency: "LKR",
  weight: "100g | 3.4oz",
  images: [
    assets.images.productMain,
    assets.images.productMain,
  ],
  tabs: [
    {
      title: "Description",
      content: [
        {
          type: "paragraph",
          text: "Experience the elegance of Ceylon Raga Reserve - Masala Brew, where Sri Lanka's finest spices meet Kerala's timeless traditions. This luxurious blend enriches your daily rituals with its rich aroma and vibrant energy, refreshing the mind and uplifting the spirit."
        },
        {
          type: "paragraph",
          text: "Enjoy it with tea, coffee, or a milk infusion for a sophisticated and exotic twist, or mix with whiskey, wine, or other spirits for added warmth and depth. Each sip of Masala Brew offers an unparalleled experience."
        },
        {
          type: "heading",
          text: "Key Features:"
        },
        {
          type: "list",
          items: [
            "• Premium blend of Sri Lankan and Kerala spices",
            "• Versatile preparation methods - hot or cold beverages",
            "• Perfect for mixing with spirits and wines",
            "• Rich aromatic profile for an exotic experience",
            "• 100% natural ingredients"
          ]
        }
      ]
    },
    {
      title: "Additional Information",
      content: [
        {
          type: "paragraph",
          text: "Additional product information will be displayed here."
        }
      ]
    },
    {
      title: "Ingredients",
      content: [
        {
          type: "paragraph",
          text: "Detailed ingredient list will be displayed here."
        }
      ]
    },
    {
      title: "Instructions",
      content: [
        {
          type: "paragraph",
          text: "Usage instructions will be displayed here."
        }
      ]
    }
  ],
  socialIcons: [
    {
      src: assets.icons.facebook,
      url: "#",
      label: "Facebook",
      size: 21
    },
    {
      src: assets.icons.instagram,
      url: "#",
      label: "Instagram",
      size: 16
    },
    {
      src: assets.icons.mail,
      url: "mailto:info@waikkala.com",
      label: "Email",
      size: 18
    },
    {
      src: assets.icons.call,
      url: "tel:+94123456789",
      label: "Phone",
      size: 18
    }
  ]
};
