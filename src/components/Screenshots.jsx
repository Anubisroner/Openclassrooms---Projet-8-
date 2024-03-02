
const Screenshots = ({src, alt}) => {
    return (
        <div className="screenshots-container">
            <img src={src} alt={alt} className="screenshots" />
        </div>
    );
}

export default Screenshots;
