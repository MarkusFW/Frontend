const statusRef = document.querySelector(`.status`)
const videoRef = document.querySelector(`.video`)

function getSubscritpitonStatus() {
    return new Promise((resolve, reject) => {
        resolve (`0`)
    })
}  
function getVideo (subscriptionStatus) {
    return new Promise ((resolve, reject) => {
        if (subscriptionStatus === `VIP`) {
            resolve(`Show Video`)
        }
        else if (subscriptionStatus === `FREE`) {
            resolve(`Show Trailer`)
        }
        else {
            reject(`no video`)
        }

    })
}
async function main () {
    const status = await getSubscritpitonStatus ()
    statusRef.innerHTML = status
    try {
        console.log(await getVideo(status))
    }
    catch (d) {
        console.log(d)
        videoRef.innerHTML = d
    }
}

main()