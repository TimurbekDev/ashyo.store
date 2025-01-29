import React from "react"

export const LocationIcon = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8.66406C9.10457 8.66406 10 7.76863 10 6.66406C10 5.55949 9.10457 4.66406 8 4.66406C6.89543 4.66406 6 5.55949 6 6.66406C6 7.76863 6.89543 8.66406 8 8.66406Z" stroke="#545D6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.99739 1.33203C6.58291 1.33203 5.22635 1.89393 4.22616 2.89413C3.22597 3.89432 2.66406 5.25088 2.66406 6.66536C2.66406 7.9267 2.93206 8.75203 3.66406 9.66536L7.99739 14.6654L12.3307 9.66536C13.0627 8.75203 13.3307 7.9267 13.3307 6.66536C13.3307 5.25088 12.7688 3.89432 11.7686 2.89413C10.7684 1.89393 9.41188 1.33203 7.99739 1.33203V1.33203Z" stroke="#545D6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const ArrowIcon: React.FC<{ classList?: string }> = ({ classList }) => {
    return (
        <svg className={`${classList} duration-300`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.96484 1.26147L5.00112 4.71674L1.00004 1.30481" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const SearchIcon: React.FC<{ classList: string }> = ({ classList }) => {
    return (
        <svg className={classList} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0918 16.9083L15.0002 13.8416C16.2002 12.3453 16.7814 10.446 16.6242 8.53434C16.4669 6.62267 15.5832 4.84391 14.1548 3.56379C12.7263 2.28368 10.8617 1.59951 8.94427 1.65198C7.02686 1.70445 5.20243 2.48956 3.84612 3.84587C2.4898 5.20219 1.70469 7.02662 1.65222 8.94402C1.59976 10.8614 2.28392 12.7261 3.56403 14.1545C4.84415 15.583 6.62292 16.4667 8.53458 16.6239C10.4462 16.7812 12.3455 16.2 13.8418 14.9999L16.9085 18.0666C16.986 18.1447 17.0781 18.2067 17.1797 18.249C17.2812 18.2913 17.3902 18.3131 17.5002 18.3131C17.6102 18.3131 17.7191 18.2913 17.8206 18.249C17.9222 18.2067 18.0144 18.1447 18.0918 18.0666C18.242 17.9112 18.326 17.7035 18.326 17.4874C18.326 17.2713 18.242 17.0636 18.0918 16.9083ZM9.16683 14.9999C8.01311 14.9999 6.88529 14.6578 5.926 14.0168C4.96672 13.3759 4.21904 12.4648 3.77753 11.3989C3.33602 10.333 3.2205 9.16012 3.44558 8.02856C3.67066 6.89701 4.22624 5.8576 5.04204 5.0418C5.85785 4.22599 6.89725 3.67042 8.0288 3.44534C9.16036 3.22026 10.3332 3.33578 11.3992 3.77729C12.4651 4.2188 13.3761 4.96647 14.0171 5.92576C14.658 6.88505 15.0002 8.01286 15.0002 9.16659C15.0002 10.7137 14.3856 12.1974 13.2916 13.2914C12.1977 14.3853 10.7139 14.9999 9.16683 14.9999Z" fill="white" />
        </svg>

    )
}

export const CompareIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.00329 4.05781C5.91185 4.02441 5.80964 4.06169 5.76119 4.14613L4.97192 5.52168L1.02749 12.2457C1.00949 12.2764 1 12.3113 1 12.3469V12.5218C1 14.8974 2.98419 16.8301 5.42308 16.8301C7.86196 16.8301 9.84615 14.8974 9.84615 12.5218V12.3469C9.84615 12.3113 9.83667 12.2764 9.81867 12.2457L6.40338 6.4221C6.30852 6.26035 6.46839 6.06872 6.64452 6.13306L9.80661 7.28807C9.83354 7.29791 9.84615 7.32317 9.84615 7.35184C9.84615 8.42463 10.5248 9.33826 11.4822 9.72808C11.5611 9.76019 11.6154 9.83536 11.6154 9.92052V20.0767C11.6154 20.1871 11.5258 20.2767 11.4154 20.2767H8.27692C8.16647 20.2767 8.07692 20.3662 8.07692 20.4767V21.8C8.07692 21.9105 8.16647 22 8.27692 22H13.1846C13.2951 22 13.3846 21.9105 13.3846 21.8V9.92031C13.3846 9.83525 13.4387 9.76018 13.5174 9.72795C13.858 9.58855 14.1649 9.38121 14.4183 9.11933C14.4765 9.05911 14.5645 9.03628 14.6429 9.06597L18.462 10.5129C18.5778 10.5568 18.6263 10.6943 18.5636 10.8011L15.1813 16.5678C15.1633 16.5985 15.1538 16.6334 15.1538 16.669V16.8438C15.1538 19.2186 17.138 21.1383 19.5769 21.1383C22.0158 21.1383 24 19.2186 24 16.8438V16.669C24 16.6334 23.9905 16.5985 23.9725 16.5678L19.6127 9.13614C19.5896 9.09668 19.5536 9.06635 19.5108 9.05021L15.1988 7.42423C15.1686 7.41282 15.1538 7.38418 15.1538 7.35184C15.1538 5.92666 13.9632 4.76687 12.5 4.76687C12.1145 4.76832 11.7341 4.85208 11.3854 5.01227C11.0794 5.15289 10.8044 5.34939 10.5752 5.59069C10.5176 5.65129 10.4301 5.67499 10.3516 5.64631L6.00329 4.05781ZM12.5 6.49019C12.7278 6.50011 12.9428 6.59523 13.1004 6.75573C13.258 6.91624 13.3459 7.12976 13.3459 7.35184C13.3459 7.57392 13.258 7.78745 13.1004 7.94795C12.9428 8.10846 12.7278 8.20357 12.5 8.2135C12.2722 8.20357 12.0572 8.10846 11.8996 7.94795C11.742 7.78745 11.6541 7.57392 11.6541 7.35184C11.6541 7.12976 11.742 6.91624 11.8996 6.75573C12.0572 6.59523 12.2722 6.50011 12.5 6.49019ZM5.25058 8.52127C5.32786 8.38955 5.51829 8.38955 5.59557 8.52127L7.2606 11.3589C7.33884 11.4922 7.24269 11.6601 7.08811 11.6601H3.75805C3.60346 11.6601 3.50732 11.4922 3.58555 11.3589L5.25058 8.52127ZM19.4044 12.8425C19.4817 12.7108 19.6721 12.7108 19.7494 12.8425L21.4065 15.6672C21.4847 15.8005 21.3886 15.9684 21.234 15.9684H17.9198C17.7652 15.9684 17.6691 15.8005 17.7473 15.6672L19.4044 12.8425ZM3.04679 13.6462C2.98489 13.5218 3.08093 13.3834 3.21988 13.3834H7.62754C7.76614 13.3834 7.86219 13.5211 7.80084 13.6454C7.60747 14.0371 7.31481 14.3763 6.94853 14.6299C6.5028 14.9385 5.96991 15.1051 5.42308 15.1067C4.37476 15.1067 3.47594 14.5086 3.04679 13.6462ZM17.1916 17.9527C17.1312 17.8285 17.2273 17.6917 17.3654 17.6917H21.7884C21.9265 17.6917 22.0226 17.8285 21.9623 17.9527C21.7701 18.3484 21.4769 18.6915 21.1087 18.9479C20.6617 19.2591 20.1264 19.4272 19.5769 19.4288C19.0275 19.4272 18.4921 19.2591 18.0451 18.9479C17.677 18.6915 17.3838 18.3484 17.1916 17.9527Z" fill="#545D6A" />
        </svg>
    )
}

export const LikeIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z" fill="#545D6A" />
        </svg>

    )
}

export const BasketCartIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z" fill="currentColor" />
        </svg>

    )
}

export const ProfileIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#545D6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#545D6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const MenuIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="#333333" />
            <path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="#333333" />
            <path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="#333333" />
        </svg>

    )
}

export const CloseIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>

    )
}


export const FacebookIcon = () => {
    return (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2928_507)">
                <path d="M20 10.3333C20 4.81044 15.5228 0.333252 10 0.333252C4.47719 0.333252 0 4.81036 0 10.3333C0 15.3245 3.65687 19.4616 8.4375 20.2118V13.2239H5.89844V10.3333H8.4375V8.13013C8.4375 5.62388 9.93047 4.2395 12.2146 4.2395C13.3088 4.2395 14.4531 4.43482 14.4531 4.43482V6.89575H13.1922C11.9498 6.89575 11.5625 7.66661 11.5625 8.45747V10.3333H14.3359L13.8926 13.2239H11.5625V20.2118C16.3431 19.4616 20 15.3246 20 10.3333Z" fill="#1877F2" />
                <path d="M13.8926 13.2239L14.3359 10.3333H11.5625V8.45747C11.5625 7.66653 11.9499 6.89575 13.1922 6.89575H14.4531V4.43481C14.4531 4.43481 13.3088 4.2395 12.2146 4.2395C9.93047 4.2395 8.4375 5.62388 8.4375 8.13013V10.3333H5.89844V13.2239H8.4375V20.2118C8.95439 20.2928 9.4768 20.3334 10 20.3333C10.5232 20.3334 11.0456 20.2928 11.5625 20.2118V13.2239H13.8926Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_2928_507">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.333252)" />
                </clipPath>
            </defs>
        </svg>

    )
}

export const YouTubeIcon = () => {
    return (
        <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2928_511)">
        <path d="M18.5804 1.97565C18.4714 1.59379 18.2588 1.24566 17.9638 0.965923C17.6688 0.68619 17.3016 0.484613 16.8989 0.381267C15.4245 0 9.49037 0 9.49037 0C9.49037 0 3.55598 0.0115407 2.08155 0.392807C1.67881 0.49616 1.31164 0.697747 1.01662 0.977494C0.721602 1.25724 0.509023 1.60539 0.400053 1.98726C-0.0459271 4.47119 -0.218931 8.25613 0.412299 10.6407C0.52128 11.0226 0.733864 11.3707 1.02888 11.6504C1.3239 11.9302 1.69106 12.1317 2.0938 12.2351C3.56823 12.6164 9.50246 12.6164 9.50246 12.6164C9.50246 12.6164 15.4366 12.6164 16.911 12.2351C17.3137 12.1317 17.6809 11.9302 17.9759 11.6504C18.271 11.3707 18.4836 11.0226 18.5926 10.6407C19.063 8.15325 19.2079 4.3707 18.5804 1.97572V1.97565Z" fill="#FF0000"/>
        <path d="M7.60156 9.01245L12.5243 6.30896L7.60156 3.60547V9.01245Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_2928_511">
        <rect width="19" height="12.6667" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
    )
}
export const TelegramIcon = () => {
    return (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2928_515)">
                <path d="M10 0.333252C7.34844 0.333252 4.80312 1.38747 2.92969 3.26216C1.05432 5.13759 0.000519484 7.68103 0 10.3333C0 12.9843 1.05469 15.5297 2.92969 17.4043C4.80312 19.279 7.34844 20.3333 10 20.3333C12.6516 20.3333 15.1969 19.279 17.0703 17.4043C18.9453 15.5297 20 12.9843 20 10.3333C20 7.68216 18.9453 5.13685 17.0703 3.26216C15.1969 1.38747 12.6516 0.333252 10 0.333252Z" fill="url(#paint0_linear_2928_515)" />
                <path d="M4.52768 10.2273C7.4433 8.9573 9.38705 8.11995 10.3589 7.71542C13.1371 6.56026 13.7136 6.35964 14.0902 6.35284C14.173 6.35151 14.3574 6.37198 14.4777 6.46925C14.5777 6.55128 14.6058 6.66222 14.6199 6.74011C14.6324 6.81792 14.6495 6.99526 14.6355 7.1337C14.4855 8.71495 13.8339 12.5521 13.5027 14.3232C13.3636 15.0726 13.0871 15.3239 12.8199 15.3484C12.2386 15.4018 11.798 14.9646 11.2355 14.596C10.3558 14.019 9.85892 13.66 9.00424 13.097C8.01674 12.4464 8.65736 12.0887 9.21986 11.5043C9.36674 11.3514 11.9261 9.02401 11.9745 8.81292C11.9808 8.78651 11.9871 8.68808 11.9277 8.6362C11.8699 8.58417 11.7839 8.60198 11.7214 8.61605C11.6324 8.63605 10.2277 9.56542 7.50268 11.404C7.10424 11.6781 6.7433 11.8117 6.4183 11.8046C6.06205 11.797 5.37455 11.6028 4.86361 11.4368C4.23861 11.2332 3.74018 11.1256 3.78393 10.7798C3.8058 10.5998 4.05424 10.4156 4.52768 10.2273Z" fill="white" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_2928_515" x1="10" y1="0.333252" x2="10" y2="20.3333" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2AABEE" />
                    <stop offset="1" stopColor="#229ED9" />
                </linearGradient>
                <clipPath id="clip0_2928_515">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.333252)" />
                </clipPath>
            </defs>
        </svg>

    )
}
export const TwitterIcon = () => {
    return (
        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 2.34525C18.2885 2.66697 17.5339 2.87815 16.7611 2.97177C17.566 2.47934 18.184 1.69957 18.4751 0.770477C17.7099 1.23395 16.8727 1.5605 15.9998 1.73601C15.2887 0.96275 14.2757 0.479492 13.1545 0.479492C11.0017 0.479492 9.25627 2.26101 9.25627 4.45828C9.25627 4.77017 9.29078 5.07381 9.3572 5.3651C6.11755 5.19911 3.24529 3.6151 1.32265 1.20783C0.987184 1.79548 0.794957 2.47904 0.794957 3.20813C0.794957 4.58858 1.48319 5.80639 2.52908 6.51995C1.91006 6.50016 1.30465 6.3295 0.763414 6.02222C0.763191 6.03889 0.763191 6.05555 0.763191 6.0723C0.763191 8.0001 2.10685 9.60828 3.89003 9.97381C3.31601 10.1332 2.7139 10.1565 2.12971 10.042C2.62571 11.6228 4.06533 12.7731 5.77103 12.8053C4.43695 13.8724 2.75611 14.5085 0.929887 14.5085C0.615199 14.5085 0.304965 14.4896 0 14.4529C1.72507 15.5818 3.77402 16.2406 5.97535 16.2406C13.1454 16.2406 17.0662 10.1776 17.0662 4.91972C17.0662 4.74714 17.0624 4.57555 17.0549 4.40495C17.818 3.84183 18.4767 3.14435 19 2.34525Z" fill="#55ACEE"/>
        </svg>
    )
}
export const AppStoreIcon = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2928_501)">
<path d="M7.008 0H24.992C28.8625 0 32 3.1375 32 7.008V24.992C32 28.8625 28.8625 32 24.992 32H7.008C3.1375 32 0 28.8625 0 24.992V7.008C0 3.1375 3.1375 0 7.008 0Z" fill="url(#paint0_linear_2928_501)"/>
<path d="M10.2525 23.2256L10.2555 23.2266L9.16137 25.1216C8.762 25.8133 7.8775 26.0503 7.18575 25.651C6.49412 25.2516 6.257 24.3671 6.65637 23.6753L7.46237 22.2793L7.53975 22.1453C7.67787 21.9468 8.01875 21.6041 8.70062 21.6686C8.70062 21.6686 10.3052 21.8427 10.4214 22.6767C10.4214 22.6767 10.4371 22.9511 10.2525 23.2256ZM25.7704 18.3856H22.3586C22.1262 18.37 22.0249 18.287 21.9849 18.2387L21.9824 18.2343L18.3302 11.9086L18.3255 11.9117L18.1065 11.5977C17.7475 11.0487 17.1775 12.4527 17.1775 12.4527C16.4969 14.0172 17.2741 15.7958 17.545 16.3335L22.6177 25.1197C23.017 25.8113 23.9015 26.0485 24.5934 25.649C25.285 25.2496 25.5221 24.3651 25.1226 23.6733L23.8542 21.4763C23.8296 21.4231 23.7869 21.2786 24.047 21.278H25.7704C26.5691 21.278 27.2166 20.6305 27.2166 19.8317C27.2166 19.033 26.5691 18.3855 25.7704 18.3855V18.3856ZM19.1436 20.3516C19.1436 20.3516 19.3257 21.278 18.6211 21.278H6.00875C5.21 21.278 4.5625 20.6305 4.5625 19.8317C4.5625 19.033 5.21 18.3855 6.00875 18.3855H9.25125C9.77475 18.3552 9.89875 18.053 9.89875 18.053L9.90175 18.0545L14.1342 10.7235L14.133 10.7232C14.2101 10.5816 14.1459 10.4477 14.1347 10.4266L12.7369 8.00548C12.3375 7.31385 12.5745 6.42922 13.2662 6.02997C13.958 5.6306 14.8425 5.86747 15.2419 6.55922L15.8901 7.6821L16.5372 6.56122C16.9366 5.8696 17.8211 5.63248 18.5129 6.03198C19.2046 6.43135 19.4416 7.31572 19.0422 8.00747L13.1525 18.2087C13.1267 18.2708 13.1189 18.3683 13.3105 18.3855H16.831L16.8317 18.4198C16.8317 18.4198 18.8665 18.4515 19.1436 20.3516Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_2928_501" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
<stop stopColor="#17C9FB"/>
<stop offset="1" stopColor="#1A74E8"/>
</linearGradient>
<clipPath id="clip0_2928_501">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

    )
}
export const PlayMarketIcon = () => {
    return (
        <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2928_493)">
<path d="M23.6037 22.3589C27.6612 20.131 30.7371 18.4334 31.0022 18.3014C31.8503 17.8504 32.7262 16.6566 31.0022 15.7294C30.4456 15.4377 27.4487 13.793 23.6037 11.6719L18.2734 17.055L23.6037 22.3587V22.3589Z" fill="#FFD900"/>
<path d="M18.269 17.0547L1.29688 34.1601C1.69525 34.2128 2.145 34.1072 2.67525 33.8157C3.7885 33.2063 15.59 26.7614 23.5993 22.3598L18.269 17.0547Z" fill="#F43249"/>
<path d="M18.2719 17.0555L23.6022 11.6989C23.6022 11.6989 3.87194 0.931234 2.67819 0.295609C2.22844 0.0292336 1.72444 -0.0498914 1.27344 0.0292336L18.2719 17.0555Z" fill="#00EE76"/>
<path d="M18.2714 17.0555L1.27287 0.0292969C0.583 0.188797 0 0.798297 0 2.0448V32.1454C0 33.2863 0.451125 34.108 1.29925 34.1873L18.2714 17.0555Z" fill="#00D3FF"/>
</g>
<defs>
<clipPath id="clip0_2928_493">
<rect width="32" height="34.25" fill="white"/>
</clipPath>
</defs>
</svg>

    )
}