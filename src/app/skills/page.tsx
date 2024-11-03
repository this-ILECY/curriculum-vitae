import me from '../../assets/png/portrait-bio.png'
import { AdoIcon, AgileIcon, AngularIcon, AngularMaterialIcon, ApiIcon, AspIcon, BootstrapIcon, CSharpApiIcon, CssIcon, DapperIcon, DockerIcon, DotNetIcon, ExpressIcon, FigmaIcon, FigmaLogoIcon, GitIcon, HTMLIcon, IllustratorIcon, JavascriptIcon, JQueryIcon, LinqIcon, MicroserviceIcon, NestJsIcon, NodeJsIcon, PhotoshopIcon, PostgressIcon, PrimengIcon, RabbitmqIcon, ReactIcon, RustIcon, SassIcon, SqlIcon, TailwindIcon, TypescriptIcon, UnityIcon, VBIcon, WebsocketIcon, WindowformAppIcon, XdIcon } from '../pages/theme/icons'

export default function Skills() {
    return (
        <span className='skills-component z-10 grow flex items-center justify-center'>
            <span className='main-container relative h-60p min-h-96 aspect-square'>
                <img src={me.src} className='h-full max-h-96' alt="" />
                <AngularIcon className='absolute aspect-square h-20p top-0p right-50p angular' />
                <CSharpApiIcon className='absolute aspect-square h-20p top-100p right-50p csharp' />
                <JavascriptIcon className='absolute aspect-square h-20p top-50p right-100p javascript' />
                <FigmaLogoIcon className='absolute aspect-square h-20p top-50p right-0p figma' />
                <PhotoshopIcon className='absolute aspect-square h-20p photoshop f-round photoshop' />
                <ReactIcon className='absolute aspect-square h-20p top-10p right-96p react' />
                <DotNetIcon className='absolute aspect-square h-20p top-96p right-4p dotnet' />
                <TypescriptIcon className='absolute aspect-square h-20p top-96p right-96p f-round typescript' />
                <RustIcon className='absolute aspect-square h-10p rust' />
                <AngularMaterialIcon className='absolute aspect-square h-10p material' />
                <PrimengIcon className='absolute aspect-square h-20p prime' />
                <SassIcon className='absolute aspect-square h-20p sass' />
                <GitIcon className='absolute aspect-square h-20p git' />
                <AgileIcon className='absolute aspect-square h-20p agile' />
                <IllustratorIcon className='absolute aspect-square h-10p f-round illustrartor' />
                <XdIcon className='absolute aspect-square h-10p f-round xd' />
                <WebsocketIcon className='absolute aspect-square h-10p socket' />
                <LinqIcon className='absolute aspect-square h-5p linq' />
                <WindowformAppIcon className='absolute aspect-square h-5p winform' />
                <ApiIcon className='absolute aspect-square h-10p api' />
                <PostgressIcon className='absolute aspect-square h-10p postgress' />
                <SqlIcon className='absolute aspect-square h-10p sql' />
                <AspIcon className='absolute aspect-square h-5p asp' />
                <AdoIcon className='absolute aspect-square h-5p ado' />
                <DapperIcon className='absolute aspect-square h-5p dapper' />
                <UnityIcon className='absolute aspect-square h-10p unity' />
                <NestJsIcon className='absolute aspect-square h-10p nest' />
                <VBIcon className='absolute aspect-square h-5p vb' />
                <RabbitmqIcon className='absolute aspect-square h-5p rabit' />
                <DockerIcon className='absolute aspect-square h-5p docker' />
                <NodeJsIcon className='absolute aspect-square h-10p node' />
                <ExpressIcon className='absolute aspect-square h-10p express' />
                <BootstrapIcon className='absolute aspect-square h-10p boot' />
                <TailwindIcon className='absolute aspect-square h-10p tail' />
                <JQueryIcon className='absolute aspect-square h-5p jquery' />
                <HTMLIcon className='absolute aspect-square h-5p html' />
                <CssIcon className='absolute aspect-square h-5p css' />
            </span>
        </span>
    )
}