

function doTask1(){
    setTimeout(() => {
        console.log("This is the Task of Function 1")
    }, 500);
    }
    function doTask2(){
        setTimeout(() => {
            console.log("This is the Task of Function 2")
        }, 2000);
    }
    function doTask3(){
        setTimeout(() => {
            console.log("This is the Task of Function 3");	}, 1000);
        }
        
    
        
    
    
async function asyncAwait() {
    console.time();
    console.log("Resolving task 1");
    let result1 = await doTask1();
    console.timeEnd();
    
    console.time();
    console.log("Resolving task 2");
    let result2 = await doTask2();
    console.timeEnd();
    
    console.time();
    console.log("Resolving task 3");
    let result3 = await doTask3();
    console.timeEnd();
    }
    
asyncAwait();

function* generatorfunc() {

    console.log("Generator Resolving task 1");
    yield doTask1();
    console.log("Generator Resolving task 2");
    yield doTask2();
    console.log("Generator Resolving task 3");
    yield doTask3();
    
    }
let genstart = generatorfunc();

genstart.next();
genstart.next();
genstart.next();
genstart.next();