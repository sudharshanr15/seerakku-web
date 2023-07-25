import { NextResponse } from "next/server"

const storage = require("node-persist")
const TOKEN = "token"

interface RequiredType {
    amount: number,
    buyer_name: string,
    email: string,
    phone: number
}

async function load_storage(){
    await storage.init()
}

async function get_storage_token(){
    return await storage.getItem(TOKEN)
}

async function set_storage_token(value: string){
    await storage.setItem(TOKEN, value)
}

async function fetch_auth_token(){
    var headers = new Headers();

    var formdata = new FormData();
    formdata.append("grant_type", "client_credentials");
    formdata.append("client_id", "tUUVMUQNhALUYfT3vN2mgK91D3eqv3mfXBWVNBsH");
    formdata.append("client_secret", "rnUZn60h6v3Bl3lzPBX7vfeggA9KV5J7PfQz76hapPysaF4AjMl8SlSi03GH1WswBctFVRTKp6kJEPcRbccNtHHwLWXLpLpUUYMAIP7A4s7AVTb35AD9X5R5WCYJ3bVD");

    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: formdata,
    };

    try{
        const res = await fetch("https://api.instamojo.com/oauth2/token/", requestOptions)
        const res_data = await res.json()
        const {status} = await res
        if(!res.ok){
            return {success: false, status: status, data: ""}    
        }

        return {success: true, status: status, data: {token: res_data.access_token}}    
    }catch(error){
        return {success: false, status: 500, data: error}    
    }
}

async function create_payment_request(amount: number, buyer_name: string, email: string, phone: number){
    let body = {
        amount,
        buyer_name,
        email,
        phone,
        purpose: "Test",
        redirect_url: "https://seerakku.org"
    }

    let auth_token = await get_storage_token()

    if(auth_token == undefined){
        auth_token = "IQZ8mBckQ8N2W4b9rm9qNvmcATbRLf4yz3g8B8d7F7c.huP1o2T5X6rWPmH-KNvpUWhpmiGiCh1FadXXDoJa6ew"
        set_storage_token("IQZ8mBckQ8N2W4b9rm9qNvmcATbRLf4yz3g8B8d7F7c.huP1o2T5X6rWPmH-KNvpUWhpmiGiCh1FadXXDoJa6ew")
    }

    var headers = new Headers();
    headers.append("Authorization", "Bearer " + auth_token);
    headers.append("Content-type", "application/json")
    
    try{
        const res = await fetch("https://api.instamojo.com/v2/payment_requests/", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })

        const {status} = await res
        const res_data = await res.json()

        if(!res.ok){
            if(status == 401){
                return {success: false, status: 401, data: res_data}
            }
            return {success: false, status: status, data: res_data}
        }

        return {
            success: true,
            status: status,
            data: {
                "id": res_data.id,
                "longurl": res_data.longurl
            }
        }
        // return NextResponse.json(
        //     {
        //         data: {
        //             "id": res_data.id,
        //             "longurl": res_data.longurl
        //         },
        //         res: res.status,
        //         original_data: res_data
        //     }
        // )    
    }catch(error){
        return {success: false, status: 400, data: error}
    }
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

    await load_storage()

    let request_count = 0;
    while(true){
        request_count++;
        if(request_count >= 3){
            return NextResponse.json({
                "message": "Unable to Process request",
                data: {
                    "message": "Unable to Process request"
                }
            }, {status: 400})
        }

        let payment_request = await create_payment_request(amount, buyer_name, email, phone)
        if(payment_request.success === false){
            if(payment_request.status == 401){
                const token_request:{
                    success: boolean,
                    status: number,
                    data: Object | any
                } = await fetch_auth_token()

                if(token_request.success === true){
                    set_storage_token(token_request.data.token)
                    continue;
                }else{
                    return NextResponse.json({
                        "message": "Unable to authenticate",
                        data: {
                            message: "Unable to authenticate"
                        }
                    }, {status: 500})   
                }
                // if(token_request.success === false){
                //     return NextResponse.json({
                //         "message": "Unable to authenticate",
                //         data: token_request.data
                //     }, {status: token_request.status})        
                // }
                // continue;
            }
            return NextResponse.json({
                "message": "Unable to Process request",
                data: payment_request.data
            }, {status: 400})
        }

        return NextResponse.json({
            data: payment_request.data
        }, {status: payment_request.status})
    }
}