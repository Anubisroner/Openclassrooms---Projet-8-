import '../styles/__Style.scss';


export function Banner({ content, className }) {
    return (
        <div className={className}>
            {content
                ? <p>{content}</p>
                : null}
        </div>
    )
}
