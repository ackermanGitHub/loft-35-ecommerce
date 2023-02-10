import bcrypt from 'bcryptjs';

export class Product implements IProduct {
  name: string;
  slug: string;
  category: string;
  image: IStoreImage;
  price: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  brand?: string;
  isFeatured?: boolean;
  quantity?: number;

  constructor(product: IProduct) {
    this.name = product.name;
    this.slug = product.slug;
    this.category = product.category;
    this.image = product.image;
    this.price = product.price;
    this.rating = product.rating;
    this.numReviews = product.numReviews;
    this.countInStock = product.countInStock;
    this.description = product.description;
    this.brand = product.brand;
    this.isFeatured = product.isFeatured;
    this.quantity = product.quantity;
  }
}
export interface IProduct {
  name: string;
  slug: string;
  category: string;
  image: IStoreImage;
  price: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  brand?: string;
  isFeatured?: boolean;
  quantity?: number;
}

export class User implements IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;

  constructor(user: IUser) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.isAdmin = user.isAdmin;
  }
}
export interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export class StoreImage implements IStoreImage {
  name: string;
  src: string;
  width: number;
  height: number;
  background: string;

  constructor(image: IStoreImage) {
    this.name = image.name;
    this.src = image.src;
    this.width = image.width;
    this.height = image.height;
    this.background = image.background;
  }
}
export interface IStoreImage {
  name: string;
  src: string;
  width: number;
  height: number;
  background: string;
}

interface IData {
  users: IUser[];
  products: IProduct[];
}
const data: IData = {
  users: [],
  products: [],
};

const staticData = {
  users: [
    {
      name: 'Annet',
      email: 'annet.loft35@gmail.com',
      password: bcrypt.hashSync('fiftychen'),
      isAdmin: true,
    },
    {
      name: 'Mely',
      email: 'mely.loft35@gmail.com',
      password: bcrypt.hashSync('fiftychen'),
      isAdmin: true,
    },
    {
      name: 'Julio',
      email: 'julio.sergio2709@gmail.com',
      password: bcrypt.hashSync('3rWx7Hf8'),
      isAdmin: true,
    },
    {
      name: 'Morel',
      email: 'morel.fiftychen@gmail.com',
      password: bcrypt.hashSync('fiftychen'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Blusa Clarita',
      slug: 'blusa-clarita',
      category: 'Blusas',
      image: {
        name: 'blusa-clarita',
        src: '/images/products/blusa_clarita.jpg',
        background: 'white',
        width: 470,
        height: 696,
      },
      price: 24,
      brand: undefined,
      rating: 4.5,
      numReviews: 8,
      countInStock: 3,
      description: 'Blusa Elegante Amarillo Clarito',
      isFeatured: true,
    },
    {
      name: 'Bolso Rosado',
      slug: 'bolso_rosado',
      category: 'Bolsos',
      image: {
        name: 'bolso_rosado',
        src: '/images/products/bolso_rosado.jpg',
        background: 'white',
        width: 462,
        height: 711,
      },
      price: 46,
      brand: undefined,
      rating: 3.2,
      numReviews: 10,
      countInStock: 1,
      description: 'Bolso Pequeño Rosado',
      isFeatured: true,
    },
    {
      name: 'Pantalón Blanco',
      slug: 'pantalon_blanco',
      category: 'Pantalones',
      image: {
        name: 'pantalon_blanco',
        src: '/images/products/pantalon_blanco.jpg',
        background: 'white',
        width: 466,
        height: 718,
      },
      price: 30,
      brand: undefined,
      rating: 4,
      numReviews: 3,
      countInStock: 1,
      description: 'Pantalon Blanco Ancho',
      isFeatured: true,
    },
    {
      name: 'Tacones Azules',
      slug: 'tacon_azul',
      category: 'Calzado',
      image: {
        name: 'tacon_azul',
        src: '/images/products/tacon_azul.jpg',
        background: 'white',
        width: 461,
        height: 713,
      },
      price: 90,
      brand: undefined,
      rating: 2.9,
      numReviews: 13,
      countInStock: 1,
      description: 'Tacones Altos Azul Celeste',
    },
    {
      name: 'Trusa Amarilla',
      slug: 'trusa_amarilla',
      category: 'Trusas',
      image: {
        name: 'trusa_amarilla',
        src: '/images/products/trusa_amarilla.jpg',
        background: 'white',
        width: 471,
        height: 712,
      },
      price: 25,
      brand: undefined,
      rating: 3.5,
      numReviews: 7,
      countInStock: 1,
      description: 'Trusa Amarillo Brillante',
    },
    {
      name: 'Vestido Rosado',
      slug: 'vestido_rosado',
      category: 'Vestidos',
      image: {
        name: 'vestido_rosado',
        src: '/images/products/vestido_rosado.jpg',
        background: 'white',
        width: 468,
        height: 709,
      },
      price: 75,
      brand: undefined,
      rating: 2.4,
      numReviews: 14,
      countInStock: 1,
      description: 'Vestido Rosado Natural',
    },
  ],
};

data.users = staticData.users.map((user) => {
  return new User(user);
});
data.products = staticData.products.map((product) => {
  product.image = new StoreImage(product.image);
  return new Product(product);
});

export default data;
