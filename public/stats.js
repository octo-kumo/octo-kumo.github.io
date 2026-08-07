// Stats filtering and category selection for content pages
(function () {
  var selectedCategory = null;

  window.toggleStats = function () {
    var body = document.querySelector('.stat-body');
    var toggle = document.querySelector('.stat-toggle');
    if (body) {
      var isHidden = body.style.display === 'none';
      body.style.display = isHidden ? 'block' : 'none';
      if (toggle) {
        toggle.classList.toggle('expanded', isHidden);
      }
    }
  };

  window.selectCategory = function (cat) {
    var tree = document.getElementById('content-tree');
    var bars = document.querySelectorAll('.stat-bar');
    var legends = document.querySelectorAll('.legend-item');

    if (selectedCategory === cat) {
      selectedCategory = null;
      if (tree) tree.querySelectorAll('.tree-item').forEach(function (el) { el.classList.remove('hidden'); });
      bars.forEach(function (el) { el.classList.remove('dimmed'); el.classList.remove('selected'); });
      legends.forEach(function (el) { el.classList.remove('dimmed'); });
      updateLegend('wp');
      return;
    }

    selectedCategory = cat;

    bars.forEach(function (el) {
      if (el.getAttribute('data-category') !== cat) {
        el.classList.add('dimmed');
        el.classList.remove('selected');
      } else {
        el.classList.remove('dimmed');
        el.classList.add('selected');
      }
    });
    legends.forEach(function (el) {
      if (el.getAttribute('data-category') !== cat) {
        el.classList.add('dimmed');
      } else {
        el.classList.remove('dimmed');
      }
    });

    if (tree) {
      tree.querySelectorAll('.tree-item').forEach(function (el) {
        var path = el.getAttribute('data-path') || '';
        var parts = path.split('/').filter(Boolean);
        var itemCat = parts.length >= 3 ? parts[2] : '';
        if (itemCat === cat) {
          el.classList.remove('hidden');
          var parent = el.parentElement;
          while (parent && parent !== tree) {
            if (parent.classList && parent.classList.contains('tree-item')) {
              parent.classList.remove('hidden');
              parent.classList.remove('collapsed');
            }
            parent = parent.parentElement;
          }
        } else if (itemCat && itemCat !== cat) {
          el.classList.add('hidden');
        }
      });

      tree.querySelectorAll('.tree-item').forEach(function (el) {
        var path = el.getAttribute('data-path') || '';
        var parts = path.split('/').filter(Boolean);
        if (parts.length === 2 && parts[0] === 'ctf') {
          var hasVisible = false;
          el.querySelectorAll('.tree-item').forEach(function (child) {
            if (!child.classList.contains('hidden')) hasVisible = true;
          });
          if (!hasVisible) {
            el.classList.add('hidden');
          } else {
            el.classList.remove('hidden');
            el.classList.remove('collapsed');
          }
        }
      });
    }
  };

  function updateLegend(mode) {
    document.querySelectorAll('.legend-item').forEach(function (el) {
      var count = el.getAttribute('data-count');
      var points = el.getAttribute('data-points');
      var cat = el.getAttribute('data-category');
      var label = el.querySelector('.legend-label');
      if (label) {
        if (mode === 'pt') {
          label.textContent = cat + ' (' + points + ' pts)';
        } else {
          label.textContent = cat + ' (' + count + ')';
        }
      }
    });
  }

  // Legend mode: 'wp' (writeup counts) or 'pt' (points).
  // Switches ONLY when the cursor enters the other chart — moving within a
  // chart or across the tiny gap never flickers. Leaving the whole stats
  // section reverts to counts after a short delay.
  var legendMode = 'wp';
  var leaveTimer = null;

  function setLegendMode(mode) {
    clearTimeout(leaveTimer);
    if (legendMode !== mode) {
      legendMode = mode;
      updateLegend(mode);
    }
  }

  // Initialize hover handlers on charts — on DOMContentLoaded or view transition
  function initCharts() {
    var pointsChart = document.getElementById('points-chart');
    var countChart = document.getElementById('count-chart');
    if (pointsChart) {
      // Remove old listeners by cloning
      var newPoints = pointsChart.cloneNode(true);
      pointsChart.parentNode.replaceChild(newPoints, pointsChart);
      newPoints.addEventListener('mouseenter', function () { setLegendMode('pt'); });
      newPoints.addEventListener('mouseleave', function () {
        leaveTimer = setTimeout(function () {
          if (legendMode === 'pt') { legendMode = 'wp'; updateLegend('wp'); }
        }, 150);
      });
    }
    if (countChart) {
      var newCount = countChart.cloneNode(true);
      countChart.parentNode.replaceChild(newCount, countChart);
      newCount.addEventListener('mouseenter', function () { setLegendMode('wp'); });
      newCount.addEventListener('mouseleave', function () {
        leaveTimer = setTimeout(function () {
          if (legendMode === 'wp') updateLegend('wp');
        }, 150);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCharts);
  } else {
    initCharts();
  }
  // Re-init on view transition
  window.addEventListener('yt:load', initCharts);
})();
