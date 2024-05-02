import error from "../../assets/others/404.gif"
const ErrorPage = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;