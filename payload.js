$("a").each(function() {
    if (this.href.match(/magnet:\?/i) != null ) {
	     if (this.href.match(/[a-z0-9]{32}/) != null ) {
         this.href=this.href.replace(/[a-z0-9]{32}/gi, function hackIt(x) {return x.toUpperCase();} );
	      }
    }
});
