(async function () {
    const imagemin = (await import('imagemin')).default;
    const imageminWebp = (await import('imagemin-webp')).default;

    await imagemin(['public/img/*.{jpg,png}'], {
        destination: 'public/img/',
        plugins: [
            imageminWebp({quality: 25, method: 6, size: 3 * 1024, alphaQuality: 0, autoFilter: true})
        ]
    });
    console.log('Images optimized');
})();
