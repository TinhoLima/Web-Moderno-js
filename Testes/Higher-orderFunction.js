function greaterThan ( n ) {

    return function ( m ) { return m > n; };
  
  }
  
  var greaterThan10 = greaterThan (10) ;
  console . log ( greaterThan10 (11) ) ;