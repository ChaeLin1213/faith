import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/faith/',        // 리포 이름 기준
  build: { outDir: 'docs' }  // 빌드 산출물을 /docs 로
})
