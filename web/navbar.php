<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/navbar/style.css">

    <!---- Google Font ---->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet">
   
</head>
<body>
    <div class="nav">
        <div class="bar">
            <div class="left">
            <div class="btn-menu" id="btn-menu">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
            </div>
            <div class="logo">
                <span>CLAVIER</span>
            </div>
        </div>
        <div class="link">
            <a href="#">Home</a>
            <a href="#">Project</a>
            <a href="#">Learn</a>
            <a href="#">Tools</a>
        </div>
            <div class="icon">
                <div class="icon-search" id="search-button" onclick="openSearch(this)">
                   <div> <object type="image/svg+xml" data="assets/icon/search.svg"></object></div>
                </div>
            </div>
        </div>


        <div class="scroll-indikator">   
            <div class="indikator"></div>
        </div>

            <div class="menu" id="menu">
                <span class="title">profil -</span>
                <div class="cont-account">
                    <div class="box-img">

                    </div>
                    <div class="box-username">
                        <span>Clavier</span>
                    </div>
                    <div class="box-role">
                        <span>user</span>
                    </div>
                </div>

            <span class="title">link -</span>
            <div class="cont-link">
                <div class="box-link">
                    <div class="text">
                    <object type="image/svg+xml" data="assets/icon/home.svg" width="20" height="20"></object>
                    <span>Home</span>
                    </div>

                </div>
                <div class="box-link" ">
                    <div class="text">
                        <object type="image/svg+xml" data="assets/icon/psychology.svg" width="20" height="20"></object>
                        <span>My Ai</span>
                    </div>
                </div>
                <div class="box-link" onclick="dropDown(this)">
                    <div class="text">
                    <object type="image/svg+xml" data="assets/icon/dashboard_customize.svg" width="20" height="20"></object>              
                        <span>Project</span>
                        <object class="arrow" type="image/svg+xml" data="assets/icon/chevron_right.svg" width="20" height="20"></object>
                    </div>
                    <div class="drop-down " >
                        <span class="text">WEB</span>
                        <span class="text">APK</span>
                        <span class="text">GAME</span>
                        <span class="text">AI</span>
                        <span class="text">CODING</span>
                        <span class="text">DLL</span>
                    </div>
                </div>
             
                <div class="box-link" onclick="dropDown(this)">
                    <div class="text">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                        <span>Learn</span>
                        <object class="arrow" type="image/svg+xml" data="assets/icon/chevron_right.svg" width="20" height="20"></object>
                    </div>
                    <div class="drop-down">
                        <span class="text">Coding</span>
                        <span class="text">Enginner</span>
                        <span class="text">Elektro</span>
                        <span class="text">Hacking</span>
                    </div>
                </div>
                <div class="box-link" onclick="dropDown(this)">
                    <div class="text">
                    <object type="image/svg+xml" data="assets/icon/handyman.svg" width="20" height="20"></object>
                        <span>Tools</span>
                        <object class="arrow" type="image/svg+xml" data="assets/icon/chevron_right.svg"  width="20" height="20"></object>
                    </div>
                    <div class="drop-down">
                        <span class="text">sofware</span>
                        <span class="text">Pentesting</span>
                        <span class="text">Hardware</span>
                        <span class="text">Malware</span>
                        <span class="text">Hacking</span>
                    </div>
                </div>
                <div class="box-link" onclick="dropDown(this)">
                    <div class="text">
                    <object type="image/svg+xml" data="assets/icon/quiz.svg" width="20" height="20"></object>
                        <span>Execrise</span>
                        <object class="arrow" type="image/svg+xml" data="assets/icon/chevron_right.svg" width="20" height="20"></object>
                    </div>
                    <div class="drop-down " >
                        <span class="text">Latihan coding</span>
                        <span class="text">Latihan hardwer</span>
                        <span class="text">Latihan Enginering</span>
                        <span class="text">Latihan Elecktro</span>
                        <span class="text">Latihan Hacking</span>
                    </div>
                </div>
                <div class="box-link">
                   <div class="text">
                   <object type="image/svg+xml" data="assets/icon/terminal.svg" width="22" height="22"></object>
                    <span>Terminal</span>    
                </div>
                </div> 
                <div class="box-link">
                   <div class="text">
                   <span class="material-symbols-outlined">group</span>
                    <span>Sosial</span>
             
                </div>
                </div> 
             
                <div class="box-link">
                   <div class="text">
                   <span class="material-symbols-outlined">info</span>
                    <span>about</span>    
                </div>
                </div> 
               
            </div>
            </div>

            <div class="container-search">
                <div class="box-search">
                    <div class="input">
                        <input type="search" id="searchEngine" placeholder="search..." onkeyup="search()">
                        <span class="material-symbols-outlined icon">  <object class="arrow" type="image/svg+xml" data="assets/icon/chevron_right.svg" width="20" height="20"></object></span>
                    </div>
                    <div class="output" id="output">
                        <div class="output-item">
                        <a href="w3school">W3school</a>
                        <span> Learn</span>
                        </div>
                        <div class="output-item">
                        <a href="w3school">ChatGpt</a>
                        <span>Ai / Learn</span>
                        </div>
                    </div>
                    
                    </div>
                        <div class="wrap-box">
                            <div class="box">
                                <span class="title">Learn Coding</span>
                                <div class="text">
                          
                                    <li>W3school</li>
                                    <li>ChatGpt</li>
                                    <li></li>
                                
                                </div>
                            </div>
                            <ul class="box">
                                <span class="title">Artifical Intelegent </span>
                                <div class="text">
                                    <li>ChatGpt</li>
                                </div>
                            </ul>
                            <ul class="box">
                                <span class="title">Search Engine </span>
                                <div class="text">
                                  <li>Google</li>
                                </div>
                            </ul>
                            <ul class="box">
                                <span class="title">Virtual Storage</span>
                                <div class="text">
                                    <span></span>
                                </div>
                            </ul>
                            <ul class="box">
                                <span class="title">Web AI</span>
                                <div class="text">
                                    <span></span>
                                </div>
                            </ul>
                        </div>
                </div>
             
            </div>

    <script src="assets/js/navbar/script.js"></script>

</body>
</html>