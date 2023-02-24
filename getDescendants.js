export function getDescendants(obj){
  var d = new Array()
function temp(tempObj){
    if(tempObj?.children.length > 0){
        for(var x of tempObj.children){
            d[d.length] = x
                temp(x)
        }
    }else {
        return null
    }
    return d
}  
    return temp(obj)
}
