$(function(){
	$('.summernoteEditor').each(function(){
		var $textarea = $('textarea', this);
		var $editor = $('.summernoteArea', this);

		$textarea.hide();
		$editor.summernote({
			height: 300,
			focus: true
		});
		
		$(this).on('keyup', function(){
			$textarea.val($editor.code()[0]);
		});

		$(this).on('click', '.note-toolbar.btn-toolbar', function(){
			$textarea.val($editor.code()[0]);
		})
	});
});