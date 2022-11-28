const Fib = (n) => ({
    [Symbol.iterator]: () => {
        let i= 1;
        let old =0, newl = 0;
        return {
            next: () => {
                if(i++ <= n) {
                    [old, newl] = [newl, (old + newl) || 1];
                    return { value: old, done: false}
                }
                else{
                    return { done: true }
                    }
        }
    }
}
});

console.log([ ...Fib(6) ]);
