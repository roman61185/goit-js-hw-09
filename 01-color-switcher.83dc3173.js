!function(){var o=document.querySelector("button[data-start]");console.log(o);var t=document.querySelector("button[data-stop]");console.log(t);var n=null;o.addEventListener("click",(function(t){n=setInterval((function(){console.log("click"),document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),o.disabled=!0})),t.addEventListener("click",(function(t){clearInterval(n),console.log("click"),o.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.83dc3173.js.map
