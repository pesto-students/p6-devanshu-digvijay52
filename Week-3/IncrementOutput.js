function createIncrement() {
    let count=0;
    function increment() {
        count++;
        
    }
    let message= `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
    }
const [increment,log] =createIncrement();
increment();
increment();
increment();
log();

// The output is "Count is 0" because the message object is create only once in the createIncrement funciton
//  and then not updated when calling increment 