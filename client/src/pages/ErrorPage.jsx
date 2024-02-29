import HeaderNav from "../components/navigtion/HeaderNav";
import "./css/errorPage.css";

export default function ErrorPage() {
    return (
        <>
            <HeaderNav />
            <div className="error-page">
                <div className="monkey">🙊</div>
                <h1> אנו מצטערים על אי הנוחות</h1>
                <p>
                    כנראה ישנה בעיה בשרתים שלנו
                    אנחנו עובדים במרץ בכדי לטפל בבעיה בהקדם אתה מוזמן לנסות שוב בקרוב,
                    תודה על ההבנה בברכה צוות האתר
                </p>
            </div>
        </>
    );
}