let Sun1;
let Sun2;
let Sun3;
let dt = 0.01;

let arr =[];



function setup(){
    createCanvas(1000,1000);
    let v1 = createVector(-1.25,0);
    let v2 = createVector(100,0);
    let v3 = createVector(150,0);

    let l1 = createVector(0,-100);
    let l2 = createVector(0,190);
    let l3 = createVector(0,210);

    Sun1 = new Planet(l1,v1,100,70);
    Sun2 = new Planet(l2,v2,0.5,40);
    Sun3 = new Planet(l3,v3,0.5,40);

    arr.push(Sun1);
    arr.push(Sun2);
    arr.push(Sun3);


}


function draw(){
    background(255);
    translate(500,500);

    for (let i = 0;i<arr.length;i++){
        for (let j = 0;j<arr.length;j++){
            if (i!=j){
                arr[i].calcForce(arr[j]);
            }
        }
    }

    for (let i=0;i<arr.length;i++){
        arr[i].update(dt);
        arr[i].show();
    }
}