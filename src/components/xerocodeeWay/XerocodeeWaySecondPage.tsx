import React from 'react';


interface XerocodeeWaySecondProps{}

const data= [
    {
        "title":"Configurable Build And Deploy Pipelines",
        "para":"Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.",
        "img":"/assets/pipeline.png",
    },
    {
        "title":"Push To Deploy",
        "para":"Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.",
        "img":"/assets/deploy.png",
    },
    {
        "title":"Multiple Runtimes",
        "para":"Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.",
        "img":"/assets/tools.png",
    },
    {
        "title":"Scale Infinitely",
        "para":"Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.",
        "img":"/assets/scale.png",
    },
];

const XerocodeeWaySecondPage: React.FC<XerocodeeWaySecondProps> = () => {
    return (
        <div className="first-page flex items-center justify-center mt-20 mb-10">
            <div className="inner-container w-9/12">
                <div className="first-page-header text-center mb-32">
                    <div className="text-center mb-20">
                        <div className="number-container relative">
                            <h2 className="number text-2xl font-bold mb-2">02</h2>
                            <div className="line-with-circles absolute top-0 left-1/2 transform -translate-x-1/2 h-full flex items-center">
                                <div className="circle rounded-full w-4 h-4 bg-blue-600 mt-10"></div>
                                <div className="line h-full border-b-2 border-blue-500 w-4 mt-4 md:w-16"></div>
                                <div className="circle rounded-full w-4 h-4 bg-blue-600 mt-10"></div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Deploy applications, fast!</h2>
                    <p className="text-lg mb-8 text-gray-500">
                        Set up automated of your application in 5 minutes and get back to building stuff that matters.
                    </p>
                </div>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`content flex flex-col md:flex-row items-center mb-28 gap-4 ${
                            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        <div className="image-container w-full md:w-1/2 mx-auto mb-4 md:mb-0">
                            <img src={item.img} alt="Your Image" className="w-9/12 h-auto rounded-md mx-auto md:mx-0" />
                        </div>

                        <div className="text-container w-full md:w-1/2 mx-auto text-center md:text-left">
                            <h2 className="font-bold text-xl py-4">{item.title}</h2>
                            <p className="text-gray-500 text-md">{item.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default XerocodeeWaySecondPage;
