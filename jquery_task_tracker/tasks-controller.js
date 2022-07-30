tasksController = function () {
	var taskPage;
	var initialized = false;
	
	return {
		init:function (page) {
			if(!initialized) {
				taskPage = page;
					// This script add an '*' to any label with a class = required
					$(taskPage).find('[required="required"]').prev('label').append('<span>*</span>').addClass('required');
	
					// This script changes the background color of every 'even' row in a table; it makes it easier to read
					$(taskPage).find('tbody tr:even').addClass('even');
					
					// When a user clicks on a row, change the font of the entire row to Bold	
					$('tbody tr').click(function(evt){
						$(evt.target).siblings().andSelf().toggleClass('rowHighlight');
					});
						
					// When a user clicks on the [Add Task] button, make the top fields visible
					$(taskPage).find('#btnAddTask').click(function(evt) {
						evt.preventDefault();
						$(taskPage).find('#taskCreation').removeClass('not');
					});
						
					// Removes row when [delete] button is clicked
					$(taskPage).find('#tblTasks tbody').on('click','.deleteRow', function(evt) {
						evt.preventDefault();
						$(evt.target).parents('tr').remove();
					});
					
					// Creates new row when the [Save] button is pressed
					$(taskPage).find('#saveTask').click(function(evt) {
						evt.preventDefault();
						var task = $('form').toObject();
						$('#taskRow').tmpl(task).appendTo($('#tblTasks tbody'));
					});
					initialized=true;
				}
			}
		}
	}();