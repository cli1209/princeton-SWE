function setup() {
   setLinks();
   highlight();
}

function highlight() {
   var linkplace = document.getElementById("links-place");
   var tags = linkplace.childNodes;
   for (var i = 0; i < tags.length; i++) {
      if (tags[i].href == location.href) {
         tags[i].className = "selected-link";
         return;
      }
   }
}

function setLinks() {
   var links = "  <a href='index.html' className='selected-link'>Home</a>\
  <a href='aboutus.html'>About us</a>\
  <a href='members.html'>SWE Board</a>\
  <a href='events.html'>Events</a>\
  <a href='indevent.html'>Career</a>\
  <a href='join.html'>Join</a>\
  <a href='contact.html'>Contact</a>\
  <a href='links.html'>Links</a>\
";
   document.getElementById("links-place").innerHTML = links;
}
