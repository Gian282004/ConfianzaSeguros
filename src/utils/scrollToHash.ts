// Scrolls to the target section when navigating to a hash that's already active.
export function scrollToHash(hash:string)
{
    // Si el hash está vacío (va al inicio "/")
    if (!hash) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        return;
    }
    const element=document.querySelector(hash)
    element?.scrollIntoView({
        behavior:'smooth'
    })

}