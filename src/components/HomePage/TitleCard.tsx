import { COMPANY_TITLE } from '@assets/values/strings';

export default function TitleCard() {
    return (
        <div 
        className='hero min-h-screen flex flex-col justify-center items-center text-center relative'
        style={{
            backgroundImage: 'url(https://art.pixilart.com/sr294d2df943eaws3.png)',
            backgroundPosition: 'center calc(60% - 10px)',
            backgroundSize: 'cover'
        }}>
            <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
            <div className='relative z-10'>
                <h1 className='text-6xl text-white font-bold drop-shadow-md flex items-center'>
                    {COMPANY_TITLE}
                </h1>            
            </div>
        </div>
        
    )
}