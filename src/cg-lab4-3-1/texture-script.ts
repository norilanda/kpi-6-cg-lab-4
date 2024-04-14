function frac(x: number) {
    return x - Math.floor(x);
}

export const calculateArrayRgb = (width: number = 512, height: number = 512) => {
// Create an array to hold pixel data
    const imageDataArray = new Uint8Array(width * height * 4); // 4 components (RGBA) per pixel

// Iterate over each pixel in the texture
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            const x = (i - width / 2) / width * 8;
            const y = (j - height / 2) / height * 8;
            const fi = (x !== 0.0) ? Math.atan(y / x) : Math.PI / 2;
            const r = Math.sqrt(x * x + y * y);

            let rgb = [0, 0, 0];
            if (frac(Math.abs(Math.sin(8 * fi)) * r) < 0.75) {
                rgb = [255, 255, 0];
            }

            const index = (j * width + i) * 4;
            imageDataArray[index] = rgb[0]; // Red channel
            imageDataArray[index + 1] = rgb[1]; // Green channel
            imageDataArray[index + 2] = rgb[2]; // Blue channel
            imageDataArray[index + 3] = 255; // Alpha channel (fully opaque)
        }
    }
    return imageDataArray;
}