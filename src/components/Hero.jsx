import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Terminal } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Handle resizing
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Interactive mouse coordinates
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left - width / 2;
      mouse.targetY = e.clientY - rect.top - height / 2;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // 3D Nodes
    const numNodes = 40;
    const nodes = [];
    for (let i = 0; i < numNodes; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 140 + Math.random() * 40; // radius of core sphere
      nodes.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        baseX: r * Math.sin(phi) * Math.cos(theta),
        baseY: r * Math.sin(phi) * Math.sin(theta),
        baseZ: r * Math.cos(phi),
        color: i % 2 === 0 ? '#00f0ff' : '#a855f7',
        size: Math.random() * 3 + 2,
      });
    }

    // 3D Cubes
    const numCubes = 4;
    const cubes = [];
    for (let i = 0; i < numCubes; i++) {
      cubes.push({
        x: (Math.random() - 0.5) * 350,
        y: (Math.random() - 0.5) * 350,
        z: (Math.random() - 0.5) * 200,
        size: Math.random() * 25 + 15,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotZ: Math.random() * Math.PI,
        rotSpeedX: 0.01 + Math.random() * 0.015,
        rotSpeedY: 0.01 + Math.random() * 0.015,
        speedZ: 0.2 + Math.random() * 0.3,
        pulseOffset: Math.random() * 100,
      });
    }

    let angleX = 0.003;
    let angleY = 0.003;

    // 3D rotation projection helper
    const rotateX = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x, y: y * cos - z * sin, z: y * sin + z * cos };
    };

    const rotateY = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: x * cos + z * sin, y, z: -x * sin + z * cos };
    };

    // Draw cube helper
    const drawCube = (ctx, cube, projX, projY, size, color) => {
      const vertices = [
        { x: -1, y: -1, z: -1 },
        { x: 1, y: -1, z: -1 },
        { x: 1, y: 1, z: -1 },
        { x: -1, y: 1, z: -1 },
        { x: -1, y: -1, z: 1 },
        { x: 1, y: -1, z: 1 },
        { x: 1, y: 1, z: 1 },
        { x: -1, y: 1, z: 1 },
      ];

      const rotatedVertices = vertices.map(v => {
        let r = rotateX(v.x * size, v.y * size, v.z * size, cube.rotX);
        r = rotateY(r.x, r.y, r.z, cube.rotY);
        return {
          x: r.x + cube.x,
          y: r.y + cube.y,
          z: r.z + cube.z
        };
      });

      // Project vertices
      const projected = rotatedVertices.map(v => {
        const fov = 400;
        const scale = fov / (fov + v.z);
        return {
          x: width / 2 + v.x * scale,
          y: height / 2 + v.y * scale,
          scale
        };
      });

      // Edges index
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0], // back
        [4, 5], [5, 6], [6, 7], [7, 4], // front
        [0, 4], [1, 5], [2, 6], [3, 7]  // connectors
      ];

      // Draw edges with glowing neon path
      ctx.beginPath();
      edges.forEach(([p1, p2]) => {
        ctx.moveTo(projected[p1].x, projected[p1].y);
        ctx.lineTo(projected[p2].x, projected[p2].y);
      });
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw glowing node dots on vertices
      projected.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      });
    };

    // Render loop
    const render = () => {
      // Semi-transparent overlay to create smooth trail effects
      ctx.fillStyle = 'rgba(3, 0, 10, 0.2)';
      ctx.fillRect(0, 0, width, height);

      // Mouse smoothing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Adjust rotation speed with mouse interactive position
      const currentAngleX = angleX + mouse.y * 0.00001;
      const currentAngleY = angleY + mouse.x * 0.00001;

      // 1. Draw glowing background grid
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.03)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and rotate nodes
      nodes.forEach((node) => {
        let rotated = rotateX(node.x, node.y, node.z, currentAngleX);
        rotated = rotateY(rotated.x, rotated.y, rotated.z, currentAngleY);
        node.x = rotated.x;
        node.y = rotated.y;
        node.z = rotated.z;
      });

      // Draw SVG-like node connections
      ctx.lineWidth = 0.8;
      for (let i = 0; i < numNodes; i++) {
        for (let j = i + 1; j < numNodes; j++) {
          const dist = Math.hypot(
            nodes[i].x - nodes[j].x,
            nodes[i].y - nodes[j].y,
            nodes[i].z - nodes[j].z
          );
          if (dist < 110) {
            const fov = 400;
            const scaleI = fov / (fov + nodes[i].z);
            const scaleJ = fov / (fov + nodes[j].z);
            
            const x1 = width / 2 + nodes[i].x * scaleI;
            const y1 = height / 2 + nodes[i].y * scaleI;
            const x2 = width / 2 + nodes[j].x * scaleJ;
            const y2 = height / 2 + nodes[j].y * scaleJ;

            const alpha = (1 - dist / 110) * 0.25;
            const grad = ctx.createLinearGradient(x1, y1, x2, y2);
            grad.addColorStop(0, nodes[i].color === '#00f0ff' ? `rgba(0, 240, 255, ${alpha})` : `rgba(168, 85, 247, ${alpha})`);
            grad.addColorStop(1, nodes[j].color === '#00f0ff' ? `rgba(0, 240, 255, ${alpha})` : `rgba(168, 85, 247, ${alpha})`);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = grad;
            ctx.stroke();
          }
        }
      }

      // Draw Core Nodes
      nodes.forEach((node) => {
        const fov = 400;
        const scale = fov / (fov + node.z);
        const x = width / 2 + node.x * scale;
        const y = height / 2 + node.y * scale;

        if (x >= 0 && x <= width && y >= 0 && y <= height) {
          ctx.beginPath();
          ctx.arc(x, y, node.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.shadowBlur = 10 * scale;
          ctx.shadowColor = node.color;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      // 2. Draw rotating neon orbit rings
      const ringRotations = [0.005, -0.008];
      const ringColors = ['rgba(0, 240, 255, 0.25)', 'rgba(236, 72, 153, 0.2)'];
      
      ringColors.forEach((color, idx) => {
        ctx.beginPath();
        const factor = idx === 0 ? 1 : 1.4;
        const rx = 180 * factor;
        const ry = 60 * factor;
        ctx.ellipse(
          width / 2,
          height / 2,
          rx,
          ry,
          (Date.now() * ringRotations[idx]) / 100,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // 3. Draw floating cubes
      cubes.forEach((cube, index) => {
        // Rotate cube on axes
        cube.rotX += cube.rotSpeedX;
        cube.rotY += cube.rotSpeedY;

        // Wave motion on cube position
        const pulse = Math.sin((Date.now() / 1000) + cube.pulseOffset) * 0.8;
        cube.y += pulse * 0.15;

        // Draw cubes
        const color = index % 2 === 0 ? 'rgba(0, 240, 255, 0.45)' : 'rgba(168, 85, 247, 0.45)';
        drawCube(ctx, cube, width / 2, height / 2, cube.size, color);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden aurora-bg">
      {/* Background Animated Blobs */}
      <div className="absolute w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] -top-40 -left-40 animate-blob-slow" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] -bottom-40 -right-20 animate-blob-slow" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
        {/* Left Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-left space-y-6 max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>AETHERIA v1.0.0 MAINNET LIVE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white tracking-tight">
            Building the Future <br />
            of <span className="text-gradient">Decentralized</span> <br />
            Infrastructure
          </h1>

          <p className="text-lg text-purple-200/60 leading-relaxed font-sans">
            Aetheria is a hyper-scalable, zero-gas, secure Layer 2 blockchain designed for high-performance decentralized financial tools, micro-consensuses, and sub-second validation.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href="#features"
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-mono font-bold tracking-widest text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400" />
              <span className="relative flex items-center gap-2">
                LAUNCH APP <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="#technology"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl border border-purple-500/20 bg-purple-950/10 text-sm font-mono font-bold tracking-widest text-purple-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <BookOpen className="w-4 h-4" />
              READ DOCUMENTATION
            </a>
          </div>

          {/* Supported Chains mini banner */}
          <div className="pt-8 border-t border-purple-950/40">
            <span className="text-[10px] tracking-widest font-mono text-purple-400/40 block mb-4 uppercase">
              POWERED BY MULTI-CHAIN PROTOCOLS
            </span>
            <div className="flex flex-wrap items-center gap-6 opacity-30">
              <span className="text-sm font-bold tracking-wider font-sans text-white">ETH</span>
              <span className="text-sm font-bold tracking-wider font-sans text-white">SOLANA</span>
              <span className="text-sm font-bold tracking-wider font-sans text-white">POLYGON</span>
              <span className="text-sm font-bold tracking-wider font-sans text-white">SUI</span>
              <span className="text-sm font-bold tracking-wider font-sans text-white">COSMOS</span>
            </div>
          </div>
        </motion.div>

        {/* Right Canvas Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px] flex items-center justify-center"
        >
          {/* Interactive target container */}
          <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing interactive-target">
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>

          {/* Subtle floating overlay metrics to look technical */}
          <div className="absolute top-4 right-4 bg-purple-950/30 backdrop-blur-md border border-purple-500/10 px-3.5 py-2 rounded-lg font-mono text-[9px] tracking-widest text-cyan-400/80">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
              <span>SHARD_ID: #40292</span>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 bg-purple-950/30 backdrop-blur-md border border-purple-500/10 px-3.5 py-2 rounded-lg font-mono text-[9px] tracking-widest text-purple-400/80">
            <div>TPS: 124,592/S</div>
            <div>LATENCY: 0.08ms</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
