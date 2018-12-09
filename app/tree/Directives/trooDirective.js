(function () {
  angular
  .module('magicTree')
  .directive('trooDirective',treeDirectiveFun);
  treeDirectiveFun.$inject = ['$http'];
  function treeDirectiveFun($http) {
    return{
      link : treeFun,
      templateUrl:"app/tree/Templates/treeTemplate.html"
    }
    function treeFun(scope,element,attrs) {
      dat=scope.empId;
      scope.data;
      var treeArr=[];
$http({
  method: 'GET',
  url:'newdata.json'
}).then(function(response) {
  scope.data=response.data;
  console.log(scope.data);
})

scope.search=function(dat){
 console.log("hello");
 for(i=0;i<scope.data.length;i++)
 {
     if((scope.data[i].id)==dat)
     {
       console.log(scope.data[i].id);
       treeArr.push(scope.data[i].id);
       for(j=0;j<scope.data[i].parent.length;j++)
       {
         if(scope.data[i].parent[j]!="Null")
         {
           // console.log("parent"+scope.data[i].parent[j]);
           scope.search(scope.data[i].parent[j]);
         }
        }

     }
 }
}
    function createTree(elem){
      for(i=0;i<elem.length;i++){
          var para = document.createElement("p");
          var x = document.createElement("br");
          var node = document.createTextNode(elem[i]);
          para.appendChild(node);
          var element = document.getElementById("tree");
          element.appendChild(para);
          element.appendChild(x);

      }
    }

    }

  }
})();


// let found=0;
// for(i=0;i<scope.data.length;i++)
// {
//    if((scope.data[i].id)==(scope.empId))
//    {
//      found=1;
//      console.log("parent null");
//     console.log(scope.data[i].id);
//     treeArr.push(scope.data[i].id);
//     createTree(treeArr);
//     treeArr=[];
//     break;
//    }
//   else if(found==0)
//   {
//     // console.log("not in level one");
//     for(j=0;j<scope.data[i].items.length;j++)
//     {
//       if((scope.data[i].items[j].id)==(scope.empId))
//       {
//         found=1;
//         console.log("parent1 "+scope.data[i].id);
//         console.log(scope.data[i].items[j].id);
//         treeArr.push(scope.data[i].id);
//         treeArr.push(scope.data[i].items[j].id);
//         createTree(treeArr);
//         treeArr=[];
//          break;
//       }
//       else if(found==0)
//       {
//         // console.log("not in level two");
//         for(k=0;k<scope.data[i].items[j].items.length;k++)
//         {
//            if ((scope.data[i].items[j].items[k].id)==(scope.empId))
//            {
//              found=1;
//              console.log("parent1 "+scope.data[i].id);
//              console.log("parent2 "+scope.data[i].items[j].id);
//              console.log(scope.data[i].items[j].items[k].id);
//              treeArr.push(scope.data[i].id);
//              treeArr.push(scope.data[i].items[j].id);
//              treeArr.push(scope.data[i].items[j].items[k].id);
//              createTree(treeArr);
//              treeArr=[];
//               break;
//            }
//            else
//            {
//              // console.log("not in level three");
//              found=0;
//            }
//         }
//       }
//
//     }
//   }
// }
