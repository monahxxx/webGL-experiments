document.addEventListener("DOMContentLoaded", function(event) {
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 5000);
    scene.add(camera);
    camera.position.set(500, 0, 1000);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    renderer = new THREE.CanvasRenderer( { alpha: true } );
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize( window.innerWidth, window.innerHeight );

    var canvasContainer = document.querySelector("#canvas");
        canvasContainer.appendChild( renderer.domElement);

    controls = new THREE.TrackballControls( camera, renderer.domElement );


//        var geometry = new THREE.BoxGeometry( 1, 1, 1 , 2, 2, 2);
//        var material = [
//            //делаем каждую сторону своего цвета
//            new THREE.MeshBasicMaterial( { color: 0xE01B4C }), // правая сторона
//            new THREE.MeshBasicMaterial( { color: 0x34609E }), // левая сторона
//            new THREE.MeshBasicMaterial( { color: 0x7CAD18 }), //верх
//            new THREE.MeshBasicMaterial( { color: 0x00EDB2 }), // низ
//            new THREE.MeshBasicMaterial( { color: 0xED7700 }), // лицевая сторона
//            new THREE.MeshBasicMaterial( { color: 0xB5B1AE }) // задняя сторона
//        ];
//        var geometry = new THREE.CircleBufferGeometry( 0, 0, 0, 6.3 );
//        var material = new THREE.MeshBasicMaterial( {
//            color: 0xffff00,
//            wireframe: false,
//            wireframeLinewidth:0,
//            morphTargets: true
//        });
//        var cube = new THREE.Mesh( geometry, material );
//        scene.add(cube);

    // var LineGeometry = new THREE.Geometry();
    // var LineMaterial = new THREE.LineBasicMaterial({color: 0xffffff, linewidth:0.5});
    //
    // var LinesPointsGeometry = new THREE.Geometry();

    // function createLine() {
    //     var xCord, yCord, zCord;
    //     xCord = Math.floor(Math.random(-1000, 2000)*1000);
    //     yCord = Math.floor(Math.random(-1000, 2000)*1000);
    //     zCord = Math.floor(Math.random(-1000, 2000)*1000);
    //
    //     LineGeometry.vertices.push(new THREE.Vector3(xCord, yCord, zCord));
    // }
    // for(i=0;i<90;i++){
    //     createLine();
    // }
    //
    // var lines = new THREE.Line(LineGeometry,LineMaterial);
    // scene.add(lines);


// POINTS
    var PointsGeometry = new THREE.Geometry();
    var PointsMaterial = new THREE.PointsMaterial({color: 0xffffff, size:1.3});

    var points;
    function createPoints() {
        var xCord, yCord, zCord;
        xCord = Math.floor(Math.random()*3000-300);
        yCord = Math.floor(Math.random()*3000-1000);
        zCord = Math.floor(Math.random()*3000);

        PointsGeometry.vertices.push(new THREE.Vector3(xCord, yCord, zCord));
        points = new THREE.Points(PointsGeometry,PointsMaterial);
    }

    for(i=0;i<9000;i++){
        createPoints();
    }


    scene.add(points);


// animation
    step = 0;
    dropStep = 0;
    function animate() {
        requestAnimationFrame( animate );
        // lines.rotation.x = Math.cos(step);
        // lines.rotation.y = Math.abs(Math.sin(step));
        // lines.position.x = step;

        points.position.z += 1;

        renderer.render( scene, camera );
        controls.update();
    }
    animate();



//        function dropAnimate() {
//            requestAnimationFrame( dropAnimate );
//            points.position.z += 0.01;
//            renderer.render( scene, camera );
//        }
//        dropAnimate();




// key down function
//     var timer;
//     $(window).keypress(function () {
//         if(timer){
//             return;
//         }
//         timer = setInterval(function () {
//             step += 0.01;
//         }, 25);
//     });
//     $(window).keyup(function () {
//         clearInterval(timer);
//         timer = null;
//     });
});

