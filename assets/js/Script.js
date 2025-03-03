

const tabs = document.querySelectorAll('[data-target]')
const tabscontent = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click' ,()=>{
        const target  = document.querySelector(tab.dataset.target)

        tabscontent.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
        })
    })







let icon = document.getElementById('theme-light')

if(localStorage.getItem("darkmode") === ('enable')){
    document.body.classList.add('darkmode')
}

icon.onclick = function(){
    document.body.classList.toggle('darkmode')

    if(document.body.classList.contains('darkmode')){
        localStorage.setItem('darkmode','enable')
    }
    else{
        localStorage.setItem('darkmode','disable')
    }
}






























// let icon = document.getElementById("theme-light")

// if(localStorage.getItem("darkmode") === ("enable"))
// {
//     document.body.classList.add("darkmode")
// }

// icon.onclick = function(){
//     document.body.classList.toggle("darkmode")

//     if(document.body.classList.contains("darkmode"))
//     {
//         localStorage.setItem("darkmode","enable")
//     }
//     else{
//         localStorage.setItem("darkmode","disable")
//     }
// }
// let icon = document.getElementById("theme-light");

// icon.onclick = function(){
//     document.body.classList.toggle("darkmode")
// }


