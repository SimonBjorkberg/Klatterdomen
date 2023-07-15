const scrollToTop = () => {
    setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 300)
};

export default scrollToTop;