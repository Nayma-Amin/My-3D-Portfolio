import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Loading = () => {
    return (
        <section className='w-full min-h-screen flex items-center justify-center'>
            <div>
                <div>
                    <TypeAnimation
                        className="bg-gradient-to-r from-blue-500 to-purple-600 font-Cinzel text-transparent bg-clip-text text-2xl md:text-4xl "
                        sequence={[
                            'coming  soon',
                            1000,
                            () => console.log('Sequence completed'),
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    />

                </div>
                <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Loading;