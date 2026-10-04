import { connect } from "@/lib/dbConnect";

const callHistoryCollection = connect('callHistory')

export async function GET(request) {
    const {searchParams} = new URL(request.url)
    const type =searchParams.get("type")

    const query = {}
    if(type) query.type = type

    const result = await callHistoryCollection.find(query).sort({type:1}).toArray()
    
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
