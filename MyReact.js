let globalId = 0;
let globalParent;
const componentState = new Map();
export function useState(initialstate)
{
    const id = globalId;
    globalId++;
    const parent = globalParent;
    return (() =>
    {
        const { cache , props, component } = componentState.get(parent);
        if (cache[id] == null)
        {
            cache[id] = { value: typeof initialstate == 'function' ? initialstate() : initialstate, }
        }
        const setState = state =>{
             if ( typeof state === 'function')
                {
                    cache[id].value = state(cache[id].value)
                }
                else
                {
                    cache[id].value = state
                }
            render(component, props, parent)
        }
        console.log(componentState);
        return [cache[id].value, setState];

    })();
}
export function render(component, props, parent)
{
    const state = componentState.get(parent) || { cache : []} // si map key exist it will return the array else gahdi tcreer array kher
    componentState.set(parent, { ...state, component, props})
    globalParent = parent;
    const output  = component(props);
    globalId = 0;
    parent.textContent = output;
}