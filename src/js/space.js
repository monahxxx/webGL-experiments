document.addEventListener("DOMContentLoaded", function(event) {
    var scene = new THREE.Scene(),
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000);

    scene.add(camera);
    camera.position.set(0, 0, 1000);

    var renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setClearColor( 0x000000, 0 );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize( window.innerWidth, window.innerHeight );

    var canvasContainer = document.querySelector("#canvas");
    canvasContainer.appendChild( renderer.domElement);

    var controls = new THREE.TrackballControls( camera, renderer.domElement );



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
    var points = [];
    var pointsGM;
    var randomRange = function(min, max) {
        return Math.random()*(max-min) + min;
    };


    var texture = (new THREE.TextureLoader).load("../images/rick.png");
    // var material = new THREE.PointCloudMaterial({
    //     size: 20,
    //     // vertexColors: THREE.VertexColors,
    //     map: texture,
    //     alphaTest: 0.5
    // });

    function createPoints() {
        for(i = 0; i < 1000; i++){

            var xCord, yCord, zCord, point,
                PointsGeometry = new THREE.Geometry(),
                PointsMaterial = new THREE.PointsMaterial({color: 0xffffff, size:20, map: texture, alphaTest: 0.5});

            pointsGM = PointsGeometry;

            xCord = randomRange(-500, 500);
            yCord = randomRange(-500, 500);
            zCord = i;

            PointsGeometry.vertices.push(new THREE.Vector3());
            point = new THREE.Points(PointsGeometry,PointsMaterial);

            point.position.x = xCord;
            point.position.y = yCord;
            point.position.z = zCord;

            points.push(point);
            scene.add(point);
        }


    }
    createPoints();


    var worker = new Worker('js/worker.js');


    test = JSON.stringify(pointsGM,points);
    console.log(test);
    worker.postMessage(test);

    worker.onmessage = function (e){
        console.log(e.data);
    };


    function animate() {
        requestAnimationFrame( animate );

        for(i=0; i < points.length; i++){
            if(points[i].position.z > 1000) {
                points[i].position.z -= 1100;
            }

            points[i].position.z += 1;
        }

        renderer.render( scene, camera );
        controls.update();
    }
    animate();
});

