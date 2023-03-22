const select = document.getElementById('languageSelect');
      
        select.addEventListener('change', (event) => {
          const selectedOption = event.target.value;
          if (selectedOption === 'uk') {
            window.location.href = 'index.html'; // перенаправление на страницу на украинском языке
          } else if (selectedOption === 'en') {
            window.location.href = 'en.html'; // перенаправление на страницу на английском языке
          }
        });