import data from '@/utils/data';
import db from '@/utils/db';
import { UserModel } from '@/models/User';
import { ProductModel } from '@/models/Product';

const handler = async (
  req: any,
  res: { send: (arg0: { message: string }) => void }
) => {
  await db.connect();
  await UserModel.deleteMany();
  await UserModel.insertMany(data.users);
  await ProductModel.deleteMany();
  await ProductModel.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;
