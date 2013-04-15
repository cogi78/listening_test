/**
 * listening 福利請聽
 */



//一開始抓取data請先滿足一下格式 
// var data = [{
// source:'身心障礙者福利'
// id: 308
// tag1: 地區
// value1: 高雄市
// tag2: 主管機關
// value2:社會局
// tag3: 福利類別
// value: 住屋補助
// tag4:福利類別(政府劃分)
// value4:身心障礙
// tag5:身心障礙
// value5:是
//   }];
// var citylists_cz = [
//   '臺北市','新北市','臺中市','臺南市','高雄市','桃園縣','新竹縣','苗栗縣','彰化縣','南投縣','雲林縣','嘉義縣','屏東縣','宜蘭縣','花蓮縣','臺東縣','澎湖縣','金門縣','連江縣','基隆市','新竹市','嘉義市'
// ]
// var citylists = [
//   'TPE','TPQ','TXG','TNN','KHH','TAO','HSQ','MIA','CHA','NAN','YUN','CYQ','PIF','ILA','HUA','TTT','PEN','JME','LJF','KEE','HSZ','CYI'
// ]

var cities = [{cz:'臺北市',en:'TPE'},{cz:'新北市',en:'TPQ'},{cz:'臺中市',en:'TXG'},{cz:'臺南市',en:'TNN'},{cz:'高雄市',en:'KHH'},{cz:'桃園縣',en:'TAO'},{cz:'新竹縣',en:'HSQ'},{cz:'苗栗縣',en:'MIA'},{cz:'彰化縣',en:'CHA'},{cz:'南投縣',en:'NAN'},{cz:'雲林縣',en:'YUN'},{cz:'嘉義縣',en:'CYQ'},{cz:'屏東縣',en:'PIF'},{cz:'宜蘭縣',en:'ILA'},{cz:'花蓮縣',en:'HUA'},{cz:'臺東縣',en:'TTT'},{cz:'澎湖縣',en:'PEN'},{cz:'金門縣',en:'JME'},{cz:'連江縣',en:'LJF'},{cz:'基隆市',en:'KEE'},{cz:'新竹市',en:'HSZ'},{cz:'嘉義市',en:'CYI'}]


var selListData = {
  education: 'n',
  work: 'n',
  transportation: 'n',
  living: 'n',
  allowance: 'n',
  tax: 'n',
  medical: 'n',
  assistivedevice: 'n',
  emergency: 'n',
  socialinsurance: 'n'
};

var main = angular.module('lsMain', ['ui.bootstrap']);

/*  angular bootstrap ui */
function CollapseDemoCtrl($scope) {
    $scope.isCollapsed = false;
  }
main.factory('Data',function(){
    return selListData
})
main.factory('likelistData',function(){
  if (localStorage.likelists){
  var likelistsparse = JSON.parse(localStorage.likelists);
  }else{
    localStorage.likelists = {};
    likelistsparse = [];
  }
  return likelistsparse;
})

main.factory('cities',function(){
  return cities;
})


/* angular bootstrap ui end */


function lawListView($scope,Data){

  //console.log($scope.data);



}


function lsController($scope,Data,likelistData,cities){

  $scope.data = Data;  
  $scope.likelistdata = likelistData;
  $scope.cities = cities;

  $scope.sel = function(law,cz_law){
    switch(law)
    {
    case 'education':
      if ($scope.data.education== 'y'){
        $scope.data.education = 'n'
      }
      else{
        $scope.data.education= 'y'
      }
      break;
    case 'work':
      if ($scope.data.work== 'y'){
        $scope.data.work = 'n'
      }
      else{
        $scope.data.work= 'y'
      }
      break;
    case 'transportation':
      if ($scope.data.transportation== 'y'){
        $scope.data.transportation= 'n'
      }
      else{
        $scope.data.transportation= 'y'
      }
      break;
    case 'living':
      if ($scope.data.living== 'y'){
        $scope.data.living= 'n'
      }
      else{
        $scope.data.living= 'y'
      }
      break;
    case 'allowance':
      if ($scope.data.allowance== 'y'){
        $scope.data.allowance= 'n'
      }
      else{
        $scope.data.allowance= 'y'
      }
      break;
    case 'tax':
      if ($scope.data.tax== 'y'){
        $scope.data.tax= 'n'
      }
      else{
        $scope.data.tax= 'y'
      }
      break;
    case 'medical':
      if ($scope.data.medical== 'y'){
        $scope.data.medical= 'n'
      }
      else{
        $scope.data.medical= 'y'
      }
      break;
    case 'assistivedevice':
      if ($scope.data.assistivedevice== 'y'){
        $scope.data.assistivedevice= 'n'
      }
      else{
        $scope.data.assistivedevice= 'y'
      }
      break;
    case 'emergency':
      if ($scope.data.emergency== 'y'){
        $scope.data.emergency= 'n'
      }
      else{
        $scope.data.emergency= 'y'
      }
      break;
    case 'socialinsurance':
      if ($scope.data.socialinsurance== 'y'){
        $scope.data.socialinsurance= 'n'
      }
      else{
        $scope.data.socialinsurance= 'y'
      }
      break;
    }
    console.log($scope.data);
    // $scope.selList +=$scope.data
  }
  $scope.clearsel = function (){
    $scope.data.education = 'n';
    $scope.data.work= 'n';
    $scope.data.transportation= 'n';
    $scope.data.living= 'n';
    $scope.data.allowance= 'n';
    $scope.data.tax= 'n';
    $scope.data.medical= 'n';
    $scope.data.assistivedevice= 'n';
    $scope.data.emergency ='n';
    $scope.data.socialinsurance= 'n'
    console.log($scope.data);
  }
  $scope.savelist = function (){
    $scope.likelistdata.push($scope.data)
    console.log($scope.likelistdata);
    localStorage.likelists = JSON.stringify($scope.likelistdata);
  }
  //$scope.selList = 
}
// cartshopping.factory('Data',function(){
//   return data
// })


// function showcase($scope,Data){
//   $scope.cartdatas = Data;
  
//   $scope.deletethis = function (total,no){
//    // console.log($scope);
//     if($scope.cartdatas[no].del == 0){
//       $scope.caculatecount = $scope.caculatecount-$scope.cartdatas[no].thistotalprice;
//       $scope.cartdatas[no].del = 1;
//     }else{
//       $scope.cartdatas[no].del = 0;
//       $scope.caculatecount = $scope.caculatecount+$scope.cartdatas[no].thistotalprice;
//     }
//   }
//   $scope.countthis = function (nums,price,no){
//     $scope.this.cartdatas[no].thistotalprice = nums*price
//     var i = 0;
//     var a = 0;
//     for(i;i<$scope.this.cartdatas.length;i++){
//       a= a+($scope.this.cartdatas[i].thistotalprice);
//       console.log(a);
//       $scope.caculatecount =a;
//     }
//   }
  
//   $scope.caculatecount = totalprice ;
// }

main.directive('opentab',function(){
  return function(scope,element){
    element.bind('mousedown',function(){
      if(element.hasClass('active')){
        element.removeClass('active');
        var a = element.parent();
        a.parent().removeClass('done-true');
        //a.parent().find('input[type=text]').
      }else{
        element.addClass('active');
        var a = element.parent();
        a.parent().addClass('done-true');
      }
    })

  }
})

// main.directive('savelist',function(){
//   return function(scope,element){
//     element.bind('mousedown',function(){
//       localStorage.likelists = $scope.data
//     })

//   }
// })


// cartshopping.directive("delete",function(){
//   return function (scope,element){
//     //console.log(element);
//     element.bind('mousedown',function(){
//       console.log(scope.deletethis);
//       if(element.hasClass('active')){
//         element.removeClass('active');
//         var a = element.parent();
//         a.parent().removeClass('done-true');
//         //a.parent().find('input[type=text]').
//       }else{
//         element.addClass('active');
//         var a = element.parent();
//         a.parent().addClass('done-true');
//       }
//       console.log('oh,yo!');
//     })
//   }
// })
