function getSelectedOption(element) {
    if (!(element instanceof HTMLElement) || element.nodeName != "SELECT") {
        throw new Error(`Parameter must be a SELECT element`);
    };
    return element.options[element.options.selectedIndex];
}

export { getSelectedOption }