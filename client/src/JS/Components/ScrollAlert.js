import '../../Styles/ScrollAlert.css'

export const ScrollAlert = () =>  {
    const hideScrollAlert = () => {
        const scrollAlert = document.querySelector('.scroll-alert')
        scrollAlert.classList.add('hidden')
    }

    window.addEventListener("scroll", hideScrollAlert)
    
    return (
        <h2 className="scroll-alert">scroll down...</h2>
    );
}
