function toggleMenu() {
    const sidebar = document.getElementById("mySidebar");
    const content = document.getElementById("content");

    sidebar.classList.toggle("open");
    content.classList.toggle("shift");
}
