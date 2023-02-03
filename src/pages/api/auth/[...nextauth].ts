import NextAuth from 'next-auth';
import User from '@/models/User';
import db from '@/utils/db';
import credentials from 'next-auth/providers/credentials';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return token;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await db.connect();
        const user = await User.findOne({
          email: CredentialsContainer.email,
        });
        await db.disconnect();
        if (user && bcrypts.compareSync(credentials.password, user.passwoed)) {
        }
      },
    }),
  ],
});
