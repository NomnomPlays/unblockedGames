chrome.runtime.sendMessage("ping",()=>{chrome.runtime.lastError&&console.log(chrome.runtime.lastError.message)}),chrome.storage.local.get(["browser"],e=>{if(!e||!e.hasOwnProperty("browser"))return;let r=e.browser;if(r){if("chrome"==r)return;document.documentElement.setAttribute("data-br",r);let t=document.createElement("script");t.src=chrome.runtime.getURL("js/edge.js"),t.onload=()=>document.documentElement.removeChild(t),document.documentElement.appendChild(t)}});