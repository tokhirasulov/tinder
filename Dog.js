
class Dog{
    constructor(data){
        Object.assign(this, data)
        this.swipped = this.hasBeenSwiped
        this.liked = this.hasBeenLiked
    }

    getDogHtml = () => {
        const{name, avatar, age, bio, hasBeenLiked, hasBeenSwiped} = this
        return `
        <header>
            <img src="images/icon-profile.png" alt="profile" id="profile">
            <img src="images/logo.png" alt="logotype" id="logo">
            <img src="images/icon-chat.png" alt="message" id="message">
        </header>
            <div class="main-image">
                <img src="${avatar}" id="photo">

                    <div class="info">
                        <h1 id="data">${name}, ${age}</h1>
                        <h3 id="bio">${bio}</h3>
                    </div>
            </div>
            <div class="buttons">
                <button id="nope-btn"><img src="images/icon-cross.png"></button>
                <button id="like-btn"><img src="images/icon-heart.png"></button>
            </div>
        `
    }
}

export {Dog}