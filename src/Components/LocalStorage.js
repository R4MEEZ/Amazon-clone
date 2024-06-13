export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('SaveToCart');
        console.log("state is loaded")
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('SaveToCart', serializedState);
        console.log("object is saved")
    } catch (error) {
console.log("object was not loaded")
    }
}