import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Experience from "./Experience.js";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.setInstance();
    this.setOrbitControl();
  }

  setInstance() {
    this.camera = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      1000
    );

    this.camera.position.set(0, 0, 4);
    this.scene.add(this.camera);
  }

  setOrbitControl() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.enabled = false;
    this.controls.zoomSpeed = 0.5;
  }

  resize() {
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}
