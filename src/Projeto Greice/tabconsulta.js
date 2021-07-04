$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": "tarrays.json"
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