import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const ThreeModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // === Escena, cámara y renderizador ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // === Luz ambiental y direccional ===
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7.2);
    scene.add(ambient, dirLight);

    // === Loader GLTF + Draco ===
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/"); 
    loader.setDRACOLoader(dracoLoader);

    const clock = new THREE.Clock();
       let direction = 1; 
    const speed = 0.6; 
    const maxAngle = Math.PI / 5; 

    let model
    let pivot
    loader.load(

      "/retro_computer.glb", 
      (gltf) => {
         model = gltf.scene;
        model.scale.set(1.5, 1.5, 1.5);
         model.rotation.y = Math.PI / 15;
          model.position.y += 0.5; 
          model.position.x += 1.5; 
            pivot = new THREE.Group();
        scene.add(model);
        scene.add(pivot)
        pivot.add(model)

      },
      (xhr) => console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`),
      (error) => console.error("Error loading model:", error)
    );

    // === Controles de cámara ===

    // === Loop de render ===
    const animate = () => {
      requestAnimationFrame(animate);
        const delta = clock.getDelta();

      if (pivot) {
        pivot.rotation.y += direction * delta * speed;

        // Cuando llega al límite, invierte la dirección
        if (pivot.rotation.y > maxAngle) direction = -1;
        if (pivot.rotation.y < -maxAngle) direction = 1;
      }
      renderer.render(scene, camera);
    };
animate()
    // === Ajuste de tamaño al redimensionar ===
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "20vh" }} />;
};

export default ThreeModel;
