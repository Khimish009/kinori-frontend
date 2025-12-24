import { useTranslation } from "react-i18next";

export default function Main() {
    const { t } = useTranslation("mainPage");

    return (
        <div>
            <div>{t("main")}</div>
        </div>
    )
}
