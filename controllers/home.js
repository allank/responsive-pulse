var HomeController = function() {
    this.index = function( req, res ) {
        if( req.isAuthenticated() )
            return res.redirect( '/dashboard' );

        res.render( 'landing', {}, function(err, html) {
          console.log("landing page");
          res.send(html);
        } );
    };
};

exports.setup = function( app ) {
    var home = new HomeController();

    app.get( '/', home.index );
};
