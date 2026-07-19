"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT_DESKTOP = 4500;
const PARTICLE_COUNT_MOBILE = 1800;
const MOBILE_BREAKPOINT_PX = 640;
const FIELD_SIZE = 32;
const FIELD_HALF = FIELD_SIZE / 2;
const DRIFT_SPEED = 0.6;

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 8;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const particleCount = window.innerWidth < MOBILE_BREAKPOINT_PX ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * FIELD_SIZE;
      positions[i * 3 + 1] = (Math.random() - 0.5) * FIELD_SIZE;
      positions[i * 3 + 2] = (Math.random() - 0.5) * FIELD_SIZE;
      velocities[i * 3] = (Math.random() - 0.5) * DRIFT_SPEED;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * DRIFT_SPEED;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * DRIFT_SPEED;
    }
    const particleGeometry = new THREE.BufferGeometry();
    const positionAttribute = new THREE.BufferAttribute(positions, 3);
    particleGeometry.setAttribute("position", positionAttribute);
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x9dd7ff,
      size: 0.024,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const wrapCoordinate = (value: number) => {
      if (value > FIELD_HALF) return -FIELD_HALF;
      if (value < -FIELD_HALF) return FIELD_HALF;
      return value;
    };

    let previousTime = performance.now();
    let animationId: number;
    const animate = () => {
      const now = performance.now();
      const deltaSeconds = Math.min((now - previousTime) / 1000, 0.1);
      previousTime = now;

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        positions[ix] = wrapCoordinate(positions[ix] + velocities[ix] * deltaSeconds);
        positions[ix + 1] = wrapCoordinate(positions[ix + 1] + velocities[ix + 1] * deltaSeconds);
        positions[ix + 2] = wrapCoordinate(positions[ix + 2] + velocities[ix + 2] * deltaSeconds);
      }
      positionAttribute.needsUpdate = true;

      particles.rotation.y += 0.0004;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" aria-hidden />;
}
