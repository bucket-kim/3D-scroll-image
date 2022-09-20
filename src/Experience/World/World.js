import * as THREE from "three";
import Experience from "../Experience.js";
import Images from "./Images.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // this.images = new Images();

    // test mesh
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial()
    );

    // this.scene.add(testMesh);

    this.resources.on("ready", () => {
      // setup
      this.images = new Images();
    });
  }

  update() {
    if (this.images) {
      this.images.update();
    }
  }
}
