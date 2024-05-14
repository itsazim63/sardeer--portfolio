// Scroll Animation Start
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -600;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }else{
            sec.classList.remove('show-animate');
        }
    })
}
// Scroll Animation End

const switchToggle = document.querySelector('#switch-toggle');
const html = document.querySelector('html');
let isDarkmode = false
const localDarkmode = JSON.parse(localStorage.getItem('isDarkmode'))

const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>`

const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>`

// if (localDarkmode){
//     isDarkmode = localDarkmode
//     html.classList.remove('dark')
// }else{
//     html.classList.add('dark')
// }

function toggleTheme (){
    isDarkmode = !isDarkmode
    localStorage.setItem('isDarkmode', isDarkmode)
    switchTheme()
}

function switchTheme (){
    if(isDarkmode){
        html.classList.add('dark')
        switchToggle.classList.remove('bg-yellow-500', '-translate-x-2')
        switchToggle.classList.add('bg-black', 'translate-x-full')
        setTimeout(() => {
            switchToggle.innerHTML = darkIcon
        }, 250);
    }else{
        html.classList.remove('dark')
        switchToggle.classList.add('bg-yellow-500', '-translate-x-2')
        switchToggle.classList.remove('bg-black', 'translate-x-full')
        setTimeout(() => {
            switchToggle.innerHTML = lightIcon
        }, 250);
    }
}


// Dropdown Menu
    const toggleBtn = document.querySelector(".toggle_button");
    const dropdown = document.querySelector(".dropdown_menu");
        
    toggleBtn.addEventListener("click", () => {
        dropdown.classList.toggle('top-14');
    })

// Animation Text
    var typed= new Typed(".text", {
        strings:["Full-stack Developer" , "PHP & Laravel Development" , "Cyber Security Specialist" , "Penetration Tester"],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    })
    var typed= new Typed(".text_2", {
        strings:["Full-stack Developer" , "PHP & Laravel Development" , "Cyber Security Specialist" , "Penetration Tester"],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    })
