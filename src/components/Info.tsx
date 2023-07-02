import React from 'react';

import {camera, book, searchbook} from '../assets';

const Info = () =>{
    return(
        <div className="bg-white rounded-[30px] h-[2400px] w-[1296px] m-auto mt-16 mb-48 relative shadow-2xl">
            <div className="m-auto w-[1225px] h-[1475px] flex flex-col items-center font-lato font-bold text-center gap-48">
                    <div className='w-[1130px] h-64 py-24'>
                        <h2 className='text-smrtBlack shadow1'>Начните свой путь прямо сейчас вместе с абсолютно новыми методиками</h2>
                        <p className='py-8 text-[#4C4F6A] text-[30px]'>Мы предлагаем новую программу подготовки, что позволит <br/>сделать ваш график и результат эффективнее! </p>
                    </div>
    
                <div className='text-white grid grid-cols-2 gap-12'>
    
                    <div className='w-[500px] h-[480px] rounded-[45px] bg-smrtBlue  relative flex justify-center items-center'>
                        <div className='gradient-counter-left flex justify-center items-center rounded-2xl'>
                            <p className='text-4xl'>1</p>
                        </div>
    
                        <div className='w-[450px] h-auto flex flex-col gap-6'>
                            <h5 className='text-5xl leading-[3rem]'>Игровые задания</h5>
                            <p className='text-2xl leading-10'>Позволяют укрепить полученные знания в долгосрочной памяти и проверять знания на практике  без наскученных заданий</p>
                        </div>
                    </div>
    
                    <div className='w-[500px] h-[480px] rounded-[45px] bg-smrtBlue  relative flex justify-center items-center'>
                        <div className='gradient-counter-right flex justify-center items-center rounded-2xl'>
                            <p className='text-4xl'>2</p>
                        </div>
    
                        <div className='w-[450px] h-auto flex flex-col gap-6'>
                            <h5 className='text-5xl leading-[3rem]'>Искусственный интеллект</h5>
                            <p className='text-2xl leading-10'>Позволяют укрепить полученные знания в долгосрочной памяти и проверять знания на практике  без наскученных заданий</p>
                        </div>
                    </div>
    
                    <div className='w-[500px] h-[480px] rounded-[45px] bg-smrtBlue  relative flex justify-center items-center'>
                        <div className='gradient-counter-bottom-left flex justify-center items-center rounded-2xl'>
                            <p className='text-4xl'>3</p>
                        </div>
    
                        <div className='w-[450px] h-auto flex flex-col gap-6'>
                            <h5 className='text-5xl leading-[3rem]'>Свободное расписание</h5>
                            <p className='text-2xl leading-10'>Позволяют укрепить полученные знания в долгосрочной памяти и проверять знания на практике  без наскученных заданий</p>
                        </div>
                    </div>
    
                    <div className='w-[500px] h-[480px] rounded-[45px] bg-smrtBlue  relative flex justify-center items-center'>
                        <div className='gradient-counter-bottom-right flex justify-center items-center rounded-2xl'>
                            <p className='text-4xl'>4</p>
                        </div>
    
                        <div className='w-[450px] h-auto flex flex-col gap-6'>
                            <h5 className='text-5xl leading-[3rem]'>Отсутствие преподавателей</h5>
                            <p className='text-2xl leading-10'>Позволяют укрепить полученные знания в долгосрочной памяти и проверять знания на практике  без наскученных заданий</p>
                        </div>
                    </div>
                </div>
    
                
                <div className='w-[1090px] flex flex-col gap-20'>
                    <h2 className='shadow2 text-smrtBlack'>Не забудем про классические дополнения к подготовке</h2>
    
                    <div className='flex flex-row justify-between align-top'>
                        <div className='flex flex-col w-[275px] h-64 justify-center items-center gap-4'>
                            <img src={camera} alt="cameraIcon"/>
                            <h4 className='text-[27px] font-bold text-smrtBlack'>Мастер - классы</h4>
                            <p className='text-[#4C4F6A]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis nobis tenetur similique iste! Ut, sit.</p>
                        </div>
        
                        <div className='border-r-2 border-[#4C4F6A]'></div>
                        <div className='flex flex-col w-[275px] h-64 justify-center items-center gap-4'>
                            <img src={book} alt="bookIcon"/>
                            <h4 className='text-[27px] font-bold text-smrtBlack'>Пробные тесты</h4>
                            <p className='text-[#4C4F6A]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis nobis tenetur similique iste! Ut, sit.</p>
                        </div>
                        <div className='border-r-2 border-[#4C4F6A]'></div>
                        <div className='flex flex-col w-[275px] h-64 justify-center items-center gap-4'>
                            <img src={searchbook} alt="searchBookIcon"/>
                            <h4 className='text-[27px] font-bold text-smrtBlack'>Ресурсы</h4>
                            <p className='text-[#4C4F6A]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis nobis tenetur similique iste! Ut, sit.</p>
                        </div>
                    </div>

                    <div className='w-96 h-18 m-auto'>
                        <button className="group relative w-96 h-14 overflow-hidden rounded-2xl bg-smrtBlue  text-white font-bold">
						Зарегистрироваться
						<div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
					</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Info;