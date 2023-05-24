let pageFire1 = document.querySelector('.pageFire1')
let pageFire2 = document.querySelector('.pageFire2')
let leave = document.querySelector('.leave')
let nextPage = document.querySelector('.nextPage')
let lastPage = document.querySelector('.lastPage')
let capeBook = document.querySelector('.Cape')
let openBook = document.querySelector('.openBook')
let firstPage = document.querySelector('.firstPage')
let secondPage = document.querySelector('.secondPage')
let thirdPage = document.querySelector('.thirdPage')
let closeBookButton = document.querySelector('.butClose')

function closeBook() {

    if(firstPage.classList.contains('visible')) {
        firstPage.classList.add('hide')
        firstPage.classList.remove('visible')
        openBook.classList.add('hide')
        openBook.classList.remove('visible')
        capeBook.classList.remove('hide')
        capeBook.classList.add('visible')
        closeBookButton.classList.add('hide')
        nextPage.classList.add('hide')
        lastPage.classList.add('hide')
    } else if (secondPage.classList.contains('visible')) {
        secondPage.classList.remove('visible')
        secondPage.classList.add('hide')
        openBook.classList.add('hide')
        openBook.classList.remove('visible')
        capeBook.classList.remove('hide')
        capeBook.classList.add('visible')
        closeBookButton.classList.add('hide')
        nextPage.classList.add('hide')
        lastPage.classList.add('hide')
    } else if (thirdPage.classList.contains('visible')) {
        thirdPage.classList.remove('visible')
        thirdPage.classList.add('hide')
        openBook.classList.add('hide')
        openBook.classList.remove('visible')
        capeBook.classList.remove('hide')
        capeBook.classList.add('visible')
        closeBookButton.classList.add('hide')
        nextPage.classList.add('hide')
        lastPage.classList.add('hide')
    } else if(pageFire1.classList.contains('visible')) {
        pageFire1.classList.add('hide')
        pageFire1.classList.remove('visible')
        openBook.classList.add('hide')
        openBook.classList.remove('visible')
        capeBook.classList.remove('hide')
        capeBook.classList.add('visible')
        closeBookButton.classList.add('hide')
        nextPage.classList.add('hide')
        lastPage.classList.add('hide')
    }
}

function fireOpen() {

    if(capeBook.classList.contains('visible')) {
        return
    } else if(firstPage.classList.contains('visible')) {
        firstPage.classList.add('hide')
        firstPage.classList.remove('visible')
        pageFire1.classList.remove('hide')
        pageFire1.classList.add('visible')
    } else if (secondPage.classList.contains('visible')) {
        secondPage.classList.remove('visible')
        secondPage.classList.add('hide')
        pageFire1.classList.remove('hide')
        pageFire1.classList.add('visible')
    } else if (thirdPage.classList.contains('visible')) {
        thirdPage.classList.remove('visible')
        thirdPage.classList.add('hide')
        pageFire1.classList.remove('hide')
        pageFire1.classList.add('visible')
    } else if(pageFire1.classList.contains('visible')) {
        openBook.classList.remove('hide')
        openBook.classList.add('visible')

        firstPage.classList.remove('hide')
        firstPage.classList.add('visible')

        pageFire1.classList.add('hide')
        pageFire1.classList.remove('visible')

    }
}

nextPage.addEventListener('click', () => {
    if (firstPage.classList.contains('visible')) {
        firstPage.classList.add('hide')
        firstPage.classList.remove('visible')
        secondPage.classList.remove('hide')
        secondPage.classList.add('visible')
    } else if (secondPage.classList.contains('visible')) {
        secondPage.classList.add('hide')
        secondPage.classList.remove('visible')
        thirdPage.classList.remove('hide')
        thirdPage.classList.add('visible')
    } else {
        return
    }
})

lastPage.addEventListener('click', () => {
    if  (firstPage.classList.contains('visible')) {
        return
    } else if (secondPage.classList.contains('visible')) {
        secondPage.classList.remove('visible')
        secondPage.classList.add('hide')
        firstPage.classList.remove('hide')
        firstPage.classList.add('visible')
    } else if (thirdPage.classList.contains('visible')) {
        thirdPage.classList.add('hide')
        thirdPage.classList.remove('visible')
        secondPage.classList.remove('hide')
        secondPage.classList.add('visible')
    }
})

capeBook.addEventListener('click', () => {
    capeBook.classList.add('hide')
    capeBook.classList.remove('visible')

    openBook.classList.remove('hide')
    openBook.classList.add('visible')

    firstPage.classList.remove('hide')
    firstPage.classList.add('visible')

    closeBookButton.classList.remove('hide')
    nextPage.classList.remove('hide')
    lastPage.classList.remove('hide')
})


function hideDrawer() {
    let closeDrawer = document.querySelector(".closeDrawer")
    let drawer = document.querySelector(".drawer")

    if (drawer.classList.contains('open')) {
        drawer.classList.remove('open')
        drawer.classList.add('close')
        closeDrawer.classList.remove('open')
        closeDrawer.classList.add('close')
    } else {
        drawer.classList.remove('close')
        drawer.classList.add('open')
        closeDrawer.classList.remove('close')
        closeDrawer.classList.add('open')
    }
}

function iconReplacement() {
    let closeArrow = document.querySelector(".closeArrow")
    let openArrow = document.querySelector(".openArrow")

    if (closeArrow.classList.contains('hide')) {
        closeArrow.classList.remove('hide')
        openArrow.classList.add('hide')
    } else {
        closeArrow.classList.add('hide')
        openArrow.classList.remove('hide')
    }
}

function onMouseEnter1() {
    let enter = document.querySelector('.enter')
    let leave = document.querySelector('.leave')

    if (enter.classList.contains('hide')){

        enter.classList.remove('hide')
        leave.classList.add('hide')

    } else {

        enter.classList.add('hide')
        leave.classList.remove('hide')
    }

}

function onMouseEnter2() {
    let enter2 = document.querySelector('.enter2')
    let leave2 = document.querySelector('.leave2')

    if (enter2.classList.contains('hide')) {

        enter2.classList.remove('hide')
        leave2.classList.add('hide')

    } else {

        enter2.classList.add('hide')
        leave2.classList.remove('hide')

    }
}

function onMouseEnter3() {
    let enter3 = document.querySelector('.enter3')
    let leave3 = document.querySelector('.leave3')

    if (enter3.classList.contains('hide')) {

        enter3.classList.remove('hide')
        leave3.classList.add('hide')

    } else {

        enter3.classList.add('hide')
        leave3.classList.remove('hide')

    }
}

function onMouseEnter4() {
    let enter4 = document.querySelector('.enter4')
    let leave4 = document.querySelector('.leave4')

    if (enter4.classList.contains('hide')) {

        enter4.classList.remove('hide')
        leave4.classList.add('hide')

    } else {

        enter4.classList.add('hide')
        leave4.classList.remove('hide')

    }
}

function showBoxMenu() {
    let boxMenu = document.querySelector(".boxMenu")
    let boxRedeemCode = document.querySelector(".boxRedeemCode")

    if(boxMenu.classList.contains('hide')) {
        boxMenu.classList.remove('hide')
    }else if (boxRedeemCode.classList.contains('visible')) {
        boxRedeemCode.classList.add('hide')
        boxRedeemCode.classList.remove('visible')
        boxMenu.classList.add('hide')
    } else {
        boxMenu.classList.add('hide')
    }
}

function showBoxRedeemCode() {
    let boxRedeemCode = document.querySelector(".boxRedeemCode")

    if(boxRedeemCode.classList.contains('hide')) {
        boxRedeemCode.classList.remove('hide')
        boxRedeemCode.classList.add('visible')
    } else {
        boxRedeemCode.classList.add('hide')
        boxRedeemCode.classList.remove('visible')
    }
}



