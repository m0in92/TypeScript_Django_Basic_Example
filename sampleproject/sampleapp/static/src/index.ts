console.log('hello world');

let headingObject: HTMLElement | null = document.getElementById('header-heading');
let buttonObject: HTMLElement | null = document.getElementById('section-button');
buttonObject!.onclick = () => {headingObject!.innerHTML = 'Pressed.'};