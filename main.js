canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
color="red";
width_of_line=4;
radius=5

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
color=document.getElementById("Color").value;
width_of_line=document.getElementById("Width_of_line").value;
radius=document.getElementById("Radius").value;
mouseevent="mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
current_position_mouse_x=e.clientX-canvas.offsetLeft;
current_position_mouse_y=e.clientY-canvas.offsetTop;
if (mouseevent=="mouseDown") {
console.log("Current position of x and y coordinates= ");
console.log("x = "+ current_position_mouse_x + "y = " + current_position_mouse_y);
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.arc(current_position_mouse_x,current_position_mouse_y,radius,0,2*Math.PI);
ctx.stroke();
}

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
mouseevent="mouseLeave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
mouseevent="mouseUp";
}