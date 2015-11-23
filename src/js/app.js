( function ( ) {
	angular.module ( 'LiterarilyWalk' , [
	  'ngRoute' ,
	  'mobile-angular-ui' ,
	  'LiterarilyWalk.controllers.Main'
	] ) ;

	angular.module ( 'LiterarilyWalk' ) . config ( function( $routeProvider ) {
	  $routeProvider.when (
	  	'/' , { templateUrl : 'home.html',  reloadOnSearch : false } ) ;
	} );

} ) ( );