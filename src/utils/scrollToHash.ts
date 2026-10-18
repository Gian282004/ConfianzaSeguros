// Scrolls to the target section when navigating to a hash that's already active.
export function scrollToHash(hash:string)
{
    const element=document.querySelector(hash)
    element?.scrollIntoView({
        behavior:'smooth'
    })

}