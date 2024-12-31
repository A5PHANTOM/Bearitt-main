let navbarHTML = `
    <div id="navbar-placeholder"></div>

    <!-- navbar.html -->
    <nav class="navbar">
        <div class="navbar-content">
            <!-- Hamburger Icon (visible only on mobile) -->
            <!-- <a id="mobile-menu-toggle" class="fas fa-bars"></a> -->
            <!-- Logo -->
            <a href="#" class="logo">
                <img src="assets/bearitt logo.png" alt="Logo" />
            </a>

            <!-- Hamburger Icon (Only visible in mobile view) -->
            <div class="hamburger" id="hamburger-menu">
                <i class="fas fa-bars"></i>
            </div>

            <!-- Desktop Navigation Links -->
            <ul class="navbar-links" id="navbar-links">
                <li><a href="home.html">Home</a></li>
                <li><a href="nutrition.html">Services</a></li>
                <li><a href="calculator1/calculator.html">Tools</a></li>
                <li><a href="community.html">Community</a></li>
                <li><a href="#contact">Fitness</a></li>
                <li><a href="trainers/index.html">Trainer</a></li>
                <li><a href="store/index.html">Shop</a></li>
            </ul>

            <!-- User Info -->
            <div class="user-info">
                <span id="user-email"></span>
                <a href="index.html" class="btn btn-danger ml-3">Sign Out</a>
            </div>
        </div>
    </nav>

    <!-- Drawer for Mobile -->
    <div id="mobile-drawer" class="mobile-drawer">
        <a id="close-drawer" class="fas fa-times"></a>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="nutrition.html">Services</a></li>
            <li><a href="calculator1/calculator.html">Tools</a></li>
            <li><a href="community.html">Community</a></li>
            <li><a href="#contact">Fitness</a></li>
            <li><a href="trainers/index.html">Trainer</a></li>
            <li><a href="store/index.html">Shop</a></li>
        </ul>
    </div>

        <link rel="stylesheet" href="navibar-footer.css">
    <link rel="stylesheet" href="home.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
     <!-- Include jQuery -->
     <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
`;

document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
