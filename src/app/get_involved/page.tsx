import { PageHeader } from "@/component";
import { Card } from "@/container/get_involved";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Get Involved"
}

function GetInvolved(){
    return (
        <main>
            <PageHeader title="Get Involved" description="At Seerakku, we believe that collective action is the key to creating a sustainable future. There are several ways you can get involved and contribute to our mission. Choose the option that resonates with you and join us in making a positive impact on the environment"/>    
            <Card />
        </main>
    )
}

export default GetInvolved