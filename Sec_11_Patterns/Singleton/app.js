// a Singleton object is an immediate anonymous function that can only return 1 instance of an object at a time
const singleton = (() => {
    let instance;

    const createInstance = () => new Object({name: 'Maynard James Keenan', age: 56});

    return {getInstance: () => {
        if(!instance) instance = createInstance();

        return instance;
    }};
})();

const instance_1 = singleton.getInstance();

console.log(instance_1);

const instance_2 = singleton.getInstance();

console.log(instance_1 === instance_2);