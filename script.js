
    // LIGHTBOX GALLERY FUNCTIONALITY
    // Allows images to open in a popup (for before/after plumbing work)
    
    $('.gallery img').on('click', function() {
        const imgSrc = $(this).attr('src');
        $('body').append(`
            <div class="lightbox">
                <span class="close">&times;</span>
                <img src="${imgSrc}" alt="Plumbing work enlarged">
            </div>
        `);
        $('.lightbox').fadeIn(300);

        // Close when user clicks "×" or outside the image
        $('.close, .lightbox').on('click', function(e) {
            if (e.target !== this) return; // prevent closing when image clicked
            $('.lightbox').fadeOut(300, function() {
                $(this).remove();
            });
        });
    });


    
    // SEARCH/FILTER FEATURE (Services Page)
    // Filters visible services as the user types
   
    $('#searchBar').on('keyup', function() {
        const value = $(this).val().toLowerCase();
        $('.service-card').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });


    
    // SMOOTH SCROLL + BACK TO TOP BUTTON
    
    $('#backToTop').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });
    $('#backToTop').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });


    
    // DARK/LIGHT MODE TOGGLE
    // Adds a toggle button that switches site theme
    
    $('#themeToggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        const mode = $('body').hasClass('dark-mode') ? 'Dark' : 'Light';
        $(this).text(mode + ' Mode');
    });


   
    // ENQUIRY FORM VALIDATION
    // Validates basic user input before submission
   
    $('#enquiryForm').on('submit', function(e) {
        e.preventDefault();

        const name = $('#enqName').val().trim();
        const email = $('#enqEmail').val().trim();
        const service = $('#enqService').val();
        const message = $('#enqMessage').val().trim();

        // Simple field checks
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all required fields.');
            return;
        }

        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate form processing
        alert(`Thank you, ${name}! Your enquiry for "${service}" has been received. We’ll contact you shortly.`);
        $('#enquiryForm')[0].reset();
    });


    
    // CONTACT FORM VALIDATION
    
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        const name = $('#conName').val().trim();
        const email = $('#conEmail').val().trim();
        const subject = $('#conSubject').val().trim();
        const message = $('#conMessage').val().trim();

        if (name === '' || email === '' || message === '') {
            alert('Please complete all required fields before submitting.');
            return;
        }

        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate sending email
        alert(`Message sent! Thanks, ${name}. We’ll respond to your "${subject}" soon.`);
        $('#contactForm')[0].reset();
    });



// GOOGLE MAP INITIALIZATION (GOOGLE API)
// Called when the Google Maps script loads
    
function initMap() {
    if ($('#map').length) {
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: { lat: -26.085, lng: 28.005 }, // JHB North area
        });

        const marker = new google.maps.Marker({
            position: { lat: -26.085, lng: 28.005 },
            map: map,
            title: "JHB North Plumbing - We’re here!"
        });
    }
}

function initMap() {
  // Set map location (example: Rosebank, Johannesburg)
  const location = { lat: -26.145, lng: 28.041 };

  // Create a new map inside the #map div
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: location,
  });

  // Add a marker
  new google.maps.Marker({
    position: location,
    map: map,
    title: "JHB North Plumbing",
  });
}
