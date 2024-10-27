import me from '../../assets/png/portrait-bio.png'
import { AngularIcon, CSharpApiIcon, DotNetIcon, FigmaIcon, FigmaLogoIcon, JavascriptIcon, PhotoshopIcon, ReactIcon, TypescriptIcon } from '../pages/theme/icons'

export default function Skills() {
    return (
        <span className='z-10 grow flex items-center justify-center'>
            <span className='relative h-1/2 min-h-96 aspect-square'>
                <img src={me.src} className='h-full' alt="" />
                <AngularIcon className='absolute aspect-square h-20p top-0p right-50p' />
                <CSharpApiIcon className='absolute aspect-square h-20p top-100p right-50p' />
                <JavascriptIcon className='absolute aspect-square h-20p top-50p right-100p' />
                <FigmaLogoIcon className='absolute aspect-square h-20p top-50p right-0p' />
                <PhotoshopIcon className='absolute aspect-square h-20p top-25p right-25p f-round'/>
                <ReactIcon className='absolute aspect-square h-20p top-25p right-75p'/>
                <DotNetIcon className='absolute aspect-square h-20p top-75p right-25p'/>
                <TypescriptIcon className='absolute aspect-square h-20p top-75p right-75p f-round'/>
            </span>
        </span>
    )
}