$(function(){
  Vue.component('tsmenu',{
    props:{'menudata':{
      type:Array,
      default:function(){
        return [];
      }
    }},
    template:'\
     <ul><slot name="menu" v-for="item in menudata" :url=item.url :name=item.name :id=item.id></slot></ul>',
  });
  var app = new Vue({
    el:"#app",
    data:{
      menudata:[{name:'购物车实战',href:'./shopcar.html',id:'001'},
     {name:'菜单组件实战 ',href:'./menulist.html',id:'002'}]
    },
  });
});