    // if there is something selected on the drop-down box,
    // show the data-caret at the tile's value
    var selectBox = document.getElementById('tile-variable');
    var variable = selectBox.options[selectBox.selectedIndex].value;
    if (variable != 'clear') {
      var value = event.feature.getProperty(variable);
      console.log('value is');
      console.log(value);
      var delta = (value - dataMin) / (dataMax - dataMin);
      console.log('delta is');
      console.log(delta);
      caretPercent = delta * 100; //make smaller
      console.log('percent is');
      console.log(caretPercent);
      document.getElementById('data-caret').style.display = 'block';
      document.getElementById('data-caret').style.paddingLeft = caretPercent + '%';
    }
