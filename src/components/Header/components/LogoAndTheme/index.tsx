import { FC, useContext, useLayoutEffect } from "react";
import { ThemeContext } from "../../../../utils/ThemeContext";
import style from './LogoAndTheme.module.scss';


export const LogoAndTheme: FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className={style.logoAndThemeWrapp}>
                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34 66C51.6731 66 66 51.6731 66 34C66 16.3269 51.6731 2 34 2C16.3269 2 2 16.3269 2 34C2 51.6731 16.3269 66 34 66Z" stroke="#4C4C4C" strokeWidth="2.5"/>
                    <path d="M18.9773 35.3264H17.3555" stroke="#4C4C4C" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22.3003 27.822H13V41.7099" stroke="#4C4C4C" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M51.1641 32.3342V41.7096" stroke="#4C4C4C" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M55.9995 27.822H46.6992" stroke="#4C4C4C" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M31.5273 41.9594L26.1514 27" stroke="#4C4C4C" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M43.0503 27L37.6743 41.9594L34.5107 33.5358" stroke="#4C4C4C" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <button className={style.themeBtn} onClick={toggleTheme}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.45455C7.49091 5.45455 5.45455 7.49091 5.45455 10C5.45455 12.5091 7.49091 14.5455 10 14.5455C12.5091 14.5455 14.5455 12.5091 14.5455 10C14.5455 7.49091 12.5091 5.45455 10 5.45455ZM0.909091 10.9091H2.72727C3.22727 10.9091 3.63636 10.5 3.63636 10C3.63636 9.5 3.22727 9.09091 2.72727 9.09091H0.909091C0.409091 9.09091 0 9.5 0 10C0 10.5 0.409091 10.9091 0.909091 10.9091ZM17.2727 10.9091H19.0909C19.5909 10.9091 20 10.5 20 10C20 9.5 19.5909 9.09091 19.0909 9.09091H17.2727C16.7727 9.09091 16.3636 9.5 16.3636 10C16.3636 10.5 16.7727 10.9091 17.2727 10.9091ZM9.09091 0.909091V2.72727C9.09091 3.22727 9.5 3.63636 10 3.63636C10.5 3.63636 10.9091 3.22727 10.9091 2.72727V0.909091C10.9091 0.409091 10.5 0 10 0C9.5 0 9.09091 0.409091 9.09091 0.909091ZM9.09091 17.2727V19.0909C9.09091 19.5909 9.5 20 10 20C10.5 20 10.9091 19.5909 10.9091 19.0909V17.2727C10.9091 16.7727 10.5 16.3636 10 16.3636C9.5 16.3636 9.09091 16.7727 9.09091 17.2727ZM4.53636 3.25455C4.18182 2.9 3.6 2.9 3.25455 3.25455C2.9 3.60909 2.9 4.19091 3.25455 4.53636L4.21818 5.5C4.57273 5.85455 5.15455 5.85455 5.5 5.5C5.84545 5.14545 5.85455 4.56364 5.5 4.21818L4.53636 3.25455ZM15.7818 14.5C15.4273 14.1455 14.8455 14.1455 14.5 14.5C14.1455 14.8545 14.1455 15.4364 14.5 15.7818L15.4636 16.7455C15.8182 17.1 16.4 17.1 16.7455 16.7455C17.1 16.3909 17.1 15.8091 16.7455 15.4636L15.7818 14.5ZM16.7455 4.53636C17.1 4.18182 17.1 3.6 16.7455 3.25455C16.3909 2.9 15.8091 2.9 15.4636 3.25455L14.5 4.21818C14.1455 4.57273 14.1455 5.15455 14.5 5.5C14.8545 5.84545 15.4364 5.85455 15.7818 5.5L16.7455 4.53636ZM5.5 15.7818C5.85455 15.4273 5.85455 14.8455 5.5 14.5C5.14545 14.1455 4.56364 14.1455 4.21818 14.5L3.25455 15.4636C2.9 15.8182 2.9 16.4 3.25455 16.7455C3.60909 17.0909 4.19091 17.1 4.53636 16.7455L5.5 15.7818Z" fill="black" />
                </svg></button>
        </div>
    )
}