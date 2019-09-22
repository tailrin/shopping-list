$('#js-shopping-list-form').on('submit', event => {
  event.preventDefault();
  const value = $('#shopping-list-entry').val()

  let x = `<li>
        <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
  $('.shopping-list').append(x);
  $('#shopping-list-entry').val('');
  handleShoppingListClicks();
});


function handleShoppingListClicks(){
  $('.shopping-item-delete').click(e => {
    e.preventDefault();
    $(e.currentTarget).closest('li').remove();
  });

  
} 
$('.shopping-list').click(e => {
    e.preventDefault();
    if(e.target.className == 'shopping-item-toggle' || e.target.className == 'button-label'){
      $(e.target).closest('div').siblings().first().toggleClass('shopping-item__checked');
      }
  });

handleShoppingListClicks();
