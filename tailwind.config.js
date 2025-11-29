export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bordeaux: "#7A1E1E",
        marine: "#1A2340",
        ivoire: "#F8F4EC",
        or: "#C9A227"
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.06)"
      },
      fontFamily: {
        title: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
