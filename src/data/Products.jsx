const products = {
  electronics: [
    {
      title: "Beats - Powerbeats Pro Totally Wireless Earbuds",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      base_price: 500,
      variant_options: [
        {
          colors: [
            {
              color_name: "black",
              hex: "#000",
              images: [
                "../assets/images/products/beats_black_featured.jpg",
                "../assets/images/products/beats_black_case.jpg",
                "../assets/images/products/beats_black_outside.jpg",
              ],
            },
            {
              color_name: "navy",
              hex: "#000042",
              images: [
                "../assets/images/products/beats_navy_featured.jpg",
                "../assets/images/products/beats_navy_case.jpg",
                "../assets/images/products/beats_navy_outside.jpg",
              ],
            },
            {
              color_name: "ivory",
              hex: "#fffff0",
              images: [
                "../assets/images/products/beats_ivory_featured.jpg",
                "../assets/images/products/beats_ivory_case.jpg",
                "../assets/images/products/beats_ivory_outside.jpg",
              ],
            },
          ],
        },
      ],
      featured_image: "../assets/images/products/beats_black_featured.jpg",
      vendor: "Beats",
    },
  ],
  gaming: [
    {
      title: "Microsoft - Xbox Series S All-Digital Console",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      base_price: 500,
      variant_options: [
        {
          colors: [
            {
              color_name: "black",
              hex: "#000",
              images: [
                "../assets/images/products/xbox_series_x_black_featured.webp",
                "../assets/images/products/xbox_series_x_black_includes.jpg",
              ],
            },
            {
              color_name: "white",
              hex: "#FFF",
              images: [
                "../assets/images/products/xbox_series_x_featured.webp",
                "../assets/images/products/xbox_series_x_includes.jpg",
              ],
            },
          ],
          sizes: [
            { text: "256 GB", price_adjustment: 0 },
            { text: "512 GB", price_adjustment: 10 },
            { text: "1 TB", price_adjustment: 15 },
          ],
        },
      ],
      featured_image: "https://",
      vendor: "Microsoft",
    },
  ],
  appliances: [
    {
      title: "Keurig - K-Select Single-Serve K-Cup Pod Coffee Maker",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      base_price: 500,
      variant_options: [
        {
          colors: [
            {
              color_name: "black",
              hex: "#000",
              images: [
                "../assets/images/products/keurig_featured_black.jpg",
                "../assets/images/products/keurig_open_black.jpg",
                "../assets/images/products/keurig_home_black.jpg",
              ],
            },
            {
              color_name: "oasis",
              hex: "#92fcff",
              images: [
                "../assets/images/products/keurig_oasis_featured.jpg",
                "../assets/images/products/keurig_open_oasis.jpg",
                "../assets/images/products/keurig_zoom_oasis.jpg",
              ],
            },
            {
              color_name: "vintage red",
              hex: "#c70000",
              images: [
                "../assets/images/products/keurig_vintage_red_featured.jpg",
                "../assets/images/products/keurig_vintage_red_open.jpg",
                "../assets/images/products/keurig_vintange_red_home.jpg",
              ],
            },
          ],
        },
      ],
      featured_image: "../assets/images/products/keurig_featured_black.jpg",
      vendor: "Beats",
    },
  ],
  featured: [{}],
  deals: [{}],
};

export default products;
