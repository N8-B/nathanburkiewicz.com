// Make punctuation smarter
jQuery.fn.smarten = (function() {

  function smartenNode(node) {
    if (node.nodeType === 3) {
      node.data = node.data
        .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018")      // Opening singles
        .replace(/'/g, "\u2019")                             // Closing singles & apostrophes
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c") // Opening doubles
        .replace(/"/g, "\u201d")                             // Closing doubles
        .replace(/--/g, "\u2014")                            // Em dashes
        .replace(/\.{3}/g, "\u2026");                        // Ellipsis
    } else if (node.nodeType === 1) {
      if (node = node.firstChild) do {
        smartenNode(node);
      } while (node = node.nextSibling);
    }
  }

  return function() {
    return this.each(function(){
      smartenNode(this);
    });
  };

}());

// Instantiation
$('body').smarten();
