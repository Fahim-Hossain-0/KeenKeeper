import { connect } from "@/lib/dbConnect";

const callHistoryCollection = connect('callHistory')

export async function GET(request) {
    const result = await callHistoryCollection.find().toArray()
    return Response.json({
         status:200,
         result
    })
}

export async function POST(request) {
    const data = await request.json()
    const result = await callHistoryCollection.insertOne(data)
    return Response.json({
         status:200,
         result
    })
}
