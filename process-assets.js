(async function () {
    const imagemin = (await import('imagemin')).default;
    const imageminWebp = (await import('imagemin-webp')).default;

    await imagemin(['public/img/*.{jpg,png}'], {
        destination: 'public/img/',
        plugins: [
            imageminWebp({quality: 50})
        ]
    });
    console.log('Images optimized');
})();
