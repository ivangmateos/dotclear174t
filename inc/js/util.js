'use strict';var dotclear=dotclear||{};Object.assign(dotclear,{getData(id,clear=true,remove=false){let data={};const element=document.getElementById(`${id}-data`);if(element){try{data=JSON.parse(element.textContent);if(remove){element.remove();}else if(clear){element.innerHTML='';}}catch(e){}}
return data;},isObject(item){return item&&typeof item==='object'&&!Array.isArray(item);},mergeDeep(target,...sources){if(!sources.length)return target;const source=sources.shift();if(this.isObject(target)&&this.isObject(source)){for(const key in source){if(this.isObject(source[key])){if(!target[key])
Object.assign(target,{[key]:{},});this.mergeDeep(target[key],source[key]);}else{Object.assign(target,{[key]:source[key],});}}}
return this.mergeDeep(target,...sources);},getCookie(name){let matches=document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`));return matches?decodeURIComponent(matches[1]):false;},setCookie(name,value,options={}){if(typeof options.expires==='number'){options.expires=new Date(Date.now()+options.expires*864e5);}
if(options.expires instanceof Date){options.expires=options.expires.toUTCString();}
let updatedCookie=`${encodeURIComponent(name)}=${encodeURIComponent(value)}`;for(let optionKey in options){updatedCookie+=`; ${optionKey}`;let optionValue=options[optionKey];if(optionValue!==true){updatedCookie+=`=${optionValue}`;}}
if(options.sameSite===undefined){updatedCookie+='; sameSite=Lax';}
document.cookie=updatedCookie;},deleteCookie(name){this.setCookie(name,'',{expires:-1,});},});var getData=getData||function getData(id,clear=true,remove=false){console.warn('getData() is deprecated. Use dotclear.getData');return dotclear.getData(id,clear,remove);};var isObject=isObject||function isObject(item){console.warn('isObject() is deprecated. Use dotclear.isObject()');return dotclear.isObject(item);};var mergeDeep=mergeDeep||function mergeDeep(target,...sources){console.warn('mergeDeep() is deprecated. Use dotclear.mergeDeep()');return dotclear.mergeDeep(target,...sources);};var getCookie=getCookie||function getCookie(name){console.warn('getCookie() is deprecated. Use dotclear.getCookie()');return dotclear.getCookie(name);};var setCookie=setCookie||function setCookie(name,value,options={}){console.warn('setCookie() is deprecated. Use dotclear.setCookie()');return dotclear.setCookie(name,value,options);};var deleteCookie=deleteCookie||function deleteCookie(name){console.warn('deleteCookie() is deprecated. Use dotclear.deleteCookie()');return dotclear.deleteCookie(name);};