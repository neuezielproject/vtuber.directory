$(document).ready(function() {
    // 初始設定為暗黑模式
    $('body').addClass('dark-mode');
  
    // 切換模式按鈕點擊事件
    $('#mode-toggle').click(function() {
      // 切換暗黑模式
      $('body').toggleClass('dark-mode');
    });
  });
  