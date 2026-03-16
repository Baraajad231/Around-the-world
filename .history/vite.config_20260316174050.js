import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // نستخدم '/' بدلاً من './' لضمان أن يبدأ المسار من الجذر مباشرة
  // مش عارف اي وحدة الي حات المشكلة
  base: "/",
});
