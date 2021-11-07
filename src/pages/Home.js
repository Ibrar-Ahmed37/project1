import React from 'react'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

function Home() {
    const {t} = useTranslation();
    
    return (
        <div>
                <h1>{t("welcome")}</h1>
        </div>
    )
}

export default Home
