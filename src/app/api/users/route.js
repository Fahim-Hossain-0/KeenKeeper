import { connect } from "@/app/lib/dbConnect"

const userCollection = connect("users")

export async function GET(request) {
    const result = await userCollection.find().toArray()
     return Response.json({
         status:200,
         result
    })
}

export async function POST(request) {
    const {data} = await request.json()
    const result = await userCollection.insertOne(data)
 return Response.json({
         status:200,
         result
    })
}
