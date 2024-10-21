import { ComponentProps } from "@/app/interfaces/component.interface";

export function HomeIcon({ className }: ComponentProps) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    )
}
export function BriefcaseIcon({ className }: ComponentProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
    )
}
export function LightbulbIcon({ className }: ComponentProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
    )
}
export function GraduateIcon({ className }: ComponentProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
    )
}
export function AtSymbolIcon({ className }: ComponentProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
        </svg>

    )
}
export function DownloadIcon({ className }: ComponentProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
    )
}
export function ChevronDownIcon({ className }: ComponentProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
    )
}
export function CalendarIcon({ className }: ComponentProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
    )
}
export function FireIcon({ className }: ComponentProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
        </svg>
    )
}
export function PhoneIcon({ className }: ComponentProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
    )
}
export function MailIcon({ className }: ComponentProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
    )
}
export function TelegramIcon({ className }: ComponentProps) {
    return (
        <svg className={className} width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 1.0625C8.05885 1.0625 0 8.86951 0 18.5C0 28.1305 8.05885 35.9375 18 35.9375C27.9412 35.9375 36 28.1305 36 18.5C36 8.86951 27.9412 1.0625 18 1.0625ZM26.3433 12.9214C26.0724 15.6787 24.9003 22.3699 24.3038 25.4581C24.0515 26.7648 23.5546 27.203 23.0737 27.2458C22.0285 27.3391 21.2346 26.5767 20.2222 25.9337C18.638 24.9277 17.743 24.3014 16.2052 23.3197C14.428 22.1852 15.5801 21.5619 16.5929 20.5424C16.8579 20.2757 21.4635 16.2174 21.5527 15.8493C21.5638 15.8032 21.5745 15.6313 21.4689 15.541C21.3634 15.4508 21.2084 15.4813 21.0962 15.5059C20.9374 15.5409 18.4065 17.1614 13.5037 20.3674C12.7854 20.8453 12.1347 21.0781 11.5517 21.0659C10.909 21.0525 9.67275 20.7139 8.75366 20.4245C7.62641 20.0695 6.73048 19.8819 6.8085 19.279C6.84914 18.9649 7.29552 18.6438 8.14761 18.3157C13.395 16.101 16.8941 14.6408 18.6448 13.9352C23.6436 11.921 24.6823 11.5711 25.3593 11.5595C25.5082 11.5571 25.8412 11.5928 26.0568 11.7623C26.2003 11.8831 26.2917 12.0516 26.313 12.2345C26.3496 12.4617 26.3597 12.6921 26.3433 12.9214Z" fill="#5FBE71" />
        </svg>
    )
}
export function ArtstationIcon({ className }: ComponentProps) {
    return (
        <svg className={className} width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_220_7221)">
                <path d="M0.460632 27.0359L3.48407 32.2602C3.78462 32.8585 4.24561 33.3614 4.81553 33.7128C5.38546 34.0642 6.04187 34.2502 6.71141 34.25H26.7786L22.6161 27.0359H0.460632ZM35.6028 25.1094L23.9169 4.66953C23.6093 4.08981 23.1497 3.60482 22.5872 3.26664C22.0248 2.92845 21.3809 2.74985 20.7247 2.75H14.5091L32.6005 34.2219L35.4622 29.2648C35.5958 29.0398 36.9388 27.1766 35.6028 25.1094ZM19.6559 21.9102L11.5349 7.84766L3.41376 21.9102H19.6559Z" fill="#5FBE71" />
            </g>
            <defs>
                <clipPath id="clip0_220_7221">
                    <rect width="36" height="36" fill="white" transform="translate(0.320007 0.5)" />
                </clipPath>
            </defs>
        </svg>
    )
}
export function LinkedinIcon({ className }: ComponentProps) {
    return (
        <svg className={className} width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_220_7225)">
                <path d="M8.05821 32.0003H0.594643V10.9698H8.05821V32.0003ZM4.32241 8.10105C1.9358 8.10105 0 6.37137 0 4.28309C1.70823e-08 3.28001 0.455396 2.31801 1.266 1.60873C2.07661 0.899448 3.17604 0.500977 4.32241 0.500977C5.46879 0.500977 6.56821 0.899448 7.37882 1.60873C8.18943 2.31801 8.64482 3.28001 8.64482 4.28309C8.64482 6.37137 6.70821 8.10105 4.32241 8.10105ZM35.992 32.0003H28.5445V21.7628C28.5445 19.3229 28.4882 16.194 24.664 16.194C20.7836 16.194 20.1889 18.8448 20.1889 21.587V32.0003H12.7334V10.9698H19.8916V13.8386H19.9961C20.9925 12.1862 23.4265 10.4425 27.0579 10.4425C34.6114 10.4425 36 14.7948 36 20.4479V32.0003H35.992Z" fill="#5FBE71" />
            </g>
            <defs>
                <clipPath id="clip0_220_7225">
                    <rect width="36" height="36" fill="white" transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>
    )
}
export function InstagramIcon({ className }: ComponentProps) {
    return (
        <svg className={className} width="32" height="37" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_220_7223)">
                <path d="M16.1672 10.4142C11.6698 10.4142 8.04212 14.0212 8.04212 18.4931C8.04212 22.9649 11.6698 26.572 16.1672 26.572C20.6646 26.572 24.2923 22.9649 24.2923 18.4931C24.2923 14.0212 20.6646 10.4142 16.1672 10.4142ZM16.1672 23.7454C13.2608 23.7454 10.8848 21.3899 10.8848 18.4931C10.8848 15.5962 13.2538 13.2407 16.1672 13.2407C19.0806 13.2407 21.4496 15.5962 21.4496 18.4931C21.4496 21.3899 19.0736 23.7454 16.1672 23.7454ZM26.5198 10.0837C26.5198 11.1313 25.6712 11.9681 24.6246 11.9681C23.571 11.9681 22.7295 11.1243 22.7295 10.0837C22.7295 9.04307 23.5781 8.19932 24.6246 8.19932C25.6712 8.19932 26.5198 9.04307 26.5198 10.0837ZM31.9011 11.9962C31.7809 9.47197 31.2011 7.23603 29.3413 5.39385C27.4886 3.55166 25.2398 2.9751 22.7012 2.84854C20.0848 2.70088 12.2426 2.70088 9.62612 2.84854C7.09455 2.96807 4.84584 3.54463 2.98605 5.38682C1.12627 7.229 0.55348 9.46494 0.426194 11.9892C0.277694 14.5907 0.277694 22.3884 0.426194 24.9899C0.546409 27.5142 1.12627 29.7501 2.98605 31.5923C4.84584 33.4345 7.08748 34.011 9.62612 34.1376C12.2426 34.2853 20.0848 34.2853 22.7012 34.1376C25.2398 34.0181 27.4886 33.4415 29.3413 31.5923C31.194 29.7501 31.7738 27.5142 31.9011 24.9899C32.0496 22.3884 32.0496 14.5978 31.9011 11.9962ZM28.521 27.7813C27.9694 29.1595 26.9016 30.2212 25.5086 30.7767C23.4225 31.5993 18.4725 31.4095 16.1672 31.4095C13.8619 31.4095 8.90484 31.5923 6.82584 30.7767C5.43984 30.2282 4.37205 29.1665 3.81341 27.7813C2.98605 25.7071 3.17698 20.7853 3.17698 18.4931C3.17698 16.2009 2.99312 11.272 3.81341 9.20478C4.36498 7.82666 5.43277 6.76494 6.82584 6.20947C8.91191 5.38682 13.8619 5.57666 16.1672 5.57666C18.4725 5.57666 23.4296 5.39385 25.5086 6.20947C26.8946 6.75791 27.9623 7.81963 28.521 9.20478C29.3483 11.279 29.1574 16.2009 29.1574 18.4931C29.1574 20.7853 29.3483 25.7142 28.521 27.7813Z" fill="#5FBE71" />
            </g>
            <defs>
                <clipPath id="clip0_220_7223">
                    <rect width="31.68" height="36" fill="white" transform="translate(0.320007 0.5)" />
                </clipPath>
            </defs>
        </svg>
    )
}
export function FigmaIcon({ className }: ComponentProps) {
    return (
        <svg className={className} width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_221_966)">
                <g clip-path="url(#clip1_221_966)">
                    <path d="M16.1169 30.4939C16.1169 32.7132 14.3301 34.4927 12.1578 34.4927C9.98547 34.4927 8.19873 32.7132 8.19873 30.4939C8.19873 28.2746 9.98547 26.4951 12.1578 26.4951H16.1169V30.4939Z" fill="#5FBE71" stroke="#5FBE71" stroke-width="4" />
                    <path d="M8.19873 18.4964C8.19873 16.277 9.98547 14.4976 12.1578 14.4976H16.1169V22.4952H12.1578C9.98547 22.4952 8.19873 20.7157 8.19873 18.4964Z" fill="#5FBE71" stroke="#5FBE71" stroke-width="4" />
                    <path d="M8.19873 6.4988C8.19873 4.27948 9.98547 2.5 12.1578 2.5H16.1169V10.4976H12.1578C9.98547 10.4976 8.19873 8.71812 8.19873 6.4988Z" fill="#5FBE71" stroke="#5FBE71" stroke-width="4" />
                    <path d="M20.1169 2.5H24.076C26.2483 2.5 28.0351 4.27948 28.0351 6.4988C28.0351 8.71812 26.2483 10.4976 24.076 10.4976H20.1169V2.5Z" fill="#5FBE71" stroke="#5FBE71" stroke-width="4" />
                    <path d="M28.0351 18.4964C28.0351 20.7157 26.2483 22.4952 24.076 22.4952C21.9037 22.4952 20.1169 20.7157 20.1169 18.4964C20.1169 16.277 21.9037 14.4976 24.076 14.4976C26.2483 14.4976 28.0351 16.277 28.0351 18.4964Z" fill="#5FBE71" stroke="#5FBE71" stroke-width="4" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_221_966">
                    <rect width="36" height="36" fill="white" transform="translate(0 0.5)" />
                </clipPath>
                <clipPath id="clip1_221_966">
                    <rect width="36" height="36" fill="white" transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>

    )
}
export function RayvarzIcon({ className }: ComponentProps) {
    return (
        <svg className={className} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.032 0C42.032 0 67.9536 2.59245 72 31.8149V40.7153H40.2591L72 72H62.2554L30.4102 40.5023L30.4644 33.6267H64.921C64.921 33.6267 65.4549 11.7767 41.01 6.98L6.71611 7.08854L6.82457 40.9282C6.82457 40.9282 8.84774 62.3524 31.0025 65.3915L45.1689 65.5502L51.8809 72H30.794C0.479723 67.8421 0 40.5566 0 40.5566V0H42.032Z" fill="#5FBE71" />
        </svg>

    )
}
export function WiraIcon({ className }: ComponentProps) {
    return (
        <svg className={className} width="67" height="72" viewBox="0 0 67 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8913 62.5427L33.09 71.5L66.3581 53.5641L66.308 18.3363L33.167 0.5L0.0761719 18.2687V36.0907L33.2171 53.8807L16.8913 62.5427Z" fill="#633E98" />
            <path d="M0.0761719 18.2687L16.7796 27.3042L33.6024 17.8489L50.1479 27.137L66.308 18.3363L33.167 0.5L0.0761719 18.2687Z" fill="#633E98" />
            <path d="M16.7798 27.3042L33.6026 35.9982L50.1481 27.137L33.6026 17.8489L16.7798 27.3042Z" fill="#11B5E9" />
            <path d="M16.7798 27.3042V45.0586L33.2173 53.8807L33.6026 35.9982L16.7798 27.3042Z" fill="#3A66B1" />
            <path d="M50.1482 27.137L33.6027 35.9982L33.2174 53.8808L50.1482 45.2721V27.137Z" fill="#2D7ABF" />
            <path d="M0.0761719 18.2687L16.7796 27.3042L33.6024 17.8489L50.1479 27.137L66.308 18.3363L33.167 0.5L0.0761719 18.2687Z" fill="#6F59A6" />
        </svg>

    )
}