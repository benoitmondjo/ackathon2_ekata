import './_button.scss'

type TypeProps = {
    label: string,
    url?: string
}

export function ButtonOrange({label, url}: TypeProps){

    return (
        <a  
            href={url ? url : ''}
            className="btn-orange">
                {label}
        </a>
    )
}

export function ButtonWhite({label, url}: TypeProps){

    return (
        <a  
            href={url ? url : ''}
            className="btn-white">
                {label}
        </a>
    )
}