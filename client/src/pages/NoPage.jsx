import HeaderNav from "../compnents/navigtion/HeaderNav";
import "./css/noPage.css";
export default function NoPage() {
    return (<>
        <HeaderNav />
        <div className="not-found">
            <h1>העמוד שביקשת לא נמצא</h1>

            <p>
                אנו מתנצלים, העמוד שביקשת לא קיים באתר שלנו או שעבר ממקומו.
            </p>

            <p>
                אפשרויות להמשך:
                <ul>
                    <li>ודא שהכתובת שהקלדת נכונה</li>
                    <li>חזור לעמוד הבית</li>
                    <li>חפש באתר מילת מפתח רלוונטית</li>
                    <li>צור איתנו קשר בעמוד "צור קשר" אם אתה זקוק לעזרה</li>
                </ul>
            </p>
        </div>
    </>
    );
}   // End of NoPage()      