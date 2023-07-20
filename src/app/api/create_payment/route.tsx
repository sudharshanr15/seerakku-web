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
        purpose: "Test"
    }

    var headers = new Headers();
    headers.append("Authorization", "Bearer KKbn5po_zYDyyiHlbuktpWGxQaxfx-wQfq-D1xZmOsw.lZGY4FOFVs5c8tDAcgffI1SVvWWpWalC2MTfgKZPsV8");
    headers.append("Content-type", "application/json")
    
    try{
        const res = await fetch("https://test.instamojo.com/v2/payment_requests/", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })
        const res_data = await res.json()

        return NextResponse.json(
            {
                data: {
                    "id": res_data.id,
                    "longurl": res_data.longurl
                },
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