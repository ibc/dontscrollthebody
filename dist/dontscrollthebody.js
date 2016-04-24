(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.dontscrollthebody = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = dontscrollthebody;

function dontscrollthebody(elem)
{
	elem.addEventListener('wheel', listener);
}

dontscrollthebody.remove = function(elem)
{
	elem.removeEventListener('wheel', listener);
};

function listener(event)
{
	var elem = event.currentTarget;

	if ((event.deltaY < 0 && elem.scrollTop === 0) ||
	    (event.deltaY > 0 && elem.offsetHeight + elem.scrollTop >= elem.scrollHeight))
	{
		event.preventDefault();
	}
	else if ((event.deltaX < 0 && elem.scrollLeft === 0) ||
	    (event.deltaX > 0 && elem.offsetWidth + elem.scrollLeft >= elem.scrollWidth))
	{
		event.preventDefault();
	}
}

},{}]},{},[1])(1)
});