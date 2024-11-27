document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu');
  const dropdownMenu = document.getElementById('dropdown-menu');

  menuButton.addEventListener('click', function () {
      // Toggle dropdown menu visibility
      if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
          dropdownMenu.style.display = 'block'; // Show menu
      } else {
          dropdownMenu.style.display = 'none'; // Hide menu
      }
  });

  // Optional: Hide menu when clicking outside
  document.addEventListener('click', function (event) {
      if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.style.display = 'none';
      }
  });
});
