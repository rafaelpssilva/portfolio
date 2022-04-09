import './Button.css'

function Button({ to, text }) {
    return <a className="btn-link" href={to}>{text}</a>
}

export default Button 