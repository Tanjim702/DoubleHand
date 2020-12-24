
let xs = []
let ys = []
let r1 = 100
let r2 = 100
let m1 = 20;
let m2 = 20;
let a1 = 45;
let a2 = 0;
let changea1 = 0.05
let changea2 = 0.1
function setup() {
    createCanvas(400, 450)


}
function draw() {
   
    background(255)
    stroke(0)
    strokeWeight(2)
    translate(200, 225)
    let x1 = r1 * sin(a1)
    let y1 = r1 * cos(a1)
    let x2 = x1 + r2 * sin(a2)
    let y2 = y1 + r2 * cos(a2)
    xs.push(x2)
    ys.push(y2)

    line(0, 0, x1, y1)
    fill(0)
    ellipse(x1, y1, m1, m1)

    line(x1, y1, x2, y2)
    fill(0)
    ellipse(x2, y2, m2, m2)


    a1 += changea1
    a2 -= changea2
    beginShape()
 
    noFill()
    for(let uu=0;uu<xs.length && uu<ys.length;uu++){
        vertex(xs[uu],ys[uu])
    }
    endShape()

}
const a1input = document.getElementById('a1')
const a2input = document.getElementById('a2')
a1input.addEventListener('keyup',(e)=>{
    xs =[]
    ys = []
    changea1 = Math.floor(e.target.value)/30
    
})
a2input.addEventListener('keyup',(e)=>{
    xs =[]
    ys = []
    changea2 = parseFloat(e.target.value)/30
    
})

