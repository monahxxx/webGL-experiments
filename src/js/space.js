document.addEventListener("DOMContentLoaded", function(event) {

    //звезды галактики
    (function starsAdd() {
        var pointsScene = new THREE.Scene(),
            pointCamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000);

            pointsScene.add(pointCamera);
            pointCamera.position.set(0, 0, 1000);

        var renderer = new THREE.WebGLRenderer( { alpha: true } );
            renderer.setClearColor( 0x000000, 0 );
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize( window.innerWidth, window.innerHeight );

        var canvasContainer = document.querySelector("#canvas_bkg");
            canvasContainer.appendChild( renderer.domElement);

        var controls = new THREE.OrbitControls( pointCamera, renderer.domElement );

        // ADD POINTS
        var points = [];
        var pointsGM;

        var randomRange = function(min, max) {
            return Math.random()*(max-min) + min;
        };

        var PointsGeometry = new THREE.Geometry();
        function createPoints() {
            var xCord, yCord, zCord, point,
                PointsMaterial = new THREE.PointsMaterial({color: 0xffffff, size: 0.5});

            for(i=0; i<10000; i++){
                xCord = randomRange(-500, 500);
                yCord = randomRange(-500, 500);
                zCord = i;

                PointsGeometry.vertices.push(new THREE.Vector3(xCord, yCord, zCord));

                xCord = yCord = zCord = null;
            }

            var stars = new THREE.Points( PointsGeometry, PointsMaterial );

            pointsScene.add(stars);

        }
        createPoints();

        // ANIMATE
        function animate() {
            // requestAnimationFrame( animate );

            PointsGeometry.vertices.forEach( function(particle, index){
                particle.z += 0.2;
                if(particle.z > 1000){
                    particle.z -= 1000
                }
            });

            PointsGeometry.verticesNeedUpdate = true;

            renderer.render( pointsScene, pointCamera );
            controls.update();
        }

        // animate();

        setInterval(animate, 40);

    })();

    //     (function () {
    //         var moonScene = new THREE.Scene(),
    //             moonCamera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 5000);
    //
    //             moonScene.add(moonCamera);
    //             moonCamera.position.set(0, 0, 380);
    //
    //         var moonRenderer = new THREE.WebGLRenderer( { alpha: true } );
    //             moonRenderer.setClearColor( 0x000000, 0 );
    //             moonRenderer.setSize( window.innerWidth, window.innerHeight );
    //
    //         var canvasContainer = document.querySelector("#canvas");
    //             canvasContainer.appendChild( moonRenderer.domElement);
    //
    //         var controls = new THREE.TrackballControls( moonCamera, moonRenderer.domElement );
    //
    //         var moonGeometry = new THREE.SphereGeometry( 15, 60, 60);
    //         var moontexture = (new THREE.TextureLoader).load("../images/moon_txt.jpg");
    //         var moonMaterial = new THREE.MeshBasicMaterial({
    //                 map: moontexture,
    //                 overdraw: true,
    //                 ligths: true
    //             });
    //
    //         var venusGeometry = new THREE.SphereGeometry( 35, 60, 60);
    //         var venusTexture = (new THREE.TextureLoader).load("../images/venus.jpg");
    //         var venusMaterial = new THREE.MeshBasicMaterial({
    //             map: venusTexture,
    //             overdraw: true,
    //             ligths: true
    //         });
    //
    //
    //         var moon = new THREE.Mesh(moonGeometry, moonMaterial);
    //             moon.position.x = 0;
    //             moon.position.y = 0;
    //             moon.rotation.x = 15;
    //
    //         var venus = new THREE.Mesh(venusGeometry, venusMaterial);
    //             venus.position.x = 0;
    //             venus.position.y = 0;
    //
    //         var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
    //
    //         moonScene.add(moon, light, venus);
    //
    //
    //         var step = 0;
    //         function animate() {
    //             requestAnimationFrame( animate );
    //             step += 0.003;
    //
    //             moon.rotation.y += 0.001;
    //             venus.rotation.y +=0.001;
    //
    //             venus.position.x = 300*Math.cos(step) + 0;
    //             venus.position.z = 300*Math.sin(step) + 0;
    //
    //             moon.position.x = 100*Math.cos(step) + 0;
    //             moon.position.z = 100*Math.sin(step) + 0;
    //
    //
    //
    //             moonRenderer.render( moonScene, moonCamera );
    //             controls.update();
    //         }
    //         animate();
    // })();

    // (function () {
    //     var scene = new THREE.Scene(),
    //         camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000);
    //
    //     scene.add(camera);
    //     camera.position.set(0, 0, 1000);
    //
    //     var renderer = new THREE.WebGLRenderer( { alpha: true } );
    //     renderer.setClearColor( 0x000000, 0 );
    //     renderer.setPixelRatio(window.devicePixelRatio);
    //     renderer.setSize( window.innerWidth, window.innerHeight );
    //
    //     var canvasContainer = document.querySelector("#canvas");
    //     canvasContainer.appendChild( renderer.domElement);
    //
    //     var controls = new THREE.TrackballControls( camera, renderer.domElement );
    //
    //     // POINTS
    //     var points = [];
    //     var pointsGM;
    //     var randomRange = function(min, max) {
    //         return Math.random()*(max-min) + min;
    //     };
    //
    //
    //     var texture = (new THREE.TextureLoader).load("../images/rick.png");
    //     // var material = new THREE.PointCloudMaterial({
    //     //     size: 20,
    //     //     // vertexColors: THREE.VertexColors,
    //     //     map: texture,
    //     //     alphaTest: 0.5
    //     // });
    //
    //     function createPoints() {
    //         for(i = 0; i < 1000; i++){
    //
    //             var xCord, yCord, zCord, point,
    //                 PointsGeometry = new THREE.Geometry(),
    //                 PointsMaterial = new THREE.PointCloudMaterial({color: 0xffffff, size:1});
    //
    //             pointsGM = PointsGeometry;
    //
    //             xCord = randomRange(-500, 500);
    //             yCord = randomRange(-500, 500);
    //             zCord = i;
    //
    //             PointsGeometry.vertices.push(new THREE.Vector3());
    //             point = new THREE.Points(PointsGeometry,PointsMaterial);
    //
    //             point.position.x = xCord;
    //             point.position.y = yCord;
    //             point.position.z = zCord;
    //
    //             points.push(point);
    //             scene.add(point);
    //         }
    //
    //
    //     }
    //     createPoints();
    //
    //
    //     var worker = new Worker('js/worker.js');
    //
    //
    //     test = JSON.stringify(pointsGM,points);
    //     console.log(test);
    //     worker.postMessage(test);
    //
    //     worker.onmessage = function (e){
    //         console.log(e.data);
    //     };
    //
    //
    //     function animate() {
    //         requestAnimationFrame( animate );
    //
    //         for(i=0; i < points.length; i++){
    //             if(points[i].position.z > 1000) {
    //                 points[i].position.z -= 1100;
    //             }
    //
    //             points[i].position.z += 1;
    //         }
    //
    //         renderer.render( scene, camera );
    //         controls.update();
    //     }
    //     animate();
    // })();


	//созвездия
	// (function starsGroup(){
     //    let size = 250;
     //    let canvas = document.createElement('canvas');
     //    let ctx = canvas.getContext('2d');
     //    canvas.width = size;
     //    canvas.height = size;
	//
     //    var imageCoords = [];
     //    var testPath = [
     //        "../images/core_team_logo_print.png",
     //        "../images/adserver_team_logo_print.png",
     //        "../images/data_team_logo_print.png",
     //        "../images/devops_team_logo_print.png",
     //        "../images/dmp_team_logo_print.png",
     //        "../images/fireflies_team_logo_print.png",
     //        "../images/manage_team_logo_print.png",
     //        "../images/rge_team_logo_print.png",
     //        "../images/spartans_team_logo_print.png",
     //        "../images/vikings_team_logo_print.png"
     //    ];
	//
	//
     //    function loadImages(paths, callback){
     //        var imgs=[];
     //        paths.forEach(function(path, index){
     //            let img = new Image;
     //            img.onload = function(){
     //                imgs.push(img);
     //                if(callback){
	//                     callback(img);
     //                }
     //            };
     //            img.src = path;
     //        });
     //    }
	//
	//     var counter = 0;
     //    function getArrayFromImage(img){
	//
     //        let svgCoords = [];
     //            ctx.clearRect(0,0,size,size);
     //            ctx.drawImage(img, 0, 0, size, size);
     //        let data = ctx.getImageData(0, 0, size, size);
     //            data = data.data;
	//
     //        for(let y = 0; y < size; y++) {
     //            for(var x = 0; x < size; x++) {
     //                var red = data[((size * y) + x) * 4];
     //                var green = data[((size * y) + x) * 4 + 1];
     //                var blue = data[((size * y) + x) * 4 + 2];
     //                var alpha = data[((size * y) + x) * 4 + 3];
     //                if(alpha>0){
	//                     svgCoords.push([10*(x - size/2),10*(size/3 - y),[red/256,green/256,blue/256]]);
     //                }
     //            }
     //        }
	//
	//         counter += 1;
	//         fillUp(svgCoords, 40000);
	//
     //        if(counter === testPath.length){
	//             init();
     //        }
     //    }
	//
     //    function fillUp(array, max){
     //        let length = array.length;
     //        if(max < length){
     //            array = array.slice(0,max);
     //        } else{
     //            for(let i=0; i < max-length; i++){
     //                array.push(array[Math.floor(Math.random()*length)])
     //            }
     //        }
	//         imageCoords.push(array);
	//
	//         return imageCoords;
     //    }
	//
	//     loadImages(testPath,  getArrayFromImage);
	//
	//     function init() {
     //        var pointsScene = new THREE.Scene(),
     //            pointCamera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 7000);
	//
     //            pointsScene.add(pointCamera);
     //            pointCamera.position.set(0, 0, 3500);
	//
     //        var renderer = new THREE.WebGLRenderer( { alpha: true } );
     //            renderer.setClearColor( 0x000000, 0 );
     //            renderer.setPixelRatio(window.devicePixelRatio);
     //            renderer.setSize( window.innerWidth , window.innerHeight );
	//
     //        var canvasContainer = document.querySelector("#canvas");
     //            canvasContainer.appendChild( renderer.domElement);
	//
     //        var controls = new THREE.OrbitControls( pointCamera, renderer.domElement );
	//
     //        var texture = (new THREE.TextureLoader).load("../images/stars_bg.png");
     //        var PointsGeometry = new THREE.Geometry(),
     //            PointsMaterial = new THREE.PointsMaterial({color: 0xffffff, size: 45, map: texture, alpha: true});
	//
	//
     //        let finalCoordsArray = [];
	//
     //        for(let a = 0; a < imageCoords.length; a++){
     //            let imgCoord = imageCoords[a];
	//
     //            let ttest = [];
     //            let cordsObj = {
     //                a: null,
     //                b: null
     //            }
	//
     //            for(let i=0; i<imgCoord.length; i++){
	//                 ttest.push({
	//                 	a: new THREE.Vector3(imgCoord[i][0], imgCoord[i][1], Math.random()*600),
	// 	                b: new THREE.Vector3(imgCoord[i][0], imgCoord[i][1], Math.random()*600)
	//                 });
     //                i+=20;
     //            }
	//
     //            finalCoordsArray.push(ttest);
     //        }
	//
     //        for(let c=0; c < finalCoordsArray[0].length; c++){
	//             PointsGeometry.vertices.push(finalCoordsArray[0][c].a);
     //        }
	//
	//
	//
     //        var stars = new THREE.Points( PointsGeometry, PointsMaterial );
	//
     //        stars.geometry.translate(0, (window.innerHeight - 250) / 2, 0 );
	//
     //        pointsScene.add(stars);
	//
     //        renderer.render( pointsScene, pointCamera );
	//
	//
     //        function animateStar() {
     //            requestAnimationFrame(animateStar);
     //            renderer.render( pointsScene, pointCamera );
     //            controls.update();
     //        }
	//
     //        animateStar();
	//
	// 	    var current =0;
	// 	    document.addEventListener('click', () => {
	// 		    current++;
	// 		    current = current % 10;
	// 	        // PointsGeometry.vertices.forEach( function(particle, index){
	// 			 //    particle = null;
	// 			 //    particle = finalCoordsArray[1][index].a;
	// 	        // })
	//
	// 		    PointsGeometry.vertices.forEach( function(particle, index){
	// 			    let tl = new TimelineMax();
	// 			    tl.to(particle,1,{x:finalCoordsArray[1][index].a.x,y:finalCoordsArray[1][index].a.y});
	// 		    })
	//
	// 	    })
     //    }
	//
	//
	// })();


	(function () {
		let size = 150;
		let canvas = document.createElement('canvas');
		let ctx = canvas.getContext('2d');
			canvas.width = size;
			canvas.height = size;
			canvas.classList.add('tempcanvas');
			document.body.appendChild(canvas);

		function loadImages(paths,whenLoaded){
			var imgs=[];
			paths.forEach(function(path){
				var img = new Image;
				img.onload = function(){
					imgs.push(img);
					if (imgs.length==paths.length) whenLoaded(imgs);
				}
				img.src = path;
			});
		}
		function fillUp(array,max){

			var length = array.length;
			if(max < length){
				array = array.slice(0,max);
			} else{
				for(i=0;i<max-length;i++){
					array.push(array[Math.floor(Math.random()*length)])
				}
			}

			return array;
		}
		function getArrayFromImage(img){
			let imageCoords = [];
			ctx.clearRect(0,0,size,size);
			ctx.drawImage(img, 0, 0, size, size);
			let data = ctx.getImageData(0, 0, size, size);

			data = data.data;

			for(var y = 0; y < size; y++) {
				for(var x = 0; x < size; x++) {
					var red = data[((size * y) + x) * 4];
					var green = data[((size * y) + x) * 4 + 1];
					var blue = data[((size * y) + x) * 4 + 2];
					var alpha = data[((size * y) + x) * 4 + 3];
					if(alpha>0){
						imageCoords.push([10*(x - size/2),10*(size/2 - y),[red/256,green/256,blue/256]]);
					}
				}
			}
			return fillUp(imageCoords, 15000);
		}

		let images = ["../images/core_team_logo_print.png",
			       "../images/adserver_team_logo_print.png",
			       "../images/data_team_logo_print.png",
			       "../images/devops_team_logo_print.png",
			       "../images/dmp_team_logo_print.png",
			       "../images/fireflies_team_logo_print.png",
			       "../images/manage_team_logo_print.png",
			       "../images/rge_team_logo_print.png",
			       "../images/spartans_team_logo_print.png",
			       "../images/vikings_team_logo_print.png"];
		loadImages(images,function(loadedImages){
			var gallery = [];
			loadedImages.forEach(function(el,index){
				gallery.push(getArrayFromImage(loadedImages[index]));
			});
			console.log(gallery);

			var camera, controls, scene, renderer,geometry;


			function init() {

				scene = new THREE.Scene();

				renderer = new THREE.WebGLRenderer({ alpha: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );

				var container = document.querySelector("#canvas");
					container.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 1, 7000);
					camera.position.z = 1200;

				controls = new THREE.OrbitControls( camera, renderer.domElement );

				var texture = (new THREE.TextureLoader).load("../images/stars_bg.png");
				var material = new THREE.PointCloudMaterial({
					size: 20,
					map: texture,
					alphaTest: 0.5
				});
				geometry = new THREE.Geometry();
				gallery[0].forEach((el,index)=>{
					geometry.vertices.push(new THREE.Vector3(el[0], el[1], Math.random()*300));
					geometry.colors.push(new THREE.Color(Math.random(), Math.random(), Math.random()));

				});

				var pointCloud = new THREE.PointCloud(geometry, material);

				scene.add(pointCloud);

				console.log(geometry.colors[0]);
				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}

			var i = 0;
			function animate() {
				i++;
				requestAnimationFrame( animate );

				geometry.vertices.forEach( function(particle, index){
					var dX, dY, dZ;
					dX = Math.sin(i/10 + index/2)/2;
					dY = 0;
					dZ = 0;
					particle.add(new THREE.Vector3(dX, dY, dZ));

				});
				geometry.verticesNeedUpdate = true;
				render();

			}

			function render() {
				renderer.render( scene, camera );
			}

			init();
			animate();

			var current =0;
			$('.nav_item').click(function(e){
				$('.nav_item').removeClass('active');
				$(this).addClass('active');

				console.log(e)
				current = $('.left_nav').find(e.target).index();

				$(".team_bg li").removeClass('active');
				$(".team_bg li").eq(current).addClass('active');


				current = current % gallery.length;
				geometry.vertices.forEach( function(particle, index){
					let tl = new TimelineMax();
					tl.to(particle,3,{x:Math.random()*10000 - 5000,y:Math.random()*10000 - 3000, z: 1040});


					tl.to(particle,1,{x:gallery[current][index][0],y:gallery[current][index][1], z:Math.random()*300});
				})

			})


			$('.nav_item').mouseenter(function(e) {
				var audio = document.getElementById("hover_audio");
				audio.play();
			});

			$('.nav_item').mouseleave(function(e) {
				var audio = document.getElementById("hover_audio");
				audio.pause();
			});

		});

	})();


});




