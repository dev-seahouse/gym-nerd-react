const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Converse HPS',
        imageUrl:
          'https://img.alicdn.com/imgextra/i3/1046707508/O1CN01s7l3ol25KiGhaAJIh_!!1046707508-0-lubanu-s.jpg_430x430q90.jpg',
        price: 25,
      },
      {
        id: 2,
        name: 'Nike NSW Aerobill',
        imageUrl:
          'https://img.alicdn.com/imgextra/i4/890482188/O1CN01n7vYOS1S29CA3jvzd_!!890482188-0-lubanu-s.jpg_430x430q90.jpg',
        price: 18,
      },
      {
        id: 3,
        name: 'Adidas Bucket Hat AC',
        imageUrl:
          'https://img.alicdn.com/imgextra/i4/446338500/O1CN01O8kz982Cf3AHdMXiX_!!0-item_pic.jpg_430x430q90.jpg',
        price: 35,
      },
      {
        id: 4,
        name: 'Under Armour Cotton',
        imageUrl:
          'https://img.alicdn.com/imgextra/i1/1940724523/O1CN01YN00rd1jHZzSH7cx2_!!1940724523.jpg_430x430q90.jpg',
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18,
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14,
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18,
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16,
      },
    ],
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220,
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280,
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110,
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160,
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160,
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190,
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200,
      },
    ],
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Nike 2020 Summer Sports Jacket',
        imageUrl:
          'https://img.alicdn.com/imgextra/i2/1993730769/O1CN01vfxPiA1HYF4SMDFa4_!!1993730769.jpg_430x430q90.jpg',
        price: 125,
      },
      {
        id: 19,
        name: 'Adidas Basketball Jacket',
        imageUrl:
          'https://img.alicdn.com/imgextra/i3/838658344/O1CN01r9GNeY2BVbLWmgtGt_!!838658344.jpg_430x430q90.jpg',
        price: 90,
      },
      {
        id: 20,
        name: 'Breathable Summer Jacket',
        imageUrl:
          'https://img.alicdn.com/imgextra/i2/2207395935330/O1CN01znw9vy1pFBdSkol6T_!!2207395935330-0-lubanu-s.jpg_430x430q90.jpg',
        price: 90,
      },
      {
        id: 21,
        name: 'Jack & Jones Ultra Thin Sports Jacket',
        imageUrl:
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/305358018/O1CN014XqST7296IFG0HqGn_!!305358018.jpg_430x430q90.jpg',
        price: 165,
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
    ],
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'CVY 2 piece set 2020',
        imageUrl:
          'https://gd1.alicdn.com/imgextra/i3/0/O1CN01zfJGF61pDM2op5kd9_!!0-item_pic.jpg',
        price: 25,
      },
      {
        id: 24,
        name: 'Superior Yoga 2 piece set',
        imageUrl:
          'https://gd4.alicdn.com/imgextra/i2/350785697/O1CN01tAcJEV1rxGyv71yFq_!!350785697.jpg',
        price: 20,
      },
      {
        id: 25,
        name: 'Breathable workout shorts',
        imageUrl:
          'https://img.alicdn.com/imgextra/i1/679318614/O1CN01BFKGpU2DVGJAJAvcx_!!679318614.jpg_430x430q90.jpg',
        price: 80,
      },
      {
        id: 26,
        name: 'FILA OFFICIAL SUMMER T',
        imageUrl:
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/676606897/O1CN010sZ0Ts20osG3VJxDn_!!676606897.jpg_430x430q90.jpg',
        price: 80,
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20,
      },
    ],
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Adidas Running T',
        imageUrl:
          'https://img.alicdn.com/imgextra/i4/446338500/O1CN019nbpcW2Cf39rwAFr9-446338500.jpg_430x430q90.jpg',
        price: 325,
      },
      {
        id: 31,
        name: 'Muscle Fit Basic Singlets',
        imageUrl:
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/804320856/O1CN013KFoS11IC5WwGsv0u_!!804320856.jpg_430x430q90.jpg',
        price: 20,
      },
      {
        id: 32,
        name: 'Cotton Basic vest',
        imageUrl:
          'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3495435505/O1CN01CQCrth1qXKvrBiWAJ_!!3495435505.jpg_430x430q90.jpg',
        price: 25,
      },
      {
        id: 33,
        name: 'Jordan Dri-Fit Sleeveless Hoodie',
        imageUrl:
          'https://img.alicdn.com/imgextra/i1/3327042818/O1CN01ckbh631WggiRPydRZ_!!3327042818-0-lubanu-s.jpg_430x430q90.jpg',
        price: 25,
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
      },
    ],
  },
};

export default SHOP_DATA;
