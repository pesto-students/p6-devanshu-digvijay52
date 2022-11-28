var sortArrray = function(nums) {
    var k = 0;
    var count = [];
    for(var i=0; i<2-0+1; i++){
        count[i] = 0;
    }
    for(var j=0; j<nums.length; j++){
        count[nums[j]-0]++;
    }
    for(var m=0; m<count.length; m++){
        for(var n=0; n<count[m]; n++){
            nums[k++] = m + 0;
        }
    }
};