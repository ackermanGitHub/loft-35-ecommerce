import bcrypt from 'bcryptjs';

export class Product implements IProduct {
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  brand?: string;
  isFeatured?: boolean;
  quantity?: number;
  width?: number;
  height?: number;

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
    this.width = product.width;
    this.height = product.height;
  }
}
export interface IProduct {
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  brand?: string;
  isFeatured?: boolean;
  quantity?: number;
  width?: number;
  height?: number;
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

const data = {
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
      image: '/images/products/blusa_clarita.jpg',
      price: 24,
      brand: undefined,
      rating: 4.5,
      numReviews: 8,
      countInStock: 3,
      description: 'Blusa Elegante Amarillo Clarito',
      isFeatured: true,
      width: 470,
      height: 696,
    },
    {
      name: 'Bolso Rosado',
      slug: 'bolso_rosado',
      category: 'Bolsos',
      image: '/images/products/bolso_rosado.jpg',
      price: 46,
      brand: undefined,
      rating: 3.2,
      numReviews: 10,
      countInStock: 1,
      description: 'Bolso Pequeño Rosado',
      isFeatured: true,
      width: 462,
      height: 711,
    },
    {
      name: 'Pantalón Blanco',
      slug: 'pantalon_blanco',
      category: 'Pantalones',
      image: '/images/products/pantalon_blanco.jpg',
      price: 30,
      brand: undefined,
      rating: 4,
      numReviews: 3,
      countInStock: 1,
      description: 'Pantalon Blanco Ancho',
      isFeatured: true,
      width: 466,
      height: 718,
    },
    {
      name: 'Tacones Azules',
      slug: 'tacon_azul',
      category: 'Calzado',
      image: '/images/products/tacon_azul.jpg',
      price: 90,
      brand: undefined,
      rating: 2.9,
      numReviews: 13,
      countInStock: 1,
      description: 'Tacones Altos Azul Celeste',
      width: 461,
      height: 713,
    },
    {
      name: 'Trusa Amarilla',
      slug: 'trusa_amarilla',
      category: 'Trusas',
      image: '/images/products/trusa_amarilla.jpg',
      price: 25,
      brand: undefined,
      rating: 3.5,
      numReviews: 7,
      countInStock: 1,
      description: 'Trusa Amarillo Brillante',
      width: 471,
      height: 712,
    },
    {
      name: 'Vestido Rosado',
      slug: 'vestido_rosado',
      category: 'Vestidos',
      image: '/images/products/vestido_rosado.jpg',
      price: 75,
      brand: undefined,
      rating: 2.4,
      numReviews: 14,
      countInStock: 1,
      description: 'Vestido Rosado Natural',
      width: 468,
      height: 709,
    },
  ],
};

export default data;
