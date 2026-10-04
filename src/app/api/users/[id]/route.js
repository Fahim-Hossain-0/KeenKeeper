import { ObjectId } from "mongodb";
import { connect} from "@/lib/dbConnect";

export async function GET(request, { params }) {
  const { id } = await params;

  const userCollection = await connect("users");

  const user = await userCollection.findOne({
    _id: new ObjectId(id),
  });

  if (!user) {
    return Response.json(
      {
        message: "User not found",
      },
      {
        status: 404,
      }
    );
  }

  return Response.json({
    status: 200,
    data: user,
  });
}