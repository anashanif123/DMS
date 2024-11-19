import connectDB from "@/lib/connectDB";
import UserModal from "@/lib/models/UserModel";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

async function handelLogin(obj) {
  await connectDB();
  const user = await UserModal.findOne({ email: obj.email });
  if (user) {
    return user;
  } else {
    let newUser = await UserModal(obj);
    newUser = await newUser.save();
    return newUser;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        console.log("account", account);
        let obj = {
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          Picture: profile.picture,
        };
        const user = await handelLogin(obj);
        return user; 
      }
    },
    async jwt({ token }) {
      const user = await handelLogin({ email: token.email });
      token.role = user.role;
      token._id = user._id;
      
      
      return token;
    },
    session({ session, token }) {
      session.user._id = token._id;
      session.user.role = token.role;
      console.log(session);
      return session;
    },
  },
});
