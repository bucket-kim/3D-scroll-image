import * as THREE from "three";
import Experience from "../Experience";

export default class Images {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.speed = 0;
    this.position = 0;
    this.block = document.querySelector("#block");

    window.addEventListener("wheel", (e) => {
      // console.log(e);
      this.speed += e.deltaY * 0.0002;
    });

    this.setImages();
  }

  setImages() {}

  update() {
    this.position += this.speed;
    this.speed *= 0.8;
    this.block.style.transform = `translate(0, ${this.position * 100}px)`;
  }
}
