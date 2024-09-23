import { render } from './MyReact.js';
import  Component  from './Component.js';

let propCount = 0;
let propCount2 = 0;

document.getElementById("btn-count").addEventListener('click', () => {
    propCount++;
    renderComponent();
})
document.getElementById("btn-count2").addEventListener('click', () => {
    propCount2++;
    renderComponent();
})
function renderComponent()
{
    render(Component, { propCount: propCount}, document.getElementById("root"));
    render(Component, { propCount: propCount2}, document.getElementById("root-2"));

}

renderComponent();
