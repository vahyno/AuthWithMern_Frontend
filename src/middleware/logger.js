const logger = (store) => (next) => (action) => {
    console.group(action.type);
        console.log('Action type: ', action);
        const returValue = next(action);
        console.log('The new state: ', store.getState());
    console.groupEnd();
    return returValue;
}   

export default logger;