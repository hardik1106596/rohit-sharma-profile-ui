/*
-----------------------------------
SELECT FOLLOW BUTTON
-----------------------------------
*/

const followButton =
document.querySelector(".follow-btn");

/*
-----------------------------------
FOLLOW BUTTON CLICK
-----------------------------------
*/

followButton.onclick = function(){

    /*
    -----------------------------
    CHECK BUTTON TEXT
    -----------------------------
    */

    if(followButton.innerText === "Follow"){

        /*
        -------------------------
        CHANGE BUTTON TEXT
        -------------------------
        */

        followButton.innerText =
        "Following";

        /*
        -------------------------
        CHANGE BUTTON COLOR
        -------------------------
        */

        followButton.style.background =
        "green";

    }
    else{

        /*
        -------------------------
        RESET BUTTON TEXT
        -------------------------
        */

        followButton.innerText =
        "Follow";

        /*
        -------------------------
        RESET BUTTON COLOR
        -------------------------
        */

        followButton.style.background =
        "royalblue";
    }

}
