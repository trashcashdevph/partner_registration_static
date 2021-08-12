    const form = document.getElementById('form');
    let next = document.getElementById('btn-next');
    let back = document.getElementById('btn-back');

    next.onclick = function() {
        form.style.transform = "translate(-90px, -12px)";
    }
    
    back.onclick = function() {
        form.style.transform = "translate(395px, -12px)";
    }

    // hide/show password//
    let state = false;
    function toggleOne() {
        if (state) {
            document.getElementById("password1").setAttribute("type", "password");
            document.getElementById("eye1").style.color = "#c9b9b9";
            state = false;
        } else {
            document.getElementById("password1").setAttribute("type", "text");
            document.getElementById("eye1").style.color = "#6cbf87";
            state = true;
        }
    }
    // hide/show confirm-password//
    function toggleTwo() {
        if (state) {
            document.getElementById("password2").setAttribute("type", "password");
            document.getElementById("eye2").style.color = "#c9b9b9";
            state = false;
        } else {
            document.getElementById("password2").setAttribute("type", "text");
            document.getElementById("eye2").style.color = "#6cbf87";
            state = true;
        }
    }