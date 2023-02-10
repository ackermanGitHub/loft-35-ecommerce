import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/UserModel';
import db from '@/utils/db';
import bcryptjs from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) token.id = user.id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  secret: 'QCatQ80H8TVP/Zw6d9jVGLu+5oVtIRuYtN5JhPFaXHM=',
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'me@email.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        let user;
        try {
          await db.connect();
          user = await User.findOne({ email });
        } catch (error) {
          console.error(error);
          throw new Error('An error occured while fetching the user');
        } finally {
          await db.disconnect();
        }

        if (user && bcryptjs.compareSync(password, user.password)) {
          return {
            id: user._id,
            name: user.name,
            email: user.email,
            image: 'f',
            isAdmin: user.isAdmin,
          };
        }
        throw new Error('Invalid email or password');
      },
    }),
  ],
};

export default NextAuth(authOptions);
