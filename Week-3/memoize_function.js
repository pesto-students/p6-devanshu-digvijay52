

function add( ...numbers){
    for (var i=0, total = 0, len=numbers.length; i<len; i++) {
        total += numbers[i]; 
    }
    return total
}

function memoize(fn){
    const cache = new Map();
    return function( ...args){
        const key = args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }
        const val = fn( ...args);
        cache.set(key, val);
        return val;
        
    };
}

function time(fn){
    console.time();
    console.log(fn());
    console.timeEnd();
}

const memoizeAdd = memoize(add);

time(() => memoizeAdd(1,3,45,5));
time(() => memoizeAdd(1,32));
time(() => memoizeAdd(1,23,2));
time(() => memoizeAdd(1,3,45,5));
time(() => memoizeAdd(1,32));
time(() => memoizeAdd(1,23,2));