var objIndex = 0;

function createObj(name) {

  var newObj = {
    name: `${objIndex}`,
    index: objIndex,
    translation: [0, 0, 0],
    children: [],
    vao: pyraVAO,
    bufferInfo: pyramidBufferInfo,
  }

  if(name == "pyramid") {
    newObj.vao = pyraVAO;
    newObj.bufferInfo= pyramidBufferInfo;
  }
  else if(name == "triangle"){
    newObj.vao = triangleVAO;
    newObj.bufferInfo= triangleBufferInfo;
  }
  else {
    newObj.vao = cubeVAO;
    newObj.bufferInfo= cubeBufferInfo;
  }

  //uiObj.objArray.push(newObj.name);
  
  objeto.children.push(newObj);

  objectsToDraw = [];
  objects = [];
  nodeInfosByName = {};

  scene = makeNode(objeto);
  objIndex++;
}

var arrays_pyramid = {
    position: [
      1, -1, 1, //0
      -1, -1, 1,//1
      -1, -1, -1,//2

      1, -1, 1, //0
      -1, -1, -1,//2
      1, -1, -1,//3

      0, 1, 0,//8
      -1, -1, 1,//7
      1, -1, 1,//6

      0, 1, 0,//11
      -1, -1, -1,//10
      -1, -1, 1,//9

      0, 1, 0,//14
      1, -1, -1,//13
      -1, -1, -1,//12

      0, 1, 0,//17
      1, -1, 1,//16
      1, -1, -1,//15

    ],

    indices: [
      0,1,2,
      3,4,5,

      6,7,8,
      9,10,11,
      12,13,14,
      15,16,17,
    ],
};


  var arrays_cube = {
    // vertex positions for a cube
    position: [

      //lado
      1, 1, -1, //0
      1, 1, 1, //1
      1, -1, 1, //2

      1, 1, -1, //0
      1, -1, 1, //2
      1, -1, -1,//3

      //lado
      -1, 1, 1,//4
      -1, 1, -1,//5
      -1, -1, -1,//6

      -1, 1, 1,//4
      -1, -1, -1,//6
      -1, -1, 1,//7

      //em cima
      -1, 1, 1,//8
      1, 1, 1,//9
      1, 1, -1,//10

      -1, 1, 1,//8
      1, 1, -1,//10
      -1, 1, -1,//11

      //em baixo
      -1, -1, -1,//12
      1, -1, -1,//13
      1, -1, 1,//14

      -1, -1, -1,//12
      1, -1, 1,//14
      -1, -1, 1,//15

      //lado frente
      1, 1, 1,//16
      -1, 1, 1,//17
      -1, -1, 1,//18

      1, 1, 1,//16
      -1, -1, 1,//18
      1, -1, 1,//19

      //lado
      -1, 1, -1,//20
      1, 1, -1,//21
      1, -1, -1,//22
      
      -1, 1, -1,//20
      1, -1, -1,//22
      -1, -1, -1,//23
    ],
  
    indices: [
      0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,
    ],

    texcoord: [
      0.3,0,
      0,0,
      0,1,
      0.3,0,
      0,1,
      0.3,1,

      0.3,0,
      0,0,
      0,1,
      0.3,0,
      0,1,
      0.3,1,

      1,0,
      0.7,0,
      0.7,1,
      1,0,
      0.7,1,
      1,1,

      0.3,0,
      0,0,
      0,1,
      0.3,0,
      0,1,
      0.3,1,

      0.7,0,
      0.3,0,
      0.3,1,
      0.7,0,
      0.3,1,
      0.7,1,

      0.3,0,
      0,0,
      0,1,
      0.3,0,
      0,1,
      0.3,1,
    
    ],
  };

  triangleData = {
    position: [
      //base
      1, -1, 1,
      -1, -1, 1,
      -1, -1, -1,
      1, -1, -1,

      //lado
      1, 1, 1,
      1, 1, -1,
      -1, 1, 1,
      -1, 1, -1,
    ],

    indices: [
      0, 1, 2,
      0, 2, 3,
      0, 3, 4,
      3, 4, 5,
      0, 1, 4,
      1, 4, 6,
      1, 2, 6,
      2, 6, 7,
      2, 3, 7,
      3, 7, 5,
      4, 5, 6,
      6, 7, 5,
    ],
    
  }