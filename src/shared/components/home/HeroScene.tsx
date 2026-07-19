"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT_DESKTOP = 2200;
const PARTICLE_COUNT_MOBILE = 900;
const MOBILE_BREAKPOINT_PX = 640;

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
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 32;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 32;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 32;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.02,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const polyBaseX = 2.4;
    const polySwayRange = 1.4;
    const polyGroup = new THREE.Group();
    const polyGeometry = new THREE.IcosahedronGeometry(2, 0);
    const edgesGeometry = new THREE.EdgesGeometry(polyGeometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.55 });
    const polyEdges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    polyGroup.add(polyEdges);
    polyGroup.position.set(polyBaseX, 0.2, -1);
    polyGroup.rotation.set(0.4, 0.6, 0);
    scene.add(polyGroup);

    const keyLight = new THREE.PointLight(0x3b82f6, 12, 24);
    keyLight.position.set(3, 3, 5);
    scene.add(keyLight);
    const ambientLight = new THREE.AmbientLight(0x1e3a8a, 0.7);
    scene.add(ambientLight);

    const startTime = performance.now();
    let animationId: number;
    const animate = () => {
      const elapsedSeconds = (performance.now() - startTime) / 1000;
      polyGroup.position.x = polyBaseX + Math.sin(elapsedSeconds * 0.5) * polySwayRange;
      polyGroup.rotation.x += 0.002;
      polyGroup.rotation.y += 0.004;
      particles.rotation.y += 0.0006;
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
      polyGeometry.dispose();
      edgesGeometry.dispose();
      edgesMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" aria-hidden />;
}
