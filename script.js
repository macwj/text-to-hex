function recInput() {
    return document.getElementById("input").value
}

function text2hex(text) {
    let hex = ""
    for (let i = 0; i < text.length; i++) {
        let byte = text.charCodeAt(i)
        hex = hex + byte.toString(16) + " "
    }
    return hex
}

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


function drawColors() {
    let phrase = recInput()

    let colors = text2hex(phrase).replaceAll(" ", "")
    if (colors.length % 6 > 0) {
        colors = colors + "0".repeat((6 - colors.length % 6) % 6)
    }

    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, 640, 480)

    const x = 640 / (colors.length / 6)

    for (let i = 0; i < colors.length; i += 6) {
        ctx.fillStyle = "#" + colors.slice(i, i + 6)
        ctx.fillRect(x * (i / 6), 0, x, 480)
        ctx.fillStyle = "#ffffff"
        ctx.font = String(15 / 64 * x) + "px Arial"
        ctx.fillText("#" + colors.slice(i, i + 6), x * (i / 6) + (5 / 128 * x), 240)
    }
}

document.getElementById("input").addEventListener("input", drawColors)
drawColors()