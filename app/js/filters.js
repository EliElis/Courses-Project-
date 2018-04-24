//app.filter('searchItem', function(){
//    return function(array,search){
//        if(!search){
//            return array;
//        }
//        
//        var filtered =[];
//            for (var i=0; i<array.length; i++){
//              if(array[i].name.toLowerCase().indexOf(search.toLowerCase())>-1){
//                  filtered.push(array[i]);
//                  
//              }
//            }
//        return filtered;
//    }
//})

app.filter("minMaxPrice",function(){
    return function(array, min, max){
        if(!min&&!max){
            return array;
        }
        var filtered=[];
        for (var i=0; i<array.length; i++){
           if(test(min, max, array[i])){
               filtered.push(array[i]);
           } 
        }
        return filtered;
    }
    function test(min, max, testment){
        if(min && max){
            return testment.price >= min && testment.price <= max;
        }
        else if(min){
            return testment.price>=min;
        }
        else if(max){
             return testment.price<=max;
        }
	}
})
    