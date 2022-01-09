import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}

  export function loadFBXModel(
    scene,
    fbxPath,
    options = { receiveShadow: true, castShadow: true }
  ) {
    const { receiveShadow, castShadow } = options
    return new Promise((resolve, reject) => {
      const loader = new FBXLoader()
  
      loader.load(
        fbxPath,
        (object) => {
          object.name = 'shiba'
          object.position.y = 0
          object.position.x = 0
          object.receiveShadow = receiveShadow
          object.castShadow = castShadow
          scene.add(object)
  
          object.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = castShadow
              child.receiveShadow = receiveShadow
            }
          })
          resolve(object)
        },
        undefined,
        function (error) {
          reject(error)
        }
      )
    })
  }