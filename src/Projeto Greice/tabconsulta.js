$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": "tarrays.txt"
    } );
} );

/*

Get the data from localStorage (could interface with a form for adding, editing and removing rows).:

$('#example').dataTable( {
    "ajax": function (data, callback, settings) {
      callback(
        JSON.parse( localStorage.getItem('dataTablesData') )
      );
    }
  } );
/*