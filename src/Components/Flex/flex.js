import React from 'react';


function flex(props) {
    return (
        <div>
            {props.position === "right" ? (
            <div className="py-5">
                <div className="container--tab position-relative">
                    <h1 className='pt-2 text-center'>{props.title}</h1>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='w-50 me-2 align-self-start pt-3 mt-3'>
                            <div className='mt-5 pt-5'>
                                <h1 className='mb-4'>{props.contentTitle1}</h1>
                                <p className='mt-1'>{props.content1}</p>
                            </div>
                            <div className='pt-4'>
                                <h1 className='mb-4'>{props.contentTitle2}</h1>
                                <p>{props.content2}</p>
                            </div>
                        </div>
                        <div className='w-50 h-50'>
                            <img className='position-absolute start-25 top-0 pb-5' src={props.image} alt='tab' />
                        </div>
                    </div>
                </div>
            </div>
            ) : (
            <div className="py-5 mt-5">
                <div className="container--tab position-relative">
                    <h1 className='pt-2 text-center'>{props.title}</h1>
                    <div className='d-flex justify-content-end align-items-center'>
                        <div className='w-50 me-2 align-self-start pt-3 mt-3'>
                            <div className='w-50 h-50'>
                                <img className='position-absolute end-50 top-0 pt-5' src={props.image} alt='tab' />
                            </div>
                            <div className='mt-5 pt-5'>
                                <h1 className='mb-4'>{props.contentTitle1}</h1>
                                <p className='mt-1'>{props.content1}</p>
                            </div>
                            <div className='pt-4'>
                                <h1 className='mb-4'>{props.contentTitle2}</h1>
                                <p>{props.content2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default flex;