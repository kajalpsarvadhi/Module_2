const timeSpent = () => console.log('test')
const measure = () =>{
    console.time('timeSpent()')
    timeSpent()
    console.timeEnd('timeSpent()')
};
measure();
