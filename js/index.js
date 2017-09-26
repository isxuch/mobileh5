$(function(){
  //$('body').click(function(){
    console.log('fdasfda');
    $.ajax({
         type: "get",
         url: "./json/icon.json",
         data: "",
         dataType: "json",
         beforeSen: function(){
           console.log('加载成功之前')
         },
         success: function(data){
           console.log(data)
           var result = '';
           var arrLen = data.lists.length;
           for(var i = 0; i < arrLen; i++){
             result +='<li>'+'<a href="'+data.lists[i].link+'">'+'<div class="dq_ul_t">'+'<img src="'+data.lists[i].img+'" />'+'</div>'+'<div class="dq_ul_b">'+data.lists[i].Country+'</div>'+'</a>'+'</li>';
           }
           console.log(arrLen);
           document.getElementById("dq_ul").innerHTML=result ;
         },
         error:function(data){
           console.log(data)
         }
     });
   //})
})
