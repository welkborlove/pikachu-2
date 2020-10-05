const string = '.skin *{box-sizing: border-box;margin: 0;padding: 0;}\n' +
'.skin *::before,.skin *::after{box-sizing: border-box;}\n'+

'.skin{\n' +
' background: #ffe600;\n' +
'    min-height: 100vh;\n' +
'    position: relative;\n' +
'}\n' +
'.nose{\n' +
'    border: 10px solid black;\n' +
'    border-color: black transparent transparent;\n' +
'    border-bottom: nome;\n' +
'    width: 0px;\n' +
'    height: 0px;\n' +
'    position: relative;\n' +
'    left: 50%;\n' +
'    top: 145px;\n' +
'    margin-left:-10px;\n' +
'    z-index: 10;\n' +
'}\n' +
'@keyframes wave{\n' +
'    0%{\n' +
'      transform: rotate(0deg);    \n' +
'    }\n' +
'    33%{\n' +
'      transform: rotate(5deg);    \n' +
'    }\n' +
'    66%{\n' +
'      transform: rotate(-5deg);    \n' +
'    }\n' +
'    100%{\n' +
'      transform: rotate(0deg);    \n' +
'    }\n' +
'  \n' +
'  }\n' +
'  .nose:hover{\n' +
'    transform-origin: center bottom;\n' +
'    animation: wave 300ms infinite linear;\n' +
'  }\n' +
'  \n' +
'  .yuan{\n' +
'    position: absolute;\n' +
'    width: 20px;\n' +
'    height: 6px;\n' +
'    top: -16px;\n' +
'    left: -10px;\n' +
'    border-radius: 10px 10px 0 0;\n' +
'    background: black;\n' +
'  }\n' +
'  \n' +
'  .eye {\n' +
'    border: 2px solid #000;\n' +
'    width: 64px;\n' +
'    height: 64px;\n' +
'    position: absolute;\n' +
'    left: 50%;\n' +
'    top: 100px;\n' +
'    margin-left: -32px;\n' +
'    background: #2e2e2e;\n' +
'    border-radius: 50%;\n' +
'  }\n' +
'  .eye::before{\n' +
'    content: \'\';\n' +
'    display: block;\n' +
'    border: 3px solid #000;\n' +
'    width: 30px;\n' +
'    height: 30px;\n' +
'    background: #fff;\n' +
'    border-radius: 50%;\n' +
'    position: relative;\n' +
'    left: 4px;\n' +
'    top: 2px;\n' +
'  }\n' +
'  .eye.left{\n' +
'    transform: translateX(-100px);\n' +
'  }\n' +
'  .eye.right{\n' +
'    transform: translateX(100px);\n' +
'  }\n' +
'  .mouth{\n' +
'    width: 200px;\n' +
'    height: 200px;\n' +
'    position: absolute;\n' +
'    left: 50%;\n' +
'    top: 170px;\n' +
'    margin-left: -100px;\n' +
'  }\n' +
'  .mouth .up{\n' +
'    position: relative;\n' +
'    top: -20px;\n' +
'    z-index: 1;\n' +
'  }\n' +
'  .mouth .up .lip{\n' +
'    border: 3px solid black;\n' +
'    height: 30px;\n' +
'    width: 100px;\n' +
'    background: #ffe600;\n' +
'    border-top-color: transparent;\n' +
'    border-right-color: transparent;\n' +
'    position: relative;\n' +
'    position: absolute;\n' +
'    left: 50%;\n' +
'    margin-left: -50px;\n' +
'  }\n' +
'  .mouth .up .lip.left{\n' +
'    border-radius: 0 0 0 50px;\n' +
'    transform: rotate(-15deg) translateX(-53px);\n' +
'  }\n' +
'  .mouth .up .lip.right{\n' +
'    border-radius: 0 0 50px 0px;\n' +
'    transform: rotate(15deg) translateX(53px);\n' +
'  }\n' +
'  .mouth .up .lip::before{\n' +
'    content: \'\';\n' +
'    display: block;\n' +
'    width: 7px;\n' +
'    height: 30px;\n' +
'    position: absolute;\n' +
'    bottom: 0;\n' +
'    background: #ffe600;\n' +
'  }\n' +
'  .mouth .up .lip.left::before{\n' +
'    right: -6px;\n' +
'  \n' +
'  }\n' +
'  .mouth .up .lip.right::before{\n' +
'    left: -6px;\n' +
'  }\n' +
'  .mouth .down{\n' +
'    height: 180px;\n' +
'    position: absolute;\n' +
'    top: 5px;\n' +
'    width: 100%;\n' +
'    overflow: hidden;\n' +
'  }\n' +
'  .mouth .down .yuan1{\n' +
'    border: 3px solid black;\n' +
'    width: 150px;\n' +
'    height: 1000px;\n' +
'    position: absolute;\n' +
'    bottom: 0;\n' +
'    left: 50%;\n' +
'    margin-left: -75px;\n' +
'    border-radius: 75px/300px;\n' +
'    background: #9b000a;\n' +
'    overflow: hidden;\n' +
'  }\n' +
'  .mouth .down .yuan1 .yuan2{\n' +
'    width: 200px;\n' +
'    height: 300px;\n' +
'    background: #ff485f;\n' +
'    position: absolute;\n' +
'    bottom: -155px;\n' +
'    left: 50%;\n' +
'    margin-left: -100px;\n' +
'    border-radius: 100px;\n' +
'  \n' +
'  }\n' +
'  .face{\n' +
'    border: 3px solid black;\n' +
'    position: absolute;\n' +
'    left: 50%;\n' +
'    width: 88px;\n' +
'    height: 88px;\n' +
'    top: 200px;\n' +
'    margin-left: -44px;\n' +
'    z-index: 3;\n' +
'  }\n' +
'  .face > img{\n' +
'    position: absolute;\n' +
'    top: 50%;\n' +
'    left: 50%;\n' +
'  }\n' +
'  .face.left{\n' +
'    transform: translateX(-180px);\n' +
'    background: #ff0000;\n' +
'    border-radius: 50%;\n' +
'  }\n' +
'  .face.left > img{\n' +
'    transform: rotateY(180deg);\n' +
'    transform-origin: 0 0;\n' +
'  }\n' +
'  .face.right{\n' +
'    transform: translateX(180px);\n' +
'    background: #ff0000;\n' +
'    border-radius: 50%;\n' +
'  }'

export default string;