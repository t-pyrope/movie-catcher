export const pageAnimation = {
    hidden: {
        opacity: 0.9,
        scale: 0.9,
        // y: "-30px",
    },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            damping: 55,
        }
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.3
        }
    }
}

export const titleAnim = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}