import React from 'react';
import './flex.scss';
import editorMobile from '../../images/illustration-editor-mobile.svg';
import laptopMobile from '../../images/illustration-laptop-mobile.svg';

function flex(props) {
    return (
        <div>
            {props.position === "right" ? (
            <div className="py-5">
                <div className="container--tab position-relative">
                    <h1 className='pt-2 text-center'>{props.title}</h1>
                    <div className='content d-flex align-items-center flex-wrap-reverse'>
                        <div className='content--div align-self-start'>
                            <div className='pt-5'>
                                <h1 className='mb-4'>{props.contentTitle1}</h1>
                                <p className='mt-1'>{props.content1}</p>
                            </div>
                            <div className='pt-4'>
                                <h1 className='mb-4'>{props.contentTitle2}</h1>
                                <p>{props.content2}</p>
                            </div>
                        </div>
                        <div className=''>
                            <img className='d-block d-md-none img-fluid pt-3' src={editorMobile} alt='tabMob' />
                            <img className='d-none d-md-block position-absolute start-25 top-0 pb-5' src={props.image} alt='tab' />
                        </div>
                    </div>
                </div>
            </div>
            ) : (
            <div className="">
                <div className="container--tab position-relative">
                    <h1 className='pt-2 text-center'>{props.title}</h1>
                    <div className='content2 d-flex align-items-center flex-wrap-reverse'>
                        <div className='content2--div me-2'>
                            <div className='mt-2'>
                                <h1 className='mb-4'>{props.contentTitle1}</h1>
                                <p className='mt-1'>{props.content1}</p>
                            </div>
                            <div className='pt-4'>
                                <h1 className=''>{props.contentTitle2}</h1>
                                <p>{props.content2}</p>
                            </div>
                        </div>
                        <div className=''>
                            <img className='d-block d-md-none img-fluid pt-3' src={laptopMobile} alt='tabMob' />
                            <img className='d-none d-md-block position-absolute end-50 top-0 pt-5' src={props.image} alt='tab' />
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default flex;