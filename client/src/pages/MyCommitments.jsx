import Header from "../compnents/navigtion/Header";
import usePermission from "../function/usePermission";

function MyCommitments() {
    const user = usePermission('user');
    return (
        <div>
            <Header />
            <h1>MyCommitments</h1>
        </div>
    )
}
export default MyCommitments;