function showRating (rating) {
    let stars = ``
    for (let i = 0; i < Math.floor(rating); ++i) {
        stars += `*`
        if (i !== Math.floor(rating) - 1) {
            stars += ` `
        }
    }
    if (!Number.isInteger(rating)) {
        stars += ` .`
    }
    return stars
}
console.log(showRating(4.6))