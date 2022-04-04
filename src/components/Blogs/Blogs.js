import React from 'react';

const Blogs = () => {
    return (
        <div className='w-10/12 md:w-8/12 mx-auto mt-10'>
            <div className='bg-slate-200 p-5 m-3 rounded-3xl'>
                <h1 className='text-center text-xl font-bold m-1'> Context API?</h1>
                <p className='m-1 p-1'> ✔️ The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
                </p>
                <p className='m-1 p-1'> ✔️ The Context API can be used to share data with multiple components, without having to pass data through props manually</p>
                <p className='m-1 p-1'> ✔️ React.createContext () is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it happens is a component that consumes and uses the state. </p>

                <p className='m-1 p-1'>✔️ Context API is used to avoid props drilling.</p>
            </div>

            <div className='bg-slate-200 p-5 m-3 rounded-3xl mt-8'>
                <h1 className='text-center text-xl font-bold m-1'> What is Semantics Tags? </h1>
                <p className='m-1 p-1'> ✔ The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. </p>
                <p className='m-1 p-1'>✔ The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages. This article will focus on 'What is Semantics in HTML'.</p>
                <p className='m-1 p-1'>✔ Advantages of using semantics tags </p>
                <p className='m-1 p-1'> ✔ The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.</p>
                <p className='m-1 p-1'>✔ The pages made with semantic elements are much easier to read.</p>
                <p className='m-1 p-1'>✔ It has greater accessibility. It offers a better user experience.</p>
            </div>

        </div>
    );
};

export default Blogs;