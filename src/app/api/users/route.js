import connectDB from "@/lib/connectDB";
import UserModal from "@/lib/models/UserModel";


export async function POST(req) {
  await connectDB();

  try {
    const obj = await req.json();

    let newUser = await new UserModal({ ...obj });
    newUser = await newUser.save();

    return Response.json(
      {
        error: false,
        msg: "User egistered hogaya",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (e) {
    return Response.json(
      {
        error: true,
        msg: "something went wrong",
      },
      { status: 400 }
    );
  }
}

export async function GET(req) {
    await connectDB();
    const users = await UserModal.find();
    return Response.json(
        {
          error: false,
          msg: "User fetched hogaya",
        users,
        },
        { status: 201 }
      );
}

export async function PUT(req) {}
export async function DELETE(req) {}
