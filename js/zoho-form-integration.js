// Zoho CRM Form Integration Script
// This script dynamically sets the Lead Source field based on the current page

(function() {
    'use strict';
    
    // Function to get page name from current URL
    function getPageName() {
        var path = window.location.pathname;
        var filename = path.split('/').pop() || 'index';
        
        // Remove .html extension
        filename = filename.replace(/\.html$/, '');
        
        // Handle index/home page
        if (filename === 'index' || filename === '' || filename === '/') {
            return 'Home';
        }
        
        // Capitalize and format page names
        return filename.split('-').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }
    
    // Set Lead Source when form loads
    function setLeadSource() {
        var pageName = getPageName();
        var leadSourceValue = 'Vikas Saroj - ' + pageName;
        
        // Set Lead Source field
        var leadSourceField = document.querySelector('input[name="Lead Source"], input[name="Lead_Source"], input[id="Lead_Source"]');
        if (leadSourceField) {
            leadSourceField.value = leadSourceValue;
        }
        
        // Also try to set via hidden input if it exists
        var hiddenLeadSource = document.querySelector('input[type="hidden"][name="Lead Source"]');
        if (!hiddenLeadSource && leadSourceField) {
            // Create hidden field if it doesn't exist
            var hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.name = 'Lead Source';
            hiddenInput.value = leadSourceValue;
            var form = document.getElementById('webform6827347000001546003');
            if (form) {
                form.appendChild(hiddenInput);
            }
        }
        
        console.log('Lead Source set to: ' + leadSourceValue);
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setLeadSource);
    } else {
        setLeadSource();
    }
    
    // Also run when form is dynamically loaded
    setTimeout(setLeadSource, 1000);
})();

