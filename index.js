
$(document).ready(function(){



 $(".download").click(function(e){
 	e.preventDefault();  
    window.location.href = 'resume.pdf';
 }).mouseenter(function(){
 	$(this).addClass("mouse-over")
 }).mouseleave(function(){
 	$(this).removeClass("mouse-over")
 })

$("#e-mail").mouseenter(function(){
 	$(this).addClass("mouse-over")
 }).mouseleave(function(){
 	$(this).removeClass("mouse-over")
 }).click(function(e){
 	window.location.href = 'mailto:gmpierce@ualberta.ca';
 })

 $("#github").mouseenter(function(){
 	$(this).addClass("mouse-over")
 }).mouseleave(function(){
 	$(this).removeClass("mouse-over")
 }).click(function(e){
 	window.location.href = "https://github.com/gillianpierce";
 })

  $("#linkedIn").mouseenter(function(){
 	$(this).addClass("mouse-over")
 }).mouseleave(function(){
 	$(this).removeClass("mouse-over")
 }).click(function(e){
 	window.location.href = "https://ca.linkedin.com/in/gillian-pierce";
 })

   $("#instagram").mouseenter(function(){
 	$(this).addClass("mouse-over")
 }).mouseleave(function(){
 	$(this).removeClass("mouse-over")
 }).click(function(e){
 	window.location.href = "https://www.instagram.com/_armagillo/" ;
 })



})
