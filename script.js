document.addEventListener('DOMContentLoaded', function() {
    const $button = document.querySelector('#sidebar-toggle');
    const $wrapper = document.querySelector('#wrapper');
    const sidebarBrand = document.querySelector('.sidebar-brand');
    const sidebarNav = document.querySelector('.sidebar-nav');
    $button.addEventListener('click', (e) => {
        e.preventDefault();
        $wrapper.classList.toggle('toggled');
        if (wrapper.classList.contains('toggled')) {
            sidebarBrand.style.display = 'none';
            sidebarNav.classList.add('toggled');
            sidebarNav.style.top = '50px';
        } else {
            sidebarBrand.style.display = 'block';
            sidebarNav.classList.remove('toggled');
            sidebarNav.style.top = '170px';
        }
    });
});
$(function() {
    $("#txtFromDate").datepicker({
      numberOfMonths: 2,
      minDate: 0,
      onSelect: function(selected) {
        $("#txtToDate").datepicker("option", "minDate", selected);
        var date = new Date(selected);
        date.setFullYear(date.getFullYear() + 1);
        $("#txtToDate").datepicker("setDate", date);
      }
    });

    $("#txtToDate").datepicker({
      numberOfMonths: 2,
      onSelect: function(selected) {
        $("#txtFromDate").datepicker("option", "maxDate", selected);
      }
    });

    // Optional: Set default dates for demonstration purposes
    var fromDate = new Date();
    $("#txtFromDate").datepicker("setDate", fromDate);

    var toDate = new Date(fromDate);
    toDate.setFullYear(toDate.getFullYear() + 1);
    $("#txtToDate").datepicker("setDate", toDate);

    // Attach click events to the icons to open the datepickers
    $(".fa-calendar-alt").click(function() {
      $(this).siblings("input").datepicker("show");
    });
  });
function togglePart(element) {
    const parts = document.querySelectorAll('.toggle-button div');
    parts.forEach(part => part.classList.remove('active'));
    element.classList.add('active');
}
