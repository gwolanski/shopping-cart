import githubIcon from '../assets/github.svg'

export default function Footer() {
    return (
        <div className='footer'>
            <a href="https://github.com/gwolanski">
                <img src={githubIcon} alt="github icon" />
                <div>gwolanski</div>
            </a>
        </div>
    )
}