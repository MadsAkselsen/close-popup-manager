
const elementCloseManager = new class extends EventTarget {
    constructor() {
        super();
        
        this._closeElements = this._closeElements.bind(this);

        window.addEventListener("click", (e) => {
            this._closeElements(e);
        })
    }

    //  element: Element|HTMLElement
    //  ctx: any
    //  closeFn: Function
    async addElement(closeFn, ctx, element) {
        // wrapping in setTimeout to make sure the element has been added to the DOM.
        // Otherwise, getBoundingClientRect() don't know the coordinates of the element.
        setTimeout(() => {
            this._elements.push({
                element,
                ctx,
                closeFn
            });
            
        }, 100)
    }

    _elements = [];

    _closeElements(e) {
        const x = e.clientX;
        const y = e.clientY;

        for (const [i, el] of this._elements.entries()) {
            const rect = el.element.getBoundingClientRect();
            const {top, right, bottom, left} = rect;

            if (x < left || x > right || y < top || y > bottom) {
                el.closeFn.apply(el.ctx);
                this._elements.splice(i, 1);
            }
        }
    }
}