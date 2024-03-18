document.getElementById("myBtn").onclick = function() {
    var name = prompt("Please enter your name:", "");
    if (name != null && name != "") {
        document.getElementById("Heads").innerHTML = "Hello, " + name;
    }
};


document.getElementById("myDP").onclick = function() {
    var img = this.getElementsByTagName('img')[0];
    img.classList.toggle("Zoomed");
}

function highlight() {
    this.getElementsById(Navbar);
    Navbar.classList.toggle("Naviin");
}

function unhighlight() {
    this.getElementsById(Navbar);
    Navbar.classList.toggle("nav");
}


document.getElementById("myBtn").onclick = function() {
    var name = prompt("Please enter your name:", "");
    if (name != null && name != "") {
        document.getElementById("Heads").innerHTML = "Hello, " + name;
    }
};

document.getElementById("myDP").onclick = function() {
    var img = this.getElementsByTagName('img')[0];
    img.classList.toggle("Zoomed");
}

function showDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = 'block';
}

function showDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = 'block';
}

// hide dropdown
function hideDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = 'none';
}

document.getElementById("myBtn").onclick = function() {
    var name = prompt("Please enter your name:", "");
    if (name != null && name != "") {
        document.getElementById("Heads").innerHTML = "Hello, " + name;
    }
};

document.getElementById("myDP").onclick = function() {
    var img = this.getElementsByTagName('img')[0];
    img.classList.toggle("Zoomed");
}

function showDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = 'block';
}

function hideDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = 'none';
}
