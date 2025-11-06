const canvas = document.getElementById("canvas");



function drawTriangle(p1, p2, p3) {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.closePath();
    ctx.fill();
}


function sierpinski(p1, p2, p3, depth) {
    if (depth === 0) {
        drawTriangle(p1, p2, p3);
        return;
    }


    const m1 = midpoint(p1, p2);
    const m2 = midpoint(p2, p3);
    const m3 = midpoint(p3, p1);


    sierpinski(p1, m1, m3, depth - 1);
    sierpinski(m1, p2, m2, depth - 1);
    sierpinski(m3, m2, p3, depth - 1);
}
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
function midpoint(a, b) {
    return { 
        x: (a.x + b.x) / 2, 
        y: (a.y + b.y) / 2 
    };
}


const A = { x: 400, y: 50 };
const B = { x: 100, y: 650 };
const C = { x: 700, y: 650 };


sierpinski(A, B, C, 7);
