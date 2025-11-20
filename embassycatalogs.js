 // Eenvoudige JS logica voor min/plus buttons
    function changeQuantity(amount) {
      const input = document.getElementById('quantity');
      let value = parseInt(input.value) || 0;
      value += amount;
      if (value < 1) value = 1;
      input.value = value;
    }

