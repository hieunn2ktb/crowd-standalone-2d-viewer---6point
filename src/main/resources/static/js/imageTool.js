$( function() {
  $( document ).tooltip();

  function layerEvent() {
  	$("body").on('click', '.open-pop', function(event){
  		event.preventDefault();
  		var targetPop = $(this).attr('data-target');
      targetPop = $('.'+targetPop);
  		targetPop.show();
  	});

  	$('.pop-close').on('click', function(event){
  		event.preventDefault();
      $(this).parents('.layerPop').hide();
  	});

  };
  layerEvent();

  function rejectEvent(){
    $('.rejectToggle').on('click', function(event){
  		var $this = $(this);
      if( $this.hasClass('active') != true ){
        $('.rejectItem').show();
        $this.addClass('active');
      }else {
        $('.rejectItem').hide();
        $this.removeClass('active');
      }
  	});
  };
  rejectEvent();

  function searchEvent(){
    $('.searchOpen').on('click', function(event){
  		var $this = $(this);
      if( $this.hasClass('on') != true ){
        $('.searcItems').stop(true, true).slideDown(200,'easeInOutExpo');
        $('.searcItems').addClass('on');
        $this.addClass('on');
      }else {
        $('.searcItems').stop(true, true).slideUp(200,'easeInOutExpo');
        $('.searcItems').removeClass('on');
        $this.removeClass('on');
      }
  	});
  };
  searchEvent();
} );
(function($) {
  var CheckboxDropdown = function(el) {
    var _this = this;
    this.isOpen = false;
    this.areAllChecked = false;
    this.$el = $(el);
    this.$label = this.$el.find('.dropdown-label');
    this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
    this.$inputs = this.$el.find('[type="checkbox"]');
    
    this.onCheckBox();
    
    this.$label.on('click', function(e) {
      e.preventDefault();
      _this.toggleOpen();
    });
    
    this.$checkAll.on('click', function(e) {
      e.preventDefault();
      _this.onCheckAll();
    });
    
    this.$inputs.on('change', function(e) {
      _this.onCheckBox();
    });
  };
  
  CheckboxDropdown.prototype.onCheckBox = function() {
    this.updateStatus();
  };
  
  CheckboxDropdown.prototype.updateStatus = function() {
    var checked = this.$el.find(':checked');
    
    this.areAllChecked = false;
    this.$checkAll.html('전체 선택');
    
    if(checked.length <= 0) {
      this.$label.html('선택');
    }
    else if(checked.length === 1) {
      this.$label.html(checked.siblings('label').text());
    }
    else if(checked.length === this.$inputs.length) {
      this.$label.html('전체');
      this.areAllChecked = true;
      this.$checkAll.html('선택 해제');
    }
    else {
      this.$label.html(checked.length + ' Selected');
    }
  };
  
  CheckboxDropdown.prototype.onCheckAll = function(checkAll) {
    if(!this.areAllChecked || checkAll) {
      this.areAllChecked = true;
      this.$checkAll.html('Uncheck All');
      this.$inputs.prop('checked', true);
    }
    else {
      this.areAllChecked = false;
      this.$checkAll.html('Check All');
      this.$inputs.prop('checked', false);
    }
    
    this.updateStatus();
  };
  
  CheckboxDropdown.prototype.toggleOpen = function(forceOpen) {
    var _this = this;
    
    if(!this.isOpen || forceOpen) {
       this.isOpen = true;
       this.$el.addClass('on');
      $(document).on('click', function(e) {
        if(!$(e.target).closest('[data-control]').length) {
         _this.toggleOpen();
        }
      });
    }
    else {
      this.isOpen = false;
      this.$el.removeClass('on');
      $(document).off('click');
    }
  };
  
  var checkboxesDropdowns = document.querySelectorAll('[data-control="checkbox-dropdown"]');
  for(var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
    new CheckboxDropdown(checkboxesDropdowns[i]);
  }
})(jQuery);