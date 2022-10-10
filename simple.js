
var submit = document.getElementById( 'submit' );
let allQn = document.querySelectorAll( '.qn' );
submit.addEventListener( 'click', () => {
    var q1 = document.getElementById( 'q1' ).checked;
    var q2 = document.getElementById( 'q2' ).checked;
    var q3 = document.getElementById( 'q3' ).checked;
    var q4 = document.getElementById( 'q4' ).checked;
    let count = 0;
    if ( q1 ) {
        count++;
    }
    if ( q2 ) {
        count++;
    }
    if ( q3 ) {
        count++;
    };
    
    if ( q4 ) {
        count++;
    };
    document.getElementById( 'ttlQn' ).innerHTML = 'Total Question : ' + allQn.length;
    document.getElementById( 'ttlMrks' ).innerText = 'Total marks : ' + (allQn.length * 5);
    document.getElementById( 'crrctAns' ).innerHTML = 'Total Correct Answer : ' + count;
    document.getElementById( 'mrksObtain' ).innerHTML = 'Total Marks Obtains : ' + (count * 5);
} );


