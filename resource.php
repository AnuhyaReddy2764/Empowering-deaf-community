<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive ASL Dictionary</title>
    <link rel="stylesheet" href="resource.css">
</head>

<body>

    <header>
        <div class="container">
            <div class="logo">DeafUnityHub</div>
            <nav>
                <ul id="nav-items">
                    <li><a href="/deaf/home.php">Home</a></li>
                    <li><a href="/deaf/resource.php">Resources</a></li>
                    <li><a href="/deaf/Exercise.php">Exercises</a></li>
                    <li><a href="/deaf/feedback.php">Feedback</a></li>
                </ul>
            </nav>
            <div class="user-actions">

                <?php
                session_start(); // Start session if not already started
                
                if (isset($_SESSION['email'])) {
                    echo '<a href="logout.php" id="logout-button" class="sign-in">Logout</a>';
                } else {
                    echo '<a href="index.php" id="login-button" class="sign-in">Sign in</a>';
                }
                ?>

                <!-- <a href="/deaf/index.php" class="sign-in">Sign in</a> -->
                <div class="menu-icon" id="menu-icon">☰</div>
            </div>
        </div>
    </header>

    <div class="container-1">
        <h2>ASL Learning Hub</h2>
        <p>Your Ultimate Guide to American Sign Language Alphabets and Words with Video Tutorials</p>
        <a href="#container-2" class="button">Dive into ASL</a>

    </div>

    <div id="container-2" class="container-2">
        <span>
            <h1>Alphabets</h1>
        </span>
        <div class="row">
            <div class="aplha">
                <img src="assets\a.jpg">
                <div class="layer">
                    <h2>A</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\b.jpeg">
                <div class="layer">
                    <h2>B</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\c.jpg">
                <div class="layer">
                    <h2>C</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\d.jpg">
                <div class="layer">
                    <h2>D</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\e.webp">
                <div class="layer">
                    <h2>E</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\f.jpg">
                <div class="layer">
                    <h2>F</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\g.jpg">
                <div class="layer">
                    <h2>G</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\h.jpg">
                <div class="layer">
                    <h2>H</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\i.jpg">
                <div class="layer">
                    <h2>I</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\j.jpg">
                <div class="layer">
                    <h2>J</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\k.jpg">
                <div class="layer">
                    <h2>K</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\l.jpg">
                <div class="layer">
                    <h2>L</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\m.jpg">
                <div class="layer">
                    <h2>M</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\n.jpg">
                <div class="layer">
                    <h2>N</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\o.jpg">
                <div class="layer">
                    <h2>O</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\p.jpg">
                <div class="layer">
                    <h2>P</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\q.jpg">
                <div class="layer">
                    <h2>Q</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\r.jpg">
                <div class="layer">
                    <h2>R</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\s.jpg">
                <div class="layer">
                    <h2>S</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\t.jpg">
                <div class="layer">
                    <h2>T</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\u.jpg">
                <div class="layer">
                    <h2>U</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\v.jpg">
                <div class="layer">
                    <h2>V</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\w.jpeg">
                <div class="layer">
                    <h2>W</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\x.jpg">
                <div class="layer">
                    <h2>X</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\y.jpg">
                <div class="layer">
                    <h2>Y</h2>
                </div>
            </div>
            <div class="aplha">
                <img src="assets\z.jpg">
                <div class="layer">
                    <h2>Z</h2>
                </div>
            </div>
        </div>
    </div>


    </div>


    <span class = "dict">
        <h1>Dictionary</h1>
    </span>
    <div id="dictionary">
        <input type="text" id="search" placeholder="Search...">
        <div id="word-list">
            <ul id="words">
                <!-- Words will be dynamically added here -->
            </ul>
            <div id="no-matches" style="display: none;">No matches found.</div>
        </div>
        <div id="keyboard">
            <!-- Alphabet buttons -->
            <button class="key" onclick="filterWords('A')">A</button>
            <button class="key" onclick="filterWords('B')">B</button>
            <button class="key" onclick="filterWords('C')">C</button>
            <button class="key" onclick="filterWords('D')">D</button>
            <button class="key" onclick="filterWords('E')">E</button>
            <button class="key" onclick="filterWords('F')">F</button>
            <button class="key" onclick="filterWords('G')">G</button>
            <button class="key" onclick="filterWords('H')">H</button>
            <button class="key" onclick="filterWords('I')">I</button>
            <button class="key" onclick="filterWords('J')">J</button>
            <button class="key" onclick="filterWords('K')">K</button>
            <button class="key" onclick="filterWords('L')">L</button>
            <button class="key" onclick="filterWords('M')">M</button>
            <button class="key" onclick="filterWords('N')">N</button>
            <button class="key" onclick="filterWords('O')">O</button>
            <button class="key" onclick="filterWords('P')">P</button>
            <button class="key" onclick="filterWords('Q')">Q</button>
            <button class="key" onclick="filterWords('R')">R</button>
            <button class="key" onclick="filterWords('S')">S</button>
            <button class="key" onclick="filterWords('T')">T</button>
            <button class="key" onclick="filterWords('U')">U</button>
            <button class="key" onclick="filterWords('V')">V</button>
            <button class="key" onclick="filterWords('W')">W</button>
            <button class="key" onclick="filterWords('X')">X</button>
            <button class="key" onclick="filterWords('Y')">Y</button>
            <button class="key" onclick="filterWords('Z')">Z</button>
        </div>
        <div id="video-container">
            <iframe id="video" width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
            <div id="meaning"></div>
        </div>
    </div>
    <script src="resource.js"></script>
</body>

</html>