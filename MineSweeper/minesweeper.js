function make2DArray(cols,rows){
    var arr= new Array(cols);
    for (let i=0;i<arr.length;i++){
        arr[i] = new Array(rows);
    }

    return arr;
}



var grid;
var cols = 20;
var rows = 20;
var w = 20;

var arry = [-1,-1,-1,0,0,1,1,1];
var arrx = [-1,0,1,-1,1,-1,0,1];

let Flagbutton;
var ismouseflag = 0;

function setup(){
    createCanvas(400,400);
    Flagbutton = createButton('Flag');
    // cols = floor(width/w);
    // rows = floor(height/w);

    grid = make2DArray(cols+1,rows+1);

    console.log(grid.length);

    for (let i=0;i<=cols;i++){
        for (let j=0;j<=rows;j++){
            grid[i][j] = new Cell(i*w,j*w,w);
        }
    }



    for (let i=1;i<cols;i++){
        for (let j=1;j<rows;j++){
            for (let k=0;k<8;k++){
                if (grid[i][j].bee)
                    grid[i+ arrx[k]][j + arry[k] ].num += 1;
            }
        }
    }

    console.log(arrx[1],arry[1]);


    
    

}

function draw(){
    background(255);
    for (let i=1;i<cols;i++){
        for (let j=1;j<rows;j++){
            grid[i][j].show();
        }
    }

    Flagbutton.mousePressed(changemouse);

}

function changemouse(){
    ismouseflag = !ismouseflag;
    console.log(ismouseflag);
}

function mousePressed(){
    var px = floor(mouseX/w);
    var py = floor(mouseY/w);
    if(px > cols || py > rows){
        return;
    }
    
    console.log(px,py);
    
    if (!ismouseflag){
        grid[px][py].revealed = 1;
        if(grid[px][py].num == 0){
            bfs(px,py);
        }
    }
    else{
        grid[px][py].revealed =1;
        grid[px][py].flag = 1;
    }
}

function bfs(sx,sy){
    var q = new Queue();
    var tp = [sx,sy];
    q.enqueue(tp);

    while (q.length()){
        var x = q.dequeue();
        console.log(x[0],x[1]);
        for(let k =0;k<8;k++){
            var nx = x[0]+arrx[k];
            var ny = x[1] + arry[k];
            if(nx > cols || ny > rows || nx < 0 || ny < 0){
                continue;
            }
            if(grid[nx][ny].num == 0 && grid[nx][ny].revealed == 0){
               q.enqueue([nx,ny]);
            }
            grid[nx][ny].revealed = 1;
        }
    }
    
}

function endsession(){
    text(dead,500,500);
    stop();
    
}