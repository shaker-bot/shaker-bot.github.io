import express from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Express app for serving the static portfolio website
// The server is only used to serve the static files and handle development
const app = express();

(async () => {
  const server = await registerRoutes(app);

  // Setup Vite or serve static files
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Serve on port 5000
  // Serve on port 8080 instead since Mac be bugging
  const port = 8080;
  
  server.on('error', (e: any) => {
    if (e.code === 'EADDRINUSE') {
      log(`Port ${port} is in use, trying to recover...`);
      setTimeout(() => {
        server.close();
        server.listen({
          port,
          host: "0.0.0.0",
          reusePort: true,
        });
      }, 1000);
    } else {
      console.error(e);
    }
  });

  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
