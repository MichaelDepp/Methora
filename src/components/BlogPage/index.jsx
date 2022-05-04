import React from 'react';
import Image from 'next/image';

const BlogPage = (props) => {
    if (!props.imageSrc) {
        return null;
    }

    return (
        <div className="h-132 max-w-4xl overflow-auto bg-theme-lightBg p-4 dark:bg-theme-bg sm:h-full">
            <h2 className="text-xl font-bold leading-none line-clamp-3 lg:text-4xl">
                {props.title}
            </h2>
            <h4 className="pt-2 text-xs font-normal line-clamp-1">
                {'By Michael Doe / 20 April 2022'}
            </h4>
            <div className="mt-4 h-44 w-full object-cover lg:mt-8 lg:h-96">
                <Image
                    src={props.imageSrc}
                    alt={props.imageSrc}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="py-4 text-justify lg:py-8">
                {/* Sample article caption, You can pass this as a prop too. */}
                <p>
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                        'Et malesuada fames ac turpis egestas. Eu facilisis sed odio morbi quis commodo odio aenean sed. Interdum consectetur libero id' +
                        'faucibus nisl tincidunt eget nullam non. Lacus suspendisse faucibus interdum posuere lorem. Ipsum dolor sit amet consectetur ' +
                        'adipiscing elit. Ut sem nulla pharetra diam. In mollis nunc sed id semper risus in hendrerit. Magna fermentum iaculis eu non ' +
                        'diam phasellus vestibulum lorem. Faucibus ornare suspendisse sed nisi lacus. Quisque id diam vel quam elementum pulvinar etiam ' +
                        'non quam. Quis varius quam quisque id diam vel. Lacinia quis vel eros donec ac odio tempor orci. Praesent elementum facilisis ' +
                        'leo vel fringilla. Phasellus vestibulum lorem sed risus ultricies. Egestas pretium aenean pharetra magna. Mollis aliquam ut ' +
                        'porttitor leo. Mi bibendum neque egestas congue quisque egestas diam. Nunc lobortis mattis aliquam faucibus purus in massa ' +
                        'tempor nec. In fermentum posuere urna nec tincidunt praesent semper. Pulvinar sapien et ligula ullamcorper malesuada. In ' +
                        'non quam. Quis varius quam quisque id diam vel. Lacinia quis vel eros donec ac odio tempor orci. Praesent elementum facilisis ' +
                        'leo vel fringilla. Phasellus vestibulum lorem sed risus ultricies. Egestas pretium aenean pharetra magna. Mollis aliquam ut ' +
                        'porttitor leo. Mi bibendum neque egestas congue quisque egestas diam. Nunc lobortis mattis aliquam faucibus purus in massa ' +
                        'tempor nec. In fermentum posuere urna nec tincidunt praesent semper. Pulvinar sapien et ligula ullamcorper malesuada. In ' +
                        'dictum non consectetur a erat nam. Pharetra convallis posuere morbi leo urna. At augue eget arcu dictum varius duis at. Mattis ' +
                        'molestie a iaculis at erat pellentesque adipiscing commodo elit. Lectus mauris ultrices eros in cursus. Posuere lorem ipsum dolor ' +
                        'sit amet. Laoreet suspendisse interdum consectetur libero id faucibus nisl. At auctor urna nunc id. Diam phasellus vestibulum ' +
                        'lorem sed risus. Id neque aliquam vestibulum morbi blandit.'}
                </p>
            </div>
        </div>
    );
};

export default BlogPage;
