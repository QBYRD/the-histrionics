    const ham= document.getElementById('ham');
    const browse = document.getElementById('browse');
    const submitbutton = document.getElementById('submit');
    const contactus =document.getElementById('contactus');

    ham.addEventListener('click', () => {
        browse.classList.toggle('show');
    });

    