import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin'
import fs from "node:fs";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8"));
const appName = packageJson.name; // "moriah-skill-hub"

// Custom plugin to inject the custom domain into Vite's startup CLI logs
function customDomainLoggerPlugin() {
  return {
    name: "custom-domain-logger",
    configureServer(server: { httpServer: { on: (arg0: string, arg1: () => void) => void; address: () => any } }) {
      server.httpServer?.on("listening", () => {
        const address = server.httpServer.address();
        const port =
          typeof address === "object" && address !== null ? address.port : 5173;
        setTimeout(() => {
          console.log(
            `  ➜  Local (Custom): http://${appName}.localhost:${port}/`,
          );
        }, 20);
      });
    },
  };
}

const config = defineConfig({
  // resolve: { tsconfigPaths: true },
  plugins: [devtools(), tailwindcss(), tanstackStart(), viteReact(), netlify(), customDomainLoggerPlugin()],
    server: {
    host: true,
    port: 5173,
    allowedHosts: [`${appName}.localhost`, "localhost"],
    proxy: {
      "/api": {
        target: process.env.VITE_API_BASE_URL || "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
})

export default config
