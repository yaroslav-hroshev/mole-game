interface CustomElementConstructor {
    new(): HTMLElement;
}
const render = (count: number, ElementClass: CustomElementConstructor): HTMLElement[] => {
    const elementsArray: Array<HTMLElement> = [];

    for (let i = 0; i < count; i++) {
        elementsArray[i] = new ElementClass();
    }
    return elementsArray
};

export default render;