window.addEventListener('DOMContentLoaded', function(){
  

  var canvas = document.getElementById("renderCanvas"); 
    var engine = new BABYLON.Engine(canvas, true);
    engine.setSize(900,900);

var createScene = function(){
    var scene = new BABYLON.Scene (engine);

   var light0 = new BABYLON.PointLight('Omni',new BABYLON.Vector3(0,2,8),scene);
    var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 20, new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);
  
  
  var colorTest = new BABYLON.StandardMaterial('colorTest',scene);
   colorTest.diffuseColor = new BABYLON.Color3(1,10,1)
 
BABYLON.SceneLoader.Load("","test_cube.babylon", engine, function (newScene){
    newScene.executeWhenReady(function (){
        newScene.activeCamera.attachControl(canvas);
    })
})
   
   var floor = BABYLON.Mesh.CreatePlane('floor',50.0,scene);
   floor.position = new BABYLON.Vector3(0,-10,0);
   floor.rotation = new BABYLON.Vector3(Math.PI/2,0,0);
   floor.material = new BABYLON.StandardMaterial('floormat',scene);
   floor.material.backFaceCulling = false;
   floor.material.diffuseColor = new BABYLON.Color3(1,0,10);

   

   return scene;
}    

  var scene = createScene();

            // run the render loop
            engine.runRenderLoop(function(){
                scene.render();
            });

            // the canvas/window resize event handler
            window.addEventListener('resize', function(){
                engine.resize();
            });


  
}); 