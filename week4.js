/*
    Paste the code for your week 4 exercise below.
*/
/* 
 MY LOGO DESIGN - "GRACE&CO BOUTIQUE"
 ASSIGNMENT 1 
 "PROCEDURALTHINKING"
 */

 var pic;
 let midx = 256;
 let midy = 350;
 let myFont;
 
 function preload() {
   pic = loadImage("model.jpeg");
 
 function preload() {
     myFont = "impact";
 }}
 
 function setup(){
 createCanvas (600,600)
  
 }
 
 function draw(){
    
   //IMAGE
   image(pic, 100,100,310,310);
   
   //CIRCLE FORMATION
   
   //LIGHT PINK
   stroke(255, 128, 191);
   strokeWeight(60);
   noFill();
   ellipse(midx, midx, 400);
   
    // YELLOW OUTLINE
   strokeWeight(10);
   noFill();
   stroke(255, 255, 153);
   ellipse(midx, midx, 390);
  
   //PINK
   stroke(255, 102, 179);
   strokeWeight(40)
   noFill();
   ellipse(midx, midx, 350);
   
   // YELLOW OUTLINE
   strokeWeight(5);
   noFill();
   stroke(255, 255, 153);
   ellipse(midx, midx, 310);
   
   // TEXT 
   textFont("impact");
   stroke(0,0,0);
   strokeWeight(1);
   fill(255, 255, 255);
   textSize(40);
   textStyle(ITALIC)
   text("GRACE&CO", 25, 250);
   
   textFont("impact");
   stroke(0,0,0);
   strokeWeight(1);
   fill(255, 255, 255);
   textSize(40);
   textStyle(ITALIC)
   text("BOUTIQUE ",320,250);
   
 }
