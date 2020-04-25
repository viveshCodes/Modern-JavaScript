window.onload = function(){
    // get the canvas and ctx by id
    let canvas = document.querySelector('#sky');
    let ctx = canvas.getContext("2d");

    // set canvas dimension to window height and width
    let W= window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    //generate the snow flakes and apply attributes
    let maxFlake = 100;
    let flakes = [];

    // loop through the empty flakes and apply attributes
    for(let i =0 ; i < maxFlake ; i++){
        flakes.push({
            x:Math.random()*W,
            y:Math.random()*H,
            r:Math.random()* 5 + 2,  // min of 2px and max of 7px
            d:Math.random() +1   // density of flake
        })
    }

    // draw flakes onto canvas
    function drawFlakes(){
        ctx.clearRect(0,0,W,H);
        ctx.fillStyle = 'white';
        ctx.beginPath();
        for(let i =0 ; i < maxFlake ; i++){
            let flake = flakes[i];
            ctx.moveTo(flake.x ,flake.y);
            ctx.arc(flake.x , flake.y , flake.r , 0, Math.PI * 2 ,true);
        }
        ctx.fill();
        moveFlakes();
    }

    // animate the flakes
    let angle = 0;
    function moveFlakes(){
        angle += 0.01;

        for(let i=0 ; i < maxFlake ; i++){
            //store current flake
            let flake = flakes[i];

            // upload X and Y coordinates of each snowflake
            flake.y += Math.pow(flake.d , 2) + 1;
            flake.x += Math.sin(angle)* 2 ; 
            
            // if the snowflake reaches the bottom , send a new one to the top
            if(flake.y > H){
                flakes[i] = {x : Math.random()*W , y: 0 , r:flake.r , d: flake.d};
            }
        }
    }
    setInterval(drawFlakes, 25);
}