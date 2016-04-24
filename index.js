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
