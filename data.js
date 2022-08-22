var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.10742990757089466,
        "pitch": 0.08268755529858751,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.11199715660928966,
          "pitch": 0.36781388739286136,
          "rotation": 0,
          "target": "1-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon",
      "name": "SALON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.664634715579899,
          "pitch": 0.34436743311593077,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": 3.086484516487425,
          "pitch": 0.3645710789828982,
          "rotation": 0,
          "target": "3-cocina"
        },
        {
          "yaw": 2.097571361436432,
          "pitch": 0.30728650505504973,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
      "name": "COCINA.",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.147556094603525,
          "pitch": 0.3624473617133308,
          "rotation": 0,
          "target": "1-salon"
        },
        {
          "yaw": 0.051068304005369214,
          "pitch": 0.1953100894339439,
          "rotation": 0,
          "target": "4-galeria"
        },
        {
          "yaw": 0.9192172224359645,
          "pitch": 0.20254138005071454,
          "rotation": 0,
          "target": "3-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2271775015535127,
          "pitch": 0.19668607703951757,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": -2.395751332693912,
          "pitch": 0.5067665195563418,
          "rotation": 0,
          "target": "1-salon"
        },
        {
          "yaw": 0.34786508468916644,
          "pitch": 0.14679057048029343,
          "rotation": 0,
          "target": "4-galeria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-galeria",
      "name": "GALERIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3347412547308704,
          "pitch": 0.5097015923334673,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": -1.6653340052507133,
          "pitch": 0.5176705326965987,
          "rotation": 5.497787143782138,
          "target": "3-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Alboraya Tour Virtual",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
