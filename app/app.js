'use strict';

// Declare app level module which depends on views, and core components
var myapp = angular.module('myApp', [])
    .controller('AppCtrl',['$scope','$window',function($scope,$html,$window){
        $scope.cards=[];
        $scope.cards1=[];
        $scope.cards2=[];
        $scope.cards4=[];
        $scope.cards5=[];
        $scope.comments = [];
        $scope.comments1_1=[];
        $scope.comments1_2=[];
        $scope.comments2_0=[];
        $scope.comments2_1=[];
        $scope.comments3_0=[];
        $scope.comment_new=[];
        $scope.comment_new2=[];
        $scope.comment_new3=[];
        $scope.comment_new4=[];
        $scope.date = new Date();
        $scope.Addcomment1_0 = function() {
            $scope.comments.push($scope.comment1_0);
            $scope.comment1_0 = '';
        }
        $scope.Addcomment1_1 = function() {
            $scope.comments1_1.push($scope.comment1_1);
            $scope.comment1_1 = '';
        }
        $scope.Addcomment1_2 = function() {
            $scope.comments1_2.push($scope.comment1_2);
            $scope.comment1_2 = '';
        }
        $scope.Addcomment2_1 = function() {
            $scope.comments2_1.push($scope.comment2_1);
            $scope.comment2_1 = '';
        }
        $scope.Addcomment2_0 = function() {
            $scope.comments2_0.push($scope.comment2_0);
            $scope.comment2_0 = '';
        }
        $scope.Addcomment3_0 = function() {
            $scope.comments3_0.push($scope.comment3_0);
            $scope.comment3_0 = '';
        }

        $scope.Addcomment4 = function() {
            $scope.comments4_0.push($scope.comment4_0);
            $scope.comment4_0 = '';
        }

        $scope.Addcomment = function(index){
            $scope.comment_new.push($scope.comment);
            $scope.comment='';
        }

        $scope.Addcomment2 = function(index){
            $scope.comment_new2.push($scope.name);
            $scope.name='';
        }

        $scope.Addcomment3 = function(index){
            $scope.comment_new3.push($scope.names);
            $scope.names='';
        }

        $scope.Addcomment4 = function(index){
            $scope.comment_new4.push($scope.namess);
            $scope.namess='';
        }


        $scope.DeleteCard1_0 = function(){
            var del= confirm("Are you sure want to delete?");
            if(del){
                $(".delCard").remove();
            }
        }
        $scope.DeleteCard1_1 = function(){
            var del= confirm("Are you sure want to delete?");
            if(del){
                $(".delCard1_1").remove();
            }
        }
        $scope.DeleteCard1_2 = function(){
            var del= confirm("Are you sure want to delete?");
            if(del){
                $(".delCard1_2").remove();
            }
        }
        $scope.DeleteCard2_0 = function(){
            var del= confirm("Are you sure want to delete?");
            if(del){
                $(".delCard2_0").remove();
            }
        }
        $scope.DeleteCard2_1 = function(){
            var del= confirm("Are you sure want to delete?");
            if(del){
                $(".delCard2_1").remove();
            }
        }
        $scope.DeleteCard3_0 = function(){
            var del= confirm("Are you sure want to delete?");
            if(del){
                $(".delCard3_0").remove();
            }
        }
        $scope.DeleteCard4_1 = function(){
            var del= confirm("Are you sure want to delete?");
            if(del){
                $(".delcard4_0").remove();
            }
        }

        $scope.DeleteCard = function(index){
            var del= confirm("Are you sure want to delete?");
            if(del){
                $scope.cards.splice(index,1);
            }
        }
        $scope.DeleteCard2 = function(index){
            var del= confirm("Are you sure want to delete?");
            if(del){
                $scope.cards1.splice(index,1);
            }
        }
        $scope.DeleteCard3 = function(index){
            var del= confirm("Are you sure want to delete?");
            if(del){
                $scope.cards2.splice(index,1);
            }
        }
        $scope.DeleteCard4 = function(index){
            var del= confirm("Are you sure want to delete?");
            if(del){
                $scope.cards5.splice(index,1);
            }
        }

        $scope.deleteSkill = function(index){
            $scope.comments.splice(index,1);
        }

        $scope.deleteSkill1_1 = function(index){
            $scope.comments1_1.splice(index,1);
        }
        $scope.deleteSkill1_2 = function(index){
            $scope.comments1_2.splice(index,1);
        }
        $scope.deleteSkill2_0 = function(index){
            $scope.comments2_0.splice(index,1);
        }
        $scope.deleteSkill2_1 = function(index){
            $scope.comments2_1.splice(index,1);
        }
        $scope.deleteSkill3_0 = function(index){
            $scope.comments3_0.splice(index,1);
        }
        $scope.deleteSkill4_0 = function(index){
            $scope.comments4_0.splice(index,1);
        }

        $scope.delList = function(){
            var delList= confirm("Are you sure want to delete the List?");
            if(delList){
                $("#List").remove();
            }
        }
        $scope.delList2 = function(){
            var delList= confirm("Are you sure want to delete the List?");
            if(delList){
                $("#List2").remove();
            }
        }
        $scope.delList3 = function(){
            var delList= confirm("Are you sure want to delete the List?");
            if(delList){
                $("#List3").remove();
            }
        }
        $scope.delList4 = function(){
            var delList= confirm("Are you sure want to delete the List?");
            if(delList){
                $("#List4").remove();
            }
        }

        var i=1;
        $scope.addCard = function(){

            alert("new card in List1");
            i+=1;
            $scope.cards.push(i);
        }

        var j=1;
        $scope.addCard2 = function(){

            alert("new card in List2");
            j+=1;
            $scope.cards1.push(j);
        }

        var k=1;
        $scope.addCard3 = function(){

            alert("new card in List3");
            k+=1;
            $scope.cards2.push(k);
        }

        $scope.addnewlist=function(){
            var list=1;
            $scope.cards4.push(list);
            $(".addnewList").remove();
        }
        var m=1;
        $scope.addCard4 = function(){

            alert("new card in List4");
            m+=1;
            $scope.cards5.push(m);
        }

        $( function() {
            $(".delCard").draggable();
            $(".delCard1_1").draggable();
            $(".delCard1_2").draggable();
            $(".delCard2_0").draggable();
            $(".delCard2_1").draggable();
            $(".delCard3_0").draggable();
            $(".delCard4_0").draggable();
            $("#mycard").draggable();
            $("#List").draggable();
            $("#List2").draggable();
            $("#List3").draggable();
            $("#List4").draggable();
            $("ul").draggable();

        });
    }])