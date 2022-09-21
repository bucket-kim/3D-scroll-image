varying vec2 vUv;
varying vec3 vPosition;

uniform sampler2D uTexture; 
uniform float distFromCenter;

void main() {

vec4 t = texture2D(uTexture, vUv);

// gl_FragColor = vec4(0.5, 0., 1., 1.);
  gl_FragColor = t;
  gl_FragColor.a = clamp(distFromCenter, 0.5, 1.);
}