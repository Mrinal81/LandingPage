import React from 'react';
import Link from 'next/link';

interface XerocodeeWayThirdProps{}

const data= [
    {
        "title":"Customizable Cost Dashboards And Reports",
        "para":"Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.",
        "img":"/assets/cost.png",
    },
    {
        "title":"Preview Infra Costs",
        "para":"See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.",
        "img":"/assets/preview.png",
    },
    {
        "title":"Multiple Runtimes",
        "para":"Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.",
        "img":"/assets/observability.png",
    },
    
];


const XerocodeeWayThirdPage: React.FC<XerocodeeWayThirdProps> = () => {
    return(
        <div className="first-page flex items-center justify-center mt-20 mb-10">
        <div className="inner-container w-9/12">
            <div className="first-page-header text-center mb-32">
                <div className="text-center mb-20">
                    <div className="number-container relative">
                        <h2 className="number text-2xl font-bold mb-2">03</h2>
                        <div className="line-with-circles absolute top-0 left-1/2 transform -translate-x-1/2 h-full flex items-center">
                            <div className="circle rounded-full w-4 h-4 bg-blue-600 mt-10"></div>
                            <div className="line h-full border-b-2 border-blue-500 w-4 mt-4 md:w-16"></div>
                            <div className="circle rounded-full w-4 h-4 bg-blue-600 mt-10"></div>
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Visibility Into Costs And Metrics</h2>
                <p className="text-lg mb-8 text-gray-500">
                Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.
                </p>
            </div>
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`content flex flex-col md:flex-row items-center mb-28 gap-4 ${
                        index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                    <div className="image-container w-full md:w-1/2 mx-auto mb-4 md:mb-0 flex justify-center">
                        <img src={item.img} alt="Your Image" className="w-40 h-auto rounded-md mx-auto md:mx-0" />
                    </div>

                    <div className="text-container w-full md:w-1/2 mx-auto text-center md:text-left">
                        <h2 className="font-bold text-xl py-4">{item.title}</h2>
                        <p className="text-gray-500 text-md">{item.para}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default XerocodeeWayThirdPage