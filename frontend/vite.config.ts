<<<<<<< HEAD
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
=======
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

>>>>>>> a22d48b3e81942e9dd2e35385802a6d7ba870e2b
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
});
=======
})
>>>>>>> a22d48b3e81942e9dd2e35385802a6d7ba870e2b
