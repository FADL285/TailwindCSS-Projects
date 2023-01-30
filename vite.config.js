import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        emailSubscribe: resolve(__dirname, "email-subscribe.html"),
        pricingCards: resolve(__dirname, "pricing-cards.html"),
        productModal: resolve(__dirname, "product-modal.html"),
        imageGallery: resolve(__dirname, "image-gallery.html"),
        loginModal: resolve(__dirname, "login-modal.html")
      }
    }
  }
})
