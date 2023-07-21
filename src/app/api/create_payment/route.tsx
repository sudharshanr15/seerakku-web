import { NextResponse } from "next/server"

interface RequiredType {
    amount: string,
    buyer_name: string,
    email: string,
    phone: number
}

export async function POST(request: Request){
    const data: RequiredType = await request.json()
    const {amount, buyer_name, email, phone} = data

    if(!amount || !buyer_name || !email || !phone){
        return NextResponse.json({
            "message": "Invalid Fields",
            // data: data
        }, {status: 400})
    }

    let body = {
        amount,
        buyer_name,
        email,
        phone,
        purpose: "Test",
        redirect_url: "https://seerakku.org"
    }

    var headers = new Headers();
    headers.append("Authorization", "Bearer IQZ8mBckQ8N2W4b9rm9qNvmcATbRLf4yz3g8B8d7F7c.huP1o2T5X6rWPmH-KNvpUWhpmiGiCh1FadXXDoJa6ew");
    headers.append("Content-type", "application/json")
    
    try{
        const res = await fetch("https://test.instamojo.com/v2/payment_requests/", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })

        const {status} = await res
        const res_data = await res.json()

        if(!res.ok){
            return NextResponse.json({
                "message": "Unable to Process request",
                data: res_data
            }, {status: status})    
        }

        return NextResponse.json(
            {
                data: {
                    "id": res_data.id,
                    "longurl": res_data.longurl
                },
                res: res.status,
                original_data: res_data
            }
        )    
    }catch(error){
        return NextResponse.json({
            "message": "Unable to Process request",
            data: error
        }, {status: 400})
    }
}