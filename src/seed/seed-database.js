import { initialData } from './seed.js';

const main = async () => {
    console.log(initialData);
}

(() => {
    if(process.env.NODE_ENV === 'production') return;
    main();
})();