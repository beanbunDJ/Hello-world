$(document).on('click','input[type="checkbox"]',function(){
  var itemid = $(this).attr('item');
  for(i in obj.$data.list){
    if (obj.$data.list[i].id == parseInt(itemid)){
      if(obj.$data.list[i].select == false)
        obj.$data.list[i].select = true;
      else
        obj.$data.list[i].select = false;
    }
    
  }  
});

$(document).on('click','.select-all',function(){
  for(i in obj.$data.list){
    obj.$data.list[i].select = true;
  }
  obj.$data.selectall = false;
  obj.$data.delall = true;
});

$(document).on('click','.del-all',function(){
  for(i in obj.$data.list){
    obj.$data.list[i].select = false;
  }
  obj.$data.delall = false;
  obj.$data.selectall = true;
});
