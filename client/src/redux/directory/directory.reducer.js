const INITIAL_STATE = {
  sections: [
    {
      title: 'Supplements',
      imageUrl:
        'https://s1.thcdn.com/productimg/1600/1600/10530911-2014620651215604.jpg',
      id: 1,
      linkUrl: 'shop/supplements',
      classes: 'main',
    },
    {
      title: 'caps',
      imageUrl:
        'https://images.pexels.com/photos/823722/pexels-photo-823722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 2,
      linkUrl: 'shop/caps',
      classes: 'sub1',
    },
    {
      title: 'jackets',
      imageUrl:
        'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 3,
      linkUrl: 'shop/jackets',
      classes: 'sub2',
    },
    {
      title: 'sneakers',
      imageUrl:
        'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 4,
      linkUrl: 'shop/sneakers',
      classes: 'sub3',
    },
    {
      title: 'womens',
      imageUrl:
        'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 5,
      linkUrl: 'shop/womens',
      classes: 'sub4',
    },
    {
      title: 'mens',
      imageUrl:
        'https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      size: 'large',
      id: 6,
      linkUrl: 'shop/mens',
      classes: 'sub5',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
